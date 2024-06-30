
document.addEventListener("DOMContentLoaded", ()=>{
    
    var i=localStorage.length;

    const Savebutton= document.getElementById('save-btn');
    const task = document.getElementById('input-task');
    const tasklist= document.querySelector('#display-section table tbody');
    const clearall= document.getElementById('clear-all-btn');

    Savebutton.addEventListener("click",()=>{
        const newtask= task.value;
        if(!newtask){
            alert("Empty field");
        }else{
            localStorage.setItem(i, newtask );
            i++;
            location.reload();
        }
    });
    tasklist.innerHTML='';
    loadTask();

    function loadTask(){
        for(var j=0; j<localStorage.length; j++){
            const task= localStorage.getItem(j);
            if(task){

                var row = document.createElement('tr');
                row.innerHTML=`
                <td id="task-list">❇️ ${task}</td>
                <td><Button class="delete-btn" data-id="${j}"></Button></td>
                `;
                tasklist.appendChild(row);
            }

        } 
    }

    tasklist.addEventListener("click", (event) =>{
        if(event.target.classList.contains('delete-btn')){

            const id = event.target.getAttribute('data-id');
            localStorage.removeItem(id);
            event.target.closest('tr').remove();
            if(localStorage.length==0){
                location.reload();
            }
        }
    });

    if(localStorage.length==0){
        tasklist.innerHTML="No task to show."
        tasklist.style.color='grey';
        clearall.style.display="none";
    }

    clearall.addEventListener("click", ()=>{
        localStorage.clear();
        location.reload();
    })

});   