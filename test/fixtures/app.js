'use strict'
const GenericError = require('../../dist/cluster').GenericError

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
  },
  config: {
    cluster: {
      TestError: class TestError extends GenericError {}
    },
    main: {
      spools: [
        require('../../dist').ClusterSpool
      ]
    }
  }
}


