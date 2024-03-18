import MainPage from './components/MainPage/MainPage'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
