const textArea = document.querySelector("#inputtext");

textArea.value = localStorage.getItem("save");

function savelocal (){
    localStorage.setItem("save" , textArea.value);
    

    console.log(localStorage.getItem("save"));
}


textArea.addEventListener("keydown", savelocal);

// if(localStorage.getItem("save")){
//     textArea.value = 
// }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }