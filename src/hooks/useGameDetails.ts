import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';


export interface GameDetails {
    id: number;
    name: string;
    background_image: string;
    description_raw: string;
}


const useGameDetails = (slug?: string) => {
    
    const client = new APIClient<GameDetails>('games/'+slug);
    return useQuery<GameDetails, Error>({
        queryKey: ['games', slug],
        queryFn: () => client.getPage(),
        staleTime: ms('1h'), // 24h
    });
}

export default useGameDetails;
