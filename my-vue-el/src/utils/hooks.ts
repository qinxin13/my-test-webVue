import { onActivated } from "vue";
import { useRoute } from "vue-router";

/** 
 * 重新激活路由时执行useRefresh的回调，有两种方式都可以，优先路由设置的刷新信息
  ```js
  //方式一：路由上设置刷新信息
 router.push({
    path: 'xxx',
    state: {
        refresh: true,
    }
 })
 //方式二：将某个路由的名字置入刷新列表中，重新激活该路由时也将执行useRefresh的回调
import { addRefresh } from '@/utils/hooks';
addRefresh('accountBook');
  ```
 */
export function useRefresh(refreshFn: () => any) {
    let isSetup = true;
    const route = useRoute();
    onActivated(() => {
        let reFreshed = false;
        if (window.history.state.refresh) {
            if (!isSetup) {
                refreshFn();
                reFreshed = true;
            }
            const newState = { ...window.history.state, refresh: false };
            window.history.replaceState(newState, '');
        }

        if (route.name && reFresh.has(route.name)) {
            if (!isSetup && !reFreshed) {
                refreshFn();
            }
            reFresh.delete(route.name);
        }
        isSetup = false;
    })
}

/** 被置于刷新列表的路由 */
export const reFresh = new Set<string | symbol>();
/** 
 * 添加要刷新的路由
 * @param name 要刷新的路由名  
 */
export function addRefresh(name: string | string[]) {
    if (Array.isArray(name)) {
        for (const item of name) {
            reFresh.add(item);
        }
    } else {
        reFresh.add(name);
    }
    return reFresh;
}
