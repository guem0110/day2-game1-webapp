# 📱 황야의 배지 - 안드로이드 앱 만들기 · Google Play 올리기

웹 게임(`../index.html`)을 [Capacitor](https://capacitorjs.com/)로 감싼 안드로이드 앱 프로젝트입니다.

| 항목 | 값 |
|---|---|
| 앱 이름 | 황야의 배지 |
| 패키지 이름 | `com.guem0110.sheriff3d` |
| 버전 | 1.2 (versionCode 3) |
| 최소 안드로이드 | 7.0 (API 24) · 대상 API 36 |
| 엔진 | Capacitor 8.6 · Three.js r128 (앱 안에 포함, 오프라인 실행 가능) |

## 폴더 구성
```
app/
├─ android/               안드로이드 프로젝트 (Android Studio로 여는 폴더)
├─ src/firebase-config.js 온라인 순위표 설정 (직접 채움)
├─ scripts/build-web.mjs  ../index.html → www/ 로 앱용 변환
├─ firestore.rules        Firebase 보안 규칙 (그대로 붙여넣기)
└─ store/                 스토어 아이콘·그래픽·스크린샷·설명 문구(listing.md)
```

---

## 1단계. 온라인 명예의 전당 준비 (Firebase, 무료)

설정을 비워 두면 앱은 그대로 동작하고, 순위표만 각자 폰에 저장됩니다.

1. https://console.firebase.google.com 에서 **프로젝트 추가** (예: `sheriff-3d`). Google 애널리틱스는 꺼도 됩니다.
2. 왼쪽 메뉴 **빌드 → Firestore Database → 데이터베이스 만들기**
   - 위치: `asia-northeast3 (서울)` 추천
   - **프로덕션 모드**로 시작
3. Firestore의 **규칙** 탭에서 기존 내용을 지우고 `firestore.rules` 파일 내용을 붙여넣은 뒤 **게시**합니다.
   - 누구나 순위를 볼 수 있고, 새 기록 추가만 됩니다. 수정·삭제는 막혀 있습니다. (이벤트는 `scores_event`, 보스 러시는 `scores_rush`, 2인 러시는 `scores_rush2`, 결투는 `scores_duel` 컬렉션에 저장돼요. 이미 규칙을 게시했다면 새 파일 내용으로 한 번 더 게시하세요.)
4. **프로젝트 설정(⚙) → 일반 → 내 앱 → 웹 앱 추가(`</>`)**를 누르고, 나오는 값 중 `apiKey`와 `projectId`를 `src/firebase-config.js`에 넣습니다.
   ```js
   window.SHERIFF_FIREBASE = {
     apiKey: 'AIza....',
     projectId: 'sheriff-3d-xxxxx',
   };
   ```
   이 값은 앱에 공개적으로 들어가는 값이라 비밀번호가 아닙니다. 대신 3번의 보안 규칙을 꼭 게시해야 합니다.

> 점수는 앱이 직접 보내는 방식이라, 마음먹고 조작하는 사람을 완전히 막을 수는 없습니다. 이상한 기록은 Firebase 콘솔의 Firestore 데이터 화면에서 직접 지우면 됩니다.

---

## 2단계. 앱 파일(AAB) 만들기

### 방법 A: Android Studio (추천)
1. 설치: [Node.js 22 이상](https://nodejs.org/), [Android Studio](https://developer.android.com/studio)
2. 이 저장소를 내려받고, 터미널에서 실행합니다.
   ```bash
   cd app
   ```
   ```bash
   npm install
   ```
   ```bash
   npm run sync
   ```
   ```bash
   npm run open
   ```
   마지막 명령이 안 되면 Android Studio에서 `app/android` 폴더를 직접 엽니다.
3. **폰에서 먼저 해 보기**: 폰의 개발자 옵션에서 USB 디버깅을 켜고 USB로 연결한 뒤 ▶(Run)을 누릅니다.
4. **출시용 파일 만들기**: 메뉴 **Build → Generate Signed App Bundle or APK → Android App Bundle**
   - **Create new...**로 업로드 키(keystore)를 새로 만듭니다.
   - ⚠️ **키 파일(.jks)과 비밀번호는 절대 잃어버리지 말고 따로 백업**하세요. 앱 업데이트를 올릴 때 계속 필요합니다.
   - Build Variant는 `release`를 고릅니다.
   - 결과물: `app/android/app/release/app-release.aab`

### 방법 B: GitHub이 자동으로 빌드 (컴퓨터에 설치 불필요)
저장소를 GitHub에 올리면 `.github/workflows/android.yml`이 자동으로 실행됩니다.
- **Actions 탭 → Android 앱 빌드 → 맨 아래 Artifacts**에서 `sheriff-3d-test-apk`를 받으면, 폰에 바로 설치해 볼 수 있는 테스트용 APK가 있습니다.
- **출시용 AAB**까지 자동으로 만들려면, 업로드 키를 만든 뒤 저장소 **Settings → Secrets and variables → Actions**에 4개를 등록합니다.
  ```bash
  keytool -genkeypair -v -keystore sheriff-upload.jks -alias sheriff -keyalg RSA -keysize 2048 -validity 10000
  ```
  ```bash
  base64 -w0 sheriff-upload.jks
  ```
  | Secret 이름 | 값 |
  |---|---|
  | `ANDROID_KEYSTORE_BASE64` | 위 `base64` 명령의 출력 전체 |
  | `ANDROID_KEYSTORE_PASSWORD` | 키스토어 비밀번호 |
  | `ANDROID_KEY_ALIAS` | `sheriff` |
  | `ANDROID_KEY_PASSWORD` | 키 비밀번호 |

  이후 빌드부터 Artifacts에 `sheriff-3d-release-aab`가 생깁니다. 키 파일은 절대 저장소에 커밋하지 마세요.

---

## 3단계. Google Play에 올리기

1. https://play.google.com/console 에서 **개발자 계정 만들기**: 등록비 $25(1회), 신원 확인이 필요합니다.
2. **앱 만들기**: 이름 `황야의 배지`, 게임, 무료
3. `store/listing.md`를 보고 다음을 채웁니다.
   - **스토어 등록정보**: 설명 문구, 아이콘, 그래픽 이미지, 스크린샷
   - **앱 콘텐츠**: 개인정보처리방침, 콘텐츠 등급, 데이터 보안 등
4. **개인정보처리방침 주소**:
   - 저장소의 `privacy.html`을 GitHub Pages로 공개해서 씁니다.
   - 주소: `https://guem0110.github.io/sheriff-3d-game/privacy.html`
   - **연락처 이메일 칸을 먼저 채워 주세요.**
5. **테스트 → 출시**:
   - ⚠️ **새 개인 개발자 계정**은 정식 출시 전에 **비공개 테스트**를 거쳐야 합니다. 현재 기준으로 테스터 12명 이상이 14일 연속으로 참여해야 합니다.
   - 조건은 바뀔 수 있으니 Play Console 대시보드 안내를 확인하세요.
   - **테스트 → 비공개 테스트**에서 AAB를 올리고, 테스터 이메일을 등록합니다.
   - 조건을 채운 뒤 **프로덕션 → 새 버전 만들기 → AAB 업로드 → 검토 제출**을 합니다. 심사는 보통 며칠 걸립니다.

---

## 게임을 고친 뒤 앱 업데이트하기
1. 저장소 맨 위의 `index.html`(게임)을 수정합니다.
2. `app/android/app/build.gradle`에서 `versionCode`를 1 올리고(예: 1 → 2), `versionName`도 바꿉니다(예: "1.1").
3. 위 2단계로 새 AAB를 만들어 Play Console에 새 버전으로 올립니다.
