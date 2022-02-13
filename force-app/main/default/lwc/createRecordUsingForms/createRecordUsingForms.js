import { LightningElement } from 'lwc';
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';

export default class CreateRecordUsingForms extends LightningElement {
    recordId;
 //  fieldArray = ['Name','Phone'];
  fieldArray = [Name_Field,Phone_Field];
   formHandler(event)
{
    //console.log('event'+JSON.stringify(event));
    this.recordId = event.detail.id;
}
}