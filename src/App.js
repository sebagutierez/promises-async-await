import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  // maneja el ciclo de vida del componente
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/pikachu"
        );
        const { name, sprites } = data;
        setData({
          nombre: name,
          imagen: sprites.front_default,
        });
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error");
      }
    };
    getData();
  }, []);
  const { nombre, imagen } = data;
  return (
    <>
      <div className="body">
        <h1>Promises y Async Await</h1>
        <p>
          Cuando necesitamos ejecutar el código asíncrono en un componente de
          React, generalmente esto involucra utilizar las promesas de JS.
        </p>
        <p>
          Necesitamos importar lo que vamos a utilizar en nuestro componente:
        </p>
        <h2>1. useState</h2>
        <p>
          <b>Para guardar y modificar información.</b>
        </p>
        <h4>const [data, setData] = useState({});</h4>
        <p>
          <b> data:</b> valor por defecto y lugar donde va a estar almacenada la
          información.
        </p>
        {/*  */}
        <h2>2. useEffect</h2>
        <p>
          <b> Para manejar el ciclo de vida de un componente.</b>
        </p>
        <p>
          Es muy importante para que se ejecute una función apenas aparezca el
          componenete y haga un pedido hacia una API externa.
        </p>
        <p>Dentro de las llaves se ubica el bloque de código a ejecutar.</p>
        <h3>Función asíncrona que ejecuta al final</h3>
        <p>const getData = async () </p>
        <h3>Variable que guarda la respuesta de la base de datos</h3>
        <p>const response = await fetch("url");</p>
        <h3>Extrae la data de la db con object destructuring</h3>
        <p>const ( name, sprites ) = await response.json();</p>
        {/*  */}
        <h2>3. Hacer el pedido a la API</h2>
        <p>https://pokeapi.co/api/v2/pokemon/pikachu%C2%A0</p>
        <p>
          Utilizamos los valores name y sprites, propiedades de nombre e imagen.
        </p>
        <h3>Extrae la data guardada con object destructuring</h3>
        <p>const (nombre, imagen) = data</p>
        <img src={imagen} alt={nombre} />
        <p>{nombre}</p>
        <h2>AXIOS</h2>
        <p>Es una API http de cliente basada en XMLHttpRequest.</p>
        <p>Se puede utilizar en el navegador y en un servidor con Node.js</p>
        <p>
          Funciona asíncronamente, permitiendo realizar llamadas API REST con
          retorno JSON.
        </p>
        <p>
          Es uno de los clientes más populares basado en promesas, que es
          simple, liviano y muy fácil de personalizar.
        </p>
        <h3>Instalación</h3>
        <p>npm install axios</p>
        <p>
          Debe ejecutarse en la misma carpeta donde se encuentre package.json
        </p>
        <h3>Importación</h3>
        <p>import axios from "axios";</p>
        <h3>useState: Estado que maneje los posibles errores </h3>
        <p>const [error, setError] = useState("")</p>
        <p>catch (error) (console.log(error)</p>
        <p>setError("Ocurrió un error")</p>
        <h3>Por qué extraemos data del pedido con axios</h3>
        <p>const (data) = await axios.get( "url" )</p>
        <h4>Método GET</h4>
        <p>
          <b>data:</b> Respuesta proporcionada por el servidor
        </p>
        <p>
          <b>statusText:</b> Es el mensaje de estado HTTP de la respuesta del
          servidor
        </p>
        <p>
          <b>config:</b> Configuración que se le proporcionó a Axios para la
          configuración de la solicitud
        </p>
        <p>
          <b>status:</b> Es el código de estado HTTP de la respuesta del
          servidor
        </p>
        <p>
          <b>headers:</b> Los encabezados HTTP que el servidor respondió.
        </p>
        <p>
          <b>request:</b> La solicitud que generó la respuesta
        </p>
        {!error ? (
          <div className="pokemon-card">
            <img src={imagen} alt={nombre} />
            <p>{nombre}</p>
          </div>
        ) : (
          <p>{error}</p>
        )}
      </div>
    </>
  );
}

export default App;
