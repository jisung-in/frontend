import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

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

  http.get("/api/book/rank", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        rank: 1,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목1",
        publisher: "출판사1",
        author: "저자1",
        year: 2024,
      },
      {
        id: 2,
        rank: 2,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목2",
        publisher: "출판사2",
        author: "저자2",
        year: 2024,
      },
      {
        id: 3,
        rank: 3,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목3",
        publisher: "출판사2",
        author: "저자3",
        year: 2024,
      },
      {
        id: 4,
        rank: 4,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목4",
        publisher: "출판사4",
        author: "저자4",
        year: 2024,
      },
      {
        id: 5,
        rank: 5,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목5",
        publisher: "출판사5",
        author: "저자5",
        year: 2024,
      },
      {
        id: 6,
        rank: 6,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목6",
        publisher: "출판사6",
        author: "저자6",
        year: 2024,
      },
      {
        id: 7,
        rank: 7,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목7",
        publisher: "출판사7",
        author: "저자7",
        year: 2024,
      },
      {
        id: 8,
        rank: 8,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목8",
        publisher: "출판사8",
        author: "저자8",
        year: 2024,
      },
    ]);
  }),
  http.get("/api/talkroom/popular", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목1",
        author: "저자1",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 2,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목2",
        author: "저자2",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 3,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목3",
        author: "저자3",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 4,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목4",
        author: "저자4",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
    ]);
  }),
  http.get("/api/talkroom/recommend", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목1",
        author: "저자1",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 2,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목2",
        author: "저자2",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 3,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목3",
        author: "저자3",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 4,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목4",
        author: "저자4",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 5,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목5",
        author: "저자5",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 6,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목6",
        author: "저자6",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 7,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목7",
        author: "저자7",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
      {
        id: 8,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목8",
        author: "저자8",
        talkTitle: "토크해요",
        userName: "응애",
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
      },
    ]);
  }),
  http.get("/api/talkroom/many", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목1",
        author: "저자1",
      },
      {
        id: 2,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목2",
        author: "저자2",
      },
      {
        id: 3,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목3",
        author: "저자3",
      },
      {
        id: 4,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목4",
        author: "저자4",
      },
      {
        id: 5,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목5",
        author: "저자5",
      },
      {
        id: 6,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목6",
        author: "저자6",
      },
      {
        id: 7,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목7",
      },
      {
        id: 8,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목8",
        author: "저자8",
      },
      {
        id: 9,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목9",
        author: "저자9",
      },
      {
        id: 10,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목10",
        author: "저자10",
      },
      {
        id: 11,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목11",
        author: "저자11",
      },
      {
        id: 12,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목12",
        author: "저자12",
      },
      {
        id: 13,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목13",
        author: "저자13",
      },
      {
        id: 14,
        image: faker.image.urlLoremFlickr(),
        title: "책 제목14",
        author: "저자14",
      },
    ]);
  }),
  http.get("/api/evaluation/user", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        image: "",
        userName: "응애",
        starRate: 4.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 20,
      },
      {
        id: 2,
        image: "",
        userName: "응애",
        starRate: 5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 25,
      },
      {
        id: 3,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 40,
      },
      {
        id: 4,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 30,
      },
      {
        id: 5,
        image: "",
        userName: "응애",
        starRate: 3.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 60,
      },
      {
        id: 6,
        image: "",
        userName: "응애",
        starRate: 4,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 90,
      },
      {
        id: 7,
        image: "",
        userName: "응애",
        starRate: 3.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 80,
      },
      {
        id: 8,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 210,
      },
      {
        id: 9,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 170,
      },
      {
        id: 10,
        image: "",
        userName: "응애",
        starRate: 3.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 70,
      },
      {
        id: 11,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 80,
      },
      {
        id: 12,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 55,
      },
      {
        id: 13,
        image: "",
        userName: "응애",
        starRate: 4,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 20,
      },
      {
        id: 14,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 10,
      },
    ]);
  }),
  http.get("/api/book/evaluation/user", ({ request }) => {
    // const url = new URL(request.url);
    // const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        id: 1,
        image: "",
        userName: "응애",
        starRate: 4.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 20,
      },
      {
        id: 2,
        image: "",
        userName: "응애",
        starRate: 5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 25,
      },
      {
        id: 3,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 40,
      },
      {
        id: 4,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 30,
      },
      {
        id: 5,
        image: "",
        userName: "응애",
        starRate: 3.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 60,
      },
      {
        id: 6,
        image: "",
        userName: "응애",
        starRate: 4,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 90,
      },
      {
        id: 7,
        image: "",
        userName: "응애",
        starRate: 3.5,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 80,
      },
      {
        id: 8,
        image: "",
        userName: "응애",
        starRate: 3,
        comment:
          "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
        like: 210,
      },
    ]);
  }),
];
