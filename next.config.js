module.exports = {
  images: {
    domains: [
      "k.kakaocdn.net",
      "loremflickr.com",
      "image.yes24.com",
      "dummyimage.com",
      "search1.kakaocdn.net",
      "jisungin-bucket.s3.ap-northeast-2.amazonaws.com",
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
