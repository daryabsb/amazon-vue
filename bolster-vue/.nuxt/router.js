import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da7b5f02 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */))
const _2579ad17 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages_blog-details" */))
const _1dc0448a = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages_blog-one" */))
const _681d20a0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _02c68874 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages_checkout" */))
const _49d67ad0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _40f2d7d3 = () => interopDefault(import('..\\pages\\diction-three.vue' /* webpackChunkName: "pages_diction-three" */))
const _58401e7e = () => interopDefault(import('..\\pages\\diction-two.vue' /* webpackChunkName: "pages_diction-two" */))
const _7136e2ca = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages_gallery-one" */))
const _2afa9f99 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _361bfe38 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _fe997ed0 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _4832f19e = () => interopDefault(import('..\\pages\\products-details\\_id.vue' /* webpackChunkName: "pages_products-details__id" */))
const _6152fc82 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _da7b5f02,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _2579ad17,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _1dc0448a,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _681d20a0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _02c68874,
    name: "checkout"
  }, {
    path: "/contact",
    component: _49d67ad0,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _40f2d7d3,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _58401e7e,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _7136e2ca,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _2afa9f99,
    name: "login"
  }, {
    path: "/products",
    component: _361bfe38,
    name: "products"
  }, {
    path: "/signup",
    component: _fe997ed0,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _4832f19e,
    name: "products-details-id"
  }, {
    path: "/",
    component: _6152fc82,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
