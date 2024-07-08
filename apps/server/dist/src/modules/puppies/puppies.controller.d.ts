import { PuppiesService } from './puppies.service';
import { PaginationDto } from '../common/dtos';
import { PuppyFilterDto } from './dtos/puppy-filter.dto';
import { PuppyListPaginationDto } from './dtos/puppy-list-pagination.dto';
import { PuppySearchDto } from './dtos/puppy-search.dto';
import { CreatePuppyDto } from './dtos/create-puppy.dto';
import { UpdatePuppyDto } from './dtos/update-puppy.dto';
export declare class PuppiesController {
    private readonly puppiesService;
    private readonly logger;
    constructor(puppiesService: PuppiesService);
    getAllPuppies(paginationDto: PaginationDto, puppyFilterDto: PuppyFilterDto): Promise<PuppyListPaginationDto>;
    getPuppyById(id: string): Promise<import("./dtos/puppy-details.response").PuppyDetailsDto>;
    searchPuppies(searchDto: PuppySearchDto, paginationDto: PaginationDto): Promise<{
        data: import("./dtos/puppy-list-response.dto").PuppyListResponseDto[];
        metadata: {
            total: number;
            pageCount: number;
            currentPage: number;
        };
    }>;
    createPuppy(puppyDto: CreatePuppyDto): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
    updatePuppy(id: string, puppyDto: UpdatePuppyDto): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
    deletePuppy(id: string): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
}
