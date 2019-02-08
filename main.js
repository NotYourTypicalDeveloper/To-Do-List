let todos = ["buy new turtle"];

let input = prompt("Enter type of action to perform 🤖 : New, List, quit")

while(input !== "quit") {
    // handle input
    if(input === "list") {
        console.log('**************');
        
        todos.forEach(function(todo, i){
            console.log(i + ': ' + todo);
            console.log('**************');
        });

    } else if (input === "new") {
        // ask for a new todo
        let newTodo = prompt("Enter new Todo");
        // add to the todos array
        todos.push(newTodo);
    } else if (input === "delete") {
        //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        // delete that todo
        todos.splice(index, 1)
    }

    //ask again for new input
    input = prompt("Enter type of action to perform 🤖 : New, List, quit");
}
console.log("OK, you quit the app")