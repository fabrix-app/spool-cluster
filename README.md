# spool-cluster

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


:package: ClusterSpool

A Spool to extend Fabrix with [Clustering worker threads](https://nodejs.org/api/cluster.html#cluster_cluster)

## Install
```sh
$ npm install --save @fabrix/spool-cluster
```

## Configure

```js
// config/main.ts
import { ClusterSpool } from '@fabrix/spool-cluster'
export const main = {
  spools: [
    // ... other spools
    ClusterSpool
  ]
}
```

## Configuration
You can easily extend the cluster

```js
// TODO
```

## Usage
Use spool-cluster to standardize Joi cluster

```js
// TODO
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-cluster.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-cluster
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-cluster/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-cluster/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-cluster.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-cluster
[gitter-image]: http://img.shields.io/badge/+%20GITTER-CLUSTERN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-cluster.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-cluster/coverage

