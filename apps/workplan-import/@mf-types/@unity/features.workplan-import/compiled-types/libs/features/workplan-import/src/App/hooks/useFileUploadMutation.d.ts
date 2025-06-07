import type { WorkplanData } from '../types';
declare enum UploadType {
    Workplan = "WORKPLAN",
    Normal = "NORMAL"
}
interface Variables {
    file: File;
    uploadType: UploadType;
    entityType: string;
    entityExternalId?: string;
}
export declare function useFileUploadMutation(): import("@tanstack/react-query").UseMutationResult<WorkplanData, Error, Variables, unknown>;
export default useFileUploadMutation;
//# sourceMappingURL=useFileUploadMutation.d.ts.map