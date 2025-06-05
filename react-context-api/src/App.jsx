import "./App.css";
import ClassComponent from "./component/ClassComponent";
import College from "./component/College";
import { SubjectContext } from "./component/ContextData";
import Student from "./component/Student";
import { useState } from "react";
import Subject from "./component/Subject";

export default function App() {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <College />
        <ClassComponent />
        <Student />
      </SubjectContext.Provider>
    </div>
  );
}
