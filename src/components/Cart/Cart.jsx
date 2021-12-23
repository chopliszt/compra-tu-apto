import React, { useState, useEffect, useContext } from "react";
// import { Button, Card, Icon, Image } from "semantic-ui-react";
import { useCartContext } from "../../contexts/CartContext";
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
  ] = useCartContext();

  //para traer los apartamentos comprados después del primer render
  useEffect(() => {
    setTimeout(() => {
      //setAptosComprados(obtenerAptosComprados);
    }, 0);
  }, [aptosComprados]);
  //setAptosComprados(obtenerAptosComprados);
  console.log(obtenerAptosComprados);
  console.log(aptosComprados);

  return (
    <div>
      <div className="row mt-3 ms-1">
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table mt-3">
                <caption>
                  Tabla de excelentes compras que has hecho, eres brillante
                </caption>
                <thead className="table-light">
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Acciones</th>
                </thead>
                <tbody>
                  {/* El index lo usare para saber que tabla coloreo */}
                  {aptosComprados.map((apartamento, index) => {
                    return (
                      <>
                        <tr
                          className={
                            index % 2 === 0 ? "table-primary" : "table"
                          }
                        >
                          <td>Mochila de viaje</td>
                          <td>50</td>
                          <td>1</td>
                          <td>
                            🦜
                            <button
                              class="btn btn-primary"
                              onClick={() => {
                                eliminarItem(apartamento.id);
                                console.log(
                                  "Eliminando el articulo: ",
                                  apartamento.id
                                );
                              }}
                            >
                              borrar
                            </button>
                          </td>
                        </tr>
                        <tr
                          className={
                            index % 2 === 0 ? "table-primary" : "table"
                          }
                        >
                          <td>Apple Pencil</td>
                          <td>36</td>
                          <td>1</td>
                          <td>
                            🦃
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                eliminarItem(apartamento.id);
                                console.log(
                                  "Eliminando el articulo: ",
                                  apartamento.id
                                );
                              }}
                            >
                              borrar
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              <strong>TOTAL:</strong>
            </p>
            <button className="btn btn-primary me-1">comprar</button>
            <button
              className="btn btn-info me-1"
              onClick={() => {
                borrarCarrito();
                //alertar();
              }}
            >
              Borrar carritoo
            </button>
            <Link to="/">
              <button className="btn btn-primary me-1">regresar</button>
            </Link>
          </div>
        </div>

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
