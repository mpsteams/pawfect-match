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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PuppiesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppiesController = void 0;
const common_1 = require("@nestjs/common");
const puppies_service_1 = require("./puppies.service");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("../common/dtos");
const puppy_filter_dto_1 = require("./dtos/puppy-filter.dto");
const puppy_search_dto_1 = require("./dtos/puppy-search.dto");
const create_puppy_dto_1 = require("./dtos/create-puppy.dto");
const update_puppy_dto_1 = require("./dtos/update-puppy.dto");
let PuppiesController = PuppiesController_1 = class PuppiesController {
    constructor(puppiesService) {
        this.puppiesService = puppiesService;
        this.logger = new common_1.Logger(PuppiesController_1.name);
        this.logger.log('Puppies controller initialized');
    }
    async getAllPuppies(paginationDto, puppyFilterDto) {
        this.logger.log('Get all puppies');
        return this.puppiesService.getAllPuppies(puppyFilterDto, paginationDto);
    }
    async getPuppyById(id) {
        return await this.puppiesService.getAPuppyById(+id);
    }
    async searchPuppies(searchDto, paginationDto) {
        return await this.puppiesService.searchPuppies(searchDto, paginationDto);
    }
    async createPuppy(puppyDto) {
        return await this.puppiesService.createPuppy(puppyDto);
    }
    async updatePuppy(id, puppyDto) {
        return await this.puppiesService.updatePuppy(+id, puppyDto);
    }
    async deletePuppy(id) {
        return await this.puppiesService.deletePuppy(+id);
    }
};
exports.PuppiesController = PuppiesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get all available puppies with optional filters',
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.PaginationDto,
        puppy_filter_dto_1.PuppyFilterDto]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "getAllPuppies", null);
__decorate([
    (0, common_1.Get)('puppy/:id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get a puppy by id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "getPuppyById", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Search for puppies by name or other keywords',
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [puppy_search_dto_1.PuppySearchDto,
        dtos_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "searchPuppies", null);
__decorate([
    (0, common_1.Post)('/admin/add-puppy'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Add a new puppy to the database',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_puppy_dto_1.CreatePuppyDto]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "createPuppy", null);
__decorate([
    (0, common_1.Patch)('/admin/edit-puppy/:id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Edit details of an existing puppy.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_puppy_dto_1.UpdatePuppyDto]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "updatePuppy", null);
__decorate([
    (0, common_1.Delete)('/admin/delete-puppy/:id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Remove a puppy from the system.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PuppiesController.prototype, "deletePuppy", null);
exports.PuppiesController = PuppiesController = PuppiesController_1 = __decorate([
    (0, swagger_1.ApiTags)('puppies'),
    (0, common_1.Controller)('puppies'),
    __metadata("design:paramtypes", [puppies_service_1.PuppiesService])
], PuppiesController);
//# sourceMappingURL=puppies.controller.js.map