const { Validator } = require('jsonschema')
const apiSchema = require('./generator/schema.json')

const v = new Validator();

const successRes = v.validate({
  name: '11',
  age: 11
}, apiSchema)

console.log(successRes?.errors)

const failRes = v.validate({
  name: 11,
  age: 11
}, apiSchema)

console.log(failRes?.errors)