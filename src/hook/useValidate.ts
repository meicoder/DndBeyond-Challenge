import { useState } from 'react';
import { useCalculatorStore } from '../store';

const CLICK_BUTTON = {
    LEFT: 0,
    RIGHT: 2
};

const useValidate = () => {
    const [active, setActive] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const totalPoints = useCalculatorStore((state) => state.totalPoints);
    const currentPoints = useCalculatorStore((state) => state.currentPoints);
    const paths = useCalculatorStore((state) => state.paths);
    const addItem = useCalculatorStore((state) => state.addItem);
    const removeItem = useCalculatorStore((state) => state.removeItem);

    const checkDependencies = (pathId: number, iconNumber: number) => {
        const pathSelected = paths.find((path) => path.id === pathId);

        if (!pathSelected) {
            return false;
        }

        if (
            pathSelected.selectedItems.length === 0 &&
            iconNumber === pathSelected.items[0]
        ) {
            return false;
        }

        return (
            pathSelected.selectedItems[pathSelected.selectedItems.length - 1] +
                1 !==
            iconNumber
        );
    };

    const validate = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        pathId: number,
        iconNumber: number
    ) => {
        if (e.button === CLICK_BUTTON.LEFT) {
            const pathSelected = paths.find((path) => path.id === pathId);
            if (!pathSelected) {
                return;
            }

            if (
                active ||
                currentPoints >= totalPoints ||
                checkDependencies(pathId, iconNumber)
            ) {
                setIsValid(false);
                setTimeout(() => {
                    setIsValid(true);
                }, 500);
            } else {
                setActive(true);
                addItem(pathId, iconNumber);
            }
        } else if (e.button === CLICK_BUTTON.RIGHT) {
            if (!active) {
                setIsValid(false);
                setTimeout(() => {
                    setIsValid(true);
                }, 500);
            } else {
                setActive(false);
                removeItem(pathId, iconNumber);
            }
        }
    };

    return { active, isValid, validate };
};

export default useValidate;
