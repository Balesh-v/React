
function customRender(reactElement, container) {
 const domElement = document.createElement(reactElement.type)

 for (const prop in reactElement.props) {
  domElement[prop] = reactElement.props[prop]
 }

 domElement.innerHTML = reactElement.Children
 container.appendChild(domElement)
}

const reactElement = { 
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click me"

}

let root = document.querySelector("#root")

customRender(reactElement, root)


