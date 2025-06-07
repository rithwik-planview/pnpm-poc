import { type OutputRow, type WorkplanData } from '../types';
export declare function formatDate(dateStr: string): string;
export declare function useFileUploadMutation(data: WorkplanData | null): {
    loading: boolean | number;
    importData?: {
        rows: Record<string, OutputRow>;
    };
};
export default useFileUploadMutation;
//# sourceMappingURL=useImportedFileDataLoader.d.ts.map