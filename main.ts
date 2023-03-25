const yargs = require('yargs');

const options = yargs
.usage("Usage: -l <length>")
.option("l", { alias: "length", describe: "Length of password", type: "number", demandOption: true }).argv

const pwd_length = parseInt(options.length) ;

const reader = require('readline');
const r = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.pwdGenerate = pwdGenerate
function pwdGenerate(){
    var sample_space = ''
    const small = "abcdefghijklmnopqrstuvwxyz";
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specials =  "!@#$%^&*-=_+";

    var small_allow = false
    var upper_allow = false
    var special_allow = false
    var numbers_allow = false

    r.question('Do you want to include small case letters?(y/n)', (smallCase) => {
        if(smallCase.toLowerCase() === "y"){
            small_allow = true
        }

    r.question('Do you want to include capital letters?(y/n)', (upperCase) => {
        if(upperCase.toLowerCase() === "y"){
            upper_allow = true
        }

    r.question('Do you want to include special charecters?(y/n)', (special) => {
        if(special.toLowerCase() === "y"){
            special_allow = true
        }

    r.question('Do you want to include numbers(y/n)', (number) => {
        if(number.toLowerCase() === "y"){
            numbers_allow = true
        }
        r.close();

        if (small_allow){
            sample_space += small
        }
        if (upper_allow){
            sample_space += caps
        }
        if (special_allow){
            sample_space += specials
        }    
        if (numbers_allow){
            sample_space += numbers
        }
        
        //pwd generating function
        // exports.genPw = genP;
        function genP(sample_space, pwd_length){
            let pwd = ''    
            for(let i = 0; i < pwd_length; i++){
                let x = Math.floor(Math.random()*sample_space.length);
                pwd += sample_space[x];
            }
            return pwd;
        }
        const pwd = genP(sample_space, pwd_length)
        console.log("Your password: " + pwd)
    });
    });
    });
    });
}

pwdGenerate()
