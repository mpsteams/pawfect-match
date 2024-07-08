import { Breed as PrismaBreed } from '@prisma/client';
export declare class BreedEntity implements PrismaBreed {
    id: number;
    name: string;
    description: string;
}
