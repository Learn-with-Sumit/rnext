// select DOM elements
let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");

// event handlers
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

async function handleFormSubmit(e) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch (err) {
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}

function handleTextareaChange() {
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}

function hide(el) {
    el.style.display = "none";
}

function show(el) {
    el.style.display = "";
}

function enable(el) {
    el.disabled = false;
}

function disable(el) {
    el.disabled = true;
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === "dhaka") {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            }
        }, 3000);
    });
}
