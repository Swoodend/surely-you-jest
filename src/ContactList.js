import React, { Component } from 'react';
import Contact from './Contact';
import ContactSearch from './ContactSearch';

export default class ContactList extends Component {
    constructor(props){
        super(props);
        this.updateState = this.updateState.bind(this);
        this.state = {
            searchState: ''
        }
    }

    updateState(val){
        this.setState({
            searchState: val
        })
    }

    render(){
        let filteredContacts = this.props.contacts.filter((contact) => {
            return contact.name.indexOf(this.state.searchState) > -1;
        });


        let contacts = filteredContacts.map((contactObj, i) => {
            return (
                <Contact 
                    key={i} 
                    name={contactObj.name}
                    number={contactObj.number}
                />
            )
        })
        return (
            <div>
                <ContactSearch updateParentState={this.updateState}/>
                <ol>
                    {contacts}
                </ol>
            </div>
        )
    }
}