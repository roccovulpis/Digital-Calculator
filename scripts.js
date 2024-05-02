const display = document.getElementsByClassName("display")[0];

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        // Evaluate the expression
        let result = eval(display.value);

        // Check if the result is Infinity, -Infinity, or NaN (division by zero scenarios)
        if (!isFinite(result) || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        // Handle other types of errors
        display.value = "Error";
    }
}

function changeSign() {
    const currentValue = display.value;
        
    if (currentValue !== "" && currentValue !== "0") {
        display.value = parseFloat(currentValue) * -1;
    }
}

function applyTheme(themeName) {
    const root = document.documentElement; 

    switch (themeName) {
        case 'light':
            root.style.setProperty('--background-color', '#FFFFFF');
            root.style.setProperty('--text-color', '#000000');
            root.style.setProperty('--button-background', '#7d7d7d');
            root.style.setProperty('--operator-background', '#ffd13b');
            root.style.setProperty('--table-background', '#bbbbbb');
            root.style.setProperty('--operator-button', '#ffd13b');
            root.style.setProperty('--equal-sign-button', '#ffd13b');
            break;
        case 'dark':
            root.style.setProperty('--background-color', '#212121');
            root.style.setProperty('--text-color', '#FFFFFF');
            root.style.setProperty('--button-background', '#424242');
            root.style.setProperty('--operator-background', '#FFA000');
            root.style.setProperty('--table-background', '#000000');
            root.style.setProperty('--operator-button', '#cd8500');
            root.style.setProperty('--equal-sign-button', '#cd8500');
            break;
        case 'ocean':
            root.style.setProperty('--background-color', '#0077be');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#6b6b6b'); 
            root.style.setProperty('--operator-background', '#004d99');
            root.style.setProperty('--table-background', '#c7e4ff');
            root.style.setProperty('--operator-button', '#004d99');
            root.style.setProperty('--equal-sign-button', '#004d99');
            break;
        case 'forest':
            root.style.setProperty('--background-color', '#2c5f2d');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#503e2f');
            root.style.setProperty('--operator-background', '#2c542c');
            root.style.setProperty('--table-background', '#8cd19d');
            root.style.setProperty('--operator-button', '#2c542c');
            root.style.setProperty('--equal-sign-button', '#2c542c');
            break;
        case 'sunset':
            root.style.setProperty('--background-color', '#ff6f61');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#ff8a6b'); 
            root.style.setProperty('--operator-background', '#b73e2f');
            root.style.setProperty('--table-background', '#ffdbe1');
            root.style.setProperty('--operator-button', '#b73e2f');
            root.style.setProperty('--equal-sign-button', '#b73e2f');
            break;
        case 'space':
            root.style.setProperty('--background-color', '#1a0e25');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#252525');
            root.style.setProperty('--operator-background', '#004d99');
            root.style.setProperty('--table-background', '#3a3a3a'); 
            root.style.setProperty('--operator-button', '#004d99');
            root.style.setProperty('--equal-sign-button', '#004d99');
            break;
        case 'summer':
            root.style.setProperty('--background-color', '#f7cd4f');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#e89b00');
            root.style.setProperty('--operator-background', '#ffb266');
            root.style.setProperty('--table-background', '#ffe6b3');
            root.style.setProperty('--operator-button', '#ffb266');
            root.style.setProperty('--equal-sign-button', '#ffb266');
            break;
        case 'night':
            root.style.setProperty('--background-color', '#121212');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--button-background', '#242424');
            root.style.setProperty('--operator-background', '#952929');
            root.style.setProperty('--table-background', '#363636');
            root.style.setProperty('--operator-button', '#952929');
            root.style.setProperty('--equal-sign-button', '#952929');
            break;
        default:
            // Default theme or error handling
            break;
    }
}    

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function closeDropdownOnClickOutside(event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
        dropdownMenu.style.display = 'none'; 
    }
}

function applyThemeOnClick(event) {
    if (event.target.classList.contains('dropdown-item')) {
        const themeName = event.target.dataset.theme;
        applyTheme(themeName);
        toggleDropdown(); 
    }
}

function toPercentage() {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (parseFloat(currentValue) / 100).toString();
    }
}

document.addEventListener('click', function(event) {
    closeDropdownOnClickOutside(event);
    applyThemeOnClick(event);
});
