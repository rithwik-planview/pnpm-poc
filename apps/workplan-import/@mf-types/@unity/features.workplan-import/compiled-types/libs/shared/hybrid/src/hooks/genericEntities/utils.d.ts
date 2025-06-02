import type { EntitiesResponse } from '../../client/types.gen';
import type { FieldsResponseAugumented } from '../metadata/useMetadataFieldsQuery';
import { type EnrichedEntitiesResponse } from './types';
export declare function parseFieldAsDate(
    key: string,
    value: unknown,
): (
    | string
    | {
          type: string;
          value: string;
      }
)[];
export declare function getEnrichedEntitiesResponse(
    response: EntitiesResponse,
    metadataFields: FieldsResponseAugumented[],
): EnrichedEntitiesResponse;
//# sourceMappingURL=utils.d.ts.map
