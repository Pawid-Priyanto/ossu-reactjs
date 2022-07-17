import React, {useState} from 'react';
import Hello from './hello';
import Footer from './footer'

// const App = () => {
//   console.log('halo dari komponen')

//   const name = 'Jhon';
//   const age = 20;
//   const course = 'Half Stack application deveelopment';
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )

  // const now = new Date();
  // const a = 10;
  // const b = 20;
  // return (
  //     <div>
  //         <p>Hello World, is is {now.toString()}</p>
  //         <p>{a} plus {b} is {a +b}</p>
  //     </div>
  //     )

  // jsx
  // return React.createElement(
  //   'div', null,
  //    React.createElement(
  //      'p', null, 'Haloo world it is ', now.toISOString()),
  //    React.createElement('p', null, a, ' plus ', b, ' is ', a+b),

  // )

  // return(
  //   <div>
  //     <h1>Greetings</h1>
  //     <Hello name="rudi"age={2 + age}/>
  //     <Hello name="salim"age={27}/>
  //     <Hello name={name}age={age}/>
  //     <Hello name="william"age={age + 21}/>
  //     <Footer/> 
  //   </div>
  // )
// }
const App = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const handleClickPlus = () => {
    setCounter(counter + 1)
  }

  const handleClickMinus = () => {
    setCounter(counter -1)
  }

  const reset = () => {
    setCounter(0)
  }

  // console.log('rendering...', counter)

  return (
    <>
    <Display counter={counter}/>
   <Button onClick={handleClickMinus} text="minus"/>
   <Button onClick={reset} text="reset"/>
   <Button onClick={handleClickPlus} text="plus"/>
    </>
  )
}

// display component
const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

// button components
const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

export default App;
