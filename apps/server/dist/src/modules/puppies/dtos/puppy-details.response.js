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
exports.PuppyDetailsDto = exports.HealthRecordDto = exports.VaccinationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class VaccinationDto {
}
exports.VaccinationDto = VaccinationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date the vaccine was administered' }),
    __metadata("design:type", Date)
], VaccinationDto.prototype, "vaccinatedOn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date when the next vaccine is due' }),
    __metadata("design:type", Object)
], VaccinationDto.prototype, "nextDueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the vaccine' }),
    __metadata("design:type", String)
], VaccinationDto.prototype, "vaccineName", void 0);
class HealthRecordDto {
}
exports.HealthRecordDto = HealthRecordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the puppy is neutered' }),
    __metadata("design:type", Boolean)
], HealthRecordDto.prototype, "neuteredStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Medical notes' }),
    __metadata("design:type", String)
], HealthRecordDto.prototype, "medicalNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of vaccinations' }),
    __metadata("design:type", Array)
], HealthRecordDto.prototype, "vaccinations", void 0);
class PuppyDetailsDto {
}
exports.PuppyDetailsDto = PuppyDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier of the puppy' }),
    __metadata("design:type", Number)
], PuppyDetailsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the puppy' }),
    __metadata("design:type", String)
], PuppyDetailsDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Age of the puppy in years' }),
    __metadata("design:type", Number)
], PuppyDetailsDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gender of the puppy' }),
    __metadata("design:type", String)
], PuppyDetailsDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Size category of the puppy' }),
    __metadata("design:type", String)
], PuppyDetailsDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "URL for the puppy's photo" }),
    __metadata("design:type", String)
], PuppyDetailsDto.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breed information' }),
    __metadata("design:type", String)
], PuppyDetailsDto.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [String],
        description: 'List of traits associated with the puppy',
    }),
    __metadata("design:type", Array)
], PuppyDetailsDto.prototype, "traits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [HealthRecordDto],
        description: 'Health records of the puppy',
    }),
    __metadata("design:type", Array)
], PuppyDetailsDto.prototype, "healthRecords", void 0);
//# sourceMappingURL=puppy-details.response.js.map