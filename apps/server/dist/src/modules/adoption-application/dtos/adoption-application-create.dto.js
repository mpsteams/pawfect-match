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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionApplicationCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AdoptionApplicationCreateDto {
    constructor() {
        this.status = 'PENDING';
    }
}
exports.AdoptionApplicationCreateDto = AdoptionApplicationCreateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user submitting the application',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AdoptionApplicationCreateDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the puppy being applied for',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AdoptionApplicationCreateDto.prototype, "puppyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-07-20',
        description: 'Date of the application',
        type: 'date',
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], AdoptionApplicationCreateDto.prototype, "applicationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PENDING', description: 'Status of the application' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdoptionApplicationCreateDto.prototype, "status", void 0);
//# sourceMappingURL=adoption-application-create.dto.js.map