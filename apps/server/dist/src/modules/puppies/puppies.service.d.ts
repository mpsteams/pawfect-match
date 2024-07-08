import { PrismaService } from '../prisma/prisma.service';
import { PuppyFilterDto } from './dtos/puppy-filter.dto';
import { PaginationDto } from '../common/dtos';
import { PuppiesMapperService } from './puppies.mapper.service';
import { PuppySearchDto } from './dtos/puppy-search.dto';
import { UpdatePuppyDto } from './dtos/update-puppy.dto';
export declare class PuppiesService {
    private prismaService;
    private readonly puppiesMapperService;
    private readonly logger;
    constructor(prismaService: PrismaService, puppiesMapperService: PuppiesMapperService);
    getAPuppyById(puppyId: number): Promise<import("./dtos/puppy-details.response").PuppyDetailsDto>;
    getAllPuppies(filterDto: PuppyFilterDto, paginationDto: PaginationDto): Promise<{
        data: import("./dtos/puppy-list-response.dto").PuppyListResponseDto[];
        metadata: {
            total: number;
            pageCount: number;
            currentPage: number;
        };
    }>;
    searchPuppies(searchDto: PuppySearchDto, paginationDto: PaginationDto): Promise<{
        data: import("./dtos/puppy-list-response.dto").PuppyListResponseDto[];
        metadata: {
            total: number;
            pageCount: number;
            currentPage: number;
        };
    }>;
    createPuppy(createPuppyDto: any): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
    updatePuppy(id: number, updatePuppyDto: UpdatePuppyDto): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
    deletePuppy(id: number): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        size: string;
        breedId: number | null;
        photoUrl: string;
    }>;
}
