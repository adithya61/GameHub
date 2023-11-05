import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Platform } from "../hooks/usePlatforms";
import APIClient, { fetchResponse } from '../services/api-client';
import ms from 'ms';

const client = new APIClient<Game>('games');

export interface Game {
    // #region Properties (6)

    background_image: string;
    id: number;
    metacritic: number;
    name: string;
    parent_platforms: {platform: Platform,}[];
    rating_top: number;

    // #endregion Properties (6)
}

const useGames = (gameQuery: GameQuery) => {
    const controller =  new AbortController();

    return useInfiniteQuery<fetchResponse<Game>, Error>({
        queryKey: ['gameQuery', gameQuery],
        queryFn: async ({pageParam}) => {
            return client.get({
                signal: controller.signal, 
                params: {
                    page: pageParam,
                    page_size: 20,
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
            }});
            
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1: undefined,
        staleTime: ms('10m'), // 10 minutes.
    })
}

export default useGames;
