  // funkcija grami vo kilogrami
function gramsToKilograms(grams) {
    return grams / 1000;
  }
  
  // funkcija kilogrami vo grami
  function kilogramsToGrams(kilograms) {
    return kilograms * 1000;
  }
  
  // eksport na funkciite
  module.exports = {
    gramsToKilograms,
    kilogramsToGrams,
  };