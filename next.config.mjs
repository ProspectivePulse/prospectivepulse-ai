/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(): {
	return [
		{
			source: "/contact",
			destination: "/",
			permanent: false,
		},
    ];
  },
};

export default nextConfig;
