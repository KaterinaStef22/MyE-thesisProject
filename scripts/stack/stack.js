var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();


function runPush() {

    let inputValue = document.getElementById("stacktext").value;
    let text = document.createTextNode(inputValue);
    console.log(inputValue + " " + myStack.size());
    document.querySelector(`[stack_cell_value='${myStack.size()}']`).innerHTML = "";
    document.querySelector(`[stack_cell_value='${myStack.size()}']`).appendChild(text);
    document.querySelector(`[stack_cell_id='${myStack.size()}']`).style.backgroundColor= ""; //cyan
    if (myStack.size() !== 0) {
        document.querySelector(`[stack_cell_id='${myStack.size()-1}']`).style.backgroundColor = "lightgreen";

    }

    if (disablePush()) {
        myStack.push(inputValue);
    }

}

function disablePush() {
    if (myStack.size() >= 9) {
        document.getElementById("push").disabled = true;
        alert("Stack Is Full");
        return false;
    } else {
        document.getElementById("push").disabled = false;
        return true;
    }

}

function runPop() {
    document.querySelector(`[stack_cell_value='${myStack.size()}']`).innerHTML = "";
    document.querySelector(`[stack_cell_id='${myStack.size()}']`).style.backgroundColor= "";
    myStack.pop();
    disablePush();
}

function runClearStack() {

    console.log("size before while:" + myStack.size())
    while (myStack.size() >= 0) {
        console.log("size after while before pop:" + myStack.size())
        document.querySelector(`[stack_cell_value='${myStack.size()}']`).innerHTML = "";
        if (myStack.size() === 0) {
            break;
        }
        myStack.pop();
        console.log("size after while after pop:" + myStack.size())

    }
    disablePush();
}



document.getElementById("push").addEventListener("click", () => {
    console.log("Push Button Clicked");
    runPush();
});


document.getElementById("pop").addEventListener("click", () => {
    console.log("Pop Button Clicked");
    runPop();

});


document.getElementById("clearstack").addEventListener("click", () => {
    console.log("Clear Button Clicked");
    runClearStack();

});

//https://www.youtube.com/watch?v=Gj5qBheGOEo