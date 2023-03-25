var yargs = require('yargs');
var options = yargs
    .usage("Usage: -l <length>")
    .option("l", { alias: "length", describe: "Length of password", type: "number", demandOption: true }).argv;
var pwd_length = parseInt(options.length);
var reader = require('readline');
var r = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.pwdGenerate = pwdGenerate;
function pwdGenerate() {
    var sample_space = '';
    var small = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var specials = "!@#$%^&*-=_+";
    var small_allow = false;
    var upper_allow = false;
    var special_allow = false;
    var numbers_allow = false;
    r.question('Do you want to include small case letters?(y/n)', function (smallCase) {
        if (smallCase.toLowerCase() === "y") {
            small_allow = true;
        }
        r.question('Do you want to include capital letters?(y/n)', function (upperCase) {
            if (upperCase.toLowerCase() === "y") {
                upper_allow = true;
            }
            r.question('Do you want to include special charecters?(y/n)', function (special) {
                if (special.toLowerCase() === "y") {
                    special_allow = true;
                }
                r.question('Do you want to include numbers(y/n)', function (number) {
                    if (number.toLowerCase() === "y") {
                        numbers_allow = true;
                    }
                    r.close();
                    if (small_allow) {
                        sample_space += small;
                    }
                    if (upper_allow) {
                        sample_space += caps;
                    }
                    if (special_allow) {
                        sample_space += specials;
                    }
                    if (numbers_allow) {
                        sample_space += numbers;
                    }
                    //pwd generating function
                    // exports.genPw = genP;
                    function genP(sample_space, pwd_length) {
                        var pwd = '';
                        for (var i = 0; i < pwd_length; i++) {
                            var x = Math.floor(Math.random() * sample_space.length);
                            pwd += sample_space[x];
                        }
                        return pwd;
                    }
                    var pwd = genP(sample_space, pwd_length);
                    console.log("password: " + pwd);
                });
            });
        });
    });
}
pwdGenerate();
