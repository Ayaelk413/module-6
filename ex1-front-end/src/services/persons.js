//fichier qui va communiquer avec le back 
import axios from "axios";
const baseUrl = "http://localhost:3001/phonebook";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) =>
      response.data.map((person) => ({ ...person, id: person.id }))
    );
  };

  export default {
    getAll,
  }