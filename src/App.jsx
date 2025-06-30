import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import Contactlayout from "./layout/Contactlayout";
import Rootlayout from "./layout/Rootlayout"
import Form from "./Components/Form";
import Info from "./Components/Info";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contactlayout />}>
        <Route path="info" element={<Info />} />
        <Route path="form" element={<Form />} />
        </Route>

        <Route path="Login" element={<Login />} />     
 
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
