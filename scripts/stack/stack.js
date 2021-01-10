/*STACK*/

var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.printlist = function () {
        var collection = [];
        for (let i = this.count; i > 0; i--) {
            collection.push(this.storage[this.count - i]);
        }
        return collection;
    };

    this.size = function () {
        return this.count;
    };

    // Returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    };
};

var arraylist = new Array();
var myStack = new Stack();

function runPush() {
    let inputValue = document.getElementById("stacktext").value;
    let text = document.createTextNode(inputValue);
    if (myStack.size() <= 10) {
        myStack.push(inputValue);
    }

    console.log(inputValue + " " + myStack.size());

    document.querySelector(`[stack_cell_value='${myStack.size() - 1}']`).innerHTML = "";

    document
        .querySelector(`[stack_cell_value='${myStack.size() - 1}']`)
        .appendChild(text);

    document.querySelector(
        `[stack_cell_id='${myStack.size() - 1}']`
    ).style.backgroundColor = "#03A6A6";

    if (myStack.size() - 2 !== -1) {
        document.querySelector(
            `[stack_cell_id='${myStack.size() - 2}']`
        ).style.backgroundColor = "cyan";
    }

    if (myStack.size() >= 10) {
        disablePush()
        alert("Stack Is Full");
    }
}

function disablePush() {
    if (myStack.size() >= 10) {

        document.getElementById("push").disabled = true;
        return false;
    } else {
        document.getElementById("push").disabled = false;
        return true;
    }
}

function runPop() {
    arraylist = myStack.printlist();
    console.log(arraylist)

    myStack.pop();

    for (let i = 0; i < 10; i++) {
        document.querySelector(`[stack_cell_value='${i}']`).innerHTML = "";
        document.querySelector(`[stack_cell_id='${i}']`).style.backgroundColor = "";
    }
    arraylist = myStack.printlist();
    console.log(arraylist)
    for (let i = 0; i < arraylist.length; i++) {
        document.querySelector(`[stack_cell_value='${i}']`).innerHTML = arraylist[i];
        document.querySelector(
            `[stack_cell_id='${i}']`
        ).style.backgroundColor = "cyan";
    }
    document.querySelector(
        `[stack_cell_id='${myStack.size()}']`
    ).style.backgroundColor = "#D8043C";
    disablePush();
}

function runClearStack() {
    if (myStack.size() >= 10)
        document.querySelector(`[stack_cell_id='${myStack.size() - 1}']`).style.backgroundColor = "";
    else
        document.querySelector(`[stack_cell_id='${myStack.size()}']`).style.backgroundColor = "";

    console.log("size before while:" + myStack.size());
    while (myStack.size() >= 0) {
        console.log("size after while before pop:" + myStack.size());
        document.querySelector(`[stack_cell_value='${myStack.size() - 1}']`).innerHTML =
            "";
        document.querySelector(
            `[stack_cell_id='${myStack.size() - 1}']`
        ).style.backgroundColor = "";

        myStack.pop();
        console.log("size after while after pop:" + myStack.size());
        if (myStack.size() === 0) {
            disablePush();
            break;
        }
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
    // console.log("This is the stack " + myStack.printlist());
});

document.getElementById("clearstack").addEventListener("click", () => {
    console.log("Clear Button Clicked");
    runClearStack();
});


