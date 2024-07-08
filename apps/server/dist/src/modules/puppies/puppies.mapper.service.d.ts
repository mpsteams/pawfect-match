import { Breed, HealthRecord, Puppy as PrismaPuppy, Vaccination } from '@prisma/client';
import { PuppyListResponseDto } from './dtos/puppy-list-response.dto';
import { PuppyDetailsDto } from './dtos/puppy-details.response';
export interface ExtendedPuppyTrait {
    trait: {
        description: string;
    } | null;
}
export interface ExtendedHealthRecord extends HealthRecord {
    neuteredStatus: boolean;
    medicalNotes: string | null;
    vaccinations: ExtendedVaccination[];
}
export interface ExtendedVaccination extends Vaccination {
    vaccine: {
        id: number;
        name: string;
    };
}
export interface ExtendedPuppy extends PrismaPuppy {
    breed?: Breed;
    traits: ExtendedPuppyTrait[];
    HealthRecord: ExtendedHealthRecord[];
}
export declare class PuppiesMapperService {
    mapToPuppyListResponseDto(puppy: ExtendedPuppy): PuppyListResponseDto;
    mapToPuppyDetailsDto(puppy: ExtendedPuppy): PuppyDetailsDto;
    private isPuppyVaccinated;
    private isVaccinationValid;
    private isPuppyNeutered;
}
