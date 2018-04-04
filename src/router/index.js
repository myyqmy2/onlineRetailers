import Vue from 'vue'
import Router from 'vue-router'
import fushi from '@/components/pages/fushi'
import shouye from '@/components/pages/shouye'
import shuma from '@/components/pages/shuma'
import dianqi from '@/components/pages/dianqi'
import shipin from '@/components/pages/shipin'
import jiaju from '@/components/pages/jiaju'
import muying from '@/components/pages/muying'
import cart from '@/components/pages/gouwuche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fushi',
      name: 'fushi',
      component: fushi
    },
    {
      path: '/',
      name: 'home',
      component: shouye
    },
    {
      path: '/shuma',
      name: 'shuma',
      component: shuma
    },
    {
      path: '/dianqi',
      name: 'dianqi',
      component: dianqi
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    },
    {
      path: '/jiaju',
      name: 'jiaju',
      component: jiaju
    },
    {
      path: '/muying',
      name: 'muying',
      component: muying
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
