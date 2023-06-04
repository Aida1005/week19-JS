//Задание 1
//Функция для отображения всех постов через Fetch
function getPosts (){
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const html = data.reduce((acc, el) => acc + "<div class=\"post\">" + el.title + "</div>", '');
        const result = document.querySelector(".post");
        result.innerHTML = html;
    })
}

////Функция для отображения всех постов в браузер
getPosts();


//Задание 2 

//Находим элементы на странице
const formDisplay =document.querySelector(".form-display")
const newPost = document.querySelector(".main-post");
const textPost = document.querySelector(".post-text");
const button = document.querySelector(".button");

//Создаём функцию для кнопки "Создать пост"
button.addEventListener("click", function(e){
    e.preventDefault();
    
//переменная для поста и их значением Title & Body 
const listPost = {
    title: newPost.value,
    body: textPost.value,
};

//Функция для создания постов с вызовом Fetch
    fetch ("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify(listPost),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then ((post) =>{
        const display = `<div class="main-body"><div class="post-new">${listPost.title}</div><div class="post-text">${listPost.body}</div></div>`;
        formDisplay.innerHTML = display;
        newPost.value = "";
        textPost.value = "";
    })
    });

