let mainbox = document.getElementById("root");
let tmain = document.getElementById("tmain");
let url = "https://jsonplaceholder.typicode.com/todos"

let todolist = async () => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        printTodo(data)
    } catch (error) {
        console.log(error)
    }
}


let printTodo = (data) => {
    data.forEach(element => {
        let row = document.createElement("tr");
        row.className = "t_row";

        let id = document.createElement("td");
        id.textContent = element.id;

        let title = document.createElement("td");
        title.textContent = element.title;

        let complet = document.createElement("td");
        complet.textContent = element.completed;
        if(element.completed == true){
            complet.style.backgroundColor= "green";
        }
        else{
            complet.style.backgroundColor= "red";
        }

        row.append(id, title, complet);
        tmain.append(row)
    });

}
todolist()