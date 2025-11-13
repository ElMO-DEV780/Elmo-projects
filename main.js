// add elements
const input = document.getElementById('input');
const add = document.getElementById('add');
const outputs = document.getElementById('outputs');

// check if localStorage is already includes data
let data; // all of data stored on 'data' array
if (localStorage['task'] == null) {
  data = []
} else {
  data = JSON.parse(localStorage.task);
}

// add a new task to the localStorage
function addTask() {
  if (input.value != '') {
    let task = {
      isDone: false,
      text: input.value,
    }
    data.push(task)
    localStorage.setItem('task', JSON.stringify(data))
    
    input.value = '';
    showData()
  }
}

// show tasks on the screen 
function showData() {
  let struct = ' ';
  for (i = 0; i < data.length; i++) {
    struct += `<div class="item" ondblclick="deletElements(this,${i})">
        <div class="content" ondblclick="deletElements(this,${i})">
          ${data[i]['text']}
        </div>
      </div>`
    
  }
  outputs.innerHTML = struct;
}
showData()

// delete elements 
function deletElements(item, id) {
  item.classList.add('delitem')
  
  const duration = 500;
  setTimeout(() => {
    
    data.splice(id, 1)
    localStorage.task = JSON.stringify(data)
    showData()
    
  }, duration)
  
}