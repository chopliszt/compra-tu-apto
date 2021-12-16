import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [aptosComprados, setAptosComprados] = useState([]);
  //trayendonos el context para tener acceso a los metodos del carrito: sumar, eliminar,etc
  //aqui debo intentar {} en vez de []
  const [
    cantidadCompras,
    setCantidadCompras,
    itemsComprados,
    setItemsComprados,
    alertar,
    estaDuplicada,
    borrarCarrito,
    eliminarItem,
    agregarProducto,
    obtenerAptosComprados,
  ] = useContext(CartContext);

  //para traer los apartamentos comprados después del primer render
  useEffect(() => {
    setTimeout(() => {
      setAptosComprados(obtenerAptosComprados);
    }, 5000);
  }, [aptosComprados]);

  console.log(aptosComprados);
  return (
    <div>
      <div className="row mt-3 ms-1">
        {aptosComprados.map((apartamento) => {
          return (
            <>
              <Card.Group>
                <Card>
                  <Image
                    src="/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>T[itulo {apartamento.name}</Card.Header>
                    <p>id: {apartamento.id}</p>
                    <p>precio: {apartamento.price}</p>
                    <p>Cantidad Comprada: {apartamento.quantity}</p>
                    <Card.Description>
                      Descripcion del apartamento
                    </Card.Description>
                    <p>este es otro parrafo</p>
                    <button className="btn btn-primary me-2">
                      Botón auxiliar
                    </button>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => {
                        eliminarItem(apartamento.id);
                        console.log("hola parrot id ", apartamento.id);
                      }}
                    >
                      Borrar este articulo
                    </button>
                  </Card.Content>
                </Card>
              </Card.Group>
            </>
          );
        })}
        <button
          className="btn btn-primary mt-3 me-2"
          onClick={() => {
            borrarCarrito();
            alertar();
          }}
        >
          Borrar todo
        </button>
        <Link to="/">
          <button className="btn btn-primary">regresar</button>
        </Link>
        {/* <Card.Group>
          <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Card.Group> */}
      </div>
    </div>
  );
};

export default Cart;
