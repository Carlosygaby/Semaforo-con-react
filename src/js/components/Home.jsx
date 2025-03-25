//include images into your bundle

//create your first component
import { useState, useEffect } from "react";

const Home = () => {
  const [colores, setColores] = useState(["red", "orange", "green"]);
  const [color, setColor] = useState("");
  const [colorActive, setColorActive] = useState("");
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const intervaloId = setInterval(() => {
      let index = colores.indexOf(color);
      let nextColor = colores[(index + 1) % colores.length];
      setColor(nextColor);
      setColorActive(nextColor);
    }, 3000);

    return () => {
      clearInterval(intervaloId);
    };
  }, [color, colores]);

  return (
    <>
      <div className="container  base-metal ">
        <div className="m-auto text-center pt-3 pb-4  mt-5 semaforo">
          {colores.map((color, index) => (
            <div
              style={{
                background: color,
                width: "100px",
                height: "100px",
                boxShadow:
                  color === colorActive ? `5px -8px 114px 55px ${color}` : "",
              }}
              name={color}
              key={index}
              onClick={() => {
                setColor(color);
                setColorActive(color);
              }}
              className={`border rounded-circle mt-3`}
            ></div>
          ))}
        </div>
      </div>
      <div className="container d-flex justify-content-center gap-3 mt-5">
        <button
          onClick={() => {
            if (!colores.includes("purple")) {
              setColores([...colores, "purple"]);
              setIsPurple(true);
            }
          }}
          type="button"
          className="btn btn-success"
        >
          Agregar purple
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            let index = colores.indexOf(color);
            let cambio = colores[(index + 1) % colores.length];
            setColor(cambio);
            setColorActive(cambio);
          }}
        >
          Cambiar manualmente
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            let index = colores.indexOf(color);
            let cambio =
              colores[
                (index + Math.floor(Math.random() * colores.length + 1)) %
                  colores.length
              ];
            setColor(cambio);
            setColorActive(cambio);
          }}
        >
          Cambiar aleatoriamente
        </button>
      </div>
    </>
  );
};

export default Home;
