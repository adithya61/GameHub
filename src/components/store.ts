import { create } from "zustand";


interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface gameQueryStore {
    gameQuery: GameQuery,
    setSearchText: (searchText: string) => void;
    setGenreId: (id: number) => void;
    setPlatformId: (id: number) => void;
    setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id} })),
    setPlatformId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id} })),
    setSortOrder: (order) => set((store) => ({ gameQuery: {...store.gameQuery, sortOrder: order} }))

}))

export default useGameQueryStore;
