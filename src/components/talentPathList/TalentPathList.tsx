import { useCalculatorStore } from '../../store';
import Path from '../path/Path';
import styles from './talentPathList.module.css';

const TalentPathList = () => {
    const paths = useCalculatorStore((state) => state.paths);
    return (
        <div className={styles.container}>
            {paths.map((path) => {
                return <Path key={path.id} path={path} />;
            })}
        </div>
    );
};

export default TalentPathList;
