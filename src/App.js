import React, { useEffect, useState } from "react";
import axios from "axios";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri",
  },
  {
    id: 2,
    name: "Paulinha",
  },
  {
    id: 1,
    name: "Marcelo",
  },
  {
    id: 1,
    name: "Rodrigo",
  },
];
function App() {
  const [usuarios, setUsuarios] = useState(usuariosLocal);

  const pegarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        { headers: { Authorization: "gustavo-barbosa-ammal" } }
      )
      .then((response) => {
        // console.log("tudo certo");
        // console.log(response.data);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log("deu errado");
        console.log(error);
      });
  };

  useEffect(() => {
    pegarUsuarios();
  }, []);

  //pratica 2

  const pegarUsuarioPorId = () => {
    //c7bec5a0-fd69-42e3-a128-5ed39d78f97c
    const id = "c7bec5a0-fd69-42e3-a128-5ed39d78f97c";
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,

        { headers: { Authorization: "gustavo-barbosa-ammal" } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pegarUsuarioPorId();

  //PRATICA 3
  const novoUsuario = () => {
    const body = {
      name: "A",
      email: "B",
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          name: "gustavo123456789",
          email: "gustavo123@aaaa123.com",
        },
        {
          headers: {
            Authorization: "gustavo-barbosa-ammal",
          },
        }
      )
      .then((response) => {
        console.log(response);
        pegarUsuarios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer"
        >
          API Labenusers
        </a>
      </p>
      {usuarios.map((usuario, index) => {
        return <p key={index}>{usuario.name}</p>;
      })}
      <button onClick={novoUsuario}>NOVO</button>
    </>
  );
}

export default App;
