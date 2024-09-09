import Calculator from '../calculator/Calculator';
import TalentPathList from '../talentPathList/TalentPathList';
import styles from './TalentCalculator.module.css';

const TalentCalculator = () => {
    return (
        <div className={styles.container}>
            <TalentPathList />
            <Calculator />
        </div>
    );
};

export default TalentCalculator;
