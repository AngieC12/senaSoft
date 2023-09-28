import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import IndexBase from "./components/IndexBase";

function App() {
  const [controlador, setControlador] = useState(1);
  const [login, setLogin] = useState(0);

  return (
    <>
      {login == 0 ? (
        controlador == 1 ? (
          <Login
            controlador={controlador}
            setControlador={setControlador}
            login={login}
            setLogin={setLogin}
          ></Login>
        ) : (
          <Register
            controlador={controlador}
            setControlador={setControlador}
          ></Register>
        )
      ) : (
        <IndexBase login={login} setLogin={setLogin}></IndexBase>
      )}
    </>
  );
}

export default App;
