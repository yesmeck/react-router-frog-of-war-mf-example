import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = 'module_foo';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'module_foo',
          exposes: {
            './entry': './src/entry.tsx',
            './button': './src/button.tsx',
          },
          shared: ['react', 'react-dom', 'react-router-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
