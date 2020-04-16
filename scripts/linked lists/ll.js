/*LinkedList*/

function LinkedList(){
    var legth=0;
    var head=null;


var Node=function(element){
    this.element=element;  //data
    this.next=null;   //next
}
this.size=function(){
    return length;
}

this.head=function(){
    return head;
}
this.add=function(element){
    var node=new Node(element);
    if(head==null){
        head=node;
    }else{
        var currentNode=head;
        
        while(currentNode.next){
            currentNode=currentNode.next;
        }

        currentNode.next=node;
    }

    length++;
}
this.remove=function(element){
    var currentNode=head;
    var previousNode;
    if(currentNode.element===element){
        head=currentNode.next;
    }
    else{
        while(currentNode.element !== element){
            previousNode=currentNode;
            currentNode=currentNode.next;
        }
        previousNode.next=currentNode.next;
    }
   length --;
    }
  this.isEmpty=function(){
      return length===0;
  }

  this.indexOf=function(element){ //me indexOf H μέθοδος indexOf() επιστρέφει τη θέση στη οποία ένα συγκεκριμένο κείμενο εμφανίζεται για πρώτη φορά μέσα σε μία συμβολοσειρά. Ο υπολογισμός της θέσης ξεκινά από το μηδέν. Αν το κείμενο δε βρεθεί μέσα στη συμβολοσειρά τότε η μέθοδος επιστρέφει -1.
      var currentNode=head;  //index pinaka periexomenwn
      var index=-1;

      while(currentNode){
          index++;
              if(currentNode.element===element){
                  return index;
              }
          currentNode=currentNode.next;
      }
      return -1;
  }
  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
  };

  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

} 


var names=new LinkedList();
//names.add('Katerina');
//names.add('Anastasia');
//names.add('Dimitra');
//names.add('Hliana');
//names.add('Despoina');
//console.log(names.size());
//console.log(names.removeAt(3));
//console.log(names.elementAt(3));
//console.log(names.indexOf('Dimitra')); //poia h thesh
//console.log(names.size());


//https://www.youtube.com/watch?v=9YddVVsdG5A


document.getElementById("add").addEventListener("click", ()=>{
    console.log("Add Button Clicked");
 names.add();
});

document.getElementById("remove").addEventListener("click", ()=>{
    console.log("Push Button Clicked");
 names.removeAt();
});

document.getElementById("search").addEventListener("click", ()=>{
    console.log("Search Button Clicked");
  
});

