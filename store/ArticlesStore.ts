import { create } from 'zustand'

interface ArticlesStore {
    selectedTopics: string[];
    setSelectedTopics: (topics: string[]) => void;
    dateRange: string;
    setDateRange: (range: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useArticlesStore = create<ArticlesStore>((set) => ({
    selectedTopics: [],
    setSelectedTopics: (topics) => set({ selectedTopics: topics }),
    dateRange: 'all',
    setDateRange: (range) => set({ dateRange: range }),
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
