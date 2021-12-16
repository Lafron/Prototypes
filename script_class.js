class DomElement {
    constructor(selector) {
        this.selector = selector;

        const height = "100px";
        const width = "100px";
        const bg = "blue";
        const fontSize = "21px";

        
        this.createEl = () => {
            let elType;
            let element;
            let indicator = selector.slice(0, 1);
            let elName = selector.substring(1);

            console.log("elName ",elName);
            if(indicator == "."){
                elType = "div";
            }
            else if(indicator == "#"){
                elType = "p";
                element = document.createElement(elType);
            }
            else{
                console.log("Choose valid selector");
            }

            element = document.createElement(elType);

            element.style.height = height;
            element.style.width = width;
            element.style.background = bg;
            element.style.fontSize = fontSize;

            element.textContent = "New Element " + elType;
            
            return element;
        };
    }
}

const newElement = new DomElement(".block");
console.log(newElement);
console.log(newElement.createEl());

document.querySelector("h1").after(newElement.createEl());

const newParagraph = new DomElement("#best");
console.log(newParagraph);
console.log(newParagraph.createEl());
// newParagraph.style.height = "21px";
// newParagraph.style.width = "400px";
//newParagraph.style.background = "green";

document.querySelector("h1").after(newParagraph);
