import { useQuery } from '@tanstack/react-query';
import genres from "../data/genres";
import APIClient, { fetchResponse } from '../services/api-client';
import ms from 'ms';

const client = new APIClient<Genre>('genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const useGenres = () => {

    return useQuery<fetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () => client.get(),
        staleTime: ms('1d'), // 24h
        initialData: genres,
    });
}

export default useGenres;
