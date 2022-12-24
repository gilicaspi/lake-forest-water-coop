const nextConfig = {
  experimental: {
    externalDir: true,
    esmExternals: false, // TODO: Gil Note: Try removing this when possible
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
