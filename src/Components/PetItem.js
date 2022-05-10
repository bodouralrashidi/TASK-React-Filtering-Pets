import React, { useState } from "react";
import PetList from "./PetsList";
import pets from "../petsData";
function PetItem({ pet , handleAdopt
}) {
  const [img, setimg] = useState(pet.image);

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={img} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setimg(pet.image2)}
          >
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => handleAdopt(pet)}
          >
            Adopt
            {/* PetItem = adopt.filter((item) => item.name !== pet.name)  */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
