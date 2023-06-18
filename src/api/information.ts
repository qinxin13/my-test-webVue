import request from "@/utils/fetch";

export function queryTotal() {
    return request({
        url: '/deail?id=1',
    })
}

export function mainList(params: any) {
    return request({
        url: '/deail?id=2',
        // params
    })
}

// http://testbuild.youedata.cc/zcpgqg/assetauditweb/#/operationManagement"