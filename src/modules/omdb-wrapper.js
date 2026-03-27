import axios from "axios";

const APIKEY = "4d94cab3";

const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {
      respuesta: false,
      cantidadTotal: 0,
      datos: []
    };

    try {
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${encodeURIComponent(searchText)}&page=${page}`;
    const apiResponse = await axios.get(url);
    const data = apiResponse.data;

    if (data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = Number(data.totalResults);
      returnObject.datos = data.Search;
    }
    } catch (error) {
    console.error("Error en OMDBSearchByPage:", error.message);
    }

    return returnObject;
};


const OMDBSearchComplete = async (searchText) => {
  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };

  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : {}
    };

  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;

};

// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};