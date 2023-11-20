'use strict'

const flights = ['Russia', 'London', 'USA', 'London', 'USA', 1, false, 'london']
//структура set необходима для работы с уникальными значениями без ключей 
const setFlights = new Set(flights)
// set структура уникализированных элементов 
console.log(setFlights) //Set(6) { 'Russia', 'London', 'USA', 1, false, 'london' }
console.log(setFlights.size) // 6
console.log(setFlights.has('Russia')) //true
setFlights.add('Paris') // Set(7) { 'Russia', 'London', 'USA', 1, false, 'london', 'Paris' }
setFlights.delete('London') //Set(6) { 'Russia', 'USA', 1, false, 'london', 'Paris' }
//setFlights.clear() // Set(0) {}


for (const flights of setFlights) {
    console.log(flights) // итерации по set
}
console.log([...setFlights]); //set в массив

const setObject = new Set([{a: 1}, {b: 2}, {b: 2}])// можно работать с set объктами но уникализации нет
console.log(setObject) //Set(3) { { a: 1 }, { b: 2 }, { b: 2 } }
console.log(new Set('abcd')); //Set(4) { 'a', 'b', 'c', 'd' }
