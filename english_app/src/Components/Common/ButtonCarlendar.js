/** @format */

import { useEffect, useState } from "react";
import Apis, { endpoints } from "../../config/Apis";
import cookies from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import {
  IsLoadingCarlendar,
  StopLoadingCarlendar,
} from "../../Creators/LoadingCreator";

const getYearMonthDay = (date) => {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

export default function ButtonCarlendar(props) {
  const [study, setStudy] = useState(null);
  const [visible, setVisible] = useState("");
  const dispatch = useDispatch();
  const loadingCarlendar = useSelector((state) => state.loadingCarlendar.load);

  useEffect(() => {
    setVisible("");
    setStudy(null);
    props.listRollCall.forEach((element) => {
      var date1 = new Date(element.login_date);
      var date2 = props.date;
      if (
        getYearMonthDay(date1) === getYearMonthDay(date2) &&
        element.roll_call_status
      ) {
        setVisible("CalendarTile--hasEvent");
        setStudy(element);
        return;
      }
    });
    if (props.index + 1 === props.count) {
      dispatch(StopLoadingCarlendar());
    }
  }, [props, loadingCarlendar]);
  return props.date.getMonth() === props.month ? (
    props.date.getDay() === 6 || props.date.getDay() === 0 ? (
      <button
        className={`react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend CalendarTile ${visible}`}
        style={{
          flexBasis: "14.2857%",
          maxWidth: "14.2857%",
          overflow: "hidden",
        }}
      >
        <abbr aria-label={props.date}>{props.date.getDate()}</abbr>
        {study !== null && study.roll_call_status ? (
          <img
            alt="Study event"
            className="c1qopd5l"
            src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg"
            title="You studied on this day!"
          />
        ) : (
          ""
        )}
      </button>
    ) : (
      <button
        className={`react-calendar__tile react-calendar__month-view__days__day CalendarTile ${visible}`}
        style={{
          flexBasis: "14.2857%",
          maxWidth: "14.2857%",
          overflow: "hidden",
        }}
      >
        <abbr aria-label={props.date}>{props.date.getDate()}</abbr>
        {study !== null && study.roll_call_status ? (
          <img
            alt="Study event"
            className="c1qopd5l"
            src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg"
            title="You studied on this day!"
          />
        ) : (
          ""
        )}
      </button>
    )
  ) : props.date.getDay() === 6 || props.date.getDay() === 0 ? (
    <button
      className={`react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth CalendarTile CalendarTile--isCurrentWeek ${visible}`}
      style={{
        flexBasis: "14.2857%",
        maxWidth: "14.2857%",
        overflow: "hidden",
      }}
    >
      <abbr aria-label={props.date}>{props.date.getDate()}</abbr>
      {study !== null && study.roll_call_status ? (
        <img
          alt="Study event"
          className="c1qopd5l"
          src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg"
          title="You studied on this day!"
        />
      ) : (
        ""
      )}
    </button>
  ) : (
    <button
      className={`react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth CalendarTile CalendarTile--isCurrentWeek ${visible}`}
      style={{
        flexBasis: "14.2857%",
        maxWidth: "14.2857%",
        overflow: "hidden",
      }}
    >
      <abbr aria-label={props.date}>{props.date.getDate()}</abbr>
      {study !== null && study.roll_call_status ? (
        <img
          alt="Study event"
          className="c1qopd5l"
          src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg"
          title="You studied on this day!"
        />
      ) : (
        ""
      )}
    </button>
  );
}
