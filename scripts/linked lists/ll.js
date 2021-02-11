/*LinkedList*/

function LinkedList() {
    var length = 0;
    var head = null;


    var Node = function (element) {
        this.element = element; //data
        this.next = null; //next
    }
    this.size = function () {
        return length;
    }

    this.head = function () {
        return head;
    }
    this.add = function (element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }
    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }
    this.isEmpty = function () {
        return length === 0;
    }

    this.indexOf = function (element) {                  //me indexOf H μέθοδος indexOf() επιστρέφει τη θέση στη οποία ένα συγκεκριμένο κείμενο εμφανίζεται για πρώτη φορά μέσα σε μία συμβολοσειρά. Ο υπολογισμός της θέσης ξεκινά από το μηδέν. Αν το κείμενο δε βρεθεί μέσα στη συμβολοσειρά τότε η μέθοδος επιστρέφει -1.
        var currentNode = head;                           //index pinaka periexomenwn
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function (index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length) {
            return null
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element;
    }

    this.printList = function () {
        var currentNode = head;
        var collection = [];
        while (currentNode) {
            collection.push(currentNode.element);
            currentNode = currentNode.next;
        }
        console.log(collection);
        return collection;
    }

}


var reverseList = new Array();
var myList = new LinkedList();

function reverseArray(arr) {
    return arr.map(arr => arr).sort((a, b) => a - b);
}

function shiftLinkedListTable() {

   if (myList.size() > 1) {
     console.log("List Here before reverse " + myList.printList());
     reverseList = reverseArray(myList.printList());
        console.log("List Here after reverse " + reverseList);

        for (let i = 1; i < myList.size(); i++) {
            document.querySelector(`[ll_cell_value='${i}']`).innerHTML = "";
        }

        for (let i = 1; i <= reverseList.length; i++) {
            if (!(reverseList[i] === undefined)) {
                let text = document.createTextNode(reverseList[i]);
                document.querySelector(`[ll_cell_value='${i}']`).appendChild(text);
            }
        }
   }
}

function disableAdd() {
    if (myList.size() >= 10) {
        document.getElementById("add").disabled = true;
        alert("You can add up to 10 values");
        return false;
    } else {
        document.getElementById("add").disabled = false;
        return true;
    }

}

function appendChild(text) {
    console.log("List Here before reverse " + myList.printList());
    reverseList = reverseArray(myList.printList());
    console.log("List Here after reverse " + reverseList);
    whitetable()
    for (let i = 0; i <= reverseList.length - 1; i++) {
        if (!(reverseList[i] === undefined)) {
            document.querySelector(`[ll_cell_value='${i}']`).appendChild(text);
        }
    }

    for (let i = 0; i < myList.size(); i++) {
        document.querySelector(`[ll_cell_value='${i}']`).innerHTML = "";
    }

    for (let i = 0; i <= reverseList.length; i++) {
        if (!(reverseList[i] === undefined)) {
            let text = document.createTextNode(reverseList[i]);
            document.querySelector(`[ll_cell_value='${i}']`).appendChild(text);
        }
    }
}

function runAdd() {
    whitetable()
    let inputValue = parseInt(document.getElementById("linkedlisttext").value);
    let text = document.createTextNode(inputValue);
    if (disableAdd()) {
        myList.add(inputValue);

        console.log(inputValue + " " + myList.size());
        appendChild(text)
        //shiftLinkedListTable()
       // document.querySelector(`[ll_cell_id='${}']`).style.backgroundColor = "lightgreen";
        document.querySelector(`[ll_cell_id='${myList.size() - 1}']`).classList.remove("hasNotValue");
        document.querySelector(`[ll_cell_id='${myList.size() - 1}']`).classList.add("hasValue");
       
        if (myList.size() - 1 <= 8) {
            document.getElementsByClassName("fa-arrow-right")[myList.size() - 1].classList.remove("hasNotValue");
            document.getElementsByClassName("fa-arrow-right")[myList.size() - 1].classList.add("hasValue");
            document.getElementsByClassName("null")[myList.size() - 1].classList.remove("hasNotValue");
            document.getElementsByClassName("null")[myList.size() - 1].classList.add("hasValue");
            if(myList.size() -2<=8){
                document.getElementsByClassName("null")[myList.size() - 2].classList.remove("hasValue");
                document.getElementsByClassName("null")[myList.size() - 2].classList.add("hasNotValue");
    
            }

        }
        
    }
   

}

