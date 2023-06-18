import request from "@/utils/fetch";

export function queryTotal() {
    return request({
        url: '/data/asset/queryTotal',
    })
}

export function mainList(params: any) {
    return request({
        url: '/homePage/mainList',
        params
    })
}
