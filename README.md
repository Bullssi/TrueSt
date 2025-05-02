# 📈 TrueSt - 국내 주식 정보 탐색 서비스

**TrueSt**는 국내 주식 종목에 대한 개요, 시세, 재무 정보, 관련 뉴스를 빠르게 탐색할 수 있는 웹 애플리케이션입니다.  

---

## 🔍 기능

⏳ 종목 검색 기능 (/stocks/:ticker) (예정)

⏳ 종목 개요 정보 제공 (예정)

⏳ 실시간 시세 차트 (예정)


---

## 🧩 기술 스택

| 구분         | 기술                                 |
|--------------|--------------------------------------|
| 프론트엔드   | Next.js (Turbopack), React, Axios    |
| 백엔드       | Node.js, Express                     |
| 데이터베이스 | PostgreSQL                           |
| API 연동     | Alpha Vantage (또는 국내 증권 API 예정) |
| 배포 예정    | AWS EC2 + RDS                        |


---

## 🚀 실행 방법


### 🔧 서버 (Node.js + Express)

```bash
cd server
npm install
npm run dev
```
### 💻 클라이언트 (Next.js + Turbopack)

```bash
cd client
npm install
npm run dev
```

* 서버: http://localhost:5000

* 클라이언트: http://localhost:3000

### 🛡️ 환경 변수 (server/.env)
```bash
PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/truest
ALPHA_VANTAGE_KEY=your_api_key
```