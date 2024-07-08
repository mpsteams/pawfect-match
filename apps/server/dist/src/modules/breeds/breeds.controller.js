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
var BreedsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreedsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const breeds_service_1 = require("./breeds.service");
let BreedsController = BreedsController_1 = class BreedsController {
    constructor(breedsService) {
        this.breedsService = breedsService;
        this.logger = new common_1.Logger(BreedsController_1.name);
    }
    async getAllBreeds() {
        return await this.breedsService.getAllBreeds();
    }
    async getBreedsWithIds() {
        return await this.breedsService.getBreedsWithIds();
    }
};
exports.BreedsController = BreedsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BreedsController.prototype, "getAllBreeds", null);
__decorate([
    (0, common_1.Get)('ids'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BreedsController.prototype, "getBreedsWithIds", null);
exports.BreedsController = BreedsController = BreedsController_1 = __decorate([
    (0, swagger_1.ApiTags)('breeds'),
    (0, common_1.Controller)('breeds'),
    __metadata("design:paramtypes", [breeds_service_1.BreedsService])
], BreedsController);
//# sourceMappingURL=breeds.controller.js.map