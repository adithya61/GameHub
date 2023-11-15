import { Platform } from './Platform';


export interface Game {

    background_image: string;
    id: number;
    metacritic: number;
    slug: string;
    name: string;
    parent_platforms: { platform: Platform; }[];
    rating_top: number;

}
