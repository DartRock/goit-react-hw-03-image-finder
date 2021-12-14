    
import React from 'react'
import s from './ImageGalleryItem.module.css'


export const ImageGalleryItem  = ({previewImg, alt, largeImageURL, onImageClick}) => {
    return (
        <li className={s.ImageGalleryItem}>
          <img data-image={largeImageURL} src={previewImg} alt={alt} className={s.ImageGalleryItemImage} onClick={onImageClick} />   
        </li>
    )
}