import { defineConfig } from "vitest/config"; // インポート元を変更
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // テスト環境をjsdomに設定
    globals: true, // グローバル変数を有効にする
    setupFiles: "./vitest.setup.ts", // テスト実行前にセットアップファイルを実行
  },
});
