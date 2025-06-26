import { type TypedValue } from '../types';
export declare function useRelationOptions(fieldValue: TypedValue): {
    relationsOptions: {
        label: string;
        value: string;
        internalId: string;
        avatar: string | undefined;
    }[];
    isLoading: boolean;
    handleSearch: (value: string) => void;
};
//# sourceMappingURL=useRelationOptions.d.ts.map