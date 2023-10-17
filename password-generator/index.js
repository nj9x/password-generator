const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let emptyFld = document.getElementById("empty-field");
let generatedFld =document.getElementById("generated-field");


function generatePassword() {
    let password = ' ';
    for( let i = 0; i < 12; i++) {
        let randomIndex = characters[Math.floor(Math.random() * characters.length)]
        password += randomIndex;
    }
    emptyFld.textContent = password;
    generatedFld.textContent = password;
}

