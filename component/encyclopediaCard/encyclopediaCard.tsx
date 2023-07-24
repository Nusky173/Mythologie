import styles from './encyclopediaCard.module.css'

type EncyclopediaCardProperty = {
    name: string
}

const EncyclopediaCard = (property: EncyclopediaCardProperty) => {
    

    return (
        <div className={styles.cardGrid}>
            <div className={styles.card}>
                {property.name}
            </div>
        </div>
    );
}

export default EncyclopediaCard;