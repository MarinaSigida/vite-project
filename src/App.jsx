import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar/>
      <TodoList/>
    </>
  );
}
