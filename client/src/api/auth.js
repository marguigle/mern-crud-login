/* import axios from "axios";
const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
 */
import axios from "axios";
const API = "http://localhost:4000/api";

export const registerRequest = (user) => {
  return axios
    .post(`${API}/register`, user)
    .then((response) => {
      // Manejar la respuesta exitosa si es necesario
      return response.data; // O cualquier otra cosa que necesites devolver
    })
    .catch((error) => {
      // Manejar el error de la solicitud
      console.error("Error en la solicitud de registro:", error);
      throw error; // Puedes lanzar el error nuevamente para que el código que llamó a esta función pueda manejarlo
    });
};
