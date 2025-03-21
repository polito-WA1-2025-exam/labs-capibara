"use strict";

import * as db from "../dbFunctions"

export function getMainCollection() {
    return(db.getOrders())
}