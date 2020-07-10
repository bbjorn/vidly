import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.reponse && error.reponse.status >= 400 && error.repose.status < 500;

  if (!expectedError) {
    //Unexpected (Network Down, server down, database down, bug)
    // - Log them
    // - Display a generic and friendly error message
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
