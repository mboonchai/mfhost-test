import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";


//@ts-ignore
const mfHost = "http://localhost:2000/mf-manifest.json"



export default defineConfig({
  plugins: [pluginReact(),
            pluginModuleFederation({
            name: "allAlertComponents",
            remotes: {
                goformComponents: "goformComponents@" + mfHost,
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: "19.0.0",
                },
                "react-dom": {
                    singleton: true,
                    eager: true,
                    requiredVersion: "19.0.0",
                },
                "styled-components": {
                    singleton: true,
                    requiredVersion: "19.0.0",
                },
            },
        }),
    ],

  server: {
    port: 3000,
  },
 

 
});
