
import s from './ImageGallery.module.css'


export const ImageGallery = ({children}) => {
    return (
        <ul className={s.ImageGallery}>
            {children}  
        </ul>
    )
}