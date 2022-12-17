let addBtn = document.getElementById('addBtn')
let parentList = document.getElementById('parentList')
addBtn.addEventListener('click', addCourse)
function addCourse(e){
     let currentBtn = e.currentTarget;
     let currentInput1 = currentBtn.previousElementSibling.previousElementSibling 
     let currentInput2 = currentBtn.previousElementSibling
     let currentCourse = currentInput1.value +  " | " + currentInput2.value
     let newLi = document.createElement('li')
     newLi.className = "list-group-item d-flex justify-content-between"
     newLi.innerHTML = `<h5 class="flex-grow-1">${currentCourse}</h5>
                        <button type="submit" class="btn btn-danger" onclick="removeCourse(this)">Remove</button>`

    
     parentList.appendChild(newLi)
}

function removeCourse(currElement){
    currElement.parentElement.remove()
}