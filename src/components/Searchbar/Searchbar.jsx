import React from 'react'
import { Component } from 'react'
import s from './Searchbar.module.css'

export class Searchbar extends Component {

    state = {
        input: ''
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.input)
    }

    onChangeHandler = e => {
        this.setState({input: e.target.value})
    }

    render() {
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.onSubmitHandler} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>            	
                        &#128269;
                    </button>

                    <input
                        onChange={this.onChangeHandler}
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
