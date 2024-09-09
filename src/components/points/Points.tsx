import { useCalculatorStore } from '../../store';
import styles from './points.module.css';
const Points = () => {
    const total = useCalculatorStore((state) => state.totalPoints);
    const current = useCalculatorStore((state) => state.currentPoints);

    return (
        <div className={styles.container}>
            <div className={styles.numbers}>
                {current}/{total}
            </div>
            <div className={styles.description}>Points Spent</div>
        </div>
    );
};

export default Points;
