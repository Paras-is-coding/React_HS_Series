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