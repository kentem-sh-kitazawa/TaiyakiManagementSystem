import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { afterEach } from "vitest";

// 各テスト後に自動でクリーンアップ
afterEach(() => {
  cleanup();
});
