module.exports = {
  root: true,  // 禁止套娃
  parserOptions: {
    parser: 'babel-eslint',  // babel解析
    sourceType: 'module',
  },
	parser: "vue-eslint-parser",
  env: { // 环境变量
    browser: true,
    node: true,
    es6: true,
  },
  // 扩展风格
  extends: ['airbnb','plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    // 规则
    "quotes": [1, "single"],            // 单引号
    "quote-props":[2, "as-needed"],     // 双引号自动变单引号
    // "semi": [2, "never"],               // 一行结尾不要写分号
    "comma-dangle": [1,"always-multiline"],  // 对象或数组多行写法时，最后一个值加逗号
		"no-tabs": 0,
		"no-console": 0,
		"arrow-body-style": [2, "always"], // 箭头函数不可以用隐式返回
		"no-duplicate-imports": 2, // 禁止模块重复导入
		"padding-line-between-statements": [2,{ blankLine: "always", prev: "*", next: "return" }], // return前空行
		"array-callback-return": 2,  // 数组方法执行return
		"no-underscore-dangle": 0,
		"import/no-default-export": 0,
		"import/prefer-default-export": 0
  },
	// webpack兼容
	settings: {
		"import/resolver": {
			"webpack": {
				//此处config对应webpack.config.js的路径，我这个路径是vue-cli3默认的路径
				"config": "node_modules/@vue/cli-service/webpack.config.js"
			}
		}
}
}
