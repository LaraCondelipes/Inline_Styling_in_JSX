import React from "react";
import ReactDOM from "react-dom";

//guardar o JS object numa variável
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "10pz solid black"
};

/*se quisermos mudar o nosso estilo, não precisamos alterar o objecto,
basta atualisar a propriedade no nosso objecto:      */
customStyle.color = "blue";

ReactDOM.render(
  //colocamos o objecto de JS como valor da propriedade style
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
