import Genre  from "./Genre";
import Platform  from './Platform';

interface PlatformObject {
    platform: Platform;
}

interface Publishers {
    id: number;
    name: string;
    slug: string;
}

export default interface GameDetails {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    parent_platforms: PlatformObject[];
    publishers: Publishers[];
    metacritic: number;
    background_image: string;
    description_raw: string;
}
