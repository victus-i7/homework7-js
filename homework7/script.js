"use strict"



const form = document.querySelector("#task_form");
const input = document.querySelector("#task_input");
const list_el = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // value ochamis yozilgan sozi karobkaga qoyish uchun
    const task = input.value;

    // task ochamis
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    // content ochamis
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    task_el.appendChild(task_content_el);


    // karobkaga soz yozish uchun
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.value = task;


    // content ga inputi ulimis
    task_content_el.appendChild(task_input_el);


    // Add task va  delete btn ni bossa ishlidigan qilamis
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');


    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';


    // actionsga  delete ulimis

    task_actions_el.appendChild(task_delete_el);


    // task_el ga actioni ulimis
    task_el.appendChild(task_actions_el);


    // list_el ga task_el ulimis
    list_el.appendChild(task_el);


    // yozib bogandan kegin bo'sh joy qolishi uchun
    input.value = '';





    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
    });
});