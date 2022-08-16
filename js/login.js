// step-1 : add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address inside the input field
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // step- 3 : get password
    // 3.a: set id on the html element
    //3.b: get the element
    //3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4 verify email and password and check whether valid user or not
    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else if (email === 'rayhanddd@gmail.com' && password === 'amijanina') {
        window.location.href = 'bank.html';
    }
    else if (email === 'rayhan3030@gmail.com' && password === "amiarkadbona") {
        window.location.href = 'bank.html';
    }
    else {
        alert('তোকে আমি ত্যাজ্য সন্তান ঘোষণা করলাম। তুই পাসওয়ার্ড ভুলে গেছস')
    }
})