const whitetable = function whiteTheTable() {
    for (let i = 0; i < 10; i++) {
        console.log("IN HERE")
        document.querySelector(`[ll_cell_id='${i}']`).style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }
}

const isSearchNumberInTheList = (text) => {
    for (let i = 0; i < myList.size(); i++) {
        if (myList.indexOf(text) !== -1) {
            return true
        } else {
            return false
        }
    }
}


function runRemove() {
    let inputValue = parseInt(document.getElementById("linkedlisttext").value);
    if (isSearchNumberInTheList(inputValue)) {
        whitetable()

        for (let i = 0; i < myList.size(); i++) {
            document.querySelector(`[ll_cell_value='${i}']`).innerHTML = "";
        }

        myList.remove(inputValue);
        document.querySelector(`[ll_cell_id='${myList.size()}']`).classList.remove("hasValue");
        document.querySelector(`[ll_cell_id='${myList.size()}']`).classList.add("hasNotValue");
        if (myList.size() - 1 < 8) {
            document.getElementsByClassName("fa-arrow-right")[myList.size()].classList.remove("hasValue");
            document.getElementsByClassName("fa-arrow-right")[myList.size()].classList.add("hasNotValue");
            document.getElementsByClassName("null")[myList.size()-1].classList.remove("hasNotValue");
            document.getElementsByClassName("null")[myList.size()-1].classList.add("hasValue");
            if(myList.size() -1<=8){
                document.getElementsByClassName("null")[myList.size()].classList.remove("hasValue");
                document.getElementsByClassName("null")[myList.size()].classList.add("hasNotValue");
    
            }

        }
        console.log("List Here before reverse " + myList.printList());
        reverseList = reverseArray(myList.printList());
        console.log("List Here after reverse " + reverseList);


        for (let i = 0; i <= reverseList.length; i++) {
            if (!(reverseList[i] === undefined)) {
                let text = document.createTextNode(reverseList[i]);
                document.querySelector(`[ll_cell_value='${i}']`).appendChild(text);
            }

        }
        disableAdd();
    }
}

function runSearch() {
    let inputValue = parseInt (document.getElementById("linkedlisttext").value);

    if (myList.size() > 0) {
        let index = reverseList.indexOf(inputValue)
        console.log("Here is tthe index " + index + "of the inoput value " + inputValue)
        for (let i = 0; i < 10; i++) {
            console.log("IN HERE")
            document.querySelector(`[ll_cell_id='${i}']`).style.backgroundColor = "";
        }
        document.querySelector(`[ll_cell_id='${index}']`).style.backgroundColor = "#D8043C";
    }

} 

function runClearList() {
    console.log("size before while:" + myList.size())
    whitetable()
    while (myList.size() >= 0) {
        console.log("size after while before removeAt:" + myList.size())

        if (myList.size() < 1) {
            document.querySelector(`[ll_cell_value='${0}']`).innerHTML = "";
        } else {
            document.querySelector(`[ll_cell_value='${myList.size() - 1}']`).innerHTML = "";
        }

        if (myList.size() === 0) {
            break;
        }
        document.querySelector(`[ll_cell_id='${myList.size() - 1}']`).classList.remove("hasValue");
        document.querySelector(`[ll_cell_id='${myList.size() - 1}']`).classList.add("hasNotValue");
        if (myList.size() - 1 < 8) {
            document.getElementsByClassName("fa-arrow-right")[myList.size() - 1].classList.remove("hasValue");
            document.getElementsByClassName("fa-arrow-right")[myList.size() - 1].classList.add("hasNotValue");
            document.getElementsByClassName("null")[myList.size() -1].classList.remove("hasValue");
            document.getElementsByClassName("null")[myList.size() -1].classList.add("hasNotValue");
            
        }
        myList.removeAt(myList.size() - 1);
        console.log("size after while after removeAt:" + myList.size())

    }

    disableAdd();

}


document.getElementById("add").addEventListener("click", () => {
    console.log("Add Button Clicked");
    runAdd();
});

document.getElementById("remove").addEventListener("click", () => {
    console.log("Remove Button Clicked");
    runRemove();
});

document.getElementById("search").addEventListener("click", () => {
    console.log("Search Button Clicked");
    runSearch();
});

document.getElementById("clearlist").addEventListener("click", () => {
    console.log("Clear Button Clicked");
    runClearList();
});





