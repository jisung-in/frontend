![지성인배너02](https://github.com/jisung-in/frontend/assets/65530775/e437b4b7-dde1-46df-8863-208186685b72)

<br/>
<div align="center">
  
![last commit](https://img.shields.io/github/last-commit/jisung-in/frontend?color=green)
![most language](https://img.shields.io/github/languages/top/jisung-in/frontend)

![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
![SLACK](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
<br/>

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind Css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

<br/>

# 📖 지성인

<br/>

<div align="center">
  <p>책과 관련된 주제로 자유롭게 이야기를 나누는 곳, 지성인을 서비스 중입니다.</p>
  <p>❗현재 기존의 서비스를 사용자들에게 피드백 받아 pivot 작업을 진행 중입니다.</p>
  <a href="https://jisungin.co.kr" target="_blank">
    <p>https://jisungin.co.kr</p>
  </a>
</div>

## 📑 목차

- [👀 프로젝트 개요](#-프로젝트-개요)
- [🗓 프로젝트 기간](#-프로젝트-기간)
- [✨ 서비스 소개](#-서비스-소개)
  - [1.메인 화면](#1메인-화면)
  - [2.토크방](#2토크방)
  - [3.토크방 상세보기](#3토크방-상세보기)
  - [4.토크해요](#4토크해요)
  - [5.책 상세보기](#5책-상세보기)
  - [6.유저들의 평가](#6유저들의-평가)
  - [7.연관된 토크방](#7연관된-토크방)
- [👨‍💻 기술 스택](#-기술-스택)
  - [프론트엔드 기술 스택](#프론트엔드-기술-스택)
  - [기타 툴](#기타-툴) 
- [💻 업무 분배](#-업무-분배)
- [⚙️ 주요 기능 & 기술 & 로직](#%EF%B8%8F-주요-기능--기술--로직)
  - [주요 기능](#주요-기능)
  - [기술](#기술)
  - [로직](#로직) 

<br/>

## 👀 프로젝트 개요

책과 관련된 주제로 자유롭게 이야기를 나누는 곳을 주제로 하여 프로젝트를 시작하였습니다.  
프로젝트의 개요는 다음과 같습니다.
 - 원하는 도서를 토크방을 통해 사람들과 토론을 진행할 수 있습니다.
 - 토크방을 입장하는데 간단한 제약 조건이 있을 수 있습니다.
   - ex) 책을 읽고 있는 사람 또는 읽은 사람
 - 책에 대한 평가, 별점 부여, 읽은 상태 기록, 의견 작성이 가능합니다

<br/>

## 🗓 프로젝트 기간

2023년 12월 ~ 2024년 6월 1일  
  
**⭐pivot** : 2024년 6월 17일 ~ 진행 중  

❗현재 기존의 서비스를 사용자들에게 피드백 받아 pivot 작업을 진행 중입니다.

<br/>

## ✨ 서비스 소개

지성인 서비스에서는 책과 관련된 주제로 자유롭게 이야기를 나눌 수 있습니다.  

아래는 각 **페이지에 대한 설명**입니다.


### 1.메인 화면

<br/>
<div align="center">

![image](https://github.com/jisung-in/frontend/assets/55770796/a782d7f7-360e-41bf-b6a9-24198e9cd452)

</div>
<br/>

지성인 **메인 화면**에서는 **실시간**, **인기있는 토크방**을 확인 할 수 있습니다.  

옆의 **전체보기**를 클릭하면 각 제목에 맞는(최근순, 인기순) 필터로 적용되어 관련된 토크방 목록을 확인 할 수 있습니다.  

또한 실시간 베스트 셀러와 토크방이 많은 책 목록을 확인 할 수 있습니다.

<br/>

### 2.토크방

<br/>
<div align="center">

![토크방](https://github.com/jisung-in/frontend/assets/65530775/a1846e86-b232-4415-b4bc-f4c95cf07e29)

</div>
<br/>

**토크방**은 사용자가 작성한 게시물 입니다.  

저희는 이것을 **토크방 카드** 또는 **카드**라고 부릅니다.  

사용자가 책과 관련된 주제로 자유롭게 이야기를 나눌 수 있게 하는 수단이며, 비 로그인 시에도 해당 토크방에 접근이 가능합니다.  

이 카드에서는 기본적으로 책에 대한 정보와 작성자와 글의 제목과 내용을 볼 수 있습니다.  

또한 사용자는 토크방에 좋아요를 누를 수 있고, 몇 명의 사람들이 좋아요를 눌렀는지 알 수 있습니다.  


### 3.토크방 상세보기

<br/>
<div align="center">

![screencapture-jisungin-co-kr-talkroom-detail-36-2024-06-12-22_18_14](https://github.com/jisung-in/frontend/assets/65530775/00dc1326-bb14-4ebb-8a00-1f2e81c96aa3)

</div>
<br/>

지성인의 핵심인 **토크방**을 들어갔을 때의 모습입니다.  

**토크방 카드**와 다르게 언제 작성했는지를 추가로 알 수 있으며, 핵심 기능중 하나 인 **참가 조건**을 알 수 있습니다.  

**참가 조건**은 읽고 싶은, 읽음, 읽는 중, 중단, 잠시 멈춤 총 5가지로 분류 되며 참가 조건에 맞는 경우 의견을 작성 할 수 있습니다.  

만약 참가 조건에 맞지 않거나, 로그인을 하지 않은 상태에서는 해당 기능을 이용하실 수 없습니다.  

의견을 작성하게 되면 아래에 말풍선 형태로 등록이 됩니다.  


### 4.토크해요

<br/>
<div align="center">
  
![screencapture-jisungin-co-kr-talkroom-2024-06-12-22_35_10](https://github.com/jisung-in/frontend/assets/65530775/617493e0-8742-4e2d-9150-cbf7092c45d3)


</div>
<br/>

지성인의 핵심인 모든 **토크방**을 볼 수 있는 곳입니다.  

**토크방 카드**는 위의 필터에 맞게 조회를 할 수 있으며 크게 세 가지 필터의 영향을 받습니다.  

메인 페이지에서 봤던 **최신순**, **인기순**이 있으며 **인기순**을 눌렀을 때는 **날짜별** 필터가 추가됩니다.  

**날짜별** 필터를 이용해 1일 전, 7일 전, 한달 전에 작성된 게시물들을 필터링하여 볼 수 있습니다.  

**검색창**을 이용하여 찾고자 하는 토크방 **제목**을 검색하여 토크방을 찾을 수 있습니다.  


### 5.책 상세보기

<br/>
<div align="center">
  
![screencapture-jisungin-co-kr-book-9791198682505-2024-06-12-22_40_15](https://github.com/jisung-in/frontend/assets/65530775/5934f5e8-8abf-4b17-a66e-ec275fd45573)


</div>
<br/>

책에 대한 정보 및 책에 대한 평가, 연관된 토크방을 볼 수 있는 페이지 입니다.  

로그인 시 다음과 같은 기능들을 이용 할 수 있습니다.  
- **별점** : 상단에 책에 대한 별점을 남길 수 있습니다. 별점은 0.5점 단위로 부여되며, 별이 반 개씩 채워집니다.<br/> 별점을 수정하고 싶다면 원하는 점수의 별을 클릭하면 됩니다. 별점을 취소하고 싶다면, 전에 부여한 별점의 별점을 클릭하면 취소 됩니다. <br/>별점은 한줄 평을 남길 경우 같이 기록됩니다.
- **독서 상태** : 오른쪽 상단에 해당 책에 관하여 독서 상태를 기록 할 수 있습니다. 독서 상태는 **토크방에 참여 할 수 있는 조건**에 해당 됩니다.
  - 읽고 싶은
  - 읽음
  - 읽는 중
  - 중단
  - 잠시 멈춤
- **한줄 평** : 책에 대한 한줄 평을 남길 수 있습니다. 한줄 평은 유저들의 평가에 기록됩니다.  

**유저들의 평가**는 한줄 평을 작성한 유저들의 기록이 모인 곳 입니다. 더보기를 누르면 해당 책에 관한 모든 유저들의 평가를 볼 수 있습니다.  

**연관된 토크방**은 책과 관련된 토크방을 보여줍니다. 더보기를 누르면 연관된 토크방 페이지로 이동됩니다.

<br/>

### 6.유저들의 평가

<br/>
<div align="center">
  
![screencapture-jisungin-co-kr-evaluation-9791198682505-2024-06-12-22_58_58](https://github.com/jisung-in/frontend/assets/65530775/6ce6fcb2-f46f-43bd-9b0a-c31369edec43)


</div>
<br/>

**책 상세보기 페이지**에서 **유저들의 평가 더보기**를 누르면 접근 할 수 있는 페이지 입니다.  

**책과 관련된 평가**만을 보여줍니다.  

**무한 스크롤**로 구현되어 있어 특정 시점에서 새로운 평가들이 불러와집니다.  

**필터**가 적용되어 있어 필터에 따라 평가를 정렬할 수 있습니다.
  - 좋아요 순
  - 높은 평가 순
  - 낮은 평가 순
  - 작성 순

### 7.연관된 토크방

<br/>
<div align="center">
  
![screencapture-jisungin-co-kr-talkroom-related-9791198682505-2024-06-12-22_56_35](https://github.com/jisung-in/frontend/assets/65530775/1f085a11-6524-4dae-8d9a-8038e142bff7)


</div>
<br/>

**책 상세보기 페이지**에서 **연관된 토크방 더보기**를 누르면 접근 할 수 있는 페이지 입니다.  

**책과 관련된 토크방**만을 보여줍니다.

<br/>

## 👨‍💻 기술 스택
 ### 프론트엔드 기술 스택
 - **프레임워크** : Next.js 14
 - **언어** : Typescript
 - **상태 관리** : React-query, Redux
 - **API** : axios
 - **CSS** : Tailwind CSS
 - **오픈 소스 라이브러리** : Story book, MSW, Faker.js, Swiper
 - **배포** : Vercel (도메인과 연동하여 배포)
### 기타 툴
  - **이슈 관리** : Github Issue  
  - **커뮤니케이션** : Slack, Discord

<br/>

## 💻 업무 분배

|변승훈|정준형|
| :---: | :---: |
|[@SeungHun6450](https://github.com/SeungHun6450)|[@jungjunhyung99](https://github.com/jungjunhyung99)|
| **1. 메인 페이지**<br/>인기있는 토크방, 베스트 셀러, <br/>최근 생성된 토크방, 토크 많은 책 카테고리 구현 <br/>1. 각 토크방 옆의 전체보기 클릭 시, <br/>조건에 맞게 필터링하여 토크해요 페이지로 이동<br/>2. 책 표지 클릭 시, 책 상세보기 페이지로 이동<br/>3. 토크방 클릭 시, 토크방 상세보기 페이지로 이동<br/><br/>**2. 토크방**<br/>메인 페이지, 토크해요 페이지, 연관된 토크방 페이지에서 보이는 토크방(토크방 카드)제작<br/><br/>**3. 토크방 상세보기**<br/>토크방을 눌렀을 때, 해당 페이지로 이동<br/>참가조건에 부합하면 의견을 작성 가능<br/><br/>**4. 토크해요**<br/>1. 최신순, 인기순, 날짜별 총 3개의 필터를 가진 사용자들이 작성한 토크방을 보여주는 페이지<br/>2. 제목을 검색하여 원하는 토크방을 찾기<br/><br/>**5. 책 상세 보기**<br/>1. 책에 대한 정보를 확인<br/>2. 책에 대한 별점을 남기기<br/>3. 독서 상태 기록, 이는 토크방의 참가조건에 해당<br/> 4. 책에 대한 한줄 평 작성<br/>5. 유저들의 평가를 확인 가능<br/>6. 연관된 토크방 확인 가능<br/><br/>**6. 유저들의 평가**<br/>1. 선택한 책의 유저들의 한줄 평을 확인<br/>2. 좋아요, 평점, 최신순으로 필터링 가능<br/><br/>**7. 연관된 토크방**<br/>선택한 책을 주제로 한 토크방들을 확인 가능|**로그인**|

<br/>

## ⚙️ 주요 기능 & 기술 & 로직

### 주요 기능
1. **검색 기능**
    - 토크해요 페이지에서 검색 기능 이용 시, 검색한 내용과 토크방의 제목을 비교하여 검색 결과를 가져옵니다.
2. **필터 기능**
   - 최신순, 인기순 등의 필터 적용 시, `router.push`를 이용하여 페이지를 변경 했습니다.
3. **좋아요 기능**
   - 토크방, 토크방의 의견, 한줄 평 총 세 곳에 해당 기능이 있습니다.
   - 자신이 작성한 토크방, 의견, 한줄 평에는 좋아요를 누를 수 없습니다.
4. **책과 관련된 기능**
    - 별점 부여 기능 : 책에 대한 별점을 부여 할 수 있습니다. 0.5점 단위로 별이 반 개씩 채워집니다.
    - 독서 상태 설정 기능 : 책에 대한 독서 상태를 설정 할 수 있습니다. 토크방의 의견 작성에 필요한 상태입니다.
    - 한 줄평 작성 기능 : 책에 대한 한 줄평을 작성 할 수 있습니다. 유저들의 평가에 기록됩니다.
5. **비 로그인 시 기능 차단**
   - 로그인 유무를 판단하여 비 로그인 시에는 기능들을 사용할 수 없게 `Modal 컴포넌트`를 사용하여 막았습니다.
   - 좋아요 기능, 한줄 평 작성, 별점 부여, 독서 상태 등의 기능들이 이에 해당됩니다.
   - 해당 기능들에 맞는 문구를 띄웁니다.

### 기술
1. **합성 컴포넌트**
    - 합성 컴포넌트를 사용하여 비슷한 컴포넌트를 하나의 합성 컴포넌트로 만들어 코드의 재사용성과 가독성을 증가시켰습니다.
2. **동적 라우팅**
   - Next.js의 동적 라우팅 기능을 특정 페이지에 적용했습니다.
     - 토크방 상세 보기
     - 책 상세 보기
     - 토크해요 검색
     - 연관된 토크방
     - 유저들의 평가
3. **페이지네이션과 무한스크롤**
     - 토크해요 페이지, 연관된 토크방 페이지에 페이지네이션을 구현하여 적용했습니다.
     - 유저들의 평가 페이지에서는 `useInfiniteQuery, IntersectionObserver`를 이용하여 무한스크롤을 적용했습니다.
4. **캐러셀 구현**
     - Swiper를 이용하여 캐러셀을 구현했습니다.
5. **반응형 디자인 적용**
     - `Tailwind CSS`를 이용한 반응형 디자인 적용했습니다.
     - 현재 pivot이 진행됨에 따라 변경된 UI에 맞춰 재 작업이 될 예정입니다.
6. **axios**
      - 데이터를 호출할 때 `axios`를 사용하여 호출했습니다.
7. **React-query hook 사용**
      - `custom hook`을 사용하여 `refetch, useInfiniteQuery`등의 기능을 사용해 구현했습니다.
8. **Story Book**
    - Story Book을 이용하여 공통된 버튼이나 `textarea`를 관리하였습니다.
9. **MSW**
    - 백엔드에서 작업이 끝난 상태가 아니였을 때 MSW를 사용하여 UI작업을 진행하였습니다.
    - 이후 서버가 닫혀도 MSW를 이용하여 더미데이터로 화면을 보여줄 예정입니다.
10. **Faker.js**
    - Faker.js를 이용하여 임시 이미지를 부여해 MSW와 같이 사용했습니다.

### 로직
1. **공통 util 함수**
   - 토크해요 페이지의 경우, 해당 필터 조건의 코드가 가독성이 떨어져 util 함수로 분리시켜 가독성을 증가시켰습니다.
   - 토크방 상세보기에서 게시글과 의견에 언제 생성했는지에 관한 `timelaps(초, 분, 시, 일, 월, 년)`를 util 함수로 분리시켜 사용했습니다.
2. **좋아요 로직**
   - 로그인을 하면 자기가 좋아요한 id들을 각각의 배열로 확인이 가능합니다.
   - 해당 댓글에 좋아요를 눌렀는지에 대해 `includes()`로 `boolean`값을 판별한 후 적용이 되게 로직을 구성했습니다.
3. **참여 조건 구분 로직**
   - 토크방에서 의견 작성 시 참여 조건에 맞는지를 구분하는 로직을 구현했습니다.
   - 책에 관한 데이터는 배열안에 객체로, 세 가지 값이 있습니다. ex) [{id, isbn, status}]
   - 같은 책이면서, 책 상태가 토크방의 참여 조건에 맞는지를 확인하기 위해 `some()`과, `includes()`를 이용하여 `return`값을 `boolean`형태로 반환하여 일치 여부를 확인했습니다.
4. **별점 부여**
   - 책 상세 보기에서 별점 부여 시 0.5점 단위로 별 반개 씩 채우는 기능을 구현했습니다
   - 별 이미지 가로 길이 55를 기준으로 `mouseEvent`의 `offsetX`속성을 사용하여 27.5보다 크면 1, 작으면 0.5를 반환하여 별점과 별점에 맞춰 별이 채워지도록 구현했습니다.
