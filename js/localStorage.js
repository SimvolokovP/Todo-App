let number = 0;

const initState = () => {
    if (localStorage.getItem('nodes') != null) {
        document.querySelector('.app__list').innerHTML = localStorage.getItem('nodes');
        number = localStorage.getItem('number');
        console.log(number);
    }           
}

initState();

const updateStorage = () => {
    let parent = document.querySelector('.app__list');
    let html = parent.innerHTML;
    html = html.trim();
    console.log(html);
    console.log(html.length);

  
    if (html.length) {
        localStorage.setItem('nodes', html);
        localStorage.setItem('number', number);
        
    } else {
        localStorage.removeItem('nodes');
        localStorage.removeItem('number');
    }
}

