module.exports = {
  images: {
    domains: [
      "k.kakaocdn.net",
      "loremflickr.com",
      "image.yes24.com",
      "dummyimage.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
