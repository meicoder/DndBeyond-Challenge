import { usePointsStore } from '../../store';
import styles from './calculator.module.css';
const Calculator = () => {
    const total = usePointsStore((state) => state.total);
    const current = usePointsStore((state) => state.current);

    return (
        <div className={styles.container}>
            <div className={styles.numbers}>
                {current}/{total}
            </div>
            <div className={styles.description}>Points Spent</div>
        </div>
    );
};

export default Calculator;
