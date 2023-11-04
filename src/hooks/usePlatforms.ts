import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient, { fetchResponse } from '../services/api-client';

const client = new  APIClient<Platform>('platforms/lists/parents');


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


// useData<Platform>("platforms/lists/parents")
// copy from stored data :
// ({data: platforms, error: null, isLoading:false});

const usePlatforms = () => {
    return useQuery <fetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => client.get(),
        staleTime:24 * 60 * 60 * 1000, // 24 h
        initialData: {count: 1, next: null, results: platforms},
    })
}
export default usePlatforms;
