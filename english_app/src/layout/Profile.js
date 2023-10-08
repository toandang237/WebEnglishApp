/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AchivementTab from "../Components/TabsProfile/AchivementsTab/AchivementTab";
import SetsTab from "../Components/TabsProfile/SetsTab/SetsTab";
import FoldersTab from "../Components/TabsProfile/FoldersTab/FoldersTab";
import { useParams } from "react-router-dom";
import Apis, { endpoints } from "../config/Apis";
import cookies from "react-cookies";

export default function Profile() {
  const currentUser = useSelector((state) => state.user.user);
  const { username, user_id } = useParams();

  const [user, setUser] = useState(
    currentUser.username == username && currentUser.id == user_id
      ? currentUser
      : null
  );
  // const image = user?.avatar !== null ? user?.avatar : "";
  const tabs = [
    {
      tab: "ACHIEVEMENTS",
      index: 0,
      name: "Achievements",
      component: <AchivementTab />,
      isShow: username == currentUser.username,
    },
    {
      tab: "SETS",
      index: 1,
      name: "Study sets",
      component: <SetsTab />,
      isShow: true,
    },
    {
      tab: "FOLDERS",
      index: 2,
      name: "Folders",
      component: <FoldersTab user={user} />,
      isShow: true,
    },
    { tab: "CLASSES", index: 3, name: "Classes", component: "", isShow: true },
  ];
  const [active, setActive] = useState(
    username == currentUser.username ? tabs[0].index : tabs[1].index
  );
  const getTab = (index) => {
    return tabs.find((e) => e.index === index).tab;
  };
  useEffect(() => {
    if (
      user === null &&
      currentUser.username !== username &&
      currentUser.id !== user_id
    ) {
      let getUserProfile = async () => {
        let res = await Apis.get(endpoints["getProfile"](user_id), {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        });
        if (res) {
          setUser(res.data.user);
        }
      };
      getUserProfile();
    }
  });
  useEffect(() => {
    tabs.forEach((e) => {
      if (e.index === active) {
        let ele = document.getElementById(
          `react-aria330287132-28-tab-PROFILE_TABS.${getTab(e.index)}`
        );
        if (
          ele !== null &&
          ele !== undefined &&
          !ele.classList.contains("s4cgp9b")
        ) {
          ele.classList.add("s4cgp9b");
        }
      } else {
        let ele = document.getElementById(
          `react-aria330287132-28-tab-PROFILE_TABS.${getTab(e.index)}`
        );
        if (
          ele !== null &&
          ele !== undefined &&
          ele.classList.contains("s4cgp9b")
        ) {
          ele.classList.remove("s4cgp9b");
        }
      }
    });
  }, [active]);
  const changeTab = (index) => {
    setActive(index);
  };
  return (
    user && (
      <div className="DashboardLayout">
        <div className="DashboardPageTarget">
          <div className="DashboardLayout-container">
            <section className="DashboardLayout-main">
              <div className="DashboardPage has-adz">
                <div className="DashboardPage-header">
                  <div className="peitfrk">
                    <div className="h1u362x1">
                      <div className="ps7dhj0">
                        <img
                          alt="Ảnh hồ sơ"
                          className="AssemblyAvatar"
                          src={user.avatar}
                          style={{
                            backgroundImage: `url(${user.avatar})`,
                            height: "64px",
                            width: "64px",
                          }}
                        />
                        <div className="uvajw8g">
                          <div className="ugwpp8y">
                            <h3 className="h9lvpq">{user.username}</h3>
                            <div className="u2f0s55"></div>
                          </div>
                          <div className="u1tpjy5j">{`${user.last_name} ${user.first_name}`}</div>
                        </div>
                      </div>
                      <div
                        className="h1wh8y5n"
                        style={{
                          "--h1wh8y5n-0": "column",
                          "--h1wh8y5n-1": "center",
                          "--h1wh8y5n-2": "flex-end",
                          "--h1wh8y5n-3": "unset",
                          "--h1wh8y5n-6": "1.5rem 0 1.5rem",
                        }}
                      ></div>
                    </div>
                    <div className="p10cmdh3">
                      <div className="AssemblyTabsWrapper">
                        <div
                          className="AssemblyTabs"
                          id="react-aria330287132-28"
                        >
                          {tabs.map((e, index) => {
                            return (
                              e.isShow && (
                                <div
                                  key={index}
                                  id={`react-aria330287132-28-tab-PROFILE_TABS.${e.tab}`}
                                  className={`AssemblyTab r1ep6ugx r1k7ho1y ${
                                    e.index === 1 ? "s4cgp9b" : ""
                                  }`}
                                  onClick={(e) => changeTab(index)}
                                >
                                  {e.name}
                                </div>
                              )
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="DashboardPage-inner">
                  <div className="DashboardPage-main">
                    {tabs[active].component}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  );
}
