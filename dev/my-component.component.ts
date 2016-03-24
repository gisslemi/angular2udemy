import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector:'my-component',
    templateUrl: './app/my-component.template.html', 
    styleUrls: ['src/css/myComponent.css'],
})
export class MyComponentComponent implements OnInit {
    
      name : string;
      
      ngOnInit ():any {
          this.name = "Michael";
      }      
}