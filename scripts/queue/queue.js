


function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
        return collection;
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var myQueue = new Queue(); 


function runEnqueue(){
    let inputValue = document.getElementById("queuetext").value;
    let text = document.createTextNode(inputValue);
    document.querySelector(`[queue_cell_value='${myQueue.size()}']`).innerHTML = "";
    document.querySelector(`[queue_cell_value='${myQueue.size()}']`).appendChild(text);
    // document.querySelector(`[queue_cell_id='${myQueue.size()}']`).style.backgroundColor = "red";
    if (myQueue.size() !== 0) {
        document.querySelector(`[queue_cell_id='${myQueue.size()-1}']`).style.backgroundColor = "white";
    }

    if (disableQueue()) {
        myQueue.enqueue(inputValue);
        console.log(inputValue + " " + myQueue.size());
    }
    
    
}

function disableQueue() {
    if (myQueue.size()>=9) {
        document.getElementById("enqueue").disabled = true;
        alert("Queue Is Full");
        return false;
    } else {
        document.getElementById("enqueue").disabled = false;
        return true;
    }

}


function runDequeue(){
    // document.querySelector(`[queue_cell_value='${0}']`).innerHTML = "";
    document.querySelector(`[queue_cell_id='${0}']`).style.backgroundColor = "blue";
    //document.querySelector(`[queue_cell_value='${myQueue.size()}']`).innerHTML = "";
    // shiftTable();
    // if(myQueue.size()===9){
    //     document.querySelector(`[queue_cell_value='${9}']`).innerHTML = "";
    // }
    // shiftTable();
   
     console.log("size before dq here: " +myQueue.size() +" print : "+ myQueue.print())
    myQueue.dequeue();
     console.log("size after dq here: " +myQueue.size()+" print : "+ myQueue.print())
    
    disableQueue();

}

function shiftTable(){
    // console.log("size here: " +myQueue.size())
    for(let i=0; i<=myQueue.size();i++){
        document.querySelector(`[queue_cell_value='${i}']`).innerHTML = "";
    }
    for(let i=0; i<myQueue.size();i++){
        let text = document.createTextNode(myQueue.print()[i]);
        document.querySelector(`[queue_cell_value='${i}']`).appendChild(text);
    }
    
}


function runClearQueue(){

    console.log("size before while:" + myQueue.size())
    while (myQueue.size() >= 0) {
        console.log("size after while before dequeue:" + myQueue.size())
        document.querySelector(`[queue_cell_value='${myQueue.size()}']`).innerHTML = "";
        if (myQueue.size() === 0) {
            break;
        }
        myQueue.dequeue();
        console.log("size after while after dequeue:" + myQueue.size())

    }
    disableQueue();

}

document.getElementById("enqueue").addEventListener("click", ()=>{
    console.log("Enqueue Button Clicked");
  runEnqueue();
});

document.getElementById("dequeue").addEventListener("click", ()=>{
    console.log("Dequeue Button Clicked");
    runDequeue();
});

document.getElementById("clearqueue").addEventListener("click", ()=>{
    console.log("Clear Button Clicked");
     runClearQueue();
});























// myQueue.enqueue('katerina');
// myQueue.enqueue('kate');
// myQueue.enqueue('kat');
// console.log(myQueue.print());
// myQueue.dequeue();
// console.log(myQueue.print());
//console.log(myQueue.front());
//console.log(myQueue.size());
//console.log(myQueue.isEmpty());


/*function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}
*/
//var pq = new PriorityQueue(); 
//pq.enqueue(['Beau Carnes', 2]); 
//pq.enqueue(['Quincy Larson', 3]);
//pq.enqueue(['Ewa Mitulska-Wójcik', 1])
//pq.enqueue(['Briana Swift', 2])
//pq.printCollection();
//pq.dequeue();
//console.log(pq.dequeue());
//console.log(pq.front());
//onsole.log(pq.size());