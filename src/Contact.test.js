import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ContactList from './ContactList';
import Contact from './Contact';
import ContactSearch from './ContactSearch';

describe('<ContactList/>', () => {
    let component = mount(
        <ContactList
            contacts={[
                {name:"alice", number:"111-111-1111"}, 
                {name:"bob", number: "222-222-2222"}
            ]}
        />
    )
    it('should render without crashing', () => {
        expect(component.find('ol')).toHaveLength(1);
    });

    it ('should receive props correctly', () => {
        expect(component.instance().props.contacts).toHaveLength(2);
        expect(component.instance().props.contacts.length === 4).toBeFalsy();
    });

    it('should render this.props.contacts.length <Contact/> components', () => {
        let numContacts = component.instance().props.contacts.length;
        expect(component.find(Contact)).toHaveLength(numContacts);
    });

    it('should filter the contacts based on user inpout', () => {
        
        component.setState({searchState: "ob"});
        let contacts = component.find('ol').children();
        expect(contacts.length).toEqual(1);
        expect(contacts.instance().props.name).toEqual('bob');

        component.setState({searchState: "ice"});
        expect(contacts.length).toEqual(1);
        expect(contacts.instance().props.name).toEqual('alice');
    });
});

describe('<Contact/>', () => {
    let component = shallow(<Contact name={"alice"} number={"111-111-1111"}/>)
    it('should render without crashing', () => {
        expect(component.find('li')).toHaveLength(1);    
    });

    it('should receive props correctly', () => {
        expect(component.instance().props.name).toEqual("alice");
        expect(component.instance().props.number).toEqual("111-111-1111"); 
    });

    it('should render props correctly', () => {
        expect(component.find('li').text()).toEqual('alice, 111-111-1111');
    });
})

describe('<ContactSearch/>', () => {
    let component = mount(<ContactSearch updateParentState={'foo'}/>)
    it('should render without crashing', () => {
        expect(component.find('label')).toHaveLength(1);
    });

    it('should receive correct props', () => {
        expect(component.instance().props.updateParentState).toEqual('foo')
    })

    it('should update <ContactList/> state when onChange() fires', () => {
        let parent = mount(
            <ContactList
                contacts={[
                    {name:"alice", number:"111-111-1111"}, 
                    {name:"bob", number: "222-222-2222"}
                ]}
            />
        )
        let child = parent.find(ContactSearch);
        let event = {target: { value: "bob"}}        
        child.find('#contact-search').simulate('change', event)
        expect(parent.instance().state.searchState).toEqual("bob");
        
    });
})