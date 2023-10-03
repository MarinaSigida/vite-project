import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";

export default function TodoForm({createTodo}) {
  const [input, setInput] = useState("");
  const handleChange = (evt) => {
    setInput(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(input);
    setInput("");
  }

  return (
    <ListItem         sx={{display: 'block'}}
    >
        <form onSubmit={handleSubmit} >
      <TextField
        id="outlined-basic"                
        label="Create new todo"
        variant="outlined"
        onChange={handleChange}
        fullWidth
        value={input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="create todo"
                edge="end"
                type="submit"
              >
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </ListItem>
  );
}
