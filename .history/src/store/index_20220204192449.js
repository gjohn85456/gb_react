import profileReducer from "./profile/profileReducer";
import { createStore } from "redux";

export const store = createStore(profileReducer) 