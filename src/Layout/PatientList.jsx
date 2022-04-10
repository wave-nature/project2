import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import MainContent from "../Components/MainContent/MainContent";
import patientAction from "../action/patientAction";
import appointmentAction from "../action/appointmentAction";
import filesAction from "../action/filesAction";

const PatientList = ({ showSideBar, showMenuHandler }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.patient);
  const appointmentData = useSelector((state) => state.appointment);
  const filesData = useSelector((state) => state.files);

  const { loading, error, successResponse } = data;
  const { successResponse: appointmentSuccess } = appointmentData;
  const { successResponse: filesSuccess } = filesData;

  const patient = successResponse && successResponse[0];
  const appointments = appointmentSuccess && appointmentSuccess[0];
  const files = filesSuccess && filesSuccess[0];

  const name = patient?.name;

  useEffect(() => {
    dispatch(patientAction());
    dispatch(appointmentAction());
    dispatch(filesAction());
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-lg h-screen mx-auto">Loading...✋</div>
      ) : (
        <section
          className={`h-screen ${
            showSideBar ? "w-4/5 transition-all" : "w-screen "
          } bg-slate-100`}
        >
          <Header
            name={name}
            showSideBar={showSideBar}
            showMenuHandler={showMenuHandler}
          />
          <SubHeader name={name} />
          <MainContent
            patient={patient && { ...patient }}
            appointments={appointments && { ...appointments }}
            files={files && { ...files }}
          />
          {error && <p>{error.message}</p>}
        </section>
      )}
    </>
  );
};

export default PatientList;
