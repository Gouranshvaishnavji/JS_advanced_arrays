
var activitylist= []

var input = document.getElementById("input")
var todolist = document.getElementById("todolist")
document.getElementById("button").onclick = click;
function click() {
    activitylist.push(input.value);
    console.log(activitylist);
    input.value="";
    showList();
}
function showList() {
    todolist.innerHTML =" ";
    activitylist.forEach(function (n, i){
    todolist.innerHTML += "<li>"+ n + 
    "<a onclick='editItem(" + i 
    +")'>Edit</a>"+
    "<a oneClick='deleteItem("+
    i +
    ")'>&times | </a></li>";
    });
    }

function deleteItem(i) {
    activitylist.splice(i, 1);
    showList();
}
function editItem(i) {
    var newValue = prompt("please insert your new value")
    activitylist.splice(i, 1, newValue);
    showList();
}
