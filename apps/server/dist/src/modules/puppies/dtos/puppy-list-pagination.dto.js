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
exports.PuppyListPaginationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const puppy_list_response_dto_1 = require("./puppy-list-response.dto");
const dtos_1 = require("../../common/dtos");
class PuppyListPaginationDto {
}
exports.PuppyListPaginationDto = PuppyListPaginationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [puppy_list_response_dto_1.PuppyListResponseDto],
        description: 'List of puppies',
    }),
    __metadata("design:type", Array)
], PuppyListPaginationDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => dtos_1.PaginationMetadataDto,
        description: 'Pagination metadata',
    }),
    __metadata("design:type", dtos_1.PaginationMetadataDto)
], PuppyListPaginationDto.prototype, "metadata", void 0);
//# sourceMappingURL=puppy-list-pagination.dto.js.map