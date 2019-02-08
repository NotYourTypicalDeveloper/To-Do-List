let todos = ["buy new turtle"];

let input = prompt("What would you like to do?")

while(input !== "quit") {
    // handle input
    if(input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // ask for a new todo
        let newTodo = prompt("Enter new Todo");
        // add to the todos array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app")