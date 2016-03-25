import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    templateUrl: 'app/puzzle/puzzle.template.html',

})
export class PuzzleComponent implements OnInit {
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;
    
    ngOnInit():any{
        this.switch1Number = Math.round (Math.random());
        this.switch2Number = Math.round (Math.random());
        this.switch3Number = Math.round (Math.random());
        this.switch4Number = Math.round (Math.random());
        
        console.log(this.switch1Number);
        console.log(this.switch2Number);
        console.log(this.switch3Number);
        console.log(this.switch4Number);
    }
}