import { AxiosDefault } from "../../plugins/axios";

export const BakeryService = {
    getBakery(id) {
        return AxiosDefault.get(`/api/bakery/${id}`).then(res => res.data)
        // return AxiosDefault.get('http://yapi.demo.qunar.com/mock/66200/bakery').then(res => res.data)
    },
    addCart(cartID, bakeryId, count) {
        const data = {
            "cartId": cartID,
            "bakeryId": bakeryId,
            "count": count
        }
        return AxiosDefault.post('/api/cart', data).then(res => res.data)
    },

}