import { Puppy as PrismaPuppy } from '@prisma/client';
import { BreedEntity } from './breed.entity';
import { TraitEntity } from './trait.entity';
export declare class PuppyEntity implements PrismaPuppy {
    id: number;
    name: string;
    age: number;
    gender: string;
    size: string;
    breedId: number | null;
    photoUrl: string;
    breed?: BreedEntity;
    traits?: TraitEntity[];
    HealthRecord: any;
}
