import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {MySecondComponent} from './my-second-component.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.template.html',    
    directives: [MyComponentComponent, MySecondComponent]
})
export class AppComponent {  
}
