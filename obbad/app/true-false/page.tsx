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