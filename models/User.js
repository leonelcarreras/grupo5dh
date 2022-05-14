const fs = require('fs');

const User = {
    fileName: './database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
            },

generateId: function () {

    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {returnlastUser.id + 1; 
            }
            return 1;
        },

findAll: function () {
        return this.getData();
            },
create: function (userData){

            }, 
findByPk: function () {

let allUsers = this.findAll(),
let userFound= allUsers.find(oneUser => oneUser.id ===id)

},


findField: function (field, text) {

    let allUsers = this.findAll(),
    let userFound= allUsers.find(oneUser => oneUser.[field] === text)
    
    },
create: function (userData) {
    let allUsers= this.findAll();
    allUsers.push(userData);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' ')); 
}
},

create: function (userData){
    let allUsers =this.findAll();
    let newUser = {
        id: this.generateId(),
        ...userData
    }

    allUsers.push(newUser);
    fs.writerFileSync(this.name, JSON.stringify(allUsers, null, ' '));
    return newUser;
}



delete: function (id) {
let allUsers = this.findAll();
let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
fs.writerFileSync(this.name, JSON.stringify(finalUsers, null, ' '));
return true; 
},


let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
let inputToListen = document.getElementById('pass-one'); 
let valide = document.getElementsByClassName('indicator')[0]; 

inputToListen.addEventListener('input', function () { // Add event listener on input
        if(pattern.test(inputToListen.value)){
            valide.innerHTML = 'Contraseña Correcta';
        }else{
            valide.innerHTML = 'Al menos 2 letras o cCracteres y 2 números'
        }
    });

module.exports = User; 
