import styles from './calculator.module.css';
const Calculator = () => {
    return (
        <div className={styles.container}>
            <div className={styles.numbers}>3/6</div>
            <div className={styles.description}>Points Spent</div>
        </div>
    );
};

export default Calculator;
