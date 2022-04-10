import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "../assets/menu.png";
import doctorImg from "../assets/doctor.jpg";
import Icon from "../Components/Icon";
import speedometer from "../assets/speedometer.png";
import calendar from "../assets/calendar.png";
import user from "../assets/user.png";
import messenger from "../assets/messenger.png";
import money from "../assets/money.png";
import settings from "../assets/settings.png";
import ListItem from "../Components/Sidebar/ListItem";
import help from "../assets/information.png";
import arrow from "../assets/arrow-point-to-right.png";
import doctorAction from "../action/doctorAction";

const Sidebar = ({ showSideBar, showMenuHanlder, showPatientHanlder }) => {
  const data = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const { loading, error, successResponse } = data;
  const doctor = successResponse && successResponse[0];
  const name = doctor?.name;
  const specification = doctor?.specification;
  const listItems = [
    { id: "1", src: speedometer, title: "Overview" },
    { id: "2", src: calendar, title: "Calendar" },
    { id: "3", src: user, title: "Patient List" },
    { id: "4", src: messenger, title: "Messages" },
    { id: "5", src: money, title: "Payment information" },
    { id: "6", src: settings, title: "Settings" },
  ];

  useEffect(() => {
    dispatch(doctorAction());
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...✋✋</p>
      ) : (
        <section
          className={`flex  ${
            showSideBar
              ? "w-1/5 translate-x-0 transition-transform visible"
              : " -translate-x-80 transition-transform hidden"
          } flex-col justify-between p-4`}
        >
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2>Zendenta</h2>
                <p className="text-xs text-gray-300">Cabut glgi tanpa sakit</p>
              </div>
              <div className=" cursor-pointer" onClick={showMenuHanlder}>
                <Icon src={MenuIcon} className="w-4 h-4" />
              </div>
            </div>

            <ul>
              {listItems.map((item) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  src={item.src}
                  title={item.title}
                  showPatientHanlder={showPatientHanlder}
                />
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center">
              <Icon src={help} className="h-4 w-4" />
              <p className="text-xs ml-4 text-gray-400">Help ?</p>
            </div>
            <div className="mt-4 border-t-2 border-gray-300">
              <div className="flex items-center justify-between">
                <img src={doctorImg} className="h-12 w-12 rounded-full" />
                <div>
                  <h3>{name}</h3>
                  <p className="text-xs text-gray-400">{specification}</p>
                </div>
                <Icon src={arrow} className="h-4 w-4 rotate-90" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Sidebar;
