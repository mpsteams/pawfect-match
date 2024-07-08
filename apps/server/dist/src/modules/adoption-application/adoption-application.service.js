"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AdoptionApplicationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionApplicationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdoptionApplicationService = AdoptionApplicationService_1 = class AdoptionApplicationService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(AdoptionApplicationService_1.name);
    }
    async handleApplication(appDto) {
        try {
            let user = await this.prismaService.user.findUnique({
                where: { email: appDto.email },
            });
            if (!user) {
                user = await this.prismaService.user.create({
                    data: {
                        name: appDto.name,
                        email: appDto.email,
                        password: 'password123',
                        role: appDto.role,
                        preferredBreedId: appDto.preferredBreedId,
                        hasOtherPets: appDto.hasOtherPets,
                        preferredAgeRange: appDto.preferredAgeRange,
                    },
                });
            }
            return this.prismaService.adoptionApplication.create({
                data: {
                    userId: user.id,
                    puppyId: appDto.puppyId,
                    applicationDate: appDto.applicationDate,
                    status: appDto.status,
                },
            });
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async create(data) {
        const user = await this.prismaService.user.findUnique({
            where: { id: data.userId },
        });
        if (!user) {
            this.logger.error(`User with ID ${data.userId} does not exist`);
            throw new common_1.NotFoundException(`User with ID ${data.userId} does not exist`);
        }
        this.logger.log(`Creating a new adoption application`);
        return this.prismaService.adoptionApplication.create({
            data,
        });
    }
    async findAll() {
        this.logger.log(`Finding all adoption applications`);
        return this.prismaService.adoptionApplication.findMany();
    }
    async findOne(id) {
        this.logger.log(`Finding adoption application with ID ${id}`);
        return this.prismaService.adoptionApplication.findUnique({
            where: { id },
        });
    }
};
exports.AdoptionApplicationService = AdoptionApplicationService;
exports.AdoptionApplicationService = AdoptionApplicationService = AdoptionApplicationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdoptionApplicationService);
//# sourceMappingURL=adoption-application.service.js.map