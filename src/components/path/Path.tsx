import type { Path } from '../../store';
import TalentItem from '../talentItem/TalentItem';
import classes from './path.module.css';

interface PathProps {
    path: Path;
}
const Path = ({ path }: PathProps) => {
    const { name, items, id } = path;
    return (
        <div className={classes.container}>
            <h2>{name}</h2>
            <div className={classes.itemList}>
                {items.map((item) => {
                    return (
                        <TalentItem
                            key={item}
                            iconNumber={item}
                            pathId={id}
                            lastIconNumber={items[items.length - 1]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Path;
