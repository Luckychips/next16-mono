import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  'stories': [
    '../src/**/*.stories.@(mjs|ts|tsx)',
  ],
  'addons': [],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
      define: {
        'process.env': {},
        global: {},
      },
    });
  },
};
export default config;