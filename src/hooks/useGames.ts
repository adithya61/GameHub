import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { fetchResponse } from '../services/api-client';
import { Platform } from "../hooks/usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform,}[];
    metacritic: number; 
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => {

    const controller =  new AbortController();

    return useQuery<Game[], Error>({
        queryKey: ['gameQuery', gameQuery],
        queryFn: () => {
            return apiClient
      .get<fetchResponse<Game>>("games", {signal: controller.signal, params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        }})
      .then((res) => res.data.results);
        },
        staleTime: 10 * 60 * 1000, // 10 minutes.
    })
}

export default useGames;
