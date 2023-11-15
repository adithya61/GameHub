import { fetchResponse } from "../services/api-client";
import { Genre } from '../entities/Genre';
import { Platform } from '../entities/Platform';

const usegetName = (data?: fetchResponse<Genre | Platform>, id?:number) => {

    const entity = data?.results.find((g) => g.id === id);

    return entity?.name;
}

export default usegetName;
