import { LightningElement } from 'lwc';

export default class ShadowDomDemo extends LightningElement {

    constructor() 
    {
        super()
        console.log('In constructor');

        //we can open connection here but not for dom menupulation
        //when consturctor call framework will check is there any public property  called
        //first public property is updated first
        //then DOM is inserted in side the page.
        //connnectedCallback() is called, dom is inserted but we can not do any
        // menupulation bcoz it is not rendered yet.
        //then dom rendered. 
        //then framework will check any child componented is present. if yes then constructor call again
        //no then renderedcallbakc is call.
        //dom removed
        //disconnectedcallback().
    }

    connectedCallback() {
        console.log('In connectedcallback');

    }
    renderedCallback() {
        console.log('In renderedcallback');

    }
    disconnectedCallback() {
        console.log('In disconnectedcall');

    }


}