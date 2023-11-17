import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { fetchResponse } from '../services/api-client';
import GameTrailer  from '../entities/GameTrailer';


const useGameTrailer = (slug: string) => {
    
    const client = new APIClient<GameTrailer>('games/'+ slug + "/movies");
    return useQuery<fetchResponse<GameTrailer>, Error>({
        queryKey: ['trailer', slug],
        queryFn: () => client.get(),
        staleTime: ms('1h'), // 24h
    });
}

export default useGameTrailer;
