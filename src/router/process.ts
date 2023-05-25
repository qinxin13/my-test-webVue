import * as nProgress from "nprogress";
import { Router } from "vue-router";

/** 顶部进度条 */
export function createProgress(router: Router) {
    router.beforeEach(() => {
        nProgress.start();
    })

    router.afterEach(() => {
        nProgress.done();
    })
}
