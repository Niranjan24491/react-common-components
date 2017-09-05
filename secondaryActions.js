import React, { Component } from 'react';
import './App.css';

let list = ['DELETE', 'SUBMIT', 'EDIT', 'VIEW'];

export default class SecondaryAction extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            alert('You clicked outside of me!');
        }

    }

    handleClick(e) {
        console.log(e.target.innerText);
    }

    render () {
        return (
            <div className="action-wrapper" ref={this.setWrapperRef}>
                <ul>
                    {
                        list.map((current, index) => 
                            <li key={index} onClick={this.handleClick}>
                                {current}
                            </li>
                        )
                    }
                </ul>
            </div>
            
        )
    }
}