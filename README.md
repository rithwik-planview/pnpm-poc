# 📌 Goal

Establish a scalable, developer-friendly frontend monorepo architecture to support modular development across teams. Emphasis is on:

- Independent module ownership
- Runtime composition using Module Federation
- Optimised developer experience (DX)
- Seamless integration into CI/CD

---

# 🗂️ Monorepo Structure

```
.
├── apps
│ ├── demo # React shell app using MF remotes
│ ├── demo-umd # UMD app built for host embedding
│ ├── feature-1 # Remote app (MF enabled)
│ └── feature-2 # Remote app (MF enabled)
├── libs
│ ├── core/shell # Common runtime host logic (e.g., Unity shell)
│ ├── features/* # Library versions of remote apps (for local dev / reuse)
│ └── shared/* # UI, utils, counter — reusable shared libraries
├── tools # Node CLI helpers (e.g., enforce required version, dir name)
├── tsconfig.base.json # Shared base config
├── pnpm-workspace.yaml # Workspace packages
└── package.json
```

---

# ⚙️ Tooling & Build Stack

| Category              | Tooling                                                   |
| --------------------- | --------------------------------------------------------- |
| **Monorepo**          | pnpm workspaces                                           |
| **Build Tool**        | Rsbuild, Rslib                                            |
| **Module Federation** | @module-federation/enhanced                               |
| **TypeScript**        | Isolated `tsconfig.json`, `tsconfig.mf.json` where needed |
| **UI Framework**      | React 18.3.1                                              |
| **Styling**           | CSS Modules / plain `.css`                                |
| **Linting**           | ESLint 9.x with plugins, Prettier 3.x                     |

---

# 📦 Federation Strategy

We use `@module-federation/enhanced` with Rsbuild, which:

- Automatically emits:
    - `mf-manifest.json`: Remote exposure details
- Supports both:
    - Module Federation for `demo` consuming `feature-1`, `feature-2`
    - UMD fallback for loading remotes in non-React/non-MF hosts like Unity

---

# 🧪 Shell vs Feature Remotes

| App/Lib           | Purpose                                       | Federation           |
| ----------------- | --------------------------------------------- | -------------------- |
| `apps/demo`       | Loads federated React apps using Rsbuild MF   | **Host (remotes)**   |
| `apps/feature-*`  | Independent MF remotes exposing `App.tsx`     | **Remote (exposes)** |
| `libs/features/*` | Library (non-remote) versions of the apps     | Local dev use        |
| `libs/core/shell` | Provides runtime shell for MF entrypoints     | Used by apps         |
| `apps/demo-umd`   | UMD-friendly bundle to be injected into Unity | Standalone           |

---

# 📁 Code Breakdown

### Typical Remote (`feature-1` / `feature-2`)

```
src/
├── App.tsx # UI entry
├── index.tsx # Rsbuild entry
└── bootstrap.tsx # Used for React lazy init
module-federation.config.ts
rsbuild.config.ts # Applies Rsbuild + MF plugin
tsconfig.mf.json # For isolated federation builds
```

### UMD Consumer (`demo-umd`)

```
src/
├── index.ts # Attaches to window.App or document.body
rsbuild.config.ts
```

### Shell (`libs/core/shell`)

```
src/
├── loadRemoteApp.ts # Handles dynamic import of MF remote
├── register.ts # Federation registration logic
```

---

# 💡 Developer Experience Enhancements

### ✅ Internal Aliases (`tsconfig.base.json`)

```json
"paths": {
  "@unity/core.shell": ["./libs/core/shell/src/index.ts"],
  "@unity/shared.counter": ["./libs/shared/counter/src/index.ts"],
  "@unity/shared.ui": ["./libs/shared/ui/src/index.tsx"],
  "@unity/shared.utils": ["./libs/shared/utils/src/index.ts"],
  "@unity/features.feature-1": ["./libs/features/feature-1/src/index.ts"],
  "@unity/features.feature-2": ["./libs/features/feature-2/src/index.ts"]
}
```

Benefits:

Cleaner imports: @unity/core.shell instead of relative paths

IDE support for Go to Definition, Auto Imports

Uniform type linking across apps and libraries

## 📌 Naming Convention

| Folder            | Type              | Description                       |
| ----------------- | ----------------- | --------------------------------- |
| `apps/demo`       | Host Shell        | Consumes remotes                  |
| `apps/feature-*`  | MF Remotes        | Shared to host or UMD             |
| `libs/shared/*`   | Shared libs       | UI/logic common to all apps       |
| `libs/features/*` | Library Remote    | Reuse in other libs               |
| `@mf-types/*`     | Type declarations | Local declaration of remote types |

---

## 🔐 Dependency Management Policy

- Everything is pinned via `pnpm-lock.yaml`.
- Each subproject has local `node_modules`, but resolutions are hoisted via pnpm.
- TypeScript is isolated with a shared `tsconfig.base.json`.

---

## 🧩 Single Version Policy (`pnpm-workspace.yaml`)

```yaml
packages:
    - apps/*
    - libs/core/*
    - libs/shared/*
    - libs/features/*

onlyBuiltDependencies:
    - core-js
    - esbuild

overrides:
    react: ^18.3.1
    react-dom: ^18.3.1

sharedWorkspaceLockFile: true
strictPeerDependencies: true
```

Enforced to:

Avoid runtime conflicts and duplication

Ensure all packages use consistent versions

Fail builds early when versions mismatch

## 🚧 Pending Tasks

| Task                                | Description                       |
| ----------------------------------- | --------------------------------- |
| ✅ Finalize Rsbuild & Rslib Config  | Working for all apps/libs         |
| ✅ Setup Module Federation Remotes  | `feature-1`, `feature-2`          |
| ✅ Build Unity.Shell as UMD         | Runtime orchestrator              |
| ✅ Internal aliasing for cleaner DX | Done via `tsconfig.base.json`     |
| ⏳ Setup E2E Testing                | Playwright setup pending          |
| ⏳ CI/CD Integration                | GitHub Actions or similar         |
| ⏳ Nx/Turborepo Evaluation          | Pending decision on orchestration |
| ⏳ Developer Onboarding Docs        | Basic workflow to be written      |
