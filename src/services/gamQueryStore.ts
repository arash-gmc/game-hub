import { create } from "zustand";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortBy: string | null;
  search: string | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number | null) => void;
  setPlatform: (platformId: number | null) => void;
  setSort: (sortBy: string | null) => void;
  setSearch: (search: string) => void;
}
const gameQueryInit = {
  genreId: null,
  platformId: null,
  search: null,
  sortBy: null,
};
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: gameQueryInit,
  setGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSort: (sortBy) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortBy } })),
  setSearch: (search) =>
    set(() => ({ gameQuery: { ...gameQueryInit, search } })),
}));

export default useGameQueryStore;
