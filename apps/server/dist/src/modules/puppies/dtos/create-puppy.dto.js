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
exports.CreatePuppyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePuppyDto {
}
exports.CreatePuppyDto = CreatePuppyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the puppy',
        example: 'Fluffy',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePuppyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The age of the puppy',
        example: 2,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePuppyDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Gender of the puppy',
        example: 'Male',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePuppyDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The size of the puppy',
        example: 'Small',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePuppyDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePuppyDto.prototype, "breedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreatePuppyDto.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], isArray: true, example: [1, 2, 3] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreatePuppyDto.prototype, "traitIds", void 0);
//# sourceMappingURL=create-puppy.dto.js.map