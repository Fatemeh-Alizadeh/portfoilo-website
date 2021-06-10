const addInput = document.querySelector('.add-todos_input');
const addBtn = document.querySelector('.add-todos_btn');
const todoList = document.querySelector('.todos_list');

document.addEventListener('DOMContentLoaded', getTodo)    
addBtn.addEventListener('click', add);
todoList.addEventListener('click', deleteCheck);




function add(e) {
    e.preventDefault();


    const todosItem = document.createElement('li');
     todosItem.innerText = addInput.value;
    if (addInput.value === "" || addInput == null) return 
        
    
        todosItem.classList.add('todo');
        todoList.appendChild(todosItem) ; 
  
       
    
         
   
    

    save(addInput.value);
    

    const completeBtn = document.createElement('button');
    completeBtn .innerHTML = '<i class="fas fa-check"></i>';
    completeBtn .classList.add('complete-btn')
    todosItem.appendChild(completeBtn)


    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todosItem.appendChild(trashBtn);

    addInput.value = "";

   
}



function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const list = item.parentElement;
        deleteLocalStorage(list);
        list.remove();

    }
    if (item.classList[0] === 'complete-btn') {
        const list = item.parentElement;
        list.classList.toggle('complete')
        }

}


function save(todo) {
    
    let items;

    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    items.push(todo);
    localStorage.setItem("items", JSON.stringify(items));
}

function getTodo (){
     let items;

    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    items.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);

    const todosItem = document.createElement('li');
    todosItem.classList.add('todos_item');
     todosItem.innerText = todo;
    if (todo == null || todo === '') return;
    todoDiv.appendChild(todosItem);

    const completeBtn = document.createElement('button');
    completeBtn .innerHTML = '<i class="fas fa-check"></i>';
    completeBtn .classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)


    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
      
  });
}


function deleteLocalStorage(todo) {
     let items;

    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    const todoIndex = todo.children[0].innerText;
    items.splice(items.indexOf(todoIndex), 1);
    localStorage.setItem('items', JSON.stringify(items));

}
