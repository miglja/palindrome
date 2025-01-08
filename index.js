
// Reverses a string
/*function reverse(string) {
    return Array.from(string).reverse().join("");
}*/

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
    return !!this.match(/^\s+$/);
}

Array.prototype.last = function() {
    return this[this.length-1];
}

// Returns true for palindromes, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent == reverse(processedContent);
}

// Defines a phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }

    // Returns content processed for palidrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome,
    // false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === 
            this.processedContent().reverse();
    };
}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome
    // testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();