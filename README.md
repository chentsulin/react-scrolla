# react-scrolla

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> React Infinite Scroll Component

## Install

```
$ npm install react-scrolla
```


## Usage

```js
var ReactScrolla = require('react-scrolla');

<ReactScrolla
  percentage={85}
  onPercentage={this.handleScrollToPercentage}
>
  {items}
</ReactScrolla>
//=>
```


## API

#### props

##### percentage

Type: `number`
Default: `90`

Which percentage when scroll over will trigger `onPercentage`.

##### onPercentage

Type: `function`

How to fetch more items.

##### isLoading

Type: `boolean`
Default: `false`

`onPercentage` will not be triggered when `isLoading` is true.


## License

MIT © [C.T. Lin](http://github.com/chentsulin/react-scrolla)

[npm-image]: https://img.shields.io/npm/v/react-scrolla.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-scrolla
[travis-image]: https://travis-ci.org/chentsulin/react-scrolla.svg
[travis-url]: https://travis-ci.org/chentsulin/react-scrolla
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/react-scrolla.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/react-scrolla
[david_img]: https://img.shields.io/david/chentsulin/react-scrolla.svg
[david_site]: https://david-dm.org/chentsulin/react-scrolla

