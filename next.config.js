module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "k.kakaocdn.net",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "image.yes24.com",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "dummyimage.com",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "search1.kakaocdn.net",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "jisungin-bucket.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: "/not-found",
        permanent: false,
      },
    ];
  },
};
