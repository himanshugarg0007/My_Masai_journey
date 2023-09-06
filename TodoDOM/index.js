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
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = data.input;
        td2.innerText = data.selection;
        tr.append(td1, td2);
        tbody.append(tr)
        if (select.value == "High") {
            td2.style.backgroundColor = "red";
        } 
        else if(select.value == "Low") {
            td2.style.backgroundColor = "green"
        }
    takeinput.value = "";
    select.value = "";
})

