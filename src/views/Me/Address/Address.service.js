import { AxiosDefault } from "../../../plugins/axios";
import store from '../../../store'

export const addressService = {
    async getAddresses() {
        const id = store.state.me.id
        const res = await AxiosDefault.get(`api/address?userId=${id}`);
        return res.data

    },
    async deleAddress(id) {
        const data = {
            "id": id
        }
        const res = await AxiosDefault.put('api/address/dele', data);
        return res.data;
    },
    async getAddress(id) {
        const res = await AxiosDefault.get(`api/address/address?addressId=${id}`);
        return res.data
    },
    async updataAddress(body) {
        return await AxiosDefault.put(`api/address`, body);

    }
}