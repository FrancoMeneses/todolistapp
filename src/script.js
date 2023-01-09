function handleClick() {
  let ulTasks = document.getElementById("id-ul-tasks")
  let newli = document.createElement('li')
  // newli.appendChild(document.createTextNode("Element " + (le+1)))
  let ids = ulTasks.children.length + 1
  let html = `<div class="tasks-container"> ` +
    `<div class="radiobtn"> ` +
    `<input type="checkbox" id=${'check-' + ids} onchange="handleCheck(${ids})"> ` +
    `</div> ` +
    `<div class="line"></div> ` +
    `<div class="task" id=${'task-' + ids}> ` +
    `<input placeholder="Write a new task..." id=${'input-' + ids} onchange=""> ` +
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
  let classN = el.className
  if (classN === 'save') {
    let input = document.getElementById('input-' + el.id.slice(2))
    if (input.value.length !== 0) {
      let idButtonS = 's-' + el.id.slice(2)
      let tasktoSave = document.getElementById('task-' + el.id.slice(2))

      document.getElementById(idButtonS).innerText = 'Edit'
      document.getElementById(idButtonS).className = 'edit'
      document.getElementById(idButtonS).id = `e-${el.id.slice(2)}`

      let taskText = input.value
      tasktoSave.removeChild(input)
      var text = document.createElement('p')
      text.innerText = taskText
      text.className = 'doneInput'
      text.id = `p-${el.id.slice(2)}`
      tasktoSave.appendChild(text)
    } else {
      alert("Tasks can't be empty")
      document.getElementById(`check-${el.id.slice(2)}`).checked = ""
    }
  }
  if (classN === 'edit') {
    let p = document.getElementById(`p-${el.id.slice(2)}`)
    let tasktoEdit = document.getElementById('task-' + el.id.slice(2))
    let taskText = p.textContent
    tasktoEdit.removeChild(p)
    var input = document.createElement('input')
    input.value = taskText
    input.className = 'doneInput'
    input.id = `input-${el.id.slice(2)}`
    tasktoEdit.appendChild(input)

    let idButtonE = 'e-' + el.id.slice(2)
    document.getElementById(idButtonE).innerText = 'Save'
    document.getElementById(idButtonE).className = 'save'
    document.getElementById(idButtonE).id = `s-${el.id.slice(2)}`
    input.focus()
  }
}

function handleCheck(id) {
  if (document.getElementById(`check-${id}`).checked === true){
    let button = document.getElementById(`s-${id}`)
    if (button === null) {
      button = document.getElementById(`e-${id}`)
      let p = document.getElementById(`p-${id}`)
      p.style.textDecoration = 'line-through'
    } else {
      handleSave(button)
      if (document.getElementById(`check-${id}`).checked === true) {
        let p = document.getElementById(`p-${id}`)
        p.style.textDecoration = 'line-through'
      }
    }
  }else{
    let p = document.getElementById(`p-${id}`)
      p.style.textDecoration = 'none'
  }
}