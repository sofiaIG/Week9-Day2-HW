import {useState} from "react";

const SightingsForm = ({addSighting}) => {
    
    const [species, setSpecies] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');


    const handleSpeciesChange = event =>setSpecies(event.target.value);
    const handleLocationChange = event =>setLocation(event.target.value);
    const handleDateChange = event =>setDate(event.target.value);



    const handleSubmit = e => {
        e.preventDefault()
        const sightings = {
          species,
          location,
          date
          }
          addSighting(sightings);
          setSpecies('');
          setLocation('');
          setDate('');
        }

    return (
        <form onSubmit={handleSubmit} id="sightings-form" >
            <h2>Add a Sighting</h2>
            <div className="formWrap">
                <label htmlFor="species">Species:</label>
                <input value = {species} onChange={handleSpeciesChange} type="text" id="species"  />
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location:</label>
                <input value = {location} onChange={handleLocationChange} type="text" id="location"  />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Date:</label>
                <input value = {date} onChange={handleDateChange} type="date" id="date"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default SightingsForm;