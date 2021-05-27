const addInput = document.querySelector('.add-todos_input');
const addBtn = document.querySelector('.add-todos_btn');
const todoList = document.querySelector('.todos_list');
    

addBtn.addEventListener('click', add);
todoList.addEventListener('click', deleteCheck);



function add(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);

    const todosItem = document.createElement('li');
    todosItem.classList.add('todos_item');
    const value = todosItem.innerText = addInput.value;
    if (value == null || value === '') return;
    todoDiv.appendChild(todosItem);

    const completeBtn = document.createElement('button');
    completeBtn .innerHTML = '<i class="fas fa-check"></i>';
    completeBtn .classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)


    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    addInput.value = "";

   
}



function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const list = item.parentElement;
        list.remove();

    }
    if (item.classList[0] === 'complete-btn') {
        const list = item.parentElement;
        list.classList.toggle('complete')
        }

}