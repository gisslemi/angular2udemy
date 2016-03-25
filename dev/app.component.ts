import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.template.html',
    directives: [PuzzleComponent]       
})
export class AppComponent {  
}
