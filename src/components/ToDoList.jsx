import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox, 
  Paper, 
  Typography 
} from '@mui/material';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Paper elevation={3} className="p-4">
            <Typography variant="h4" component="h1" gutterBottom>
              Todo List
            </Typography>
            <div className="mb-3 d-flex">
              <TextField
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new todo"
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTodo}
                className="ms-2"
              >
                Add
              </Button>
            </div>
            <List>
              {todos.map((todo) => (
                <ListItem
                  key={todo.id}
                  dense
                  button
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    primary={todo.text}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default TodoList;