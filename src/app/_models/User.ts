import { Photo } from './Photo';

export interface User {
    id: number ;
    username: string;
    age: number ;
    knownAs: string ;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    country: string;
    city: string ;
    interest?: string;
    introduction?: string ;
    lookingFor?: string;
    photo?: Photo[];
}


