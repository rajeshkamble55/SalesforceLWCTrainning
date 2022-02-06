import { LightningElement,api } from 'lwc';

export default class PublicPropertyComponent extends LightningElement 
{
    @api firstName;

    @api lastName;
    
    dataFromParent;
    
    textChangeEvent1(event)
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

@api selectedValues(dataValue)
    {
this.dataFromParent = dataValue;
    }

   

}