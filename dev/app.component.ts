import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {MySecondComponent} from './my-second-component.component';

@Component({
    selector: 'app',
    template: `
        <h2>Angular 2 Udemy Course</h2>  
        <h3>hello, {{name}}. Do you feel good? <span [class.is-awesome] = "inputElement.value === 'yes' ">I'm feeling good!</span> </h3> 
        <input type="text" #inputElement (keyup) = "0" >            
        <my-component>loading...</my-component>
        <my-second-component>loading...</my-second-component>
    `,
    styleUrls: ['src/css/myComponent.css'],
    directives: [MyComponentComponent, MySecondComponent]
})
export class AppComponent {
    name = "Michael";
}
