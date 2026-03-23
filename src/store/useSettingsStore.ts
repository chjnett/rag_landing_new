import { useStore } from './StoreContext';

export type { NavItem, DashboardSettings } from './StoreContext';

export function useSettingsStore() {
    const { settings, updateSettings, settingsLoaded: isLoaded } = useStore();
    return { settings, updateSettings, isLoaded };
}
