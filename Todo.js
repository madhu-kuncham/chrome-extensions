
'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
 


const addForm = document.querySelector('.add');
const list = document.querySelector('.Todos');

const generateTemplate = Todo => {

    const html = `
    <li class ="list-group-item d-flex justify-content-between align-items-center">
       <span>${Todo}</span>
       <i class="fas fa-trash-alt delete">
    </i>
`;

list.innerHTML += html;

};
// document.getElementById('form1').addEventListener('submit', function(evt){
// document.getElementById('addForm').addEventListener('submit',function(e){
    addForm.addEventListener('submit',e =>{


    e.preventDefault();
    const Todo = addForm.addEventListener.value.trim();

    if(Todo.length){
        generateTemplate(Todo);
        addForm.reset();
    }
});

});
});