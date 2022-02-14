import { LightningElement, wire } from 'lwc';

import getAccounts from '@salesforce/apex/AuraEnabledFunction.getAccounts';

export default class AuraEnabledFunction extends LightningElement {

  //  @wire(getAccounts)
    accounts;
   responseRecieved = true;
    get responseRecieved() {
        if (this.accounts) {
 return true;
        } return false;
    }
    onClickEventHnadler(event) {
        alert('LOS ID Is:'+event.target.name);
    }

    noOfRecords;
    onChangeEventHandler(event)
    {
     this.noOfRecords = event.target.value;   
    }
    getAccountsOnclick()
        {
            console.log('here');
            getAccounts({noOfRecords:this.noOfRecords}).then( response =>
                {
                    console.log('in res');
                    this.accounts = response;
                }
            ).error(error =>{
                console.log('Error'+error.body.message);
            });
        }
}