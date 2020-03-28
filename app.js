const express = require('express');
const layout = require('express-layout');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

const TaskList = require("./models/TaskList.js");
const Task = require("./models/Task.js");

const list = new TaskList();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set path for Styles
app.use(express.static('styles'));

// Template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// If go to index, render index EJS file
app.get('/', (req, res) => {
  res.render('./index.ejs');
  
});

//Setting a public folder for our static files
app.use(express.static("public"));
app.use('/view-tasks', express.static('public'));

app.post('/addTask', (req, res) => {
  const taskTitle = req.body.taskTitle;
  const taskDescription = req.body.taskDescription;
  
  list.addTask(new Task(taskTitle, taskDescription))
  console.log("Task Added", list);
  
  res.redirect('/view-list');
});

app.get('/view-list', (req, res) => {
  res.render('view-list.ejs', {list: list.tasks})
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


// const taskList = new TaskList()
// taskList.addTask(new Task("Task 1", "My first Task"));
// console.log(taskList)