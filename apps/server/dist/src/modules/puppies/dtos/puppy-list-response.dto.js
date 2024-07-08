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
exports.PuppyListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PuppyListResponseDto {
}
exports.PuppyListResponseDto = PuppyListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the puppy' }),
    __metadata("design:type", String)
], PuppyListResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Age of the puppy' }),
    __metadata("design:type", Number)
], PuppyListResponseDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gender of the puppy' }),
    __metadata("design:type", String)
], PuppyListResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Vaccination status' }),
    __metadata("design:type", Boolean)
], PuppyListResponseDto.prototype, "isVaccinated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Neutered status' }),
    __metadata("design:type", Boolean)
], PuppyListResponseDto.prototype, "isNeutered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Size of the puppy' }),
    __metadata("design:type", String)
], PuppyListResponseDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breed of the puppy' }),
    __metadata("design:type", String)
], PuppyListResponseDto.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Traits of the puppy' }),
    __metadata("design:type", Array)
], PuppyListResponseDto.prototype, "traits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL of the puppy photo' }),
    __metadata("design:type", String)
], PuppyListResponseDto.prototype, "photoUrl", void 0);
//# sourceMappingURL=puppy-list-response.dto.js.map