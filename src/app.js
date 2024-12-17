document.getElementById("myform").addEventListener("submit",function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;   

    sayHi(name,lastName,age);

    document.getElementById("myform").reset();

})

function sayHi(name,lastName,age){
    alert("Hi "+name+" "+lastName+" with "+age+" years old, how are you?, thanks for your time for reading this page");
}



