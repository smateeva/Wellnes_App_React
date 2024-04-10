// src/state/useActivityStore.ts
import create from 'zustand';

interface Activity {
  id: string;
  type: string; // Example: "Running", "Meditation"
  duration: number; // Duration in minutes
  date: string; // ISO date string
}

interface ActivityStore {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  addActivity: (activity) => set((state) => ({ activities: [...state.activities, activity] })),
}));
