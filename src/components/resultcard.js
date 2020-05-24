import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function resultcard(props) {
  const data = props.data;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          {data["card-image"] ? (
            <img
              src={data["card-image"]}
              className="card-img"
              alt={data["name"]}
            />
          ) : (
            ""
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data["name"]}</h5>
            <div className="card-text">
              {data.subspecialties.length > 0 ? (
                <div className="list">
                  <h6>
                    <b>Speciality</b>
                  </h6>
                  <ul>
                    {data.subspecialties.map((x, i) => (
                      <li key={i}> {x} </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resultcard;
