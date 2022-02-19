import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NevigationDemo extends NavigationMixin(LightningElement) {


    callsiteEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__webPage',
                attributes: {
                    url: 'https://login.salesforce.com'
                }
            }
        )
    }
    callAccountHomeEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes: {
                   objectApiName:'Account',
                   actionName : 'home'
                }
            }
        )
    }
    callCreateContactEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName:'Contact',
                    actionName:'new'
                }
            }
        )
    }
    callOpportunityListEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes: {
                   objectApiName:'Opportunity',
                   actionName:'List'
                }
            }
        )
    }
    callOpenCaseRecordEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__recordPage',
                attributes: {
                  recordId:'',
                  objectApiName:'Case',
                  actionName:'View'
                }
            }
        )
    }
    callComponentEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__navItemPage',
                attributes: {
                  apiName:''
                }
            }
        )
    }
    callPreviewFileEventHandler() {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__namePage',
                attributes: {
                   pageName:'' 
                },
                state:{
                    recordIds:'',
                    selectedRecordId:''
                }
            }
        )
    }
}