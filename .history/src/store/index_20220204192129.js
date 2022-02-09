import profileReducer from "./profile/profileReducer";
import { createStore } from "redux";

const store = createStore(profileReducer)