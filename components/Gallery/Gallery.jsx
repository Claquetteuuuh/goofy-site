import React, {useEffect, useState} from 'react';
import styles from './Gallery.module.css'

const Gallery = () => {

    const [background, setBackground] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setBackground(document.getElementsByClassName(styles.backgroundBlack)[0]);
    }, [])

    const triggerImage = (image) => {
        background.style.display = "block";
        setSelectedImage(image);
        image.classList.add(styles.selected);
        image.classList.remove(styles.item);
    } 
    
    const unselectImage = () => {
        background.style.display = "none";
        selectedImage.classList.remove(styles.selected);
        selectedImage.classList.add(styles.item);
        setSelectedImage(null);
    }

    return (
        <div>
            <div className={styles.backgroundBlack} onClick={e => unselectImage()}></div>
            <ul className={styles.gallery}>
                <li>
                    <img src="/img/bigmouthgoofy.jpg" alt="bigmouth goofy" className={styles.item} onClick={e => triggerImage(e.target)}/>
                </li>
                <li>
                    <img src="/img/fathergoofy.jpg" alt="father goofy" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
                <li>
                    <img src="/img/hahagoofy.jpg" alt="haha goofy" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
                <li>
                    <img src="/img/shotgungoofy.jpg" alt="shot gun goofy" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
                <li>
                    <img src="/img/traingoofy.jpg" alt="train goofy" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
                <li>
                    <img src="/img/vroomgoofy.jpg" alt="vroom goofy bike" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
                <li>
                    <img src="/img/yoshi.png" alt="yoshi licker" className={styles.item} onClick={e => triggerImage(e.target)} />
                </li>
            </ul>
        </div>
        
    );
};

export default Gallery;