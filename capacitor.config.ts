import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.radiantvisual.app',
  appName: 'Color Visualizer',
  webDir: 'out',
bundledWebRuntime: false,
  server: {
    url:'https://aakarvisual.vercel.app',
    cleartext: true
  }
};

export default config;
