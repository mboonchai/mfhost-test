import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';


const rspack = require('@rspack/core');

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 2000,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'consumer',
           remotes: {
            component1:
               'component1@http://localhost:3000/mf-manifest.json',
           },
          // remotes: {
          //   viteRemote: 'http://localhost:3000/dd/remoteEntry.js',
          // },
          //remoteType: 'module',
          shared: ['react', 'react-dom'],
        }),
        new rspack.CssExtractRspackPlugin({}),
      ],
     
      module: {
        rules: [
          {
            test: /\.css$/i,
            oneOf: [
              {
                test: /\.tw\.css$/i,
                use: [
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                      postcssOptions: {
                        plugins: {
                          tailwindcss: {},
                          autoprefixer: {},
                        },
                      },
                    },
                  },
                ],
                type: 'javascript/auto',
              },
              {
                use: [
                  {
                    loader: rspack.CssExtractRspackPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                      postcssOptions: {
                        plugins: {
                          tailwindcss: {},
                          autoprefixer: {},
                        },
                      },
                    },
                  },
                ],
                type: 'javascript/auto',
              },
            ],
          },
        ],
      },

    },
    
  },

 
});
