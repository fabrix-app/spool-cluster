import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Utils } from './Utils'
import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class ClusterSpool extends ExtensionSpool {

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    if (!this.app.config.get('cluster')) {
      return Promise.reject(new Error('No configuration found at config.cluster!'))
    }

    return Promise.resolve()
  }

  /**
   * Configure Joi
   */
  configure() {
    return Utils.configure(this.app)
  }

  /**
   * Initializer Joi
   */
  async initialize() {
    return Utils.init(this.app)
  }

  /**
   * unload Joi
   */
  async unload() {
    return Utils.unload(this.app)
  }

  /**
   * Insure that after the app starts, this spool configured as expected
   */
  async sanity() {
    //
    return Promise.resolve()
  }
}
