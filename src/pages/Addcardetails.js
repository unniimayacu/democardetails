import React, { useEffect, useState } from "react";
import "./addcardetails.scss";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Getcar from "./Getcar";

function Addcardetails() {
  const [category, setcategory] = useState("");
  const [name, setName] = useState("");
  const [car, setcar] = useState("");
  const [transmission, setTransmission] = useState("");
  const [suspension, setsuspension] = useState("");
  const [wheeltype, setwheeltype] = useState("");
  const [headlighttype, setheadlighttype] = useState("");
  const [view, setView] = useState([]);

  const handlesubmit = () => {
    //  console.log("category", category , "name", name , "car" ,car ,"transmission",transmission,
    //   "suspension",suspension, "wheelType",wheeltype , "headlighttType",headlighttype )
    postData();
  };

  const postData = async () => {
    axios
      .post("https://mobiledev.refogen.com/api/v1/cars/createCars ", {
        category_id: parseInt(category),
        car_name: name,
        car_hp: parseInt(car),
        car_transmission: transmission,
        car_suspension: suspension,
        car_wheelType: wheeltype,
        car_headlightType: headlighttype,
      })
      .then((res) => {
        console.log(res.data.success);
        fetchcardetails()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchcardetails = () => {
    axios
      .get("https://mobiledev.refogen.com/api/v1/cars/getAllCars")
      .then((res) => {
        console.log(res.data);
        setView(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchcardetails();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row  ">
          <div className=" col-xl-12 col-lg-12 col-12 d-flex justify-content-center p-2  ">
            <div className="">
              <div className="card  shadow  add__car_details_card p-5 px-5 ">
                <div className="row p-2  ">
                  <div className="  col-12">
                    <div className="d-flex justify-content-center">
                      <h4 className="h4__color "> Add Car Details</h4>
                    </div>
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white p- d-flex justify-content-start py-1">
                      Category
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      // value={category}
                      onChange={(event) => {
                        setcategory(event.target.value);
                      }}
                    >
                      <option selected>Category</option>
                      <option value={1}>Minicompact</option>
                      <option value={2}>Subcompact</option>
                      <option value={3}>Compact</option>
                    </select>
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white p- d-flex justify-content-start py-1">
                      Car Name
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={name}
                      onChange={(event) =>
                        console.log(setName(event.target.value))
                      }
                    />
                  </div>
                </div>

                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white d-flex justify-content-start py-1">
                      Car hp
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={car}
                      onChange={(event) =>
                        console.log(setcar(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white d-flex justify-content-start py-1">
                      Car transmission
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={transmission}
                      onChange={(event) =>
                        console.log(setTransmission(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white d-flex justify-content-start py-1">
                      Car suspension
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={suspension}
                      onChange={(event) =>
                        console.log(setsuspension(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white d-flex justify-content-start py-1">
                      Car wheelType
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={wheeltype}
                      onChange={(event) =>
                        console.log(setwheeltype(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="row  p-2">
                  <div className=" col-12 ">
                    <label className="text-white d-flex justify-content-start py-1">
                      Car headlightType
                    </label>
                    <input
                      type="text"
                      className="form-control  py-2"
                      placeholder=""
                      value={headlighttype}
                      onChange={(event) =>
                        console.log(setheadlighttype(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="py-2"></div>
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn btn-warning px-3 "
                      onClick={handlesubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row>
        {view
          ? view.map((item) => (
              // <p>{item.car_name}</p>
              <Col>
                <Getcar handlecallback={fetchcardetails} item={item} />
              </Col>
            ))
          : "error"}
      </Row>
    </>
  );
}

export default Addcardetails;
