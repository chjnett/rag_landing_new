import { useStore } from './StoreContext';

export function useContentStore() {
    const { content, updateContent, resetContent: resetToDefaults, contentLoaded: isLoaded } = useStore();
    return { content, updateContent, resetToDefaults, isLoaded };
}
