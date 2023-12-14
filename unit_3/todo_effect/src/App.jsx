import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  let [loading, setloading] = useState(true);
  let [err, seterr] = useState(null);
  let [page, setpage] = useState(1);
  let [todos, settodos] = useState([]);
  let [text, settext] = useState("");

  useEffect(() => {
    fetchdata(page);
  }, [page]);
  async function fetchdata(page) {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}`
      );
      settodos(res.data);
      console.log(res.data);
      setloading(false);
    } catch (error) {
      seterr(error);
      setloading(false);
    }
  }
  async function addtodo() {
    if(text.trim !== ""){
    try {
      let res = await axios.post(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}`,
        {
          title: text,
          completed: false
        }
      );
      settodos([...todos, res.data]);
      settext("");
    }
     catch (error) {
      seterr(error);
      setloading(false);
    }
  }
  }
  let togglestatus = async (id) => {
    try {
      let updateTodo = todos.map((todo) =>
        todo.id === id ? { ...todos, completed: !todo.completed } : todo
      );
      settodos(updateTodo);
      await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}?_page=${page}`,
        {
          completed: todos.find((todo) => todo.id === id).completed
        }
      );
    } catch (error) {
      seterr(error);
      setloading(false);
    }
  };
  let del = async (id) => {
    try {
      let filtered = todos.filter((todo) => todo.id !== id);
      settodos(filtered);
      await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}?_page=${page}`
      );
    } catch (error) {
      seterr(error);
      setloading(false);
    }
  };

  if (loading) return "Loading";
  if (err) return err;
  return (
    <>
      <div className="App">
        <div id="inp">
          <input
            type="text"
            placeholder="Add new task"
            onChange={(e) => {
              settext(e.target.value);
            }}
            value={text}
          />
          <button onClick={addtodo}>Add Task</button>
        </div>
        <table id="tab">
          {todos.map((ele) => (
            <tr key={ele.id}>
              <th> {ele.id} </th>
              <th> {ele.title} </th>
              <th> {ele.completed ? "complete" : "not complete"} </th>
              <th>
                <button onClick={() => togglestatus(ele.id)}>Toggle</button>
              </th>
              <th>
                <button onClick={() => del(ele.id)}>Delete</button>
              </th>
            </tr>
          ))}
        </table>
      </div>
      <div id="page-nav">
        <button disabled={page === 1} onClick={() => setpage(page - 1)}>
          Prev
        </button>
        <div>current page : {page} </div>
        <button disabled={page === 20} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
}
