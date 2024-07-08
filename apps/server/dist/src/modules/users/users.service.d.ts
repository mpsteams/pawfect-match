import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersService {
    private readonly PrismaService;
    private readonly logger;
    constructor(PrismaService: PrismaService);
    create(data: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: string;
        preferredBreedId: number | null;
        preferredAgeRange: string | null;
        hasOtherPets: boolean;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: string;
        preferredBreedId: number | null;
        preferredAgeRange: string | null;
        hasOtherPets: boolean;
    } | null>;
}
