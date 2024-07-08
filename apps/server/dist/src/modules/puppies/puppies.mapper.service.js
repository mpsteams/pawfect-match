"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppiesMapperService = void 0;
const common_1 = require("@nestjs/common");
let PuppiesMapperService = class PuppiesMapperService {
    mapToPuppyListResponseDto(puppy) {
        return {
            id: puppy.id,
            name: puppy.name,
            age: puppy.age,
            gender: puppy.gender,
            isVaccinated: this.isPuppyVaccinated(puppy.HealthRecord),
            isNeutered: this.isPuppyNeutered(puppy.HealthRecord),
            size: puppy.size,
            breed: puppy.breed?.name || 'Unknown',
            traits: puppy.traits?.map((t) => t.trait?.description || 'Unknown Trait') || [],
            photoUrl: puppy.photoUrl,
        };
    }
    mapToPuppyDetailsDto(puppy) {
        return {
            id: puppy.id,
            name: puppy.name,
            age: puppy.age,
            gender: puppy.gender,
            size: puppy.size,
            photoUrl: puppy.photoUrl,
            breed: puppy.breed?.name ?? 'Unknown',
            traits: puppy.traits.map((t) => t.trait?.description || 'Unknown Trait'),
            healthRecords: puppy.HealthRecord.map((record) => ({
                neuteredStatus: record.neuteredStatus || false,
                medicalNotes: record.medicalNotes || 'No medical notes',
                vaccinations: record.vaccinations.map((v) => ({
                    vaccinatedOn: v.vaccinatedOn,
                    nextDueDate: v.nextDueDate || null,
                    vaccineName: v.vaccine?.name || 'Unknown Vaccine',
                })),
            })),
        };
    }
    isPuppyVaccinated(healthRecords) {
        return healthRecords.some((record) => record.vaccinations &&
            record.vaccinations.some((vaccination) => this.isVaccinationValid(vaccination)));
    }
    isVaccinationValid(vaccination) {
        const today = new Date();
        return vaccination.nextDueDate ? vaccination.nextDueDate > today : false;
    }
    isPuppyNeutered(healthRecords) {
        return healthRecords.some((record) => record.neuteredStatus);
    }
};
exports.PuppiesMapperService = PuppiesMapperService;
exports.PuppiesMapperService = PuppiesMapperService = __decorate([
    (0, common_1.Injectable)()
], PuppiesMapperService);
//# sourceMappingURL=puppies.mapper.service.js.map