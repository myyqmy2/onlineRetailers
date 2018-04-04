import {fushi} from './data/fushi'
import {shipin} from './data/shipin'
import {dianqi} from './data/dianqi'
import {shuma} from './data/shuma'
import {jiaju} from './data/jiaju'
import {muying} from './data/muying'
import {remai, tuijian, renqi} from './data/shouye'

var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios)
mock.onGet('/fushi').reply(200, {
  fushi
})
mock.onGet('/shuma').reply(200, {
  shuma
})
mock.onGet('/dianqi').reply(200, {
  dianqi
})
mock.onGet('/shipin').reply(200, {
  shipin
})
mock.onGet('/muying').reply(200, {
  muying
})
mock.onGet('/jiaju').reply(200, {
  jiaju
})
mock.onGet('/shouye/remai').reply(200, {
  remai
})
mock.onGet('/shouye/tuijian').reply(200, {
  tuijian
})
mock.onGet('/shouye/renqi').reply(200, {
  renqi
})

export default mock
