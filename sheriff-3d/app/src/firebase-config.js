// Firebase 온라인 순위표 설정
// Firebase 콘솔 → 프로젝트 설정 → 일반 → "내 앱"(웹 앱)에 나오는 값 중
// apiKey 와 projectId 두 가지만 아래에 넣으세요.
// (이 값들은 앱에 공개적으로 들어가는 값이라 비밀번호가 아닙니다.
//  대신 firestore.rules 로 쓰기 규칙을 꼭 제한하세요.)
// 값을 비워 두면 순위표는 각자 폰에만 저장됩니다.
window.SHERIFF_FIREBASE = {
  apiKey: 'YOUR_API_KEY',
  projectId: 'YOUR_PROJECT_ID',
};
