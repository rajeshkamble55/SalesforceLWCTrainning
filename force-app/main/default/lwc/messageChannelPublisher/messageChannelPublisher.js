import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
//import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
import MyMessageCR from '@salesforce/messageChannel/MyMessageChannel__c';
//import need to be same at both ends 

export default class MessageChannelPublisher extends LightningElement {


   textMessage;

   @wire(MessageContext)
   messageContext;

   textEventHandler(event) {
      this.textMessage = event.target.value;
   }
   
   handleContactSelect() {
      const payload = {message: this.textMessage, recordId:'R-001' };
      publish(this.messageContext, MyMessageCR, payload);
   }

}