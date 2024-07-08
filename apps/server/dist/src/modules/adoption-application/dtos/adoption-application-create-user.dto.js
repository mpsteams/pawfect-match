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
exports.AdoptionApplicationCreateWithUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AdoptionApplicationCreateWithUserDto {
    constructor() {
        this.status = 'PENDING';
        this.role = 'USER';
        this.hasOtherPets = false;
    }
}
exports.AdoptionApplicationCreateWithUserDto = AdoptionApplicationCreateWithUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the puppy being applied for',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AdoptionApplicationCreateWithUserDto.prototype, "puppyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-07-20',
        description: 'Date of the application',
        type: 'date',
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], AdoptionApplicationCreateWithUserDto.prototype, "applicationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PENDING', description: 'Status of the application' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdoptionApplicationCreateWithUserDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mike Keleshteri',
        description: 'The name of the user',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], AdoptionApplicationCreateWithUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'mehdi.shaban.keleshteri@outlook.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AdoptionApplicationCreateWithUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'USER',
        description: 'The role of the user',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdoptionApplicationCreateWithUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AdoptionApplicationCreateWithUserDto.prototype, "preferredBreedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdoptionApplicationCreateWithUserDto.prototype, "preferredAgeRange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Whether the user has other pets',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AdoptionApplicationCreateWithUserDto.prototype, "hasOtherPets", void 0);
//# sourceMappingURL=adoption-application-create-user.dto.js.map