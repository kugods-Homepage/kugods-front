## 브랜치 전략

### 기본

**Github Flow**

- master : 라이브 서버에 제품으로 출시되는 브랜치.
- develop : 다음 출시 버전을 대비하여 개발하는 브랜치.
- feature : 추가 기능 개발 브랜치. develop 브랜치에 들어간다.

## Github Flow 흐름
1. 브랜치 생성

2. 개발 & 커밋 & 푸쉬

3. PR(Pull Request) 생성

4. 리뷰 & 토의

5. 테스트

6. 최종 Merge

### 구조

`feature/{구현기능}`

- main
  - feature/기능1
  - feature/기능2  
    ...

## 커밋 규칙
## 커밋 메시지 Style Guide
```
format: [Jira-ticket] + Short (50 chars or less) summary of changes
ex. [EPT-340] Change function name

Additional explanation if necessary.
(#issue or https://your-reference.com/link)
```
### ACTIVITY 목록

- INT: only for initial commit
- DOC: changes document or comment
- FTR: add new feature
- MOD: modify existing feature
- FIX: fix an error or issue
- RFC: refactor code
- ADD: add new file or directory
- RMV: remove existing file or directory

### DO
- 다음과 같이 적어주세요
    + `I added README` (:x:)
    + `I add README` (:x:)
    + `Added README` (:x:)
    + `Adds README` (:x:)
    + `Add README` (:white_check_mark:)

### DON'T
- 요약은 전체 커밋 메시지의 제목이므로 문장의 끝에 마침표를 적지 말아주세요.
    + `Add README.` (:x:)
    + `Add README` (:white_check_mark:)
