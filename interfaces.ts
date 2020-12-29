function showTodo(todo: {title: string,text: string}){
console.log(todo.title + ' ' + todo.text);
}

let myTodo = {
    title: 'Cleaning',
    text: 'Room'
}
showTodo(myTodo);

//To clean this up we will create interface

interface Todo{
    title: string,
    text: string
}

function interfaceShowTodo(todo: Todo){
    console.log(todo.title + ' ' + todo.text);
}
let interfacemyTodo = {
    title: 'Cleaning Room',
    text: 'Dusting'
}

interfaceShowTodo(interfacemyTodo);