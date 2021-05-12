'use strict'
const suiteTest = require('../../dd-trace/test/plugins/suite')

describe('Plugin', () => {
  describe.skip('generic-pool test suite', () => {
    suiteTest({
      modName: 'generic-pool',
      repoUrl: 'coopernurse/node-pool',
      commitish: 'v2.5.0',
      testCmd: 'node_modules/.bin/tap test/*-test.js --no-coverage'
    })
  })
})
