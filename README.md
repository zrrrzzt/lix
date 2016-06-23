[![Build Status](https://travis-ci.org/zrrrzzt/lix.svg?branch=master)](https://travis-ci.org/zrrrzzt/lix)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/lix/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/lix?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# lix
Measure the readability of your text using [LIX-index](https://en.wikipedia.org/wiki/LIX)

## Installation
```sh
$ npm i lix
```

## Usage
```
'use strict'

const lix = require('lix')
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

console.log(lix(text)) // => 18.79
```