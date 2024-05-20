export default function currentTime(요청, 응답) {
  const today = new Date(); // 현재 날짜와 시간
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월 (0부터 시작하므로 +1)
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일 (0=일요일, 1=월요일, ...)

  if (요청.method === "GET") {
    응답.status(200).json({
      date: `${year} / ${month} / ${date} / ${day}`, // 날짜 정보를 문자열로 전달
    });
  } else if (요청.method === "POST") {
    응답.status(200).json({ name: "바보" }); // POST 요청에 대한 응답
  }
}
