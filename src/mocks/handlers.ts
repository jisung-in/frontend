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
  http.get(`/v1/talk-rooms`, ({ request }) => {
    const url = new URL(request.url);
    const talkRoomId =
      parseInt(url.searchParams.get("talkRoomId") as string) || 0;

    if (talkRoomId) {
      return HttpResponse.json({
        profileImage: faker.image.urlLoremFlickr(),
        username: "작성자 이름",
        title: "토론방 제목",
        content: "토론방 본문",
        bookName: "책 제목",
        bookThumbnail: faker.image.urlLoremFlickr(),
        likeCount: 0,
        readingStatuses: ["읽고 싶은", "읽는 중", "읽음", "잠시 멈춤", "중단"],
        createTime: [2024, 4, 18, 5, 44, 48, 469076867],
        images: [faker.image.urlLoremFlickr()],
        likeTalkRoom: false,
      });
    } else {
      return HttpResponse.json({
        response: {
          queryResponse: [
            {
              id: 1,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 1",
              title: "토론방 제목 1",
              content: "토론방 내용 1",
              bookName: "책 제목 +1",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385591810],
            },
            {
              id: 2,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 2",
              title: "토론방 제목 2",
              content: "토론방 내용 2",
              bookName: "책 제목 +2",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385613381],
            },
            {
              id: 3,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 3",
              title: "토론방 제목 3",
              content: "토론방 내용 3",
              bookName: "책 제목 +3",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385621315],
            },
            {
              id: 4,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 4",
              title: "토론방 제목 4",
              content: "토론방 내용 4",
              bookName: "책 제목 +4",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385626826],
            },
            {
              id: 5,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 5",
              title: "토론방 제목 5",
              content: "토론방 내용 5",
              bookName: "책 제목 +5",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385632025],
            },
            {
              id: 6,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 6",
              title: "토론방 제목 6",
              content: "토론방 내용 6",
              bookName: "책 제목 +6",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385637506],
            },
            {
              id: 7,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 7",
              title: "토론방 제목 7",
              content: "토론방 내용 7",
              bookName: "책 제목 +7",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385642876],
            },
            {
              id: 8,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 8",
              title: "토론방 제목 8",
              content: "토론방 내용 8",
              bookName: "책 제목 +8",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385648025],
            },
            {
              id: 9,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 9",
              title: "토론방 제목 9",
              content: "토론방 내용 9",
              bookName: "책 제목 +9",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385653275],
            },
            {
              id: 10,
              profileImage: faker.image.urlLoremFlickr(),
              username: "user 10",
              title: "토론방 제목 10",
              content: "토론방 내용 10",
              bookName: "책 제목 +10",
              bookThumbnail: faker.image.urlLoremFlickr(),
              likeCount: 0,
              readingStatuses: [
                "읽고싶은",
                "읽는 중",
                "읽음",
                "잠시 멈춤",
                "중단",
              ],
              createTime: [2024, 4, 18, 5, 44, 48, 385658875],
            },
          ],
          totalCount: 10,
          size: 10,
        },
        userLikeTalkRoomIds: null,
      });
    }
  }),

  http.get(`/api/my/star`, ({ request }) => {
    return HttpResponse.json([
      {
        postId: 1,
        title: "정의란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★",
      },
      {
        postId: 2,
        title: "사랑이란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★",
      },
      {
        postId: 3,
        title: "행복이란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 4,
        title: "삶이란 무엇인가?",
        image: faker.image.urlLoremFlickr(),
        starRate: "★★★★★",
      },
      {
        postId: 5,
        title: "허망함이란 무엇인인가?",
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
