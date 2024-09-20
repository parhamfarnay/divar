import api from "configs/api";
const addCategory = (data) => api.post("categor", data);
const getCategory = () => api.get("categor");
export { addCategory, getCategory };
