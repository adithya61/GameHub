import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genres from "../data/genres";
import { fetchResponse } from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
// Use stored data -> /data/genres.ts
// ({data: genres, isLoading: false, error: null})
// To fetch from server return :
// useData<Genre>('genres')
const useGenres = () => {

    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<fetchResponse<Genre>>('genres').then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: genres
    });
}

export default useGenres;
