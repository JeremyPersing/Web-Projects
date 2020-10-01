class Project {
    tasks = [];
    constructor(name) {
        this.name = name;
    }


}

if (localStorage!= null && !document.getElementById('projectNameList').hasChildNodes()) {
    for (let i = 0; i < localStorage.length; i++){
        // value is an object that represents an input from the creation of a project
        // value contains both a name attibute and a tasks array
        let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
        document.getElementById('projectNameList').appendChild(createListElement(value.name));
        
    }
}

function createProjectForm() {
    let inputDiv = document.getElementById("inputContainer");
    let addButton = document.getElementById("addProject");
    addButton.style = "visibility: hidden;"

    let projectInput = document.createElement('div');
    projectInput.className = "center"
    projectInput.id = "projectInput";
    
    projectInput.innerHTML =  "<input id='projectTitle' size='40' placeholder='Project Name'>" + 
                                "<button id='submitLocalStorageButton' onclick='submitLocalStorage()'>Create Project</button>";
    inputDiv.appendChild(projectInput);
}

function submitLocalStorage() {
    let inputValue = document.getElementById("projectTitle").value;
    // Creating the object from the inputValue
    
    let project = new Project(inputValue);
    if (localStorage.getItem(inputValue) === null) {
        localStorage.setItem(project.name, JSON.stringify(project));
    
        let list = document.getElementById("projectNameList");

        let currProject = JSON.parse(localStorage.getItem(project.name));
        
        list.appendChild(createListElement(currProject.name));
    }
}

//Need to work on when deleting a project it as deletes the tasks
// Also need to be able to delete singular tasks

function createListElement(value) {
    let div = document.createElement('div');
    div.className = "projectElement";

    // item represents the words for the project
    let item = document.createElement('p');
    item.value = value;
    item.append(value);
    div.id = value;
    item.onclick = () => {
        document.getElementById('projectHeader').innerHTML = "<div id='projectListTitle'>" + value + "</div>";
        document.getElementById('projectHeader').value = value;
        document.getElementById('taskInputDiv').style = "visibility: visible";
        populateTaskDisplay();
    }
    item.id = value;


    // Logic to remove the project
    let removeProject = document.createElement('span');
    removeProject.className = "glyphicon glyphicon-remove";
    removeProject.title = "Remove Project";
    removeProject.onclick = () => {
        console.log("Should be removing");

        let taskOutput = document.getElementById('taskOutput');

        // Remove project header and task input if projectHeader has children and the project being deleted is the same project on the header
        // It will also delete tasks on the screen in the task output
        // as long as those tasks go with the current project
        if (document.getElementById('projectHeader').hasChildNodes() && item.innerText == document.getElementById('projectHeader').childNodes[0].innerText) {
            document.getElementById('projectHeader').removeChild( document.getElementById('projectHeader').childNodes[0]); 
            document.getElementById('taskInputDiv').style = "visibility: hidden";

            if (taskOutput.hasChildNodes()) {
                for(let i = 0; i < taskOutput.childNodes.length; i++) {
                    taskOutput.removeChild(taskOutput.childNodes[i]);
                }
                console.log("DELETING taskOutput tasks");
            }
        }
        document.getElementById(value).remove();

    

        localStorage.removeItem(value);
    }

    div.appendChild(item);
    div.appendChild(removeProject);
    return div;
}



// creates an element that contains a task
function createTaskElement(string) {
    let div = document.createElement('div');
    div.id = string;
    div.className = 'taskElement';

    // p represents the words for the task
    let p = document.createElement('p');
    p.innerText = string;
    div.appendChild(p);

    // Checkbox is the glyphicon checkbox icon
    let checkBox = document.createElement('span');
    checkBox.className = "glyphicon glyphicon-unchecked";
    div.appendChild(checkBox);
    checkBox.onclick = () => {
        if (checkBox.className == "glyphicon glyphicon-unchecked") {
            
            checkBox.className = "glyphicon glyphicon-check";
            div.style = "color: green";
        }
        else {
            checkBox.className = "glyphicon glyphicon-unchecked";
            div.style = "color: black";
        }
    }

    // Removes a specific task from the 
    let removeTask = document.createElement('span');
    removeTask.title = "Remove Task";
    removeTask.className = "glyphicon glyphicon-trash"
    removeTask.onclick = () => {
        div.remove();
        let currProject = JSON.parse(localStorage.getItem(document.getElementById('projectListTitle').innerText));
        console.log('currProject' + currProject);
        for (let i = 0; i < currProject.tasks.length; i++) {
            if (currProject.tasks[i] == string) {
                currProject.tasks.splice(i, 1);
                localStorage.setItem(document.getElementById('projectListTitle').innerText, JSON.stringify(currProject));
                // Break out of the loop to account for if they put the same task multiple times
                break;
            }
        }
        console.log(currProject.tasks);
        console.log(document.getElementById('projectListTitle').innerText);
    }

    
    div.appendChild(removeTask);

    return div;
}

function populateTaskDisplay() {
    // Get the name of the project
    let taskOutput = document.getElementById("taskOutput");
    let titleValue = document.getElementById("projectHeader").value;

    //Searching through localStorage for title
    let project = localStorage.getItem(titleValue);
    project = JSON.parse(project);
    console.log(project);
    

    if (!taskOutput.hasChildNodes() && project.tasks.length != 0) {
        console.log('div creation');
        let div = document.createElement('div');
        div.id = titleValue;
        //display the tasks that were already set
        for (let i = 0; i < project.tasks.length; i++) {
            div.appendChild(createTaskElement(project.tasks[i]));
        }
        taskOutput.appendChild(div);
    }
    else if (taskOutput.childNodes[0].id != titleValue){
        console.log(taskOutput.childNodes[0].id)
        taskOutput.removeChild(taskOutput.childNodes[0]);
        populateTaskDisplay();
    }
    
}


function createTaskDisplay() {
    // Get the name of the project
    let title = document.getElementById("projectHeader").value;

    //Searching through localStorage for title
    let project = localStorage.getItem(title);
    project = JSON.parse(project);

    if (title != "") {
        //Getting the value from the input
        let taskValue = document.getElementById("taskInput").value;

        project.tasks.push(taskValue);
        localStorage.setItem(title, JSON.stringify(project));
    
        document.getElementById('taskOutput').appendChild(createTaskElement(taskValue));
    }

}
