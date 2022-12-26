const svgr = require("vite-plugin-svgr")

module.exports = {
  async viteFinal(config) {
    config.plugins = [...config.plugins, svgr()]
    return config
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
}
