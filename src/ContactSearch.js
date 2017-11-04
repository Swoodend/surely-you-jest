import React, { Component } from 'react';

export default class ContactSearch extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        let searchText = event.target.value;
        this.props.updateParentState(searchText);
    }
    
    render(){
        return(
            <label htmlFor="contact-search">
                search for a contact:
                <input 
                    onChange={this.handleChange} 
                    id="contact-search" 
                    type="text"
                    name={"contact-search"}/>
            </label>
        )
    }
}