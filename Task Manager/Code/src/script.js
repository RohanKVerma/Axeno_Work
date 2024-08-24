"use strict";
const category_input = document.querySelector('#category_input');
const suggested_tags = document.querySelector('.suggested_tags');
const category_tags = document.querySelector('.tags');
const add_btn = document.querySelector('#add_btn');
const category_input_filter = document.querySelector('#category_input_filter');
const suggested_tags_filter = document.querySelector('#suggested_tags_filter');
const category_tags_filter = document.querySelector('#tags_filter');
category_input.addEventListener('click', function () {
    suggested_tags.style.display = 'block';
});
category_input_filter.addEventListener('click', function () {
    suggested_tags_filter.style.display = 'block';
});
suggested_tags.addEventListener('click', function (e) {
    suggested_tags.style.display = 'none';
    const newTag = document.createElement('li');
    newTag.classList.add("tagItem");
    newTag.innerHTML =
        `${e.target.textContent} <div class="close_btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#e8eaed">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
      </div>`;
    category_tags.appendChild(newTag);
    newTag.addEventListener('click', function () {
        newTag.remove();
    });
});
suggested_tags_filter.addEventListener('click', function (e) {
    suggested_tags_filter.style.display = 'none';
    const newTag = document.createElement('li');
    newTag.classList.add("tag");
    newTag.innerHTML =
        `${e.target.textContent} <div class="close_btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#e8eaed">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
      </div>`;
    category_tags_filter.appendChild(newTag);
    newTag.addEventListener('click', function () {
        newTag.remove();
    });
});
const task_list_container = document.querySelector('.task_list_container');
const task_title = document.querySelector('#task_title');
const task_description = document.querySelector('#task_desc');
const due_date = document.querySelector('#due_date');
const priority = document.querySelector('#priority');
const category = document.querySelector('#create_tags');
add_btn === null || add_btn === void 0 ? void 0 : add_btn.addEventListener('click', function () {
    if (task_title.value == "" || task_description.value == "" || due_date.value == "" || category.innerText == "") {
        alert("Please fill in all fields");
        return;
    }
    let priority_level = '';
    if (priority.value == '1') {
        priority_level = "Low";
    }
    else if (priority.value == '2') {
        priority_level = "Medium";
    }
    else {
        priority_level = "High";
    }
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('incomplete');
    const task_top = document.createElement('div');
    task_top.classList.add('task_top');
    task_top.innerHTML =
        `<input type="checkbox" name="status" class="status_checkbox" id="status">
      <div class="task_heading">${task_title.value}</div>
      <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ababab"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></div>`;
    task.appendChild(task_top);
    const task_body = document.createElement('div');
    task_body.classList.add('task_body');
    const task_due = document.createElement('div');
    task_due.classList.add('task_due');
    task_due.innerHTML =
        `<div class="due_date">Due Date: ${due_date.value}</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <div class="prio">${priority_level} Priority</div>`;
    task_body.appendChild(task_due);
    let tags_array = category.innerText.split("\n");
    console.log(tags_array);
    const task_tags = document.createElement('div');
    task_tags.classList.add('task_tags');
    const task_tag = document.createElement('ul');
    task_tag.classList.add('task_tag');
    tags_array.forEach(tag => {
        const task_tag_item = document.createElement('li');
        task_tag_item.classList.add('tag');
        task_tag_item.innerText = tag;
        task_tag.appendChild(task_tag_item);
    });
    task_tags.appendChild(task_tag);
    task_body.appendChild(task_tags);
    if (priority_level == "Low") {
        task_due.style.color = "green";
    }
    else if (priority_level == "Medium") {
        task_due.style.color = "orange";
    }
    else {
        task_due.style.color = "red";
    }
    const task_desc = document.createElement('div');
    task_desc.classList.add('task_desc');
    task_desc.innerHTML = `<div class="task_desc">${task_description.value}</div>`;
    task_body.appendChild(task_desc);
    task.appendChild(task_body);
    task_list_container.appendChild(task);
    task_title.value = '';
    task_description.value = '';
    due_date.value = '';
    priority.value = '';
    category.innerText = '';
});
const status_checkbox = document.querySelector("#status");
status_checkbox === null || status_checkbox === void 0 ? void 0 : status_checkbox.addEventListener("change", function () {
    var _a, _b, _c, _d, _e, _f;
    if (status_checkbox.checked) {
        (_b = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.replace("incomplete", "completed");
        (_c = this.parentElement) === null || _c === void 0 ? void 0 : _c.style.textDecoration = "line-through";
    }
    else {
        (_e = (_d = this.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList.replace("completed", "incomplete");
        (_f = this.parentElement) === null || _f === void 0 ? void 0 : _f.style.textDecoration = "none";
    }
});
