
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]


//copy to clipboard
document.getElementById('password2-el').addEventListener("click", function(){
  navigator.clipboard.writeText(this.textContent);
});

document.getElementById("password1-el").addEventListener("click", function () {
  navigator.clipboard.writeText(this.textContent);
});

//button to generate password
document.getElementById("gen-passBtn").addEventListener("click", generatePassword);

const passwordOneEl = document.getElementById('password1-el')
const passwordTwoEl = document.getElementById("password2-el")

function generatePassword() {
    let password1 = [];
    let password2 = []; 
    let string = null
    let string2 = null
    
    for(let i = 0; i < 15; i++){
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);

        let character1 = characters[randomIndex1];
        let character2 = characters[randomIndex2];

        password1.push(character1)
        password2.push(character2);
    }

    //merge characters into a string
    string = password1.join('')
    string2 = password2.join("");

    //display on screen
    passwordOneEl.textContent = string
    passwordTwoEl.textContent = string2
    
}


