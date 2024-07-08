import { PrismaService } from '../prisma/prisma.service';
export declare class BreedsService {
    private prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    getAllBreeds(): Promise<string[]>;
    getBreedsWithIds(): Promise<{
        id: number;
        name: string;
    }[]>;
}
