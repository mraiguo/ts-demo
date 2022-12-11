const path = require('path')
const fs =  require('fs')
const TJS = require('typescript-json-schema')

// 解析接口定义文件
const program = TJS.getProgramFromFiles(
  [path.join(__dirname, './api-user.ts')],
  { strictNullChecks: true },
);

// 将interface转为schema，传入"*"将转换全部interface
const schema = TJS.generateSchema(program, "User", { required: true }) || {};

fs.writeFileSync(path.join(__dirname, "./", "schema.json"), JSON.stringify(schema, null, 2)); 
