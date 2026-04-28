[اختبار_الملف_الثاني.html](https://github.com/user-attachments/files/27161623/_._.html)
[اختبار_كامل.html](https://github.com/user-attachments/files/27161624/_.html)[page.tsx](https://github.com/user-attachments/files/27161639/page.tsx)
[package.json](https://github.com/user-attachments/files/27161625/package.json)
[page.tsx](https://github.com/user-attachments/files/27161641/page.tsx)
import data from "../../data/questions.json";

export default function Page() {
  return (
    <div style={{padding:20}}>
      <h1>صح وخطأ</h1>
      {data.trueFalse.map((q:any)=>(
        <div key={q.id} style={{marginBottom:20}}>
          <b>{q.question_en}</b>
          <p>{q.question_ar}</p>
        </div>
      ))}
    </div>
  );
}
