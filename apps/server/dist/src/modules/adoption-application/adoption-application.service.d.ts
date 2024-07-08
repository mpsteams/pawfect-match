import { PrismaService } from '../prisma/prisma.service';
import { AdoptionApplicationCreateDto } from './dtos/adoption-application-create.dto';
import { AdoptionApplicationCreateWithUserDto } from './dtos/adoption-application-create-user.dto';
export declare class AdoptionApplicationService {
    private readonly prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    handleApplication(appDto: AdoptionApplicationCreateWithUserDto): Promise<{
        id: number;
        userId: number;
        puppyId: number;
        applicationDate: Date;
        status: string;
    }>;
    create(data: AdoptionApplicationCreateDto): Promise<{
        id: number;
        userId: number;
        puppyId: number;
        applicationDate: Date;
        status: string;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        puppyId: number;
        applicationDate: Date;
        status: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        puppyId: number;
        applicationDate: Date;
        status: string;
    } | null>;
}
