let addBtn = document.getElementById('addBtn')
let parentList = document.getElementById('parentList')
addBtn.addEventListener('click', addStudent)
function addStudent(e){
     let currentBtn = e.currentTarget;
     let currentInput = currentBtn.previousElementSibling
     let currentStudent = currentInput.value
     let newLi = document.createElement('li')
     newLi.className = "list-group-item d-flex justify-content-between"
     newLi.innerHTML = `<h5 class="flex-grow-1">${currentStudent}</h5>
     <div class="form-check mx-1">
         <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
         <label class="form-check-label" for="defaultCheck1">
           Present
         </label>
       </div>
       <div class="form-check mx-1">
         <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
         <label class="form-check-label" for="defaultCheck1">
           Absent
         </label>
       </div>
     <button type="submit" class="btn btn-danger" onclick="removeCourse(this)">Remove</button>
 `
    
     parentList.appendChild(newLi)
}

function removeCourse(currElement){
    currElement.parentElement.remove()
}