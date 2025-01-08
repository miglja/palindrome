
module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Defines a phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palidrome testing
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // Returns the letters in the content.
    this.letters = function letters() {
        return this.content.replace(/[^a-z0-9]/ig, "");
    }

    // Returns true if the phrase is a palindrome,
    // false otherwise
    this.palindrome = function palindrome() {
        return !!this.letters() 
                && this.processedContent() === 
                   this.processedContent().reverse();
    }
}
