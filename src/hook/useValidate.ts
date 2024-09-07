import { useState } from 'react';
import { usePointsStore } from '../store';

const CLICK_BUTTON = {
    LEFT: 0,
    RIGHT: 2
};

const useValidate = () => {
    const [active, setActive] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const total = usePointsStore((state) => state.total);
    const current = usePointsStore((state) => state.current);
    const increment = usePointsStore((state) => state.increment);
    const decrement = usePointsStore((state) => state.decrement);

    const validate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === CLICK_BUTTON.LEFT) {
            if (active || current >= total) {
                setIsValid(false);
                setTimeout(() => {
                    setIsValid(true);
                }, 500);
            } else {
                setActive(true);
                increment();
            }
        } else if (e.button === CLICK_BUTTON.RIGHT) {
            if (!active) {
                setIsValid(false);
                setTimeout(() => {
                    setIsValid(true);
                }, 500);
            } else {
                setActive(false);
                decrement();
            }
        }
    };

    return { active, isValid, validate };
};

export default useValidate;
