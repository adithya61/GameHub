import { useQuery } from '@tanstack/react-query';
import genres from "../data/genres";
import APIClient, { fetchResponse } from '../services/api-client';

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
        staleTime: 24 * 60 * 60 *  1000, // 24h
        initialData: { count: 1, next: null, results:genres}
    });
}

export default useGenres;
