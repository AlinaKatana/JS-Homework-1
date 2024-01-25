//* Povikuvanje na express frejmvorkot
const express = require('express');

//* Inicijalizacija na express aplikacijata
const app = express();

//middelware za post objekti
app.use(express.urlencoded({ extended: true }));



//? Da se kreira get ruta koja kje presmetuva bmi

app.get('/bmi/:height/:weight', (req, res) => {
    // prezema dinamicni parametri od rutata
    const height = Number(req.params.height);
    const weight = Number(req.params.weight);
  
    // Check if height and weight are provided and are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      return res.send('Invalid height or weight values');
    };
  
    // Kalkuliranje BMI
    const height2 = height * height;
    const bmi = weight / height2;
  
    // Respond with the calculated BMI
    res.send(`Your BMI is: ${bmi}`);
});



//? da se kreira post ruta koja kje presmetuva bmi  

app.post('/bmi', (req, res) => {
    // prezema dinamicni parametri od rutata
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
  
    // Check if height and weight are provided and are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      return res.send('Invalid height or weight values');
    };
  
    // Kalkuliranje BMI
    const height2 = height * height;
    const bmi = weight / height2;
  
    // Respond with the calculated BMI
    res.send(`Your BMI is: ${bmi}`);
});



//? Da se kreira konverter na pari koj kje konvertira eurotodolar, dolartoeuro, mkdtoeuro,eurotomkd so get metod

app.get('/converter/:currency/:value', (req, res) => {
    // prezema dinamicni parametri od rutata
    const currency = req.params.currency;
    const value = Number(req.params.value);
  
    // converter function
    switch (currency) {
        case 'eurotodolar':
          result = value * 1.10;
          res.send(`Converted amount: ${result} Dollars`);
          break;
        case 'dolartoeuro':
          result = value / 1.10; 
          res.send(`Converted amount: ${result} Euros`);
          break;
        case 'mkdtoeuro':
          result = value / 61.7; 
          res.send(`Converted amount: ${result} Euros`);
          break; 
        case 'eurotomkd':
          result = value * 61.7; 
          res.send(`Converted amount: ${result} MKD`);
          break;         
        default:
          res.send('Invalid currency specified');
      }
});


    //? Da se kreira konverter na pari koj kje konvertira eurotodolar, dolartoeuro, mkdtoeuro,eurotomkd so post metod

app.post('/converter', (req, res) => {
    // prezema dinamicni parametri od rutata
    const currency = req.body.currency;
    const value = Number(req.body.value);
  
    // converter function
    switch (currency) {
        case 'eurotodolar':
          result = value * 1.10;
          res.send(`Converted amount: ${result} Dollars`);
          break;
        case 'dolartoeuro':
          result = value / 1.10; 
          res.send(`Converted amount: ${result} Euros`);
          break;
        case 'mkdtoeuro':
          result = value / 61.7; 
          res.send(`Converted amount: ${result} Euros`);
          break; 
        case 'eurotomkd':
          result = value * 61.7; 
          res.send(`Converted amount: ${result} MKD`);
          break;         
        default:
          res.send('Invalid currency specified');
      }
});


//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so get

app.get('/horoskop/:day/:month', (req, res) => {
    // prezema dinamicni parametri od rutata
    const day = Number(req.params.day);
    const month = Number(req.params.month);
  
    // horoskope function
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Aries';
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Taurus';
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gemini';
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Cancer';
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leo';
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgo';
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra';
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Scorpio';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagittarius';
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricorn';
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquarius';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        sign = 'Pisces';
      }
    
      res.send(`Your zodiac sign is ${sign}`);
    });



//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so post metoda

app.post('/horoskop', (req, res) => {
    // prezema dinamicni parametri od rutata
    const day = Number(req.body.day);
    const month = Number(req.body.month);
  
    // horoskope function
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Aries';
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Taurus';
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gemini';
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Cancer';
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leo';
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgo';
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra';
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Scorpio';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagittarius';
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricorn';
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquarius';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        sign = 'Pisces';
      }
    
      res.send(`Your zodiac sign is ${sign}`);
    });



// aplikacijata ja slushame na 10000 porta  http://localhost:10000/
app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});