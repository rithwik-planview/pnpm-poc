import React from 'react';
interface ModalContentProps {
    isDragActive: boolean;
    file?: File | null;
}
export declare const ModalContent: import('styled-components/dist/types').IStyledComponentBase<
    'web',
    import('styled-components/dist/types').Substitute<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        ModalContentProps
    >
> &
    string;
type Props = {
    entityExternalId: string;
    entityType: string;
};
export type WorkplanImportHandle = {
    refresh: () => void;
};
export declare const WorkplanImport: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<WorkplanImportHandle>
>;
export default WorkplanImport;
//# sourceMappingURL=workplanimport.d.ts.map
