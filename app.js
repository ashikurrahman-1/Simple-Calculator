
let str = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            let result = eval(str);
            document.getElementById("display").value = result;
            str = result;
        }else if(e.target.innerHTML == "C"){
            str = "";
            document.getElementById("display").value = str;
        }else {
            console.log(e.target);
            str += e.target.innerHTML;
            document.getElementById("display").value = str;
        }
    })
})
