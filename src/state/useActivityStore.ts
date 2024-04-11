import create from 'zustand';

interface Activity {
  id: string;
  type: string; 
  duration: number; 
  date: string; 
}

interface ActivityStore {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  addActivity: (activity) => set((state) => ({ activities: [...state.activities, activity] })),
}));
