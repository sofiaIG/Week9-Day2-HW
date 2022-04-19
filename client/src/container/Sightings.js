import { useState, useEffect } from "react";
import SightingsForm from "../components/SightingsForm";
import SightingsGrid from "../components/SightingsGrid";
import SightingService from "../services/SightingService";


function Sightings() {

  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(()=>{
    SightingService.getSightings()
    .then(birdSightings => setBirdSightings(birdSightings))
      
  }, []);


  const addSighting = sighting =>{
      SightingService.postSighting(sighting)
      .then(savedSighting => setBirdSightings([...birdSightings, savedSighting]))
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  return (
    <>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} />
    </>
  );
}

export default Sightings;
