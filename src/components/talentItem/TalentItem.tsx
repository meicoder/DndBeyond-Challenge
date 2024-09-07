import { useState } from 'react';
import classNames from 'classnames';
import styles from './talentitem.module.css';
import { usePointsStore } from '../../store';

const CLICK_BUTTON = {
    LEFT: 0,
    RIGHT: 2
};

interface TalentItemProps {
    iconNumber: number;
    lastIconNumber: number;
}

const TalentItem = ({ iconNumber, lastIconNumber }: TalentItemProps) => {
    const [active, setActive] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const increment = usePointsStore((state) => state.increment);
    const decrement = usePointsStore((state) => state.decrement);
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === CLICK_BUTTON.LEFT) {
            if (active) {
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
    const handleContextMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault();
        handleClick(e);
    };
    return (
        <div className={styles.container}>
            <div
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                className={classNames(styles.item, {
                    [styles.item1]: iconNumber === 1,
                    [styles.item2]: iconNumber === 2,
                    [styles.item3]: iconNumber === 3,
                    [styles.item4]: iconNumber === 4,
                    [styles.item5]: iconNumber === 5,
                    [styles.item6]: iconNumber === 6,
                    [styles.item7]: iconNumber === 7,
                    [styles.item8]: iconNumber === 8,
                    [styles.active]: active,
                    [styles.shake]: !isValid
                })}
            ></div>
            {lastIconNumber !== iconNumber && (
                <div className={styles.connector}></div>
            )}
        </div>
    );
};

export default TalentItem;
