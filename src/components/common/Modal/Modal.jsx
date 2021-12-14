import React from 'react'
import { Component } from 'react'
import s from './Modal.module.css'

export class Modal extends Component {

    keydonwHandler = (e) => {
        if (e.code === "Escape") {
            this.props.onModalClose()
        }
    }

    clickHandler = e => {
        if (e.target === e.currentTarget) {
            this.props.onModalClose()
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keydonwHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keydonwHandler)
    }
    
    render() {
        return (
        <div onClick={this.clickHandler} className={s.Overlay}>
            <div className={s.Modal}>
                    <img src={this.props.image} alt={this.props.alt}/>
            </div>
        </div>
    )}
}
