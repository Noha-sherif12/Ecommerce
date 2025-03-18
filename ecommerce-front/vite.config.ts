// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';
// import path from 'path';



// export default defineConfig({
//   resolve: {
//     alias: {
//       "@assets": path.resolve(__dirname, "./src/assets"),
//       "@components": path.resolve(__dirname, "./src/components"),
//       "@layouts": path.resolve(__dirname, "./src/layouts"),
//       "@pages": path.resolve(__dirname, "./src/pages"),
//       "@store": path.resolve(__dirname, "./src/store"),
//       "@utils": path.resolve(__dirname, "./src/utils"),
//       "@hooks": path.resolve(__dirname, "./src/hooks"),
//       "@routes": path.resolve(__dirname, "./src/routes"),
//       "@styles": path.resolve(__dirname, "./src/styles"),
//       "@services": path.resolve(__dirname, "./src/services"),
//       "@customTypes": path.resolve(__dirname, "./src/types"),
//     }
//   },
//   plugins: [react(), svgr()],
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@services": path.resolve(__dirname, "src/services"),
      "@types": path.resolve(__dirname, "src/types"),
      "@validations": path.resolve(__dirname, "src/validations")
    }
  },
  plugins: [react(), svgr()],
});
