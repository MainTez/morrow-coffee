import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesProject =
  Boolean(process.env.GITHUB_ACTIONS) &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPagesProject ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPagesProject ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
