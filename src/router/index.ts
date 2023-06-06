import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Desk from '@/layouts/desk.vue';
import { createProgress } from './process';
import { ElMessage } from 'element-plus';

/** meta类型说明 */
export interface MetaType {
    /** 菜单标题 */
    title?: string;
    /** 是否隐藏菜单 默认false */
    hiddenNav?: boolean;
    /** 要激活的其他路由名称，一般详情里面激活对应列表，以此生成面包屑 */
    active?: string;
    /** 页面是否缓存，默认true */
    keepAlive?: boolean;
}
// name会用作菜单的key,且必须与path一致，根路径请加左/，请必填
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        redirect: '/desk/main',
        meta: {
            hiddenNav: true
        }
    },
    {
        path: '/desk',
        name: 'desk',
        redirect: '/desk/main',
        component: Desk,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'main',
                name: 'main',
                component: () => import('@/views/main/main.vue'),
                meta: {
                    title: '欢迎'
                },
            },
            {
                path: 'demo',
                name: 'demo',
                component: () => import('@/views/demo/demo.vue'),
                meta: {
                    title: '样本'
                },
            },
        ]
    },
    {
        path: '/animationtest',
        name: 'animationtest',
        redirect: '/animationtest/animation',
        component: Desk,
        meta: {
            title: '动画测试'
        },
        children: [
            {
                path: 'animation',
                name: 'animation',
                component: () => import('@/views/animation/animation.vue'),
                meta: {
                    title: '动画'
                },
            },
        ]
    },
    {
        path: '/cachetest',
        name: 'cachetest',
        redirect: '/cachetest/cache',
        component: Desk,
        meta: {
            title: '路由缓存测试'
        },
        children: [
            {
                path: 'cache',
                name: 'cache',
                component: () => import('@/views/cache/cache.vue'),
                meta: {
                    title: '已缓存'
                },
            },
            {
                path: 'nocache',
                name: 'nocache',
                component: () => import('@/views/cache/nocache.vue'),
                meta: {
                    title: '未缓存',
                    keepAlive: false,
                },
            },
            {
                path: 'storecache',
                name: 'storecache',
                component: () => import('@/views/cache/storecache.vue'),
                meta: {
                    title: 'pinia已缓存'
                },
            },
            {
                path: 'storenocache',
                name: 'storenocache',
                component: () => import('@/views/cache/storenocache.vue'),
                meta: {
                    title: 'pinia未缓存',
                    keepAlive: false,
                },
            },
        ]
    },
    {
        path: '/external',
        name: 'external',
        redirect: '/external/vueorg',
        component: Desk,
        meta: {
            title: '开发文档'
        },
        children: [
            {
                path: 'vueorg',
                name: 'vueorg',
                component: () => import('@/views/external/vueorg.vue'),
                meta: {
                    title: 'Vue3文档'
                },
            },
            {
                path: 'viteorg',
                name: 'viteorg',
                component: () => import('@/views/external/viteorg.vue'),
                meta: {
                    title: 'Vite文档'
                },
            },
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
        meta: {
            hiddenNav: true
        }
    },
]

export type MenuType = {
    meta?: MetaType;
    name: string;
    path: string;
    children?: MenuType[];
}

function getMenus(routes: RouteRecordRaw[]): MenuType[] {
    return routes.map(item => {
        const { meta, name, path } = item;
        if (typeof name !== 'string') {
            throw new TypeError('route name must be set!');
        }
        const menu: MenuType = {
            meta,
            name,
            path,
        }
        if (meta?.hiddenNav) return null;
        if (item.children?.length) {
            menu.children = getMenus(item.children)
        }
        return menu;
    }).filter(Boolean) as MenuType[];
}

export const menus = getMenus(routes);

const router = createRouter({
    history: createWebHashHistory(window.location.pathname),
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.matched?.length) {
        if (from.name) {
            ElMessage.error('您要前往的页面不存在！');
            next(from);
        } else {
            next('/404');
        }
        return;
    }
    next();
})
createProgress(router);
export default router;
