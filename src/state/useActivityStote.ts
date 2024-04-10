// src/state/useActivityStore.ts
import create from 'zustand';
import { storage } from './storage';

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

const getStoredActivities = (): Activity[] => {
  const activitiesString = storage.getString('activities');
  return activitiesString ? JSON.parse(activitiesString) : [];
};

const saveActivities = (activities: Activity[]) => {
  storage.set('activities', JSON.stringify(activities));
};

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: getStoredActivities(),
  addActivity: (activity) =>
    set((state) => {
      const updatedActivities = [...state.activities, activity];
      saveActivities(updatedActivities);
      return { activities: updatedActivities };
    }),
}));
