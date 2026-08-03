// Builds the FTP-ready static export into out/. Wrapper instead of an npm
// env prefix because those are shell-specific — this works on Windows and Unix.
import { spawnSync } from "node:child_process";

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "1" },
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
