# git 정의

git은 코드의 변경 이력을 기록하는 프로그램
github는 MS사에서 git을 인터넷에서 사용할 수 있게 해주는 소프트웨어이자 사이트

```bash
#기초 코드
git add . # 현재 폴더 내에서 gitignore에 기재된 내용 빼고 모든 파일들을 트래킹 목록에 추가
git add <파일명 혹은 폴더명> # 특정 파일이나 폴더를 트래킹 목록에 추가
git commit -m "메세지" # 수정한 후 메시지 입력해서 저장
git pull # 원격 저장소에서 내 경로로 끌어오기
```

```bash
# 세팅 된 이후에는 아래 명령어 통해 원격 저장소로 바로 보낼 수 있음
git clone <인터넷 주소> #로컬에 경로로 복사
git pull
git add .
git commit -m "메시지"
git push
```

```bash
# 리액트 프로젝트는 패키지 설치 후 사용 가능
npm install
npm run start
```
