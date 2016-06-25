'use strict'

const tap = require('tap')
const lix = require('../index')
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

tap.equal(lix(text), 18.79, 'It returns expected result')

tap.equal(lix(), 0, 'It returns 0 for no input')

tap.equal(lix('CheezeBallz'), 0, 'It returns 0 for infinity')
