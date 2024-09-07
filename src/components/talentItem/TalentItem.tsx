import classNames from 'classnames';
import styles from './talentitem.module.css';
import useValidate from '../../hook/useValidate';

interface TalentItemProps {
    iconNumber: number;
    pathId: number;
    lastIconNumber: number;
}

const TalentItem = ({
    iconNumber,
    pathId,
    lastIconNumber
}: TalentItemProps) => {
    const { active, isValid, validate } = useValidate();
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        validate(e, pathId, iconNumber);
    };
    const handleContextMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault();
        handleClick(e);
    };
    return (
        <div className={styles.container}>
            <div
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                className={classNames(styles.item, {
                    [styles.item1]: iconNumber === 1,
                    [styles.item2]: iconNumber === 2,
                    [styles.item3]: iconNumber === 3,
                    [styles.item4]: iconNumber === 4,
                    [styles.item5]: iconNumber === 5,
                    [styles.item6]: iconNumber === 6,
                    [styles.item7]: iconNumber === 7,
                    [styles.item8]: iconNumber === 8,
                    [styles.active]: active,
                    [styles.shake]: !isValid
                })}
            ></div>
            {lastIconNumber !== iconNumber && (
                <div className={styles.connector}></div>
            )}
        </div>
    );
};

export default TalentItem;
