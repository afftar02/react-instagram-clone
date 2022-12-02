import CustomLink from '../CustomLink/CustomLink';
import styles from './NavigationItem.module.scss';

function NavigationItem({ icon, label, isChosen, url }) {
    return (
        <div className={styles.itemContainer}>
            <CustomLink to={url}>
                <div className={isChosen ? `${styles.chosenItem} ${styles.item}` : styles.item}>
                    <div className={styles.imageContainer}>
                        {icon}
                    </div>
                    <div className={styles.labelContainer}>
                        <span>{label}</span>
                    </div>
                </div>
            </CustomLink>
        </div >
    )
};

export default NavigationItem;