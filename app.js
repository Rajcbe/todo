const form=document.querySelector('.add');
const ul=document.querySelector('.list-group');
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