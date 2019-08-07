
var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskUl=document.getElementById("incomplete-tasks");






var creatingFunction=function(everyTimeInputValues){
    var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
    var deleteButton=document.createElement("button");
    label.innerText=everyTimeInputValues;
    checkBox.type="checkbox";
	editInput.type="text";
    editButton.innerText="Edit";
	deleteButton.innerText="Delete";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	var listItem=creatingFunction(taskInput.value);
    incompleteTaskUl.appendChild(listItem);
    taskInput.value="";

}
addButton.addEventListener("click",addTask);





