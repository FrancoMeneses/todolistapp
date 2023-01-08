function handleClick() {
  let ulTasks = document.getElementById("id-ul-tasks")
  let newli = document.createElement('li')
  // newli.appendChild(document.createTextNode("Element " + (le+1)))
  let ids = ulTasks.children.length + 1
  let html = `<div class="tasks-container"> ` +
    `<div class="radiobtn"> ` +
    `<input type="checkbox" id=${'check-' + ids}> ` +
    `</div> ` +
    `<div class="line"></div> ` +
    `<div class="task" id=${'task-' + ids}> ` +
    `<input placeholder="Write a new task..." id=${'input-' + ids} onchange="handleChange(event)"> ` +
    `</div> ` +
    `<div class="save-delete"> ` +
    `<button class="save" id=${'s-' + ids} onclick="handleSave(this)" >Save</button> ` +
    `<button class="delete" id=${'d-' + ids} onclick="handleDelete(this)">Delete</button> ` +
    `</div> ` +
    `</div>`
  newli.innerHTML = html
  newli.setAttribute('id', 'li-' + ids)
  ulTasks.appendChild(newli)
  //console.log(ulTasks.parentNode)
}

function handleDelete(el) {
  let id = 'li-' + el.id.slice(2)
  let litoDelete = document.getElementById(id)
  litoDelete.remove()
  // console.log(litodelete)
}

function handleSave(el) {
  let idInput = 'input-' + el.id.slice(2)
  let idli = 'li-' + el.id.slice(2)
  let idButtonS = 's-' + el.id.slice(2)
  let intoSave = document.getElementById(idInput)
  document.getElementById(idButtonS).innerText = 'Edit'
  document.getElementById(idButtonS).className = 'edit'
}

function handleChange(e){
  let value = e.target.value
  console.log(e.currentTarget.id)
}