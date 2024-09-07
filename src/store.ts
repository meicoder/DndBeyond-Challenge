import { create } from 'zustand';

type PointsStore = {
    total: number;
    current: number;
    increment: () => void;
    decrement: () => void;
};

export const usePointsStore = create<PointsStore>((set) => ({
    total: 6,
    current: 0,
    increment: () => {
        set((state) => ({ current: state.current + 1 }));
    },
    decrement: () => {
        set((state) => ({ current: state.current - 1 }));
    }
}));
