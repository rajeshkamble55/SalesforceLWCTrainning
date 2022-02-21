import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simpleLightbox';
import {loadStyle,loadScript} from 'lightning/platformResourceLoader';

export default class CustomLibraryDemo extends LightningElement {


renderedCallback()
{console.log('renderedCall');
Promise.all([
    loadStyle(this,SL+'simpleLightbox-master/dist/simpleLightbox.css'),
    loadScript(this,SL+'simpleLightbox-master/dist/simpleLightbox.css')
]).then(()=>{
this.flagT=true;
console.log('sucsess');
}).catch((error)=>{
    console.log('Error');
})
}


callEvent()
{
    console.log('button call');
    simpleLightbox.open(
        {
            items: [SL+'simpleLightbox-master/demo/images/1big.jpg',SL+'simpleLightbox-master/demo/images/1small.jpg']
        }
    ).then(()=> {console.log('then');});
}

}