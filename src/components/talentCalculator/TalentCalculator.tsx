import Calculator from '../calculator/Calculator';
import TalentPathList from '../talentPathList/TalentPathList';
import classes from './TalentCalculator.module.css';

const data = {
    1: [1, 2, 3, 4],
    2: [5, 6, 7, 8]
};

const TalentCalculator = () => {
    return (
        <div className={classes.container}>
            <TalentPathList data={data} />
            <Calculator />
        </div>
    );
};

export default TalentCalculator;
