
function DomElement(selector, height, width, bg, fontSize) {
        
    this.selector = selector;

    this.height = height;
    this.width = width;
    this.background = bg;
    this.fontSize = fontSize;    
        
    this.createEl = () => {
        let elType;
        let element;

        let indicator = selector.slice(0, 1);
        let elName = selector.substring(1);

        if(indicator == "."){
            elType = "div";
            this.class = elName;
        }
        else if(indicator == "#"){
            elType = "p";
            element = document.createElement(elType);
            this.id = elName;
        }
        else{
            console.log("Choose valid selector");
            return null;
        }

        element = document.createElement(elType);

        element.style.height = this.height;
        element.style.width = this.width;
        element.style.background = this.background;
        element.style.fontSize = this.fontSize;

        if(this.id != undefined){
            element.id = this.id;
        }
        if(this.class != undefined){
            element.className = this.class;
        }
        element.textContent = "New Element " + elType;
            
        return element;
    };
}

const newElement = new DomElement(".block", "200px", "400px", "blue", "21px");
const loadElem = newElement.createEl();
document.body.append(loadElem);

const newParagraph = new DomElement("#best", "100px", "200px", "green", "21px");
const loadPar = newParagraph.createEl();
document.body.append(loadPar);

const Kvadrat = new DomElement(".kvadrat", "200px", "200px", "aqua", "24px");
const squareLoad = Kvadrat.createEl();

squareLoad.style.position = "absolute";
squareLoad.style.top = "400px";
squareLoad.style.left = "400px";
squareLoad.textContent = "Moving square";

squareLoad.moveFunc = event => {
    let key = event.key;
    let top;
    let left;

    switch(key){
        case "ArrowUp":{
            top = parseInt(squareLoad.style.top) - 10;
            squareLoad.style.top = top + "px";
        }
        break;
        case "ArrowRight":{
            left = parseInt(squareLoad.style.left) + 10;
            squareLoad.style.left = left +"px";
        }
        break;
        case "ArrowDown":{
            top = parseInt(squareLoad.style.top) + 10;
            squareLoad.style.top = top +"px";
        }
        break;
        case "ArrowLeft":{
            left = parseInt(squareLoad.style.left) - 10;
            squareLoad.style.left = left +"px";
        }
        break;
    }
};

document.addEventListener("keydown", squareLoad.moveFunc);

document.addEventListener("DOMContentLoaded", () => document.body.append(squareLoad));