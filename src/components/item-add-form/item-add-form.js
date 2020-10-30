import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        value: ''
    }
    
    inputSetState = (event) => {
        this.setState({value: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.value)
        this.setState({
            value: ''
        })
        
    }

    render() {
        return (
            <form className='item-add-form'
            onSubmit={this.onSubmit}> 
         
                <input 
                type='text' 
                placeholder='Type your thing'
                onChange={this.inputSetState} 
                className='form-control'
                value={this.state.value}/>
                <button 
                className='btn btn-outline-secondary'>
                    Bling
                </button>
            </form>
        )
    }
}