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

    this.indexOf = function (element) { //me indexOf H μέθοδος indexOf() επιστρέφει τη θέση στη οποία ένα συγκεκριμένο κείμενο εμφανίζεται για πρώτη φορά μέσα σε μία συμβολοσειρά. Ο υπολογισμός της θέσης ξεκινά από το μηδέν. Αν το κείμενο δε βρεθεί μέσα στη συμβολοσειρά τότε η μέθοδος επιστρέφει -1.
        var currentNode = head; //index pinaka periexomenwn
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

    // prints the list items 
    this.printList = function () {
        var currentNode = head;
        var str = "";
        while (currentNode) {
            str += currentNode.element + " ";
            currentNode = currentNode.next;
        }
        console.log(str);
        return str
    }

}


var myList = new LinkedList();

function runAdd() {
    let inputValue = document.getElementById("linkedlisttext").value;
    let text = document.createTextNode(inputValue);
    if (disableAdd()) {
        myList.add(inputValue);
        document.querySelector(`[ll_cell_value='${0}']`).innerHTML = "";
        document.querySelector(`[ll_cell_value='${0}']`).appendChild(text);
        console.log(inputValue + " " + myList.size());
        shiftTable();
    }

    if (myList.size() !== 0) {
        document.querySelector(`[ll_cell_id='${myList.size()-1}']`).style.backgroundColor = "white";
    }

}

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

  function removeWhiteSpaceFromArray(array){
    return array.filter((item) => item != ' ');
}
 
function shiftTable() {
    var reverseList = new Array();
    console.log("List Here before reverse " + myList.printList());
        reverseList = reverseArray(myList.printList());
        reverseList= removeWhiteSpaceFromArray(reverseList)
        console.log("List Here after reverse " +reverseList);

        for (let i = 0; i <= myList.size(); i++) {
            document.querySelector(`[ll_cell_value='${i}']`).innerHTML = "";
        }

        
        for (let i = 0; i <= reverseList.size; i++) {
            let text = document.createTextNode(reverseList[i]);
            document.querySelector(`[ll_cell_value='${i}']`).appendChild(text);
        }




}


function disableAdd() {
    if (myList.size() >= 10) {
        document.getElementById("add").disabled = true;
        alert("List Is Full");
        return false;
    } else {
        document.getElementById("add").disabled = false;
        return true;
    }

}

function runRemove() {

}

function runSearch() {

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



// names.add('Katerina');
// names.add('Anastasia');
// names.add('Dimitra');
// names.add('Hliana');
// names.add('Despoina');
// console.log(names.size());
// console.log(names.removeAt(3));
// console.log(names.elementAt(3));
// console.log(names.indexOf('Dimitra')); //poia h thesh
// console.log(names.size());


//https://www.youtube.com/watch?v=9YddVVsdG5A