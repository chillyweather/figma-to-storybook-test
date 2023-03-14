import React from "react";
import ButtonWithLabel from "./components/ButtonWithLabel";
import Page17 from "./icons/page-17-form-1.svg";
import NewAppointment3 from "./icons/new-appointment-3.svg";
import Messages from "./icons/msgs-new-request-2.svg";
import LabTest from "./icons/lab-test-results-1.svg";
import Corona from "./icons/corona-1.svg";
import NoCard from "./icons/no-card.svg";

const rowStyle = {
  display: "flex",
  gap: "10vw",
  width: "100vw",
  justifyContent: "center",
};

const appStyle = {
  overflow: "hidden",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <div class="wrapper" style={rowStyle}>
        <ButtonWithLabel icon={NoCard} label={"ביקור ללא כרטיס"} />
        <ButtonWithLabel icon={Corona} label={"קורונה"} />
        <ButtonWithLabel icon={Page17} label={"בקשה חדשה להתחייבות"} />
        <ButtonWithLabel icon={LabTest} label={"תוצאות הבדיקות"} />
        <ButtonWithLabel icon={NewAppointment3} label={"זימון תורים"} />
        <ButtonWithLabel icon={Messages} label={"בקשות מהמשרד או מהרופא/ה"} />
      </div>
    </div>
  );
}

export default App;
