
//Функция для отображения всех постов через Fetch
function getPosts (){
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const html = data.reduce((acc, el) => acc + "<div class=\"posts\">" + el.title + "</div>", '');
        const result = document.querySelector(".post");
        result.innerHTML = html;
    })
}

////Функция для отображения всех постов в браузер
getPosts();


