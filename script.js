class First {
    constructor(arg) {
        this.field = arg;
    }
    logout() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    constructor(name){
        super(name);
        this.name = name;
    }
    logout(){
        super.logout();
        console.log("А я наследуемый метод!");
    }


}

const dev = new Second();
dev.logout();