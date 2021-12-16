
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

const h1 = document.querySelector("h1");

const newElement = new DomElement(".block", "200px", "400px", "blue", "21px");
h1.after(newElement.createEl());

const newParagraph = new DomElement("#best", "100px", "200px", "green", "21px");
h1.after(newParagraph.createEl());
