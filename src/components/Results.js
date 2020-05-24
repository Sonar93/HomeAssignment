import React from "react";
import Resultcard from "./resultcard";

function Results(data) {
  let returnData = "";
  if (data.data.length > 0) {
    returnData = data.data.map((x) => (
      <Resultcard key={x.id} data={x.attributes} />
    ));
  } else {
    returnData = "Click on services to view the providers data";
  }

  return (
    <>
      <h3>Results</h3>
      <div className="row">{returnData}</div>
    </>
  );
}

export default React.memo(Results);
