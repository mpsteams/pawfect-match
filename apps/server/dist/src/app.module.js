"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const puppies_module_1 = require("./modules/puppies/puppies.module");
const users_module_1 = require("./modules/users/users.module");
const common_module_1 = require("./modules/common/common.module");
const nestjs_pino_1 = require("nestjs-pino");
const breeds_module_1 = require("./modules/breeds/breeds.module");
const adoption_application_module_1 = require("./modules/adoption-application/adoption-application.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            singleLine: true,
                        },
                    },
                },
            }),
            config_1.ConfigModule.forRoot(),
            prisma_module_1.PrismaModule,
            puppies_module_1.PuppiesModule,
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            breeds_module_1.BreedsModule,
            adoption_application_module_1.AdoptionApplicationModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map