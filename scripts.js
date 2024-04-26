const display = document.getElementsByClassName("display")[0];

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value = ""

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function changeSign() {
    const currentValue = display.value;
        
    if (currentValue !== "" && currentValue !== "0") {
            
        display.value = parseFloat(currentValue) * -1;
    }

        

}