let form = document.querySelector("form")
let takeinput = document.getElementById("task");
let select = document.getElementById("priority");
let tbody = document.querySelector("tbody");



let alltask = [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        input: takeinput.value,
        selection: select.value,
    }
    alltask.push(data);
    tbody.innerHTML = "";
    alltask.map((e) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = e.input;
        td2.innerText = e.selection;
        tr.append(td1, td2);
        tbody.append(tr)
        if (select.value == "High") {
            tr.style.backgroundColor = "red";
        } 
        else if(select.value == "Low") {
            tr.style.backgroundColor = "green"
        }
    })
    


    takeinput.value = "";
    select.value = "";

})

