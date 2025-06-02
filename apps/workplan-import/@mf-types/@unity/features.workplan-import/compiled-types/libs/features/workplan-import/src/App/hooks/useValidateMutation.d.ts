import { type ValidateResponse } from '../types';
type rows = {
    [rowId: string]: {
        [columnName: string]: string;
    };
};
interface Variables {
    fileId: string;
    rows: rows;
}
export declare function useValidateMutation(): import('@tanstack/react-query').UseMutationResult<
    ValidateResponse,
    Error,
    Variables,
    unknown
>;
export default useValidateMutation;
//# sourceMappingURL=useValidateMutation.d.ts.map
