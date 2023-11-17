import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient, { fetchResponse } from '../services/api-client';
import ms from 'ms';
import Platform  from '../entities/Platform';

const client = new  APIClient<Platform>('platforms/lists/parents');


// useData<Platform>("platforms/lists/parents")
// copy from stored data :
// ({data: platforms, error: null, isLoading:false});

const usePlatforms = () => {
    return useQuery <fetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => client.get(),
        staleTime:ms('1d'), // 24 h
        initialData: platforms,
    })
}
export default usePlatforms;
