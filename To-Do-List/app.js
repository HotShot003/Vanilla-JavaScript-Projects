const inputBox = document.getElementById("input-box");
const listContainer = document.getElementsByClassName("list-container")[0];

function addTask() {
  if (inputBox.value.trim() === "") {
    // Ensure input is not empty
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;

    // Create a delete button (span) and add it to the list item (li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×), which looks like a delete button
    span.className = "delete"; // Add a class for styling
    span.onclick = function () {
      // Add click event to delete the task
      this.parentElement.remove();
    };

    li.appendChild(span); // Append the delete button to the list item
    listContainer.appendChild(li); // Append the list item to the container
    inputBox.value = ""; // Clear the input box after adding the task
  }
}

// Add CSS using JavaScript
const style = document.createElement("style");
style.innerHTML = `
body {
    background: #77999980; /* This sets a translucent background color using hexadecimal notation */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    margin-right: 10px;
}


    .todo-app{
        background: #666;
        padding: 20px;
        color: aliceblue;
        padding-left:50px;
        padding-right:50px;
       
    }
    h1 {

        width : 100%;
    }
    button {
        margin-left: 10px;
        background:red;
        color: #fff;
        border: none;
        padding: 11px 20px;
        cursor: pointer;
    }
    button:hover{
        transition : 0.32s;
        background-color: #4CAF50;
    }
    #input-box {
        padding: 10px;
        padding-right: 30px;
        padding-left: 30px;
    }
    .delete {
        margin-left: 10px;
        margin-bottom:20px;
        color: white;
        cursor: pointer;
        font-size:20px;
   
    }
    .delete:hover{
        transition : 0.32s;
    
    }
`;
document.head.appendChild(style);
