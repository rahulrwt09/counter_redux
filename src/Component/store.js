import {create_legacyStore} from "redux"
import { reducer } from "./reducer"

const initialstate= {
    counter:0,

}

const store = create_legacyStore(reducer, initialstate)
export default store;