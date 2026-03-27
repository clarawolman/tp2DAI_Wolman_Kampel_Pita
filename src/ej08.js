import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = null;

resultado  = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

resultado = await OMDBSearchComplete("bird");
console.log("OMDBSearchByPage", resultado);

resultado = await OMDBGetByImdbID("tt0111161");
console.log("OMDBSearchByPage", resultado);


