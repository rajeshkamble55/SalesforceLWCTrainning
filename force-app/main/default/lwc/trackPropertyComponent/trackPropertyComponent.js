import { LightningElement,track } from 'lwc';

export default class TrackPropertyComponent extends LightningElement {
    //We user @track for two way binding between html and js.
    //to make veraible reactive we user @track but in latest release default all members are reactive.
    @track fullName;

    //Below function is for passing changed  value from text field to js using event.
    textChangeEvent(event)
    {
   this.fullName = event.target.value;//to get value from event.
    }
}