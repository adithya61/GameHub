import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { fetchResponse } from '../services/api-client';


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


// useData<Platform>("platforms/lists/parents")
// copy from stored data :
// ({data: platforms, error: null, isLoading:false});

const usePlatforms = () => {
    return useQuery <Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<fetchResponse<Platform>>('platforms/lists/parents')
        .then(res => res.data.results),
        initialData: platforms,
        staleTime: 24 * 60 * 60 * 1000,
    })
}
export default usePlatforms;
