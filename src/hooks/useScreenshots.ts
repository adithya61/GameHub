import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Screenshots from '../entities/Screenshots';
import APIClient, { fetchResponse } from '../services/api-client';



const useScreenshots = (slug: string) => {
    
    const client = new APIClient<Screenshots>('games/'+ slug + "/screenshots");
    return useQuery<fetchResponse<Screenshots>, Error>({
        queryKey: ['screenshots', slug],
        queryFn: () => client.get(),
        staleTime: ms('1h'), 
    });
}

export default useScreenshots;
