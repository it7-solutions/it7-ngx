import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    checkboxValue = true;

    inputValue = 'Text';

    selectValue = '2';

    selectChoices = [
        {input: '1', output: 'Item 1'},
        {input: '2', output: 'Item 2'},
        {input: '3', output: 'Item 3'},
        {input: '4', output: 'Item 4'}
    ];

    selectSettings = {
        choices: [
            {input: '1', output: 'Item 1'},
            {input: '2', output: 'Item 2'},
            {input: '3', output: 'Item 3'},
            {input: '4', output: 'Item 4'}
        ]
    };

    constructor() {
    }

    ngOnInit() {
    }
}
