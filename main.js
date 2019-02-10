let todos = ["buy new turtle"];

let input = prompt("Enter type of action to perform 🤖 : New, Delete, List, Quit ")

// ----------------------- functions ----------------------
function listToDos() {
    console.log('**************');
    
    todos.forEach(function(todo, i){
        console.log(i + ': ' + todo);
    });
    console.log('**************');
}

function addTodo() {
    // ask for a new todo
    let newTodo = prompt("Enter new Todo");
    // add to the todos array
    todos.push(newTodo);
}

function deleteTodo() {
    //ask for index of todo to be deleted
    var index = prompt('Enter index of todo to delete');
    // delete that todo
    todos.splice(index, 1)
    console.log('Deleted to do');
}

// ------------- loop prompt -------------------
while(input !== "quit") {
    // handle input
    if(input === "list") {
        listToDos();   
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    
    //ask again for new input
    input = prompt("Enter type of action to perform 🤖 : New, Delete, List, Quit ");
}
console.log("OK, you quit the app")


// ----------------------------------
const newTodoBtn = document.querySelector("#newTodoBtn");
let isBlue = false;

// changes color of the box
setInterval(function() {
    if(isBlue) {
        newTodoBtn.style.background = "pink";
    } else {
        newTodoBtn.style.background = "#3498db";
    }
    isBlue = !isBlue;
    }, 1000);
