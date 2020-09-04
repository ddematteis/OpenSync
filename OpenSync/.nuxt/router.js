import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f1eb399 = () => interopDefault(import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1685f4a8 = () => interopDefault(import('../src/pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1e713f0a = () => interopDefault(import('../src/pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _5ed68e5e = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3f1eb399,
    name: "about"
  }, {
    path: "/contact",
    component: _1685f4a8,
    name: "contact"
  }, {
    path: "/posts/:id?",
    component: _1e713f0a,
    name: "posts-id"
  }, {
    path: "/",
    component: _5ed68e5e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
