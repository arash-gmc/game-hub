import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortBy?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId?: number) => void;
  setPlatform: (platformId?: number) => void;
  setSort: (sortBy: string) => void;
  setSearch: (search?: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSort: (sortBy) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortBy } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

export default useGameQueryStore;
