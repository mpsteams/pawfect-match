import { PuppyListResponseDto } from './puppy-list-response.dto';
import { PaginationMetadataDto } from 'src/modules/common/dtos';
export declare class PuppyListPaginationDto {
    data: PuppyListResponseDto[];
    metadata: PaginationMetadataDto;
}
