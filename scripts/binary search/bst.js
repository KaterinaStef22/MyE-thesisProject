class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;

  }



  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  size() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        };
        if (node.right != null) {
          Q.push(node.right);
        };
      };
      return result.length - 1;
    } else {
      return null;
    };
  };
}

const myBst = new BST();


function disableInsert() {
  if (myBst.size() >= 9) {
    document.getElementById("insert").disabled = true;
    alert("Table Is Full");
    return false;
  } else {
    document.getElementById("insert").disabled = false;
    return true;
  }

}

var tempArray = new Array();
function runInsert() {

  let inputValue = document.getElementById("binarytreetext").value;
  let text = document.createTextNode(inputValue);
  let insertedElements = document.getElementById("insertedElements").innerText;
  if (disableInsert()) {
    myBst.insert(inputValue);
    if (!insertedElements.match(inputValue + "-")) {
      tempArray.push(inputValue);
      insertedElements += inputValue + "-";
      document.getElementById("insertedElements").innerText = insertedElements;
    }
    paintTheCells(inputValue)
  }
}

function runInsertForPreOrder() {
  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[preorder_cell_value='${i}']`).innerHTML = "";
  }

  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[preorder_cell_value='${i}']`).innerHTML = myBst.preOrder()[i];
  }
  console.log('preOrder: ' + myBst.preOrder());
}

function runInsertForInOrder() {
  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[inorder_cell_value='${i}']`).innerHTML = "";
  }

  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[inorder_cell_value='${i}']`).innerHTML = myBst.inOrder()[i];
  }
  console.log('inOrder: ' + myBst.inOrder());

}

function runInsertForPostOrder() {
  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[postorder_cell_value='${i}']`).innerHTML = "";
  }

  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[postorder_cell_value='${i}']`).innerHTML = myBst.postOrder()[i];
  }
  console.log('postOrder: ' + myBst.postOrder());
}

function runDelete() {
  whiteTheTable();

  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[preorder_cell_value='${i}']`).innerHTML = "";
    document.querySelector(`[inorder_cell_value='${i}']`).innerHTML = "";
    document.querySelector(`[postorder_cell_value='${i}']`).innerHTML = "";
  }

  let inputValue = document.getElementById("binarytreetext").value;
  myBst.remove(inputValue);

  runInsertForPostOrder()
  runInsertForInOrder()
  runInsertForPreOrder()
  disableInsert();
}

function whiteTheTable() {
  for (let i = 0; i < 10; i++) {
    document.querySelector(`[preorder_cell_id='${i}']`).style.backgroundColor = "white";
    document.querySelector(`[inorder_cell_id='${i}']`).style.backgroundColor = "white";
    document.querySelector(`[postorder_cell_id='${i}']`).style.backgroundColor = "white";
  }
}

function runFind() {
  let inputValue = document.getElementById("binarytreetext").value;
  paintTheCells(inputValue)
}

function paintTheCells(value){
  whiteTheTable();
  let preorder_id;
  for (let i = 0; i < myBst.preOrder().length; i++) {
    if (myBst.preOrder()[i] === value) {
      preorder_id = i;
    }
  }
  let inorder_id ;
  for (let i = 0; i < myBst.inOrder().length; i++) {
    if (myBst.inOrder()[i] === value) {
      inorder_id = i;
    }
  }
  let postorder_id;
  for (let i = 0; i < myBst.postOrder().length; i++) {
    if (myBst.postOrder()[i] === value) {
      postorder_id = i;
    }
  }
  document.querySelector(`[preorder_cell_id='${preorder_id}']`).style.backgroundColor = "cyan";
  document.querySelector(`[inorder_cell_id='${inorder_id}']`).style.backgroundColor = "cyan";
  document.querySelector(`[postorder_cell_id='${postorder_id}']`).style.backgroundColor = "cyan";
}

function runClearTables() {
  whiteTheTable();
  console.log("size after while after dequeue:" + myBst.size())
  document.getElementById("insertedElements").innerHTML = "";
  for (let i = 0; i <= myBst.size(); i++) {
    document.querySelector(`[preorder_cell_value='${i}']`).innerHTML = "";
    document.querySelector(`[inorder_cell_value='${i}']`).innerHTML = "";
    document.querySelector(`[postorder_cell_value='${i}']`).innerHTML = "";
  }

  for (let i = 0; i <= tempArray.length; i++) {
    myBst.remove(tempArray[i]);
    console.log("size after while after clear:" + myBst.size())
  }
  disableInsert();
}


document.getElementById("insert").addEventListener("click", () => {
  console.log("Insert Button Clicked");
  runInsert()
  runInsertForPreOrder();
  runInsertForInOrder();
  runInsertForPostOrder();
});

document.getElementById("delete").addEventListener("click", () => {
  console.log("Delete Button Clicked");
  runDelete();
});

document.getElementById("find").addEventListener("click", () => {
  console.log("Find Button Clicked");
  runFind();
});

document.getElementById("clearTables").addEventListener("click", () => {
  console.log("Clear Tables Button Clicked");
  runClearTables();
});




// myBst.insert("F");
 // myBst.insert("D");
 //myBst.insert("J");
// myBst.insert("K");
// myBst.insert("B");
// myBst.insert("E");
// myBst.insert("G");
// myBst.insert("A");
// myBst.insert("C");
// myBst.insert("E");
// myBst.insert("I");
// myBst.insert("H");
// myBst.remove("A");
// console.log(myBst.findMinHeight());
// console.log(myBst.findMaxHeight());
// console.log(myBst.isBalanced());
// // myBst.insert(9);
// // console.log(myBst.findMinHeight());
// // console.log(myBst.findMaxHeight());
// // console.log(myBst.isBalanced());
//console.log('inOrder: ' + myBst.inOrder());
// console.log('preOrder: ' + myBst.preOrder());
// console.log('postOrder: ' + myBst.postOrder());
// console.log('size: ' + myBst.size());