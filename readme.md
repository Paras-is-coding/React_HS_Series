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