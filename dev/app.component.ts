import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {MySecondComponent} from './my-second-component.component';

@Component({
    selector: 'app',
    template: `
        <h2>Angular 2 Udemy Course</h2>       
        <my-component>loading...</my-component>
        <my-second-component>loading...</my-second-component>
    `,
    directives: [MyComponentComponent, MySecondComponent]
})
export class AppComponent {

}
