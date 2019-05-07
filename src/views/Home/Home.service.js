import { AxiosDefault } from "../../plugins/axios";

export const HomeService = {
    getBakery() {
        return AxiosDefault.get('/api/bakery').then(res => res.data)
    }
}