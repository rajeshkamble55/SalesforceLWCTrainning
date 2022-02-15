import { LightningElement, wire } from 'lwc';

import getAccounts from '@salesforce/apex/AuraEnabledFunction.getAccounts';


//import for tost event
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

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
                    const toastEvnt = new ShowToastEvent({
                        title :'success',
                        message :this.noOfRecords +' records showing below.',
                        variant :'success'
                    });
this.dispatchEvent(toastEvnt);
                    this.accounts = response;
                }
            ).error(error =>{
                console.log('Error'+error.body.message);
            });
        }
}