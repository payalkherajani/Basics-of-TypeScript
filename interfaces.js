function showTodo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
var myTodo = {
    title: 'Cleaning',
    text: 'Room'
};
showTodo(myTodo);
function interfaceShowTodo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
var interfacemyTodo = {
    title: 'Cleaning Room',
    text: 'Dusting'
};
interfaceShowTodo(interfacemyTodo);
