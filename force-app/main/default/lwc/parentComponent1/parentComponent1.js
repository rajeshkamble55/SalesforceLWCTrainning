import { LightningElement } from 'lwc';

export default class ParentComponent1 extends LightningElement {
    firstName;
    lastName;

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

}