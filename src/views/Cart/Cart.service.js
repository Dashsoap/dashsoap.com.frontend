import { AxiosDefault } from "../../plugins/axios";
import store from '../../store'

export const CartService = {
    async getCart(cartId) {
        const data = {
            "cartId": cartId
        }
        const res = await AxiosDefault.get(`/api/cart?id=${data.cartId}`);
        if (!res.code) {
            res.data.body.forEach(element => {
                element.bakery.picture = element.bakery.picture + "-cartTable"
            });
        }

        return res.data;

    },
    async deleBakery(id) {
        const data = {
            "id": id
        }
        const res = await AxiosDefault.put('api/cart/dele', data);
        return res.data;
    },
    getCount(res) {
        let a = 0
        let b = 0
        res.body.forEach(element => {
            a = a + (element.bakery.price * element.count)
        })
        res.body.forEach(element => {
            b = b + (element.bakery.priceVip * element.count)
        })
        if (store.state.me.role === "PUBLIC") {
            return a
        } else {
            return b
        }

    }

}