"use client"

import Link from 'next/link';
import { TabsObject } from '../../type';
import styles from './encyclopediaCard.module.css'

type EncyclopediaCardProperty = {
    item: TabsObject
}

const EncyclopediaCard = (property: EncyclopediaCardProperty) => {
    
    return (
        <Link href={property.item.route} className={styles.card}>
            {property.item.name}
        </Link>
    );
}

export default EncyclopediaCard;