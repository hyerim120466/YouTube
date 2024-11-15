# Youtube

## 공통부분

### Header

![image](https://github.com/user-attachments/assets/c8a35f71-7df3-4702-86fe-e93d20d65be7)

### Side-Menu

![image](https://github.com/user-attachments/assets/f1a67d0e-58b8-4b40-8d5f-99ea7b72b3fc)

### Scroll-Top

![image](https://github.com/user-attachments/assets/0bc77d5d-4278-4065-9b76-7f356c2082b0)

- 클릭 시 화면의 맨 위로 이동

```javascript
const scrollToUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
```

### Subscription-popup

![image](https://github.com/user-attachments/assets/0cdb9853-2b94-47f5-804e-f472e135771b)

- 채널 구독 취소 시 팝업 생성

### Notification window

![image](https://github.com/user-attachments/assets/b90c4ad8-53b4-4105-8ecc-fcbfbd95a8dd)

## 메인페이지

![image](https://github.com/user-attachments/assets/c9c12f86-4772-4d69-88f2-da1a3c9371d8)

- 소스코드 간단한 리뷰
- 무한 로딩 기능 첨부 (useEffect 사용)
- ```javascript
  useEffect(() => {
    -setMovies(movies);
  }, []);
  ```

```

## 스튜디오

## 채널

## 피드

## 로그인 | 회원가입

## 마이 페이지

## 검색

## 구독

![image](https://github.com/user-attachments/assets/080e43df-9e27-4d1c-bcfe-3bd9afe990e7)

## 동영상재생
```
