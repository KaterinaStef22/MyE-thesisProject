function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
        return collection;
    };
    this.enqueue = function (element) {
        collection.push(element);
    };
    this.dequeue = function () {
        return collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

/*var myQueue = new Queue();


function runEnqueue() {
    let inputValue = document.getElementById("queuetext").value;
    let text = document.createTextNode(inputValue);
    if (disableEnqueue()) {
        document.querySelector(`[queue_cell_value='${myQueue.size()}']`).innerHTML = "";
        document.querySelector(`[queue_cell_value='${myQueue.size()}']`).appendChild(text);
        myQueue.enqueue(inputValue);
        console.log(inputValue + " " + myQueue.size());

    }
    
    if (myQueue.size() !== 0) {
        document.querySelector(`[queue_cell_id='${myQueue.size()-1}']`).style.backgroundColor = "white";
    }




}

function disableEnqueue() {
    if (myQueue.size() >= 10) {
        document.getElementById("enqueue").disabled = true;
        alert("Queue Is Full");
        return false;
    } else {
        document.getElementById("enqueue").disabled = false;
        return true;
    }

}


function runDequeue() {

  
   
    console.log("size before dq here: " + myQueue.size() + " print : " + myQueue.print())
    myQueue.dequeue();
    console.log("size after dq here: " + myQueue.size() + " print : " + myQueue.print())
    shiftTable();
    disableEnqueue();
}

function shiftTable() {


    for (let i = 0; i <= myQueue.size(); i++) {
        document.querySelector(`[queue_cell_value='${i}']`).innerHTML = "";
    }

    for (let i = 0; i < myQueue.size(); i++) {
        let text = document.createTextNode(myQueue.print()[i]);
        document.querySelector(`[queue_cell_value='${i}']`).appendChild(text);
    }

}


function runClearQueue() {

    console.log("size before while:" + myQueue.size())
    while (myQueue.size() >= 0) {
        console.log("size after while before dequeue:" + myQueue.size())
      
        if(myQueue.size()<1){
            document.querySelector(`[queue_cell_value='${0}']`).innerHTML = "";
        }else{
            document.querySelector(`[queue_cell_value='${myQueue.size()-1}']`).innerHTML = "";
        }
        
        if (myQueue.size() === 0) {
            break;
        }
        myQueue.dequeue();
        console.log("size after while after dequeue:" + myQueue.size())

    }
    disableEnqueue();

}

document.getElementById("enqueue").addEventListener("click", () => {
    console.log("Enqueue Button Clicked");
    runEnqueue();
});

document.getElementById("dequeue").addEventListener("click", () => {
    console.log("Dequeue Button Clicked");
    runDequeue();
});

document.getElementById("clearqueue").addEventListener("click", () => {
    console.log("Clear Button Clicked");
    runClearQueue();
});
*/

var myQueue = new Queue();

//---------------------------------------------------------------------------------------------------------//

function shiftQueueTable() {

    for (let i = 0; i <= myQueue.size(); i++) {
        document.querySelector(`[queue_cell_value='${i}']`).innerHTML = "";
    }

    for (let i = 0; i < myQueue.size(); i++) {
        let text = document.createTextNode(myQueue.print()[i]);
        document.querySelector(`[queue_cell_value='${i}']`).appendChild(text);
    }

}


function runEnqueue() {
    let inputValue = document.getElementById("queuetext").value;
    let text = document.createTextNode(inputValue);
    if (disableEnqueue()) {
        document.querySelector(`[queue_cell_value='${myQueue.size()}']`).innerHTML = "";
        document.querySelector(`[queue_cell_value='${myQueue.size()}']`).appendChild(text);
        myQueue.enqueue(inputValue);
        console.log(inputValue + " " + myQueue.size());
    }

    if (myQueue.size() !== 0) {
        document.querySelector(`[queue_cell_id='${myQueue.size()-1}']`).style.backgroundColor = "white";
    }
}

function disableEnqueue() {
    if (myQueue.size() >= 10) {
        document.getElementById("enqueue").disabled = true;
        alert("Queue Is Full");
        return false;
    } else {
        document.getElementById("enqueue").disabled = false;
        return true;
    }

}

function runDequeue() {
    console.log("size before dq here: " + myQueue.size() + " print : " + myQueue.print())
    myQueue.dequeue();
    console.log("size after dq here: " + myQueue.size() + " print : " + myQueue.print())
    shiftQueueTable();
    disableEnqueue();
}

function runClearQueue() {

    console.log("size before while:" + myQueue.size())
    while (myQueue.size() >= 0) {
        console.log("size after while before dequeue:" + myQueue.size())

        if (myQueue.size() < 1) {
            document.querySelector(`[queue_cell_value='${0}']`).innerHTML = "";
        } else {
            document.querySelector(`[queue_cell_value='${myQueue.size()-1}']`).innerHTML = "";
        }

        if (myQueue.size() === 0) {
            break;
        }
        myQueue.dequeue();
        console.log("size after while after dequeue:" + myQueue.size())

    }
    disableEnqueue();
}

document.getElementById("enqueue").addEventListener("click", () => {
    console.log("Enqueue Button Clicked");
    runEnqueue();
});

document.getElementById("dequeue").addEventListener("click", () => {
    console.log("Dequeue Button Clicked");
    runDequeue();
});

document.getElementById("clearqueue").addEventListener("click", () => {
    console.log("Clear Button Clicked");
    runClearQueue();
});
