import Points from '../points/Points';
import PathList from '../pathList/PathList';
import styles from './TalentCalculator.module.css';

const TalentCalculator = () => {
    return (
        <div className={styles.container}>
            <PathList />
            <Points />
        </div>
    );
};

export default TalentCalculator;
