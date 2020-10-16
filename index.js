const list = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]');
const addButton = document.querySelector('[data-addButton]');


let items = [
    {
        value: "first item",
        id: 1
    },
    {
        value: "second item",
        id: 2
    },
    {
        value: "third item",
        id: 3
    }
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

const removeItem = (itemId) => {
    items = items.filter((item) => {
       return item.id != itemId;
    })   
}

const handleDeleteButton = (itemId) =>{
    removeItem(itemId);
    renderItems();
}

const renderItems = () => {
    list.innerHTML='';
    items.forEach((item) => {
        const listItem = document.createElement('li');
        const textNode = document.createTextNode(item.value);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'DELETE';
        deleteButton.setAttribute('data-item-id', item.id);
        deleteButton.addEventListener('click', (event) => {
            handleDeleteButton(event.target.dataset.itemId)
        });
        listItem.append(textNode, deleteButton);
        list.appendChild(listItem);
    })
}

renderItems();
addButton.addEventListener('click', addItem);

//Pass a newItem argument to addItem & call renderItems
