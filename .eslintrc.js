module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "space-before-blocks": "off",
    quotes: "off",
    "no-extra-semi": "off",
    semi: 0
  }
};
