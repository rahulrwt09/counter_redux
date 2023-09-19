import {create_legacyStore} from "redux"
import { reducer } from "./reducer"

const initialstore= {
    counter:0,

}

const store = create_legacyStore(reducer, initialstore)