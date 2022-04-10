import { useState } from "react";
import Card from "../UI/Card";
import user from "../../assets/user.png";
import patientImg from "../../assets/patient.jpg";
import PatientDetail from "./PatientDetail";
import TreatmentDetail from "./TreatmentDetail";
import FileDetail from "./FileDetail";
import AddIcon from "../../assets/add.png";
import Icon from "../Icon";

const MainContent = ({ patient = {}, appointments = {}, files = {} }) => {
  const [upcomingActive, setUpcomingActive] = useState(true);
  const [pastActive, setPastActive] = useState(false);
  const [medicalActive, setMedicalActive] = useState(false);

  const pastActiveHandler = () => {
    setPastActive(true);
    setUpcomingActive(false);
    setMedicalActive(false);
  };
  const upcomingActiveHandler = () => {
    setPastActive(false);
    setUpcomingActive(true);
    setMedicalActive(false);
  };
  const medicalActiveHandler = () => {
    setPastActive(false);
    setUpcomingActive(false);
    setMedicalActive(true);
  };
  console.log(patient);
  const allFiles = (files && files.files) || [];
  return (
    <div className="w-full my-4 px-4 flex">
      <div className="flex flex-col w-8/12">
        <div className="flex w-full justify-between">
          <Card className="bg-white flex flex-col items-center w-1/3 mr-2 h-72 justify-around">
            <img src={patientImg} className="h-16 w-16 rounded-full"></img>
            <h3>{patient.name}r</h3>
            <p className=" text-sm text-gray-300">{patient["e-email"]}</p>
            <div className="flex w-full justify-between px-12">
              <div className="flex flex-col items-center">
                <h3>{patient.Past}</h3>
                <p className="text-sm text-gray-300">Post</p>
              </div>
              <div className="w-0.5 bg-gray-300 ml-4"></div>
              <div className=" flex flex-col items-center">
                <h3>{patient.Upcoming}</h3>
                <p className=" text-sm text-gray-300">Upcoming</p>
              </div>
            </div>
            <button className=" border-2 border-gray-200 py-1 px-8 ">
              Send Message
            </button>
          </Card>

          <Card className="bg-white flex flex-col justify-around w-2/3">
            <div className="flex items-center w-full justify-between px-4 border-b-2 border-gray-50 pb-4">
              <PatientDetail title="Gender" value={patient.Gender} />
              <PatientDetail title="Birthday" value={patient.Birthday} />
              <PatientDetail
                title="Phone Number"
                value={patient["Phone Number"]}
              />
            </div>
            <div className="flex items-center w-full justify-between px-4 border-b-2 border-gray-50 pb-4">
              <PatientDetail
                title="Street Address"
                value={patient["Street Address"]}
              />
              <PatientDetail title="City" value={"Cilacap"} />
              <PatientDetail title="Zip Code" value={patient["ZIP Code"]} />
            </div>
            <div className="flex items-center w-1/2 justify-between px-4">
              <PatientDetail
                title="Member Status"
                value={patient["Member Status"]}
              />
              <PatientDetail
                title="Registration Date"
                value={patient["Register Date"]}
              />
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-white w-full mt-2 p-4">
            <Card className=" text-xs flex items-center justify-between px-2 bg-gray-200 py-1 w-2/3 mb-4 text-gray-700">
              <button
                onClick={upcomingActiveHandler}
                className={`${
                  upcomingActive ? "bg-white text-blue-600" : null
                } m-1 py-1 px-4 font-semibold rounded-xl`}
              >
                Upcoming Appointments
              </button>
              <button
                onClick={pastActiveHandler}
                className={`${
                  pastActive ? "bg-white text-blue-600" : null
                } m-1 py-1 px-4 font-semibold rounded-xl`}
              >
                Past Appointments
              </button>
              <button
                onClick={medicalActiveHandler}
                className={`${
                  medicalActive ? "bg-white text-blue-600" : null
                } m-1 py-1 px-4 font-semibold rounded-xl`}
              >
                Medical Records
              </button>
            </Card>
            <Card className="bg-gray-200  overflow-y-scroll ">
              <div className=" text-xs flex px-4 py-2 my-2 justify-between items-center border-b-2 border-gray-100">
                <p>Root Canal Treatment</p>
                <select
                  defaultValue="Show Previous Treatment"
                  className="bg-white text-gray-300 px-2 py-1 cursor-pointer"
                >
                  <option value="show previous treatment">
                    Show Previous Treatment
                  </option>
                  <option value="show upcoming treatment">
                    Show Upcoming Treatment
                  </option>
                </select>
              </div>
              <div className="px-8 mt-4 text-sm">
                {upcomingActive && (
                  <TreatmentDetail
                    data={appointments["Upcoming Appointments"]}
                  />
                )}
                {pastActive && (
                  <TreatmentDetail data={appointments["Post Appointment"]} />
                )}
                {medicalActive && (
                  <p className=" text-green-600 text-lg ">
                    {appointments["Medical Records"].status}
                  </p>
                )}
              </div>
            </Card>
          </Card>
        </div>
      </div>

      <div className=" w-4/12 pl-2">
        <Card className="bg-white p-4 ">
          <div className="flex justify-between px-4 text-sm my-4">
            <p className="font-bold">Notes</p>
            <a className="text-blue-600 font-bold" href="#">
              See all
            </a>
          </div>
          <div className="flex flex-col bg-gray-200">
            <ul className=" list-disc px-8 text-xs pt-4">
              <li className="mb-2">
                This patient is Lorem ipsum, dolor sit amet
              </li>
              <li className="mb-2">This patient is Lorem ipsum, dolor amet</li>
              <li className="mb-2">This patient is Lorem ipsum,</li>
            </ul>
            <button className=" self-end pr-4 bg-blue-600 text-xs px-4 py-2 text-center text-white m-4">
              Save Note
            </button>
          </div>
          <p className="text-xs font-bold my-4 px-4">
            Lorem ipsum dolor sit amet
          </p>
          <div className="flex justify-between px-4 text-xs text-gray-400">
            <div className="flex items-center">
              <Icon src={user} className="h-4 w-4" />
              <p className="ml-2">Drg. Mega Nanade</p>
            </div>
            <p>20 Nov 19</p>
          </div>
        </Card>

        <Card className="bg-white p-4 mt-2 ">
          <div className="mb-4 flex justify-between items-center text-sm font-bold">
            <p className="">Files/Documents</p>
            <div className="flex items-center">
              <Icon src={AddIcon} className="h-4 w-4" />
              <p className="ml-2 text-blue-600">Add Files</p>
            </div>
          </div>
          {allFiles.map((file) => (
            <FileDetail key={file} data={file} />
          ))}
        </Card>
      </div>
    </div>
  );
};

export default MainContent;
