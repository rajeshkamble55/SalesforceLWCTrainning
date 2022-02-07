import { LightningElement } from 'lwc';

import {getDiscount} from 'c/customJSLibrary';
export default class ParentComponent1 extends LightningElement {
    firstName;
    lastName;
    contacts;

    importtedText;
textChangeEvent(event)
{
    if(event.target.name == 'fname')
    {
        this.firstName = event.target.value;
    }else
    if(event.target.name == 'lname')
    {
        this.lastName = event.target.value;
    }
}

constructor()
{
    super();
    this.importtedText = getDiscount('abc'); 
}

//call from child component
callContactEvent(event)
{
    console.log('here'+event.detail);
this.contacts = event.detail;
}

//to call child public function 
callFunction()
{
    const childcopo = this.template.querySelector('c-public-property-component');
    const call = childcopo.selectedValues(this.firstName);
    
}


}