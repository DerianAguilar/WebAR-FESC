import "./Css/App.css";
import React, { useState } from "react";
import Logo from "./img/LogoFesc.png";
import { Button } from "react-bootstrap";

const App = () => {
  const [currentModel, setCurrentModel] = useState("model1");
  const [activeButton, setActiveButton] = useState(1);
  const [colorCamera, setColorCamera] = useState("#2980B9");

  const handleButtonClick = (model, buttonId, colorCamera) => {
    setCurrentModel(model);
    setActiveButton(buttonId);
    setColorCamera(colorCamera);
  };

  const cameraStyle = {
    border: `4px solid ${colorCamera}`,
    borderRadius: "10px"
  };

  return (
    <div className="App">
      <div className="leftBar">
        <div className="logo">
          <img src={Logo} className="image" />
        </div>
        <div className="but">
            <Button
              variant="custom"
              className={activeButton === 1 ? "custom-button active" : "custom-button"}
              onClick={() => handleButtonClick("model1",1,"#2980B9")}
            >
              Ingenieria de software
            </Button>
            <Button
              variant="custom"
              className={activeButton === 2 ? "custom-button-2 active" : "custom-button-2"}
              onClick={() => handleButtonClick("model2",2,"#E74C3C")}
            >
              Administración Financiera
            </Button>
            <Button
              variant="custom"
              className={activeButton === 3 ? "custom-button-3 active" : "custom-button-3"}
              onClick={() => handleButtonClick("model3",3,"#2ECC71")}
            >
              Diseño Grafico
            </Button>
            <Button
              variant="custom"
              className={activeButton === 4 ? "custom-button-4 active" : "custom-button-4"}
              onClick={() => handleButtonClick("model4",4,"#9B59B6")}
            >
              Diseño de Modas
            </Button>
        </div>
      </div>
      <div className="camera" style={cameraStyle}>
        <h1>{currentModel}</h1>
      </div>
    </div>
  );
};

export default App;
