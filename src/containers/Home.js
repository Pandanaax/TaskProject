import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./Home.css";

function Home() {
  const [shortDescribe, setShortDescribe] = useState("");
  const [longDescribe, setLongDescribe] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function addTodo(event) {
    setItems([longDescribe, shortDescribe]);
    return longDescribe.length > 0 && shortDescribe.length > 0;
  }

  //   function deleteTodo(item) {
  //     const array = items;
  //     const index = array.indexOf(item);
  //     array.splice(index, 1);
  //     item = array;
  //   }

  function renderTodos() {
    return items.map((item) => {
      return <ListGroup.Item key={item}>{item}</ListGroup.Item>;
    });
  }

  return (
    <div className="Todo">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="shortDescribe">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            autoFocus
            type="texte"
            value={shortDescribe}
            placeholder="Titre"
            onChange={(e) => setShortDescribe(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="longDescribe">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="texte"
            value={longDescribe}
            placeholder="Description"
            onChange={(e) => setLongDescribe(e.target.value)}
          />
        </Form.Group>
        <Button onClick={addTodo} className="btn btn-primary">
          Ajouter
        </Button>
        <ListGroup>{renderTodos()}</ListGroup>
      </Form>
    </div>
  );
}

//   const [task, setTask] = useState("");
//   const [describ, setDescrib] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setTask(newValue);
//     setDescrib(newValue);
//   }

//   function addTask() {
//     setItems((prevValues) => {
//       return [...prevValues, task, describ];
//     });
//     setTask("") && setDescrib("");
//   }

//   function deleteItem(id) {
//     setItems((prevValues) => {
//       return prevValues.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input
//           name="taskInput"
//           type="text"
//           onChange={handleChange}
//           value={task}
//         />
//         <input
//           name="describInput"
//           type="text"
//           onChange={handleChange}
//           value={describ}
//         />
//         <button onClick={addTask}>
//           <span>ADD</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map((item, index) => (
//             <ToDoItem
//               key={index}
//               id={index}
//               text={item}
//               onChecked={deleteItem}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default Home;
