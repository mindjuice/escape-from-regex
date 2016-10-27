# escape-from-regex
Simple utility function to escape user-entered strings for use in a regular expression matching.

## ES6 Example
```
import escapeRegex from 'escape-from-regex';

const result1 = escapeRegex('abc 123 !@#%_=');
console.log(`result1 = ${result1}`);

const result2 = escapeRegex('-[]/{}()*+?.\^$|');
console.log(`result2 = ${result2}`);
```

## ES5 Example
```
var escapeRegex = require('escape-from-regex');

var result1 = escapeRegex('abc 123 !@#%_=');
console.log('result1 = ' + result1);

var result2 = escapeRegex('-[]/{}()*+?.\^$|');
console.log('result2 = ' + result2);
```

## License
This code is distributed under the MIT License: http://rem.mit-license.org
