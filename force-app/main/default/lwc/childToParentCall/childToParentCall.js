import { LightningElement,api } from 'lwc';

export default class ChildToParentCall extends LightningElement {

    @api name;

    nameEventHandler(event)
    {
        this.name = event.target.value;
        const nameValuePassEvent = CustomEvent('selectedname',{detail:this.name})
        this.dispatchEvent(nameValuePassEvent);
    }
}