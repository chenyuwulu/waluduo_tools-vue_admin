import Vue from 'vue'//引入vue实例
import Router from 'vue-router'//这里是引入vue-router

Vue.use(Router)//在vue实例上挂在vue-router

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  { path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  { path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [
      { path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/dashboard/index'),
        meta: { 
          title: '欢迎页', 
          icon: 'dashboard',
          affix: true
        }
      },{ path: 'system/menu/index',
        name: 'Menu',
        component: () => import('@/views/sysmanage/menu/index'),
        meta: { 
          title: '菜单管理', 
          icon: 'link' 
        }
      },{ path: 'system/department/index',
        name: 'Depart',
        component: () => import('@/views/sysmanage/depart/index'),
        meta: { 
          title: '机构管理', 
          icon: 'link' 
        }
      },{ path: 'system/user/index',
        name: 'User',
        component: () => import('@/views/sysmanage/user/index'),
        meta: { 
          title: '用户管理', 
          icon: 'link' 
        }
      },{ path: 'system/role/index',
        name: 'Role',
        component: () => import('@/views/sysmanage/role/index'),
        meta: { 
          title: '角色管理', 
          icon: 'link' 
        }
      },{ path: 'system/log/index',
        name: 'Log',
        component: () => import('@/views/sysmanage/syslog/index'),
        meta: { 
          title: '日志管理', 
          icon: 'link' 
        }
      },{ path: 'system/config/index',
        name: 'Config',
        component: () => import('@/views/sysmanage/config/index'),
        meta: { 
          title: '配置管理', 
          icon: 'link' 
        }
      },{ path: 'we_service/ctx/index',
        name: 'Ctx',
        component: () => import('@/views/we_service/ctx/index'),
        meta: { 
          title: '内容展示', 
          icon: 'link' 
        }
      },
      // 这里是文章的页面
      { path: 'we_service/article/list',
        name: 'Article',
        component: () => import('@/views/we_service/article/list'),
        meta: { 
          title: '文章列表', 
          icon: 'link' 
        }
      },{ path: 'we_service/article/create',
        name: 'Create',
        component: () => import('@/views/we_service/article/create'),
        meta: { 
          title: '创建文章', 
          icon: 'link' 
        }
      },
      // 这里是琐事便签的页面
      { path: 'we_service/trivia_books/index',
        name: 'Index',
        component: () => import('@/views/we_service/trivia_books/index'),
        meta: { 
          title: '琐事便签-首页', 
          icon: 'link' 
        }
      },{ path: 'we_service/trivia_books/user_list',
        name: 'User_list',
        component: () => import('@/views/we_service/trivia_books/user_list'),
        meta: { 
          title: '琐事便签-用户列表', 
          icon: 'link' 
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', 
    redirect: '/404', 
    hidden: true 
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
