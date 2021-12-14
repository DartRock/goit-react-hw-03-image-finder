import React from 'react'
// import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import s from './Loader.module.css'

export const Loader = () => {
   
    return (
        <div className={s.loaderWrapper}>
            <PropagateLoader color="#3f51b5" size={15} />
        </div>
    )
}

