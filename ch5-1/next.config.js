/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // 13.1 or higher
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },

  // 13.5 or higher
  // optimizePackageImports: ['@mui/icons-material'],
};
