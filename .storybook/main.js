/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    "v22.x": {
      title: "v22.x",
      url: "https://v22-x--657a22d9f0d80affc749676c.chromatic.com",
      expanded: false,
    },
    "v23.x": {
      title: "v23.x",
      url: "https://v23-x--657a22d9f0d80affc749676c.chromatic.com",
    },
  },
};
export default config;
