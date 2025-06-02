import { useMutation } from '@tanstack/react-query';
import { hybridDataLibrary } from '@unity/shared.hybrid';
import type { WorkplanData } from '../types';

enum UploadType {
    Workplan = 'WORKPLAN',
    Normal = 'NORMAL',
}

interface Variables {
    file: File;
    uploadType: UploadType;
    entityType: string;
    entityExternalId?: string;
}

export function useFileUploadMutation() {
    return useMutation({
        mutationFn: async (variables: Variables): Promise<WorkplanData> => {
            const { file, uploadType, entityType, entityExternalId } = variables;
            const isWorkplan = uploadType === UploadType.Workplan;
            const formData = new FormData();
            formData.append('file', file);
            const response: WorkplanData = await hybridDataLibrary.fetch<WorkplanData>(
                'post',
                `/import/upload`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    data: formData,
                    params: {
                        isWorkplan,
                        entityType,
                        entityId: entityExternalId,
                    },
                },
            );
            // Return the response or error received from the server
            // save the GUID in state in parent component perhaps
            return response;
        },
        onError: () => {
            // console.log('Error in file upload mutation', _err)
        },
    });
}

export default useFileUploadMutation;
