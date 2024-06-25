import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  server: {
    port: 3000
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'main_app',
          remotes: {
            module_foo: 'module_foo@http://localhost:3001/mf-manifest.json',
          },
          shared: ['react', 'react-dom', 'react-router-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
