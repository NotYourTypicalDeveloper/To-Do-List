document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    
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
    
    
    // ---------------------------------- functions for fun----- 
    const newTodoBtn = document.querySelector("#newTodoBtn");
    let isBlue = false;
    
    // changes color of the box
    
    setInterval(function() {
        if(isBlue) {
            newTodoBtn.style.background="lightpink";
            newTodoBtn.style.color="blue"
        } else {
            newTodoBtn.style.background="blue";
            newTodoBtn.style.color="white"
        }
        isBlue = !isBlue;
    }, 1000);
    
    console.log(newTodoBtn);

    // toggle class on the Quit button
    const quitBtn = document.querySelector('#quitBtn');

    quitBtn.addEventListener('click', 
        function changeColor(e) {
            e.preventDefault;
            quitBtn.classList.toggle("styleTwo");
        });
    });

    // toggle background color
const delBtn = document.querySelector('#deleteBtn');
const body = document.querySelector('body');

delBtn.addEventListener('click',
    function (e) {
        e.preventDefault;
        body.classList.toggle("backgroundColor");
    });


