const todoInput = document.getElementById('todo-title');
const listItems = document.getElementById('todo-list');
let nodes = [];
const addBtn = document.getElementById('todo-add');




// todoInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         addBtn.click();
//     }
// });




function createNode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = currentDate.getHours(); 
    const minutes = currentDate.getMinutes();

    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    
    if (todoInput.value === "") {
        alert('Please Enter textt');
        todoInput.focus();
    } else {

        let li = document.createElement('li');
        li.className = '';
        li.className = 'app__item item';
        li.setAttribute('list-pos',number)
        const template = `<div class="item__header">
        <h3 class="item__title">${todoInput.value}</h3>
        
        <div class="item__actions">

            <button class="item__complete btn-reset" onclick="completeItem(this)">
                <svg class="item__complete--disable" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
                <svg class="item__complete--enable" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
            </button>
            <button class="item__remove btn-reset" onclick="removeItem(this)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 11V17" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
            </button>
            <button class="item__edit btn-reset" onclick="updateItem(this)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="item__descr">
        Make logo for the mini project
    </div>
    <div class="item__date">
        Created at ${formattedDate}
    </div>`;
        li.innerHTML = template;
        console.log(li)
        listItems.appendChild(li);
        number = number + 1;
        updateStorage();
    }
}

function completeItem(e) {
    const item = e.closest('li');
    item.classList.toggle('complete');
    updateStorage();
}

function removeItem(e) {
    let item = e.closest('li');
    item.classList.add('deleted-item');
    

    item.addEventListener('animationend', () => {
        item.classList.remove('deleted-item');
        
    });

    item.remove();
    number = number - 1;
    updateStorage();
}

//remove imprv create two and more inputs
function updateItem(e) {
    console.log(e.parentElement.parentElement.querySelector('.item__title').innerHTML);
    let header = e.parentElement.parentElement;
    header.classList.add('editor');
    if (header.classList.contains('editor')) {
        let name = header.querySelector('.item__title');
        name.style.opacity = '0';
        const input = document.createElement('input');
        input.focus;
        input.value = name.innerHTML;
        input.className = 'item__input';
        header.appendChild(input);
        const inputBtn = document.createElement('button');
        inputBtn.className = 'item__input-button';
        inputBtn.innerHTML = 'Edit';
        inputBtn.setAttribute('onclick','updateClick(this)')
        header.appendChild(inputBtn);
    }
}


function updateClick(e) {
    let header = e.parentElement;
    let name = header.querySelector('.item__title');
    let input = header.querySelector('.item__input');
    name.innerHTML = input.value;
    name.style.opacity = '1';
    e.remove();
    input.remove();
    header.classList.remove('editor');
    updateStorage();
}

const modal = new GraphModal({
    isOpen: (modal) => {
        console.log('open');
    },
    isClose: (modal) => {
        console.log('close');
    }
});
