import { BreedsService } from './breeds.service';
export declare class BreedsController {
    private readonly breedsService;
    private readonly logger;
    constructor(breedsService: BreedsService);
    getAllBreeds(): Promise<string[]>;
    getBreedsWithIds(): Promise<{
        id: number;
        name: string;
    }[]>;
}
