import { create } from 'zustand';

export type Path = {
    id: number;
    name: string;
    items: number[];
    selectedItems: number[];
};

type CalculatorStore = {
    totalPoints: number;
    currentPoints: number;
    increment: () => void;
    decrement: () => void;
    paths: Path[];
    addItem: (pathId: number, itemId: number) => void;
    removeItem: (pathId: number, itemId: number) => void;
};

export const useCalculatorStore = create<CalculatorStore>((set) => ({
    totalPoints: 6,
    currentPoints: 0,
    increment: () => {
        set((state) => ({ ...state, currentPoints: state.currentPoints + 1 }));
    },
    decrement: () => {
        set((state) => ({ ...state, currentPoints: state.currentPoints - 1 }));
    },
    paths: [
        {
            id: 1,
            name: 'Talent Path 1',
            items: [1, 2, 3, 4],
            selectedItems: []
        },
        {
            id: 2,
            name: 'Talent Path 2',
            items: [5, 6, 7, 8],
            selectedItems: []
        }
    ],
    addItem: (pathId: number, itemId: number) => {
        set((state) => {
            const path = state.paths.find((path) => path.id === pathId);
            if (path) {
                path.selectedItems.push(itemId);
            }
            return { ...state, currentPoints: state.currentPoints + 1 };
        });
    },
    removeItem: (pathId: number, itemId: number) => {
        set((state) => {
            const path = state.paths.find((path) => path.id === pathId);
            if (path) {
                path.selectedItems = path.selectedItems.filter(
                    (id) => id !== itemId
                );
            }
            return { ...state, currentPoints: state.currentPoints - 1 };
        });
    }
}));
