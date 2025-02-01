/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pinnaclewise.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add better JSON parsing error handling
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'json-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    });

    return config;
  },
  serverExternalPackages: ['next-mdx-remote']
}

module.exports = nextConfig