import Path from '../path/Path';
import classes from './talentPathList.module.css';

interface TalentPathListProps {
    data: { [key: number]: number[] };
}
const TalentPathList = ({ data }: TalentPathListProps) => {
    return (
        <div className={classes.container}>
            {Object.keys(data).map((path) => {
                return (
                    <Path
                        key={path}
                        pathNumber={path}
                        items={data[Number(path)]}
                    />
                );
            })}
        </div>
    );
};

export default TalentPathList;
