/** @format */

import { useEffect, useState } from "react";
import {
  getDaysInMonth,
  lastMonth,
  nextMonth,
} from "../../../../js/ActionDateTime";
import ButtonCarlendar from "../../../Common/ButtonCarlendar";
import Apis, { endpoints } from "../../../../config/Apis";
import cookies, { load } from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { StopLoadingCarlendar } from "../../../../Creators/LoadingCreator";
import { UserLogout } from "../../../../Creators/UserCreator";

export default function Calendar(props) {
  const [daysInMonth, setdaysInMonth] = useState([]);
  const [rollCallDays, setRollCallDays] = useState([]);
  const loadingCarlendar = useSelector((state) => state.loadingCarlendar.load);
  const dispatch = useDispatch();
  useEffect(() => {
    const _lastMonth = lastMonth(props.year, props.month);
    const _nextMonth = nextMonth(props.year, props.month);
    const daysInMonth_tmp = getDaysInMonth(props.year, props.month);

    // Danh sách ngày của tháng trước
    const daysInLastMonth =
      daysInMonth_tmp[0].getDay() !== 0
        ? getDaysInMonth(_lastMonth.year, _lastMonth.month).slice(
            -daysInMonth_tmp[0].getDay()
          )
        : [];

    // Danh sách ngày của tháng trước
    const daysInNextMonth =
      daysInMonth_tmp[daysInMonth_tmp.length - 1].getDay() !== 6
        ? getDaysInMonth(_nextMonth.year, _nextMonth.month).slice(
            0,
            6 - daysInMonth_tmp[daysInMonth_tmp.length - 1].getDay()
          )
        : [];

    // Set ngày cho tháng
    setdaysInMonth(
      daysInLastMonth.concat(daysInMonth_tmp).concat(daysInNextMonth)
    );
    try {
      let load = async () => {
        let res = await Apis.get(endpoints["getListRollCallDay"], {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        });
        if (res !== null) {
          setRollCallDays(res.data);
          dispatch(StopLoadingCarlendar());
        }
      };
      load();
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        dispatch(UserLogout());
      }
    }
  }, [loadingCarlendar, props.isCheckin]);
  return (
    <div
      className="react-calendar__month-view__days"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {daysInMonth.map((e, index) => {
        return (
          <ButtonCarlendar
            key={index}
            date={e}
            month={props.month}
            count={daysInMonth.length}
            index={index}
            listRollCall={rollCallDays}
          />
        );
      })}
    </div>
  );
}
