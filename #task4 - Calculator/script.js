const input = document.getElementById("input-box");
const btn = document.querySelectorAll("button");

let string = "";
let arr = Array.from(btn);

arr.forEach(button => {
    button.addEventListener("click", (val)=>{
        if(val.target.innerHTML == "AC"){
            string = "";
            input.value = string;
            
        }
        else if(val.target.innerHTML == "DEL"){
            string = input.value.slice(0,-1);
            input.value = string;
            
        }
        else if(val.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
            
        }
        else{
            string += val.target.innerHTML;
            input.value = string;
            
        }

    })
})

