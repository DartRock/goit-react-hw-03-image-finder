import React from 'react'
import s from './Button.module.css'

export const Button = ({onLoadMoreClick}) => {
    return (
        <div className={s.ButtonWrapper}>
            <button onClick={onLoadMoreClick} type='button' className={s.Button}>Load more</button>
        </div>
    )
}
