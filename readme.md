# Intro 
- react + react-dom -> to work on web
- react + react-native -> to work with mobile apps

## Setup a react project
-  npx create-react-app app-name    / npm create vite@latest
    - npm run start  -> runs project in developmet environment
    - npm run build  -> build project for production

- In project : 
    - public/ -> index.html(entry point to project) and files/images publically available
    - src/ -> folder where we'll work index.js creates a root of Reactdom and renders App.js
                App.js is base of our whole application
    - package.json -> consists dependencies, start scripts and more
    - package-lock.json -> consits dep. of depend and their version
    
- In react app using vite :
    - npm i -> to create node_modules
    - public/ -> public files/images
    - src/ -> App.jsx and main.jsx similar to create-react-app ones
    - npm run dev -> run project in dev environment

# Flow 
- index.html -> This is page which will load Single Page Application(SPA)
- index.js -> entry point of react
    - ReactDom -> react makes it's virtual dom and compares with main dom and populates changes onlyS
    - create ReactDom at 'root' element at index.html
    - render <App/> at that DOM 
- App.js -> Is react component where we can write jsx
- We always have to load JS inside html to make it work 
    question? how index.js is being loaded to index.html 
        -> 'react-scripts' package does that behind the scene usig create-react-app 
        -> vite directly adds script tag
- We create components/ and render them to App.jsx directly or indirectly
    - component name start with capital eg Header.js / Header.jsx (in vite)
    - then we export(default / named) and import(where we use)


## Creating basic Custom react app
- index.html with <div id="root"> , add main.js file here 

- main.js > select div and render react component in that div

- how react renders component?
    - React makes tree kind of structure if every reactElement to evaluate it
    - And use a function to create domElement of reactElement and render it
    - EG : here I've created structure of a <a>(link) element

- However a bundler for e/g vite, transpiles jsx to the format that react
    understands as above mentioned 
    - eg: <App /> is App() function call and the jsx it returns is transpiled to object/tree which is then passed to render() function
    - So we can simply pass reactElement obj to render?
        -  Yes but the key:, render expects may be diff. Though you can use React.createElement('ele',{attributes},'children',evExpressions) to create ele. and pass to render

- Inside jsx using {variable} we can populate evaluated expressions of JS

- This is basics of react, there's a lot optimization done by bundlers


## Why you need hooks and project
- counter > ADD button inc. val of counter var, but not populated in UI
- React controls UI updation, we use hooks for that / import {hookName} from 'react'
- useState > responsible to propogate change in state into UI
    - const [variable, setVariable] = useState()
- now change in state of variable will be reflected everywhere it's used in UI


## Virtual DOM, Fibre and reonciliation

- ReactDOM.createRoot() method creates virtualDOM, When data in a React application changes, a new
 Virtual DOM tree is created and compared to the previous one. The differences are identified,
  and only those changes are applied to the real DOM.

- BUT for in Network calls, state change frequently so algo is optimized to wait for few time/skip some steps/...    instead of rendering frequent changes 

- React is not using virtual DOM(React core algo to update UI) these days instead optimized one is Used. 

- Reconciliation > Is recursive algo that React uses to diff two trees and reconsider which part to be changed. Reconciliation is the process by which React updates the actual DOM to reflect
 changes made to the Virtual DOM. 

- React Fiber > improved reconciliation algo. of React to update UI. Makes able to 
    - pause work and come back to it later
    - assign priority
    - reuse previously completed work
    - abort work if it's no longer needed

- IMPT: Diffing of lists is performed using keys. Keys should be "stable,predictable and unique" 
    - So to make fiber algo effective we use keys while populating array ele. into lists and etc



## Props in reactjs and Tailwind
- Props _ properties in object passed to components as argument 
    - Eg. <Card heading="" body=""/>   here heading and body are property added to props
        - <Card details={car1Details1}/> we can add objects and arrays to that object as well 
    - In Card component we get props obj like this _ Card(props) _ & access like this(props.heading)
        - we can get individual properties as well _ Card({heading,body})
- tailwind css setup is easy look at react site for setup 

# A react interview question on counter 
- suppose:
 addValue(){
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
}
 - here counter will be increased by one 1 as we are updating same 'counter' variable

- Do this:
 addValue(){
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
}
- now 'counter' will be increase by 3 as in callback
    inside setCounter, prevCounter holds last updated state of 'counter'


## bgChanger
- Adding background changer to 03talwind-props project
- created buttons and added onClick where we are changing color variable through a callback 
- Why callback and not directly onClick={setColor("")}? 
    - onClick expects function but we can't pass parameters(if we did soo function will be directly executed and onClick will get its return value )
    - But we don't want return value instead function 

## useEffect, useRef and useCallback with project 
 - project is password generator 
        - state variables _ length,numberAllowed,charAllowed,password
        - method to generate password _ passwordGenerator 

    # put passwordGenerator method and it's dependencies in cache memory / useCallback
    - useCallback is used for memoizing functions to optimize performance. It returns a 
        memoized version of the function that only changes when its dependencies change.
        - const passwordGenerator = useCallback(()=>{},[dependencies])
        - any change in dependencies will optimize method to re_run it

    # call passwordGenerator using useEffect on any change in dependencies
    - ONE way create button and add onClick in it
    - another use useEffect hook to call it initially when page loads then whenever dependencies change

    - useEffect is used for managing side effects in your components.
        Side effects can include data fetching, DOM manipulation, or subscribing to external data sources.
        - useEffect(()=>{passwordGenerator()},[dependencies]) 
        - any change in dependencies will re_run the method
        

    - Now make UI and change state variables using onChange in input fields

    - useEffect is primarily used for managing side effects, while useCallback is used to optimize the performance of functions by memoizing them. 

    # useRef
    - If we want to keep reference of any element and manipulate we use this hook
    - Here to copy password: 
        - const passwordRef = useRef(null) _ make reference variable
        - <input ref={passwordRef}>        _ take reference of that input field in variable
        - <button onClick={copyPasswordToClipboard}> _ use this function now
            - we could directly copy value of 'password'
            - using useRef we could add effects and other manipulations while copying



## Custom hooks in react | currrency project
