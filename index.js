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

// All this function should do is push an item into items array.
// It should take newItem as an argument.
// newItem should be an object with id and value

const removeItem = () => {
    // filter items

}


const renderItems = () => {
    list.textContent='';
    items.forEach((item) => {
        const listItem = document.createElement('li');
        const textNode = document.createTextNode(item.value);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'DELETE';
        deleteButton.setAttribute('data-item-id', item.id);
        deleteButton.addEventListener('click', removeItem );
        console.log(item.id);
        listItem.append(textNode, deleteButton);
        list.appendChild(listItem);
        })
    }

renderItems();
addButton.addEventListener('click', addItem);

//Pass a newItem argument to addItem & call renderItems
