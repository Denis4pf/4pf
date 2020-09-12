// utils functions
import Api from "../utils/api";

const API_URL = "https://jsonplaceholder.typicode.com/";
const ITEMS_FOR_PAGE = 10;
const API_REQUEST = new Api(API_URL);
export { API_URL, API_REQUEST, ITEMS_FOR_PAGE };
