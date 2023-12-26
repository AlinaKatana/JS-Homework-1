// Funkcija koja kalkulira kolku pari ke se potroshat za benzin za broj na kilometri
function calculateGasCost(kilometers, fuelEfficiency, costPerLiter) {
    if (kilometers <= 0 || fuelEfficiency <= 0 || costPerLiter <= 0) {
      throw new Error('Invalid input. Kilometers, fuel efficiency, and cost per liter must be greater than zero.');
    }
  
    // Kalkulira potroshuvacka
    const fuelPerLitter = fuelEfficiency / 100;
    const gasUsage = kilometers * fuelPerLitter;
  
    // Kalkulira cena za gorivo vo zavisnost od kilometri i potroshuvacka
    const gasCost = gasUsage * costPerLiter;
    return gasCost;
  };
  
  // Export the function to make it accessible from other modules
  module.exports = calculateGasCost;