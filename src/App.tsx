import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>  
  },
  {
    path: '/Register',
    element: <Register/>
  },
  {
    path: '/Post',
    element: <Post/>
  },
  {
    path: '*',
    errorElement:<ErrorPage/>
  }

])

function App() {

  return (
    <div className="App">
      <h1>OnePageSite</h1>
      <hr/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  )
}

export default App
