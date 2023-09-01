# Issue-Reader

원티드 프리온보딩 인턴십 3팀 2주차 과제

## 개요

특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 배포

배포 링크: [https://glittering-belekoy-672ec5.netlify.app/](https://glittering-belekoy-672ec5.netlify.app/)

## 실행 방법

1. Repository Clone

```
$ git clone https://github.com/JaeIL00/issue-reader
```

2. 환경 변수 세팅

```
REACT_APP_GITHUB_TOKEN=YOUR_GITHUB_ACCESS_TOKEN
```

3. 의존성 패키지 설치

```
npm install
```

4. 개발 서버 실행

```
npm run start
```

## 구현 기능

1. 이슈 목록 화면

    - 이슈 목록 가져오기 API 활용
    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
    - 다섯번째 셀마다 광고 이미지 출력

1. 이슈 상세 화면
    - 이슈의 상세 내용 표시
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
1. 공통 헤더
    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.

## 기술 스택

-   언어: TypeScript

-   라이브러리
    -   react
    -   react-router-dom
    -   recoil
    -   react-markdown
    -   octokit
    -   styled-components
