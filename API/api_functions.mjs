"use strict";

import * as db from "../dbFunctions"

export function getMainCollection() {
    return(db.getOrders())
}

export function getOrder(orderId) {
    return(db.getOrderById(orderId))
}
