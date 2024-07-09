const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Updated as per the new configuration
};
