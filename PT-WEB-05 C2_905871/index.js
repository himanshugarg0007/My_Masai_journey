// fill in javascript code here

let myform = document.querySelector("form");
let emName = document.getElementById("name");
let emId = document.getElementById("docID");
let dep = document.getElementById("dept");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mob = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let alldata = [];
myform.addEventListener("submit", function(e){
    e.preventDefault();
    let data = {
        Ename : emName.value,
        Eid : emId.value,
        Dep : dep.value,
        Exp : exp.value,
        Email : email.value,
        Mob : mob.value,
    };
    alldata.push(data);
    tbody.innerHTML = "";
    alldata.map((e)=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerText = e.Ename;
    td2.innerText = e.Eid;
    td3.innerText = e.Dep;
    td4.innerText = e.Exp;
    td5.innerText = e.Email;
    td6.innerText = e.Mob;
    td7.innerText = "N.A";
    if(+td4.innerText > 5){
        td7.innerText = "Senior";
    }
    else if(+td4.innerText >= 2 && +td4.innerText <= 5){
        td7.innerText = "Junior";
    }
    else if(+td4.innerText <= 1){
        td7.innerText ="Fresher";
    }
    td8.innerText = "Delete";
    td8.addEventListener("click",function(){
        tr.innerText = "";
    })
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
})
emName.value = "";
emId.value = "";
dep.value = "";
exp.value = "";
email.value ="";
mob.value = "";
})
