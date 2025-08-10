const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '', // Change 'portfolio' to your repo name
};

export default nextConfig;
