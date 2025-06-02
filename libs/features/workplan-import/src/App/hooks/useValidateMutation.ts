import { useMutation } from '@tanstack/react-query';
import { hybridDataLibrary } from '@unity/shared.hybrid';
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

export function useValidateMutation() {
    return useMutation({
        mutationFn: async (variables: Variables): Promise<ValidateResponse> => {
            const { fileId, rows } = variables;
            const response = await hybridDataLibrary.fetch<ValidateResponse>(
                'post',
                `/import/validate`,
                {
                    data: {
                        fileId,
                        rows,
                    },
                },
            );
            return response;
        },
        onError: () => {
            // console.log('Error in file upload mutation', _err)
        },
    });
}

export default useValidateMutation;
