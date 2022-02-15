import { LightningElement,api } from 'lwc';
//import field_Name from '@salesforce/schema/Account.Name';
//import field_Phone from '@salesforce/schema/Account.Phone';

export default class RecordFormUsingAPI extends LightningElement {
@api recordId;
@api objectAPIName;


formHandler(event)
{
    this.recordId = event.target.value;
}
}