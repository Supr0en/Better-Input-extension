document.addEventListener('keydown', function(event) {
    var focusedInput = document.activeElement;

    if (focusedInput) {
        if (window.getSelection().toString().length > 0) {
            const highlightText = window.getSelection().toString();
    
            switch (event.key) {
                case '"': focusedInput.value = `"${highlightText}`; break;
                case "'": focusedInput.value = `'${highlightText}`; break;
                case ')': focusedInput.value = `(${highlightText}`; break;
                case '}': focusedInput.value = `{${highlightText}`; break;
                case ']': focusedInput.value = `[${highlightText}`; break;
            }
        } else {
            switch (event.key) {
                case '"': focusedInput.value = `"`; break;
                case "'": focusedInput.value = `'`; break;
                case ')': focusedInput.value = `(`; break;
                case '}': focusedInput.value = `{`; break;
                case ']': focusedInput.value = `[`; break;
            }
        }
    }
});

