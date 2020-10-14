const ul = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]');
const addButton = document.querySelector('[data-addButton]');
const itemsArray = [
    {
        value: "first item (existing)",
        id: 1
    },
    {
        value: "second item (existing)",
        id: 2
    }
]

//pobiera id z data-item-id, wywołuje removeItem i renderItems
const handleRemoveButton = () => {
    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("Usuń"));
    ul.append(removeButton);
    removeButton.addEventListener('click', removeItem)
}

//usuwa item o konkretnym id z items
const removeItem = () => {
    console.log("test")
}

//generuje HTMLa na podstawie bieżącego stanu items
const renderItems = () => {
        ul.textContent = "";
        itemsArray.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = item.value;      
            ul.append(li);
            handleRemoveButton()    
        })
        input.value = "";    
}

//dodaje nowy obiekt item do arraya items
const addItem = () => {
    if (input.value === '') return;
    let item = {
        value: input.value,
        id: itemsArray.length+1,
    }
    itemsArray.push(item);
}

//pobiera value z inputa, wywołuje addItem i renderItems
const handleAddButton = () => {
    addItem();
    renderItems();  
}

addButton.addEventListener('click', handleAddButton)