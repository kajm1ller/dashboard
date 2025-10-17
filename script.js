import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

var grid = GridStack.init();

var widgets = [
    {w: 3, h: 3, content:'<b>Account Info</b>', id:'AC'},
    {w: 3, h:2, content:'<b>Calix Cloud</b>', id:'CC'},
    {w: 2, h:2, content:'<b>Online Status / Login History</b>', id:'OS'},
    {w: 2, h:2, content:'<b>CPNI</b>', id:'CP'}
];

grid.makeWidget(document.getElementById('ac'));
grid.makeWidget(document.getElementById('cc'));
grid.makeWidget(document.getElementById('os'));
grid.makeWidget(document.getElementById('cpni'));