import Calculator from '../calculator/Calculator';
import TalentPathList from '../talentPathList/TalentPathList';
import classes from './TalentCalculator.module.css';

const TalentCalculator = () => {
    return (
        <div className={classes.container}>
            <TalentPathList />
            <Calculator />
        </div>
    );
};

export default TalentCalculator;
