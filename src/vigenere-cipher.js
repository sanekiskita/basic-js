class VigenereCipheringMachine {

    constructor(arg){
        if(arg == undefined){
            this.arg = true;
        }else this.arg = arg;

    }

    encrypt(word, key) {
        if(word == undefined || key == undefined) throw new Error;
        let alpha  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        if(this.arg == true){
            word = word.toUpperCase().split('');
        }else{
            word = word.toUpperCase().split('').reverse();
        }

        let len = 0;

        key = key.toUpperCase().split('')
        let key1 = [];
        for(let i = 0; i < word.length;i++){
            if(alpha.indexOf(word[i]) == -1 ) key1.push(word[i]);
            else{
                key1.push(alpha[(alpha.indexOf(word[i])+alpha.indexOf(key[len])) % 26]);
                if(len >= key.length-1) {
                    len = 0;
                }
                else {
                    len++;
                }
            }
        }

        return key1.join('');
    }

    decrypt(word,key) {
        if(word == undefined || key == undefined) throw new Error;
        let alpha  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        if(this.arg == true){
            word = word.toUpperCase().split('');
        }else{
            word = word.toUpperCase().split('').reverse();
        }

        let len = 0;

        key = key.toUpperCase().split('')
        let key1 = [];
        for(let i = 0; i < word.length;i++){
            if(alpha.indexOf(word[i]) == -1 ) key1.push(word[i]);
            else{
                key1.push(alpha[Math.abs((alpha.indexOf(word[i])-alpha.indexOf(key[len]) + 26) % 26)]);
                if(len >= key.length-1) {
                    len = 0;
                }
                else {
                    len++;
                }
            }
        }

        return key1.join('');
    }

}

module.exports = VigenereCipheringMachine;
