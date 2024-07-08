import { AdoptionApplicationService } from './adoption-application.service';
import { AdoptionApplicationCreateWithUserDto } from './dtos/adoption-application-create-user.dto';
export declare class AdoptionApplicationController {
    private readonly applicationService;
    constructor(applicationService: AdoptionApplicationService);
    submitApplication(applicationDto: AdoptionApplicationCreateWithUserDto): Promise<{
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
