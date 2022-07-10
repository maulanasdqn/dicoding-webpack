import "windi.css";
import initAxios from "./service/axios.js";
import { API_URL } from "./utilities/contstant.js";
import { Card } from './components/card.js'

initAxios(API_URL);

new Card()
