const position = (element, replacement) => {
    var cursorStart = element.selectionStart;
    var cursorEnd = element.selectionEnd;

    var inputValue = element.value;

    var textBeforeCursor = inputValue.substring(0, cursorStart);
    var textAfterCursor = inputValue.substring(cursorEnd, inputValue.length);

    element.value = `${textBeforeCursor}${replacement}${textAfterCursor}`;
    element.setSelectionRange(cursorEnd + 1, cursorEnd + 1);
}

document.addEventListener('keydown', function(event) {
    var focusedInput = document.activeElement;
    
    if (focusedInput) {
        if (window.getSelection().toString().length > 0) {
            var highlightedPart = window.getSelection().toString();
    
            switch (event.key) {
                case '"': position(focusedInput, `"${highlightedPart}`); break;
                case "'": position(focusedInput, `'${highlightedPart}`); break;
                case ')': position(focusedInput, `(${highlightedPart}`); break;
                case '}': position(focusedInput, `{${highlightedPart}`); break;
                case ']': position(focusedInput, `[${highlightedPart}`); break;
            }
        } else {
            switch (event.key) {
                case '"': position(focusedInput, `"`); break; 
                case "'": position(focusedInput, `'`); break; 
                case '(': position(focusedInput, `)`); break; 
                case '{': position(focusedInput, `}`); break; 
                case '[': position(focusedInput, `]`); break; 
            }
        }
    }
});

