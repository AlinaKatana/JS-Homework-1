//? Da se kreira modul potpisano kako vaga.js - i da ima metodi kade shto kje konvertira grama vo kilogrami i obratno
const vaga = require('./vaga.js');

console.log('Grama vo Kilogrami', vaga.gramsToKilograms(3000));
console.log('Kilogrami vo grama', vaga.kilogramsToGrams(5));

//? Da se kreira modul potpisan kako valuta - i da ima metodi koi sto kje konvertiraat evra vo denar, evra vo dolari, denari vo dolari i obratno
const valuta = require('./valuta.js');

console.log('Dolari vo evra', valuta.dolToEur(100));
console.log('Evra vo dolari', valuta.eurToDol(100));
console.log('Evra vo denari', valuta.eurToMkd(100));
console.log('Denari vo Evra', valuta.mkdToEur(10000));

//? Da se kreira modul po vasha zelba

//! Modul koj kalkulira kolku pari za gorivo vi se potrebni za da pominete odreden broj na kilometri
// Povikuvanje na modul
const calculateGasCost = require('./gasCostCalculator.js');

// test
const kilometers = 300;  // kolku kilometri treba da pominete
const fuelEfficiency = 7.5; // kolku troshi kolata
const costPerLiter = 82; // cena na litar za gorivo

// kalkuliranje so modul
const gasCost = calculateGasCost(kilometers, fuelEfficiency, costPerLiter);
console.log(`Za da pominete ${kilometers} kilometri, potrebni vi se ${gasCost} denari.`);