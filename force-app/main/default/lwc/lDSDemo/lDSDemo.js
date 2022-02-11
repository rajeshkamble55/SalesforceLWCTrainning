import { LightningElement, wire } from 'lwc';

//1. Import the method "createRecord" which is a named import
import { createRecord,getRecord } from "lightning/uiRecordApi";

//2. Import the reference to Object and Fields
/*import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import Phone_FIELD from "@salesforce/schema/Account.Phone";*/
//const fieldMapping = ['Account.name','Account.Phone','Account.AccountNumber'];
const FIELDS = ['Account.Name','Account.Phone','Account.AccountNumber'];
export default class LDSDemo extends LightningElement {
    strName;
    strAccountNumber;
    strPhone;

    refName;
    refAccountNo;
    refPhone;

    recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    returnDetails({ error, data }){
        if (error) {
        console.log('Error'+error);
        }else if (data) {
            console.log('data'+JSON.stringify(data));
            this.refName = data.fields.Name.value;
        }
    };

    // Change Handlers.
    nameChangedHandler(event){
        this.strName = event.target.value;
    }
    numberChangedHandler(event){
        this.strAccountNumber = event.target.value;
    }
    phoneChangedHandler(event){
        this.strPhone = event.target.value;
    }
    createAccount(){
        var fields = {'Name' : this.strName, 'AccountNumber' : this.strAccountNumber, 'Phone' : this.strPhone};
        
        var objRecordInput = {'apiName' : 'Account', fields};
        // LDS method to create record.
        createRecord(objRecordInput).then(response => {
            this.recordId = response.id;
           // alert('Account created with Id: ' +response.id);
           
        }).catch(error => {
          //  alert('Error: ' +JSON.stringify(error));
        });
    }
/*
    get refName()
    {console.log('Name'+this.returnDetails.data.fields.Name.value);
        if(this.returnDetails.data != null)
        {
            console.log('Name'+this.returnDetails.data.fields.Name.value);
return this.returnDetails.data.fields.Name.value;
        }
    }
    get refAccountNo()
    {
        if(this.returnDetails.data != null)
        {
            console.log('Phone'+this.returnDetails.data.fields.phone.value);
return this.returnDetails.data.fields.Phone.value;
        }
    }
    get refPhone()
    {
        if(this.returnDetails.data != null)
        {
return this.returnDetails.data.fields.AccountNumber.value;
        }
    }*/
        //3. Map the data to the fields
       /* const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.accName;
        fields[Phone_FIELD.fieldApiName] = this.accMobile;
        debugger;
        //4. Prepare config object with object and field API names 
        const recordInput = {

            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: fields
        };
        debugger;
        //5. Invoke createRecord by passing the config object
        createRecord(recordInput).then((record) => {
        
        });*/
    }

