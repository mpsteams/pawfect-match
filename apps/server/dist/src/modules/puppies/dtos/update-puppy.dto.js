"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePuppyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_puppy_dto_1 = require("./create-puppy.dto");
class UpdatePuppyDto extends (0, swagger_1.PartialType)(create_puppy_dto_1.CreatePuppyDto) {
}
exports.UpdatePuppyDto = UpdatePuppyDto;
//# sourceMappingURL=update-puppy.dto.js.map