# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl.

This does differ from Hartl's version in that I used a regex replace rather than matching on an array and joining, and I use an && to prevent matching on an empty string rather than ||.

Also added functionality for detecting numeric and mixed-type palindromes (and testing to support it).


The module can be used as follows:

```
$ npm install --global mgj-palindrome
$ vim test.js
let Phrase = require("mgj-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```