import axios from "axios";
import React from "react";
import { Card, Container } from "react-bootstrap";

function Getcar({ item, handlecallback }) {
  const deleteData = async (car_id) => {
    console.log(car_id)
    await axios
      .post("https://mobiledev.refogen.com/api/v1/cars/deleteCars", {
       car_id:car_id
      })
      .then((res) => {
        handlecallback();
      });
  };

  return (
    <>
      <Container>
        <Card id="card" className="px-5 p-4 my-4  cards__bgcolor">
          <Card.Body>
            <Card.Title as="div">
              <h5>car id : {item.car_id} </h5>
            </Card.Title>
            <Card.Title as="div">
              <p>category id : {item.category_id} </p>
            </Card.Title>
            <Card.Title as="div">
              <p> carName : {item.car_name} </p>
            </Card.Title>
            <Card.Title as="div">
              <p>carhp : {item.car_hp} </p>
            </Card.Title>
            <Card.Title as="div">
              <p> transmission : {item.car_transmission} </p>
            </Card.Title>
            <Card.Title as="div">
              <p>suspension : {item.car_suspension} </p>
            </Card.Title>
            <Card.Title as="div">
              <p>Wheeltype : {item.car_wheelType} </p>
            </Card.Title>
            <Card.Title as="div">
              <p>headlighttype : {item.car_headlightType} </p>
            </Card.Title>
            <Card.Title as="div">
              <button
                onClick={() => deleteData(item.car_id)}
                className="btn btn-danger"
              >
                Delete{" "}
              </button>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Getcar;
