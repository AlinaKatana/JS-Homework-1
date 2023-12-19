//! Zadaca br 1
//! Da se kreira funkcionalna ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo farenhajt

const c2f = function(x) {
    return 32 + x * 1.8;
};

console.log(c2f(12));

//? Zadacha broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius,
//? i koja vo megju vreme kje logira ako temperaturata e pod 0, kje logira deka temperaturata e niska,
//? od 0 do 22 stepeni kje logira deka temperaturata e nomrlana i nad 22 stepeni kje logira temperaturata e pokachena
//? NAPOMENA FUNCKIJATA TREBA DA GO VRATI BROJOT VO STEPENI

let f2c = (fahrenheit) =>{
    let celsius = ((fahrenheit) - 32) * 5/9
        if (celsius < 0){
            console.log(`Temperaturata e ${celsius}°. Temperaturata e niska.`)
        } else if(celsius >= 0 && celsius <= 22){
            console.log(`Temperaturata e ${celsius}°. Temperaturata e normalna.`)
        } else{
            console.log(`Temperaturata e ${celsius}°. Temperaturata e pokachena.`)
        };
};

f2c(152);


//? Zadacha broj 3
//? Da se kreira metoda vo objekt kade shto objektot bi imal 2 parametri prviot bi bil broj 1 so nekakva vrednost i vtoriot parametar bi bil boj2, metodata bi se vikala zbir kade sto kje treba da gi soberi prviot i vtoriot parametar od objektot

let numbers = {
    no1: 52,
    no2: 18,

    addNumbers: function(){
        return this.no1 + this.no2;
    }

};

console.log(numbers.addNumbers());