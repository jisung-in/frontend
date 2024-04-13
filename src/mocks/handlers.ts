import { http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

export const handlers = [
  http.get("/api/my/star", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        postId: 1,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 2,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 3,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 4,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 5,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 6,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 7,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 8,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 9,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
    ]);
  }),
];
