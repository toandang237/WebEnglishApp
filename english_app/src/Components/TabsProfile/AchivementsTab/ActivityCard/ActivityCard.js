/** @format */

import { useEffect, useState } from "react";
import {
  currentDay,
  lastMonth,
  nextMonth,
} from "../../../../js/ActionDateTime";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "@progress/kendo-react-indicators";
import { IsLoadingCarlendar } from "../../../../Creators/LoadingCreator";
import { Button } from "@progress/kendo-react-buttons";
import Apis, { endpoints } from "../../../../config/Apis";
import cookies from "react-cookies";
import { TurnOnDialog } from "../../../../Creators/DialogCreator";
import { ExceptCommon } from "../../../../js/ExceptCommon";

const daysOfWeek = [
  { day: "Sunday", key: 0, acronyms: "S" },
  { day: "Monday", key: 1, acronyms: "M" },
  { day: "Tuesday", key: 2, acronyms: "T" },
  { day: "Wednesday", key: 3, acronyms: "W" },
  { day: "Thursday", key: 4, acronyms: "T" },
  { day: "Friday", key: 5, acronyms: "F" },
  { day: "Saturday", key: 6, acronyms: "S" },
];
export default function ActivityCard() {
  const dispatch = useDispatch();

  const [monthCurrent, setMonthCurrent] = useState(new Date().getMonth());
  const [yearCurrent, setYearCurrent] = useState(new Date().getFullYear());
  const [isCheckin, setIsCheckin] = useState(false);

  const [disabled, setDisabled] = useState("");
  const loadingCarlendar = useSelector((state) => state.loadingCarlendar.load);
  const dateCurrent = new Date();
  useEffect(() => {
    let date = nextMonth(yearCurrent, monthCurrent);
    if (
      dateCurrent.getMonth() + 1 === date.month &&
      dateCurrent.getFullYear() === date.year
    ) {
      setDisabled("disabled");
    } else {
      setDisabled("");
    }

    let checkCheckin = async () => {
      try {
        let loadCheckin = await Apis.postForm(
          endpoints["getStudyInfoByDay"],
          {
            day: `${dateCurrent.getFullYear()}-${
              dateCurrent.getMonth() + 1
            }-${dateCurrent.getDate()}`,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access-token")}`,
            },
          }
        );
        if (loadCheckin !== null) {
          setIsCheckin(loadCheckin.data.isCheckin);
        }
      } catch (err) {
        var user = cookies.load("current-user");
        ExceptCommon(err, user.id);
      }
    };
    checkCheckin();
  }, [monthCurrent, loadingCarlendar]);

  // handle event last month click
  const lastMonthHandle = () => {
    dispatch(IsLoadingCarlendar());
    let date = lastMonth(yearCurrent, monthCurrent);

    setMonthCurrent(date.month);
    setYearCurrent(date.year);
    if (
      dateCurrent.getMonth() + 1 === date.month &&
      dateCurrent.getFullYear() === date.year
    ) {
      setDisabled("disabled");
    } else {
      setDisabled("");
    }
  };

  // handle event next month click
  const nextMonthHandle = () => {
    dispatch(IsLoadingCarlendar());
    let date = nextMonth(yearCurrent, monthCurrent);
    setMonthCurrent(date.month);
    setYearCurrent(date.year);
  };

  //handle event check in click
  const checkinHandle = async () => {
    try {
      let res = await Apis.putForm(
        endpoints["checkin"],
        {
          day: `${dateCurrent.getFullYear()}-${
            dateCurrent.getMonth() + 1
          }-${dateCurrent.getDate()}`,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        }
      );
      if (res !== null) {
        setIsCheckin(true);
        dispatch(TurnOnDialog("", "Attended!"));
      }
    } catch (err) {
      var user = cookies.load("current-user");
      ExceptCommon(err, user.id);
    }
  };
  return (
    <div className="AssemblyCard AssemblyMediumCard">
      <div className="au9jaz8">
        <div className="s1b7upyy">
          <h5 className="s1rx7q8q h19ive8k">Recently earned</h5>
          <span className="s8j1d54">Studied first set</span>
          <div className="AchievementsImage AchievementsImage--medium AchievementsImage--isActive AchievementsImage-badge--setsStudied ifxn4w4">
            <div className="i18szmwz" style={{ "--i18szmwz-0": "pointer" }}>
              <div className="AchievementsImageContainer AchievementsImageContainer--medium AchievementsImageContainer--goalTextAlignment-top akxyc9n">
                <img
                  alt="Studied first set"
                  src="https://quizlet.com/static/achievements/badge-SetsStudied.svg"
                  className="i11kdv2c"
                />
                <span data-testid="goal-number" className="aup4qff">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="a1q27rp5"
          style={{ width: "20rem", "--a1q27rp5-1": "20rem" }}
        >
          <div className="react-calendar c6p6uaq Calendar--view-month">
            <div
              className="react-calendar__navigation"
              style={{ display: "flex" }}
            >
              <button
                aria-label=""
                className="react-calendar__navigation__arrow react-calendar__navigation__prev2-button"
                type="button"
              >
                «
              </button>
              <button
                className="react-calendar__navigation__arrow react-calendar__navigation__prev-button"
                onClick={lastMonthHandle}
              >
                <span className="k-icon k-i-arrow-chevron-left"></span>
              </button>
              <button
                className="react-calendar__navigation__label AssemblyIcon AssemblyIcon--medium"
                style={{ flexGrow: "1" }}
              >
                <span className="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from">
                  {`${currentDay(monthCurrent)} ${yearCurrent}`}
                </span>
                {loadingCarlendar ? (
                  <span
                    className="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from"
                    style={{ marginLeft: "50%" }}
                  >
                    <div className="col-4">
                      <Loader themeColor="inverse" type="pulsing" />
                    </div>
                  </span>
                ) : (
                  ""
                )}
              </button>
              <button
                className="react-calendar__navigation__arrow react-calendar__navigation__next-button"
                onClick={nextMonthHandle}
                disabled={`${disabled}`}
              >
                <span className="k-icon k-i-arrow-chevron-right AssemblyIcon AssemblyIcon--medium"></span>
              </button>
              <button className="react-calendar__navigation__arrow react-calendar__navigation__next2-button"></button>
            </div>
            <div className="react-calendar__viewContainer">
              <div className="react-calendar__month-view">
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <div style={{ flexGrow: "1", width: "100%" }}>
                    <div
                      className="react-calendar__month-view__weekdays"
                      style={{ display: "flex" }}
                    >
                      {daysOfWeek.map((e, index) => {
                        return (
                          <div
                            key={index}
                            className="react-calendar__month-view__weekdays__weekday"
                            style={{
                              flexBasis: "14.2857%",
                              maxWidth: "14.2857%",
                              overflow: "hidden",
                            }}
                          >
                            <abbr aria-label={e.day} title={e.day}>
                              {e.acronyms}
                            </abbr>
                          </div>
                        );
                      })}
                    </div>
                    <Calendar
                      month={monthCurrent}
                      year={yearCurrent}
                      isCheckin={isCheckin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c13hgbvj">
          <div className="cjhti2z">
            <h5 className="t9i9vmb h19ive8k">Current streak</h5>
            <div className="c49e2ip">1-week</div>
            <ul className="s1rtnf4c" style={{ "--s1rtnf4c-1": "none" }}>
              <li className="poyi4u6"></li>
              <li className="s98ehnz">
                <img
                  alt="Study event"
                  className="pbf7z5o"
                  src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg"
                />
              </li>
            </ul>
          </div>
          <div className="cjhti2z" style={{ textAlign: "center" }}>
            <Button
              size="medium"
              themeColor="primary"
              fillMode="solid"
              rounded="full"
              disabled={isCheckin}
              onClick={checkinHandle}
            >
              Check in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
