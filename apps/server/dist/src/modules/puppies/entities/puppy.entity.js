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
exports.PuppyEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const breed_entity_1 = require("./breed.entity");
const trait_entity_1 = require("./trait.entity");
class PuppyEntity {
}
exports.PuppyEntity = PuppyEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PuppyEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PuppyEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PuppyEntity.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PuppyEntity.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PuppyEntity.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], PuppyEntity.prototype, "breedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PuppyEntity.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: () => breed_entity_1.BreedEntity }),
    __metadata("design:type", breed_entity_1.BreedEntity)
], PuppyEntity.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: () => [trait_entity_1.TraitEntity] }),
    __metadata("design:type", Array)
], PuppyEntity.prototype, "traits", void 0);
//# sourceMappingURL=puppy.entity.js.map