import _ from 'lodash';
import printMe from './print.js';
import {cube} from './math.js';

function component() {
	//var element = document.createElement('div');
	var btn = document.createElement('button');
	var element = document.createElement('pre');

	 element.innerHTML = [
	     'Hello webpack!',
	     '5 cubed is equal to ' + cube(5)
	   ].join('\n\n');

	// Lodash, currently included via a script, is required for this line to work
	//element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'CLICK me and check the console!';
   btn.onclick = printMe;

  // element.appendChild(btn);

	return element;
}

document.body.appendChild(component());