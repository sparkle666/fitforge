import { Routes, Route } from "react-router";

// import { auth } from "./firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { DotLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
