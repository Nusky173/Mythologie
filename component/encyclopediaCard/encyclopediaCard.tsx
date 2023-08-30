import Link from 'next/link';
import { TabsObject } from '../../type';
import styles from './encyclopediaCard.module.css'

type EncyclopediaCardProperty = {
    item: TabsObject
}

const EncyclopediaCard = (property: EncyclopediaCardProperty) => {
    return (
        <Link href={property.item.route} className={styles.card}>
            <span className={styles.one}></span>
            <span className={styles.two}></span>
            <span className={styles.three}></span>
            <span className={styles.four}></span>
            <span className={styles.five}></span>
            <span className={styles.six}></span>
            <span className={styles.seven}></span>
            <span className={styles.eight}></span>
            {property.item.name}
        </Link>
    );
}

export default EncyclopediaCard;