// how render creates element and populates to react Virtual DOM
// Using normal JS dom manipulation functions
function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

// how element is represented as tree
const reactElement = {
    type :"a",
    props : {
        href : "https://www.youtube.com",
        target : "_blank"
    },
    children : "Visit to Youtube!"
}

const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer);
