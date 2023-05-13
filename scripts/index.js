document.addEventListener('keydown', function(event) {
    var focusedInput = document.activeElement;
    var inputId = focusedInput.id; 
    const inputElement = document.getElementById(inputId);
    
    if (window.getSelection().toString().length > 0) {
        const highlightText = window.getSelection().toString();

        switch (event.key) {
            case '"': inputElement.value = `"${highlightText}`; break;
            case "'": inputElement.value = `'${highlightText}`; break;
            case ')': inputElement.value = `(${highlightText}`; break;
            case '}': inputElement.value = `{${highlightText}`; break;
            case ']': inputElement.value = `[${highlightText}`; break;
        }
    } else {
        switch (event.key) {
            case '"': inputElement.value = `"`; break;
            case "'": inputElement.value = `'`; break;
            case ')': inputElement.value = `(`; break;
            case '}': inputElement.value = `{`; break;
            case ']': inputElement.value = `[`; break;
        }
    }
});

