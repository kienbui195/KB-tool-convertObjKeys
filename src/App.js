import React, { useState } from "react";
import OneElement from "./components/SelectOption/OneElement";
import { camelToSnake, convertKeys, snakeToCamel } from "./utils/function";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [choose, setChoose] = useState("field");

  const handleConvert = (isConvertToCamelCase = true) => {
    switch (choose) {
      case "field":
        if (isConvertToCamelCase) {
          setResult(snakeToCamel(value));
        } else {
          setValue(camelToSnake(result));
        }
        break;
      case "obj":
        if (isConvertToCamelCase) {
          const res = JSON.stringify(convertKeys(JSON.parse(value)));

          setResult(res);
        } else {
          const res = JSON.stringify(convertKeys(JSON.parse(result)));

          setValue(res);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
      <div style={{ border: "1px solid black", padding: "8px", borderRadius: "8px", boxShadow: "4px 4px 4px black", display: "flex", gap: "10px", flexDirection: "column" }}>
        <div style={{ border: "1px solid black", padding: "8px", borderRadius: "8px", display: "flex", height: "fit-content", gap: "8px", alignItems: "center" }}>
          <div>Loại</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {["field", "obj"].map((item, idx) => (
              <div key={idx} onClick={() => setChoose(item)}>
                <OneElement label={item} isChoose={choose === item} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid black", padding: "8px", borderRadius: "8px", display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontWeight: 700 }}>Snake</div>
            <textarea style={{ minWidth: "400px", minHeight: "400px", fontSize: "16px", padding: "10px" }} value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
            <button style={{ height: "40px" }} onClick={() => handleConvert()}>{`Convert >>`}</button>
            <button style={{ height: "40px" }} onClick={() => handleConvert(false)}>{`<< Convert`}</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontWeight: 700 }}>Camel Case</div>
            <textarea style={{ minWidth: "400px", minHeight: "400px", fontSize: "16px", padding: "10px" }} value={result} onChange={(e) => setResult(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
