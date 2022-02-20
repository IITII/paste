import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'

import user from './modules/user'
import common from './modules/common'

// Vuex SingleTon
let storeInstance
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const moduleNames = [
  './modules/user',
  './modules/common'
]

export default store(function (/* { ssrContext } */) {
  if (storeInstance) return storeInstance
  storeInstance = createStore({
    modules: {common, user},
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
  if (module.hot) {
    module.hot.accept(moduleNames, () => {
      // 重新获取更新后的模块对象
      const newUser = require('./modules/user').default
      const newCommon = require('./modules/common').default
      // 热重载模块
      storeInstance.hotUpdate({
        modules: {
          user: newUser,
          common: newCommon,
        }
      })
    })
  }
  return storeInstance
})
