import { request } from "../utils/axios";


export function getPlanList() {
    return request({ url: '/plan', method: "get" })
}

export function addPlan(data) {
    return request({ url: '/plan', method: "post", params: data })
}

export function delectePlan(id) {
    return request({ url: '/plan', method: "post", params: id })
}