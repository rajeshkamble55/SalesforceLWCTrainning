import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
//import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
import MyMessageCR from '@salesforce/messageChannel/MyMessageChannel__c';

export default class MessageChannelSubscriber extends LightningElement {
    subscription = null;
    msgRecieved;
    @wire(MessageContext)
    messageContext;
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            MyMessageCR,
            (message) => this.handleMessage(message)
        );
    }
    handleMessage(message) {
        this.msgRecieved = 'MSG=' + message.message + '  and RecordID=' + message.recordId;
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
}