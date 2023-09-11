import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const personBob = {
//   name:'Bob',
//   age: 20
// }
// function changeperson(person){
//   const personCopy = person
//   personCopy.name = 'Bill'
//   return personCopy
// }
// const personBill = changeperson(personBob)

// function changepersonback(person){
//   const personCopy = {...person}
//   personCopy.name = 'Bob'
//   return personCopy
// }
// console.log(personBob)
// console.log(personBill)

// changepersonback(personBill)
// console.log(personBill)
// console.log(personBob)

// const ar1 = [1,2,3,4,5,6,7,7,7,7,8,8,8,9]

// console.log(new Set(ar1))
// const set = new Set()
// const personBob = {
//   name:'Bob',
//   age: 20
// }
// console.log(set.add(personBob))
// console.log(set.size)

// const map = new Map()
// const personBob = {
//   name:'Bob',
//   age: 20
// }
// const pet1 = 'dog'
// console.log(map.set(personBob,pet1))

// function run(){
//   var car = 'honda'
//   if(true){
// var car = 'bmw'
//   }
//   console.log(car)
// }
// run()
// console.log(car)
// const person = 'Bob'
// function run(){
//   const person = 'bill'
//   showperson()
// }
// function showperson(){
//   console.log(person)
// }
// console.log(run())

// const car = 'Tesla'
// const personbobcreator =  ()=>{
//   const name = 'bob'
//   const run = ()=>{
//     const speed = 5
//     console.log(`${name} runs at speed ${speed}`)

//   }
//   const drive = ()=>{
//     const carspeed = 60
//     console.log(`${name} runs at speed ${carspeed}`)
//   }
// }
// const animalMaster = "bill"
// const gqwg = ()=>{
//   const animalCOW = 'cow'
//   const animalCat = 'cat'

//   run()
//   function run(){
//     const animalhorse = 'horse'
//     const animaldog = 'dog'
//     function show(){
//       const animalgoat = 'goat'
//       const animaldeer = 'deer'

//       console.log(animalgoat)
//       console.log(animaldeer)
//       console.log(animalhorse)
//       console.log(animaldog)
//       console.log(animalCOW)
//       console.log(animalCat)
//     }
// show()
//   }
// }
// console.log(gqwg())

// function AnimalCreator(name,type,age){
// this.name = name
// this.type = type
// this.age = age
// }
// const horse =  new AnimalCreator('qwtqwet','rqwrq',20)

// console.log(horse)

// function show(...args){
//   console.log(this)
//   console.log(args)
// }
// const newfunc = show.bind({name:'bob'}, 2,3,4,5)
// console.log(newfunc())

// function qwef(a,b){
//   return a*b
// }

// console.log(qwef(2,5))

// const qwef5 = qwef.bind(this, 5)
// console.log(qwef5(5))

// console.log([].map.call('fqwefqwef', letter =>letter))

// const loggerdecorator = (fn)=>{
//   return (...args)=>{
//     console.log('worked')
//     return fn(...args)
//   }
// }
// const savtols = (key,data)=> localStorage.setItem(key, data)
// const savedwithlogs = loggerdecorator(savtols)
// const bob = {name:'bob', age:40}
// console.log(savedwithlogs('person', JSON.stringify(bob)))
// console.log(localStorage.getItem('person'))

// const mutlyply = (num1, num2) => {
//   if (num2) {
//     return num1 * num2;
//   }
//   return num3 => {
//     return num1 * num3;
//   };
// };
// const somefunc = mutlyply(2);
// // console.log(somefunc(44));

// const mutlyplywithBIND = (num1, num2) => {
//   if (num2) {
//     return num1 * num2;
//   }
//   return num3 => {
//     return mutlyplywithBIND.bind(null, num1)
//   };
// };
// console.log(mutlyplywithBIND(6,12))
// console.log(mutlyplywithBIND(6)(12))

// SORTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
// const sortobj = [
//   { name: 'name1', speed: 11 },
//   { name: 'name2', speed: 12 },
//   { name: 'name3', speed: 13 },
//   { name: 'name4', speed: 14 },
//   { name: 'name5', speed: 15 },
// ];
// console.log(sortobj.sort((obg1,obg2)=>{
//   if(obg1.speed>obg2.speed) {
//     return 1
//   }
//   if(obg1.speed<obg2.speed) {
//     return -1
//   }
//   return 0
// }))

