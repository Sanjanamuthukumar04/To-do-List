todoList=[];

function renderTodoList(){
    let todoListHTML=``;

    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const {name, dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector(".js-todo-list").innerHTML=todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value.trim(); // remove whitespace
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if (name === '') return; // ⛔ Prevent adding empty tasks

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    renderTodoList();
}

