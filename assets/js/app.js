document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const passwordField = document.getElementById('password');
    const clipboardIcon = document.getElementById('clipboard-icon');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    function generatePassword() {
        const length = document.getElementById('length').value;
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeLowercase = document.getElementById('lowercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSymbols = document.getElementById('symbols').checked;

        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let allChars = '';
        if (includeUppercase) allChars += upperCaseChars;
        if (includeLowercase) allChars += lowerCaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        passwordField.value = password;

        // Reset clipboard icon
        resetClipboardIcon();
    }

    generatePassword();

    function copyPassword() {
        passwordField.select();
        document.execCommand('copy');

        // Change clipboard icon to tick
        clipboardIcon.innerHTML = '<path d="M9 11.586l-3.293-3.293-1.414 1.414L9 14.414l9-9-1.414-1.414L9 11.586z"/>';
        copyBtn.style.backgroundColor = '#4CAF50';

        // Reset after 2 seconds
        setTimeout(resetClipboardIcon, 2000);
    }

    function resetClipboardIcon() {
        clipboardIcon.innerHTML = '<path d="m6 19v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm7.5 3h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5zm4-3h-1.5v1.5h-1.5v1.5h2c.478 0 1-.379 1-1zm-1.5-1v-3.363h1.5v3.363zm0-4.363v-3.637h1.5v3.637zm-13-3.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm3-1.5v-2.5h-13v13h2.5v-1.863h1.5v3.363h-4.5c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5v-1.5z" fill-rule="nonzero"/>';
        copyBtn.style.backgroundColor = 'transparent';
    }
});
