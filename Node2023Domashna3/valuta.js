// funkcija EUR to MKD
function eurToMkd(euros) {
    return euros * 61.7;
  };

// funkcija MKD to EUR
function mkdToEur(denars) {
    return denars / 61.7;
  };  
  
// Convert EUR to DOL
function eurToDol(euros) {
    return euros * 1.10;
  };
  
// Convert DOL to EUR
function dolToEur(dollars) {
    return dollars / 1.10;
  };
  
// Convert DOL to MKD
function dolToMkd(dollars) {
    return dollars * 55.90;
  };
  
// Convert MKD to DOL
function mkdToDol(denars) {
    return denars / 55.90;
  };
  
  // Export the functions to make them accessible from other modules
  module.exports = {
    eurToMkd,
    mkdToEur,
    eurToDol,
    dolToEur,
    dolToMkd,
    mkdToDol,
  };