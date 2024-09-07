import TalentItem from '../talentItem/TalentItem';
import classes from './path.module.css';

interface PathProps {
    pathNumber: string;
    items: number[];
}
const Path = ({ pathNumber, items }: PathProps) => {
    return (
        <div className={classes.container}>
            <h2>Talent Path {pathNumber}</h2>
            <div className={classes.itemList}>
                {items.map((item) => {
                    return (
                        <TalentItem
                            key={item}
                            iconNumber={item}
                            lastIconNumber={items[items.length - 1]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Path;
