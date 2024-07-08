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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionApplicationController = void 0;
const common_1 = require("@nestjs/common");
const adoption_application_service_1 = require("./adoption-application.service");
const swagger_1 = require("@nestjs/swagger");
const adoption_application_create_user_dto_1 = require("./dtos/adoption-application-create-user.dto");
let AdoptionApplicationController = class AdoptionApplicationController {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    async submitApplication(applicationDto) {
        return this.applicationService.handleApplication(applicationDto);
    }
    findAll() {
        return this.applicationService.findAll();
    }
    findOne(id) {
        return this.applicationService.findOne(id);
    }
};
exports.AdoptionApplicationController = AdoptionApplicationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Submit an adoption application' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The application has been successfully submitted.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adoption_application_create_user_dto_1.AdoptionApplicationCreateWithUserDto]),
    __metadata("design:returntype", Promise)
], AdoptionApplicationController.prototype, "submitApplication", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all adoption applications' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all adoption applications.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdoptionApplicationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an adoption application by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return one adoption application.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdoptionApplicationController.prototype, "findOne", null);
exports.AdoptionApplicationController = AdoptionApplicationController = __decorate([
    (0, swagger_1.ApiTags)('adoption-applications'),
    (0, common_1.Controller)('adoption-applications'),
    __metadata("design:paramtypes", [adoption_application_service_1.AdoptionApplicationService])
], AdoptionApplicationController);
//# sourceMappingURL=adoption-application.controller.js.map