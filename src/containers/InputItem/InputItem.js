import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import "./style.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import EditTodo from "../EditTodo/EditTodo.js";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F2AA4CFF",
    },
  },
});

export default class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: {
        title: "",
        description: "",
        date: new Date(),
        status: "en cours",
      },
      showTaskData: [],
      successAlertMsg: "",
      todoDeleteMsg: "",
      editTaskDataModal: false,
      editTaskData: {
        title: "",
        description: "",
        date: new Date(),
      },
      successTodoUpdatedMsg: "",
    };
  }
  componentDidMount() {
    this.getTaskData();
  }

  addItem = () => {
    const { taskData } = this.state;
    let token = sessionStorage.getItem("token");
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/api/task/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          this.setState({ successAlertMsg: result.message }, () =>
            this.setState({
              taskData: {
                title: "",
                description: "",
                date: new Date(),
                status: "en cours",
              },
            })
          );
          setTimeout(() => {
            this.setState({ successAlertMsg: "" });
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getTaskData() {
    const { taskData } = this.state;
    let token = sessionStorage.getItem("token");
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/api/task/getAll", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          showTaskData: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangehandler = (e) => {
    const { taskData } = this.state;
    taskData[e.target.name] = e.target.value;
    console.log((taskData[e.target.name] = e.target.value));
    this.setState({ taskData });
  };

  onChangeDate = (e) => {};

  clearList = () => {
    this.setState({
      showTaskData: [],
    });
  };
  handleDelete = (id) => {
    let token = sessionStorage.getItem("token");
    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch("http://localhost:8080/api/task/getAll" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          this.setState(
            {
              todoDeleteMsg: result,
            },
            () => this.getTaskData()
          );
          setTimeout(() => {
            this.setState({ todoDeleteMsg: "" });
          }, 1000);
        }
      });
  };
  toggleEditTaskModal = () => {
    this.setState({
      editTaskDataModal: !this.state.editTaskDataModal,
    });
  };
  onChangeEditTodoHandler = (e) => {
    let { editTaskData } = this.state;
    editTaskData[e.target.name] = e.target.value;
    this.setState({ editTaskData });
  };

  editTodo = (id, title, description, date) => {
    this.setState({
      editTaskData: { id, title, description, date },
      editTaskDataModal: !this.state.editTaskDataModal,
    });
  };

  updateTodo = () => {
    let { id, title, description, date } = this.state.editTaskData;
    let token = sessionStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", title);
    urlencoded.append("description", description);
    urlencoded.append("date", date);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("http://localhost:8080/api/task/getAll" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          this.setState(
            {
              editTaskDataModal: false,
              editTaskData: { title, description, date },
            },
            () => this.getTaskData()
          );
          setTimeout(() => {
            this.setState({ editTaskDataModal: false });
          }, 1000);
        }
        if (result.errors === false) {
          this.setState({
            successTodoUpdatedMsg: result,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    const { title, description, date } = this.state.taskData;
    if (this.state.isLoggedIn === false) {
      return <Redirect to="/log-in" />;
    }
    return (
      <Container className="themed-container mt-5" fluid="sm">
        <div className="input-field-container">
          <ThemeProvider theme={theme}>
            <TextField
              type="text"
              name="title"
              placeholder="Task Title"
              value={title}
              onChange={this.onChangehandler}
              color="primary"
              variant="outlined"
            />
            <TextField
              type="text"
              name="description"
              placeholder="Task description"
              value={description}
              onChange={this.onChangehandler}
              color="primary"
              variant="outlined"
              style={{ width: "50%" }}
            />
            <TextField
              name="date"
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={this.onChangehandler}
              fullWidth
              required
            />

            <Button
              color="success"
              className="font-weight-bold add-task"
              onClick={this.addItem}
            >
              +
            </Button>
          </ThemeProvider>
        </div>
        <div class="text-success p-4 mt-2">{this.state.successAlertMsg}</div>
        <TodoList
          showTaskData={this.state.showTaskData}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          todoDeleteMsg={this.state.todoDeleteMsg}
          editTodo={this.editTodo}
          toggleEditTaskModal={this.toggleEditTaskModal}
        />
        <EditTodo
          toggleEditTaskModal={this.toggleEditTaskModal}
          editTaskDataModal={this.state.editTaskDataModal}
          onChangeEditTodoHandler={this.onChangeEditTodoHandler}
          editTodo={this.editTodo}
          editTaskData={this.state.editTaskData}
          updateTodo={this.updateTodo}
          successTodoUpdatedMsg={this.state.successTodoUpdatedMsg}
        />
      </Container>
    );
  }
}
