import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";

function Control() {
  const [selectedService, setSelectedService] = useState("");
  const [results, setResults] = useState([]);

  const { services, providers } = useContext(UserContext);

  const evntHandleClick = (e) => {
    setSelectedService(e.target.id);
    setResults(fnFilterData(e.target.attributes["data-id"].value));
  };

  const fnFilterData = (serviceName) => {
    var pInclud = providers.included;
    var arrInclude = pInclud.filter(
      (x) => x.attributes.service === serviceName
    );
    var data = providers.data;
    var arrData = [];
    for (let i = 0; i < arrInclude.length; i++) {
      arrData.push(
        data.find(
          (x) =>
            x.relationships[arrInclude[i].type].data[0].id === arrInclude[i].id
        )
      );
    }
    return arrData;
  };

  useEffect(() => {
    if (selectedService) {
      var elems = document.querySelectorAll("li.highlighted");
      [].forEach.call(elems, function (el) {
        el.classList.remove("highlighted");
      });
      document.getElementById(selectedService).className = "highlighted";
    }
  }, [selectedService]);

  return (
    <>
      <div className="col-md-12">
        <div className="row">
          <div
            className="col-md-3 col-sm-12"
            style={{ border: "2px dotted #000" }}
          >
            <h3>Services</h3>
            <div className="col-md-12">
              {services.data ? (
                <ul style={{ listStyleType: "none", padding: "0" }}>
                  {services.data.map((service) => (
                    <li
                      key={service.id}
                      onClick={evntHandleClick}
                      id={service.id}
                      data-id={service.attributes.name}
                    >
                      {service.attributes.name}
                    </li>
                  ))}
                </ul>
              ) : (
                "Please Wait. Loading Data..."
              )}
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="col-md-12">
              <Results data={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Control;
