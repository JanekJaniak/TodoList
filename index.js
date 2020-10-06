const list = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]');
const addButton = document.querySelector('[data-addButton]');


const items = [
    {
        value: "first item",
        id: 1
    },
    {
        value: "second item",
        id: 2
    },
]

const addItem = () => {
    //push item to items array
    const newItem = input.value;
    if(newItem==='') return;
    let item ={
        value:newItem,
        id:items.length+1,
    }
    items.push(item);
    renderItems();
    input.value='';
}

const removeItem = (e) => {
    //filter items
    e.target.parentNode.remove();
}

const renderItems = () => {
    //prints list
    list.textContent='';
    items.forEach((item,index) => {
        const listItem=document.createElement('li');
        listItem.innerHTML=items[index].value + '<button data-deleteButton>Delete</button>';
        list.appendChild(listItem); 
        listItem.querySelector('[data-deleteButton]').addEventListener('click', removeItem);
        })
    }

renderItems();
addButton.addEventListener('click', addItem);
