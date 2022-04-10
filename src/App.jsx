import { useState } from "react";
import MainLayout from "./Layout/MainLayout";
import Sidebar from "./Layout/Sidebar";
import PatientList from "./Layout/PatientList";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showPatientList, setShowPatientList] = useState(true);

  const showMenuHandler = () => setShowSideBar((prev) => !prev);
  const showPatientHanlder = (id) => {
    if (id === "3") {
      setShowPatientList(true);
    } else setShowPatientList(false);
  };

  return (
    <MainLayout>
      <Sidebar
        showSideBar={showSideBar}
        showMenuHanlder={showMenuHandler}
        showPatientHanlder={showPatientHanlder}
      />
      {showPatientList ? (
        <PatientList
          showSideBar={showSideBar}
          showMenuHandler={showMenuHandler}
        />
      ) : (
        <div className="h-screen mx-auto">
          No content found 🙄. Try Patient List
        </div>
      )}
    </MainLayout>
  );
}

export default App;
