import esbuild from "esbuild";
import fs from "fs";
import path from "path";

async function runBuild(): Promise<void> {
  // Use the current working directory as the project root
  const projectRoot = process.cwd();
  const srcDir = path.join(projectRoot, "src");
  const distDir = path.join(projectRoot, "dist");

  // 1. Compile TypeScript inside the 'src' folder into minified JS in 'dist'
  await esbuild.build({
    entryPoints: [path.join(srcDir, "content.ts")],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ["chrome100"],
    outfile: path.join(distDir, "content.js"),
  });

  // 2. Ensure 'dist' exists and copy the manifest
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.copyFileSync(
    path.join(srcDir, "manifest.json"),
    path.join(distDir, "manifest.json"),
  );

  console.log("⚡ Build completed successfully in the /dist folder!");
}

runBuild().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
