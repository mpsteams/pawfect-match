import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly logger;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
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
