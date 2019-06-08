const form=document.querySelector('.add');
const ul=document.querySelector('.list-group');
const search=document.querySelector('.search input');
const generateTemplate=(todo)=>{
    ul.innerHTML +=`<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue=form.add.value.trim();
    if(inputValue.length) {
        generateTemplate(inputValue);
    }
    form.reset();
});

//delete todos

ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search and filter todolist
const searchTodo=(searchValue)=>{
    Array.from(ul.children).filter((list)=>{
        return !list.textContent.includes(searchValue);
    }).forEach((list)=>{
         list.classList.add('filtered');
    });
    Array.from(ul.children).filter((list)=>{
        return list.textContent.includes(searchValue);
    }).forEach((list)=>{
        list.classList.remove('filtered');
    });
}


search.addEventListener('keyup',()=>{
const searchValue=search.value.trim().toLowerCase();
searchTodo(searchValue);

});