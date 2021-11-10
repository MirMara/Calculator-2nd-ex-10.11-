/*2. Stessa cosa dell'esercizio 1., ma questa volta risolvete il tutto utilizzando esclusivamente i metodi map filter e `reduce, scegliete voi quello che reputate più adatto in base al caso.*/


// TRY / CATCH / FINALLY syntax


function calculator(numbers) {
    try {
        if (numbers.length === 1 ) throw "errore: Hai passato un solo valore";
        if (numbers.length=== 0 ) throw "errore: Nessun parametro passato alla funzione";
       


const sum = () => numbers.reduce ((acc, num) => acc + num);
const sub = () => numbers.reduce ((acc, num) => acc - num);
const mult = () => numbers.reduce ((acc, num) => acc * num);
const div = () => numbers.reduce ((acc, num) => acc / num);
const pow = () => numbers.map (num => num * num);
const sqrt = () => numbers.map (num => Math.sqrt(num));
    
return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(), 
    pow: pow(),
    sqrt: sqrt()
    }

} catch (err) {
    console.log(err);
   } finally {
    console.log("Well done!");
   }
  }

  