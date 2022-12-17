let addBtn = document.getElementById('addBtn')
let parentList = document.getElementById('parentList')
addBtn.addEventListener('click', addStudent)
function addStudent(e){
     let currentBtn = e.currentTarget;
     let currentInput = currentBtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
    
     let currentStudent = currentInput.value
     let newLi = document.createElement('li')
     newLi.className = "list-group-item d-flex justify-content-between"
     newLi.innerHTML = `<h5 class="flex-grow-1">${currentStudent}</h5>
                        <button type="submit" class="btn btn-danger" onclick="removeCourse(this)">Remove</button>`

    
     parentList.appendChild(newLi)
}

function removeCourse(currElement){
    currElement.parentElement.remove()
}