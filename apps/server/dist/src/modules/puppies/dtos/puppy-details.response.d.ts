export declare class VaccinationDto {
    vaccinatedOn: Date;
    nextDueDate?: Date | null;
    vaccineName: string;
}
export declare class HealthRecordDto {
    neuteredStatus: boolean;
    medicalNotes: string;
    vaccinations: VaccinationDto[];
}
export declare class PuppyDetailsDto {
    id: number;
    name: string;
    age: number;
    gender: string;
    size: string;
    photoUrl: string;
    breed: string;
    traits: string[];
    healthRecords: HealthRecordDto[];
}
