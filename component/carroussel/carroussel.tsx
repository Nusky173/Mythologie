import Image from "next/image";
import styles from "./carroussel.module.css"

const Carroussel = () => {

    const imgTab = [
        "../../public/38830.PNG",
        "../../public/40169.PNG",
        "../../public/eye-udjat-EG.PNG"     
    ]

    

    return (
        <div className={styles.carroussel}>
            {imgTab.length > 0 && 
                imgTab.map((e, index ) => {
                    let className = 'img' + index
                    console.log(className)
                    return (
                        <div className={styles[className]} key={index}/>
                    );
                })
            }
        </div>
    );
}

export default Carroussel;