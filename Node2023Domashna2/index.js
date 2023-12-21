//? DOMASNA ZADACHA
const studenti = [
  { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
  { ime: 'Vesnai', prosek: 9.7, grad: 'Skopje' },
  { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
  { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
  { ime: 'Muhamedi', prosek: 10, grad: 'Kumanovo' },
  { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
  { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
  { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
  { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
  { ime: 'Simonai', prosek: 5.2, grad: 'Bitola' },
  { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
  { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
  { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
  { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
];
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)

function filterAndSortStudents(students) {
    // Filtrira studenti po uslovi
    const filteredStudents = students.filter(student => {
      return student.ime.endsWith('i') && student.prosek > 7;
    });
  
    // Sortira i podreduva studenti po rastecki prosek
    filteredStudents.sort((a, b) => a.prosek - b.prosek);
  
    return filteredStudents;
  };
  
  // test
  const result = filterAndSortStudents(studenti);
  console.log(result);


//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki

function filterAndSortHigh(students) {
    // Filtrira studenti po uslovi
    const filteredStudents1 = students.filter(student => {
      return student.prosek > 9 && student.grad !== 'Skopje';
    });
  
    // Sortira i podreduva studenti po opasgjacki prosek
    filteredStudents1.sort((a, b) => b.prosek - a.prosek);
  
    return filteredStudents1;
  };
  
  // test 
  const highAchievers = filterAndSortHigh(studenti);
  console.log(highAchievers);

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek

function studentsCharacterCount(students, characterCount, numberOfStudents) {
    // filtrira studenti po uslov
    const filteredStudents2 = students.filter(student => {
      return student.ime.length === characterCount;
    });
  
    // sortira studenti po rastecki prosek
    filteredStudents2.sort((a, b) => a.prosek - b.prosek);
  
    // vrakja samo odreden broj studenti
    const result = filteredStudents2.slice(0, numberOfStudents);
  
    return result;
  };
  
  // test
  const studentsCaracters3 = studentsCharacterCount(studenti, 5, 3);
  console.log(studentsCaracters3);

//? 4. Vkupen prosek na studenti koi se od Kumanovo

function averageProsekKumanovo(students) {
    // filtrira studenti po uslov
    const kumanovoStudents = students.filter(student => student.grad === 'Kumanovo');
  
    // rachuna zaednicki prosek
    const totalProsek = kumanovoStudents.reduce((sum, student) => sum + student.prosek, 0);
    const averageProsek = totalProsek / kumanovoStudents.length;
  
    return averageProsek;
  };
  
  // test
  const averageProsekinKumanovo = averageProsekKumanovo(studenti);
  console.log('Zaednicki prosek na studentite od Kumanovo e', (averageProsekinKumanovo));

//? 5. Prosek na prosecite od gradovite Skopje i Ohrid

function averageProsekSkopjeOhrid(students) {
    // filter po uslov
    const skopjeOhridStudents = students.filter(student => {
      return student.grad === 'Skopje' || student.grad === 'Ohrid';
    });
  
    // rachuna zaednicki prosek
    const totalProsek = skopjeOhridStudents.reduce((sum, student) => sum + student.prosek, 0);
    const averageProsek = totalProsek / skopjeOhridStudents.length;
  
    return averageProsek;
  };
  
  // test
  const ProsekSkopjeOhrid = averageProsekSkopjeOhrid(studenti);
  console.log('Zaednicki prosek na studentite od Skopje i Ohrid e', ProsekSkopjeOhrid);

//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica

function addNewStudent() {
    const newStudent = { ime: 'Goran', prosek: 8.3, grad: 'Strumica' };
    studenti.push(newStudent);
  };
  
  addNewStudent();
  
  // test
  console.log(studenti);

//? 7. Da se izbrishe prviot student vo studenti

function removeFirstStudent() {
    studenti.shift();
  };
  
  removeFirstStudent();
  
  // test
  console.log(studenti);
  
//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)