import Link from 'next/link';
import { tabsObject } from '../../type';
import styles from './encyclopediaCard.module.css'

type EncyclopediaCardProperty = {
    item: tabsObject
}

const EncyclopediaCard = (property: EncyclopediaCardProperty) => {
    
    return (
        <Link href={property.item.route} className={styles.card}>
            {property.item.name}
        </Link>
    );
}

export default EncyclopediaCard;