import type { Path } from '../../store';
import Talent from '../talent/Talent';
import styles from './path.module.css';

interface PathProps {
    path: Path;
}
const Path = ({ path }: PathProps) => {
    const { name, items, id } = path;
    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <div className={styles.itemList}>
                {items.map((item) => {
                    return (
                        <Talent
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
