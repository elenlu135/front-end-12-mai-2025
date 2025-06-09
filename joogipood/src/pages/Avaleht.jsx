import joogidFailist from "../data/joogid.json";

function Avaleht() {
  const joogid = joogidFailist;

  return (
    <div>
      Joogid:
      {joogid.map((jook) =>
        <div>
          <span>{jook}</span>
        </div>
      )}
    </div>
  );
}

export default Avaleht;
