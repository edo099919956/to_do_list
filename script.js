document.querySelector('.add_btn').addEventListener('click', () => {
    let input_todo = document.querySelector('.input_todo'),
        todos_container = document.querySelector('.todos');

    if (input_todo.value !== '') {
        todos_container.innerHTML += `
        <li class="new_todos">
            <input type="checkbox" id="checkbox">
            <span class="texts">${input_todo.value}</span>
            <button class="redact"><img src="./img/edit.png" alt="trash"></button>
            <button class="delet"><img src="./img/trash-red.svg" alt="trash"></button>
        </li>`;

        let delet = document.querySelectorAll('.delet');
        document.querySelector('.todo_list_count').textContent = `You have ${document.querySelectorAll('.new_todos').length} pending tasks`
        for (let i = 0; i < delet.length; i++) {
            let clear_all = document.querySelector('.clear_all'),
                checkbox = document.querySelectorAll('#checkbox');

            delet[i].addEventListener('click', () => {
                let new_todos = document.querySelectorAll('.new_todos');
                delet[i].parentNode.remove(new_todos[i])
                document.querySelector('.todo_list_count').textContent = `You have ${new_todos.length - 1} pending tasks`
            })
            clear_all.addEventListener('click', () => {
                let new_todos = document.querySelectorAll('.new_todos');
                new_todos[i].remove()
                document.querySelector('.todo_list_count').textContent = `You have 0 pending tasks`
            })
            checkbox[i].addEventListener('click', () => {
                texts = document.querySelectorAll('.texts');
                if (checkbox[i].checked) {
                    texts[i].style.cssText = 'text-decoration-line: line-through;'
                    checkbox[i].style.cssText = 'filter: saturate(1);'
                } else {
                    texts[i].style.cssText = 'text-decoration-line: unset;'
                    checkbox[i].style.cssText = 'filter: saturate(0);'
                }
            })
        }

        input_todo.value = ''
        document.querySelector('.create_new_todo').classList.remove('enterTextPopuo');
    } else {
        document.querySelector('.create_new_todo').classList.add('enterTextPopuo');
    }

    // ______________________________redact logic______________________________
   let redact_btn = document.querySelectorAll('.redact'),
    texts = document.querySelectorAll('.texts');
    for (let i = 0; i < redact_btn.length; i++) {
        redact_btn[i].addEventListener('click', () => {
            if (texts[i].contentEditable == "true") {
                texts[i].contentEditable = "false";
                redact_btn[i].classList.remove('redact_Befor')
            } else {
                texts[i].contentEditable = "true";
                redact_btn[i].classList.add('redact_Befor')
            }
        })
    }
})