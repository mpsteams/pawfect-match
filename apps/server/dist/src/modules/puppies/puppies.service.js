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
var PuppiesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const puppies_mapper_service_1 = require("./puppies.mapper.service");
let PuppiesService = PuppiesService_1 = class PuppiesService {
    constructor(prismaService, puppiesMapperService) {
        this.prismaService = prismaService;
        this.puppiesMapperService = puppiesMapperService;
        this.logger = new common_1.Logger(PuppiesService_1.name);
        this.logger.log('Puppies service initialized');
    }
    async getAPuppyById(puppyId) {
        try {
            const puppy = this.prismaService.puppy.findUnique({
                where: {
                    id: puppyId,
                },
                include: {
                    breed: true,
                    traits: {
                        include: {
                            trait: true,
                        },
                    },
                    HealthRecord: {
                        include: {
                            vaccinations: {
                                include: {
                                    vaccine: true,
                                },
                            },
                        },
                    },
                },
            });
            return this.puppiesMapperService.mapToPuppyDetailsDto((await puppy));
        }
        catch (error) {
            this.logger.error('Failed to get puppy by id', error);
            throw error;
        }
    }
    async getAllPuppies(filterDto, paginationDto) {
        const { breed, age, size, gender } = filterDto;
        const { page, limit } = paginationDto;
        const skip = (page - 1) * limit ?? 0;
        const whereClause = {
            ...(breed?.trim() && { breed: { name: breed } }),
            ...(typeof age === 'number' && age > 0 && { age }),
            ...(gender?.trim() && { gender: gender.toLocaleLowerCase() }),
            ...(size?.trim() && { size: size.toLocaleLowerCase() }),
        };
        const [total, puppies] = await Promise.all([
            this.prismaService.puppy.count({
                where: whereClause,
            }),
            this.prismaService.puppy.findMany({
                where: whereClause,
                skip,
                take: limit,
                include: {
                    breed: true,
                    traits: {
                        include: {
                            trait: true,
                        },
                    },
                    HealthRecord: {
                        include: {
                            vaccinations: true,
                        },
                    },
                },
            }),
        ]);
        const pageCount = Math.ceil(total / limit);
        return {
            data: puppies.map((puppy) => this.puppiesMapperService.mapToPuppyListResponseDto(puppy)),
            metadata: {
                total,
                pageCount,
                currentPage: page,
            },
        };
    }
    async searchPuppies(searchDto, paginationDto) {
        const { search } = searchDto;
        const { page, limit } = paginationDto;
        const skip = (page - 1) * limit ?? 0;
        try {
            const whereClause = search
                ? {
                    OR: [
                        { name: { contains: search } },
                        { breed: { name: { contains: search } } },
                        { size: { contains: search } },
                        { gender: { contains: search } },
                    ],
                }
                : {};
            const [total, puppies] = await Promise.all([
                this.prismaService.puppy.count({ where: whereClause }),
                this.prismaService.puppy.findMany({
                    where: whereClause,
                    skip,
                    take: limit,
                    include: {
                        breed: true,
                        traits: { include: { trait: true } },
                        HealthRecord: { include: { vaccinations: true } },
                    },
                }),
            ]);
            return {
                data: puppies.map((puppy) => this.puppiesMapperService.mapToPuppyListResponseDto(puppy)),
                metadata: {
                    total,
                    pageCount: Math.ceil(total / limit),
                    currentPage: page,
                },
            };
        }
        catch (error) {
            this.logger.error('Failed to search puppies', error);
            throw error;
        }
    }
    async createPuppy(createPuppyDto) {
        this.logger.log(`Creating puppy with data: ${JSON.stringify(createPuppyDto)}`);
        if (!Array.isArray(createPuppyDto.traitIds) ||
            !createPuppyDto.traitIds.every((id) => typeof id === 'number')) {
            throw new common_1.BadRequestException('Invalid traitIds provided');
        }
        try {
            return this.prismaService.puppy.create({
                data: {
                    name: createPuppyDto.name,
                    age: createPuppyDto.age,
                    gender: createPuppyDto.gender,
                    size: createPuppyDto.size,
                    breedId: createPuppyDto.breedId,
                    photoUrl: createPuppyDto.photoUrl,
                },
            });
        }
        catch (error) {
            this.logger.error(`Failed to create a puppy: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async updatePuppy(id, updatePuppyDto) {
        return this.prismaService.puppy.update({
            where: { id: id },
            data: updatePuppyDto,
        });
    }
    async deletePuppy(id) {
        return this.prismaService.puppy.delete({ where: { id } });
    }
};
exports.PuppiesService = PuppiesService;
exports.PuppiesService = PuppiesService = PuppiesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        puppies_mapper_service_1.PuppiesMapperService])
], PuppiesService);
//# sourceMappingURL=puppies.service.js.map