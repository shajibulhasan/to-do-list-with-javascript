document.querySelector('#push').onclick = function() {
   if(document.querySelector('#taskInput').nodeValue == 0) {
        alert("Please enter a task.");
   }
   else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task"> 
                <span id='taskname'>${document.querySelector('#taskInput').value}</span>
                <button class="delete">Delete</button>
            </div>                 
        `;   
        var currentTasks = document.querySelectorAll('.delete');
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentElement.remove();
            };
        }
        var tasks = document.querySelectorAll('#taskname');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            };
        }

        // document.querySelector('#taskInput').value = '';
    }
}