const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(teachers => teachers.length >= 5);
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const indexEd = teachers.indexOf('Ed');
teachers.splice(indexEd, 1);
console.log(teachers);

//per rimuovere 'Ed' dall'array possiamo anche procedere con:
// teachers.splice(1,1); inserendo direttamente il numero dell'index di 'Ed'