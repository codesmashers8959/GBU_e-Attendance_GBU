let addBtn = document.getElementById('addBtn')
let parentList = document.getElementById('parentList')
addBtn.addEventListener('click', addTeacher)
function addTeacher(e){
     let currentBtn = e.currentTarget;
     let currentInput = currentBtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
    
     let currentTeacher = currentInput.value
     let newLi = document.createElement('li')
     newLi.className = "list-group-item d-flex justify-content-between"
     newLi.innerHTML = `<h5 class="flex-grow-1">${currentTeacher}</h5>
                        <button type="submit" class="btn btn-danger" onclick="removeCourse(this)">Remove</button>`

    
     parentList.appendChild(newLi)
}

function removeCourse(currElement){
    currElement.parentElement.remove()
}