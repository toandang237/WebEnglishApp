/** @format */

import { useEffect, useState } from "react";
import DropDownCustom from "../../DropDown/DropDownCustom";
import "../../../css/SetsTab.css";
import Apis, { endpoints } from "../../../config/Apis";
import cookies from "react-cookies";
import DashBoardListItems from "../../DashBoardItems/DashBoardListItems";

export default function SetsTab() {
  const [chooseIdx, setChooseIdx] = useState(0);
  const items = [
    {
      action: () => {
        setShow(false);
        setButtonDisplayName("Created");
      },
      displayName: "Created",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setButtonDisplayName("Joined");
      },
      displayName: "Joined",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setButtonDisplayName("Studied");
      },
      displayName: "Studied",
      icon: "",
    },
  ];
  const [show, setShow] = useState(false);
  const [buttonDisplayName, setButtonDisplayName] = useState(
    items[1].displayName
  );

  // lesson list
  const [lessons, setLessons] = useState([]);
  const onClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    let accessToken = cookies.load("access-token");
    let loadLessons = async () => {
      let res = await Apis.get(endpoints["getAllLessonOfUser"], {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res !== null) {
        setLessons(res.data);
      }
    };
    loadLessons();
  }, []);

  async function selectItems(idx) {
    let accessToken = cookies.load("access-token");
    let res = null;
    /**
     * idx = 1: created
     * idx = 2: Joined
     * idx = 3: Studied
     */
    if (idx === 1) {
      res = await Apis.get(endpoints["getAllLessonOfUser"], {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res !== null) {
        setLessons(res.data);
      }
    } else if (idx === 2) {
      
    }
  }
  return (
    <div className="UIContainer">
      <div className="ProfilePage-content">
        <div className="ProfileRecentPage">
          <div className="ProfileRecentFeed">
            <div className="p1vmf404">
              <div data-overlay-container="true">
                <button
                  type="button"
                  id="react-aria6454471699-48"
                  className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--medium AssemblyButtonBase--padding"
                  onClick={onClick}
                >
                  <span>{buttonDisplayName}</span>
                  <span className="k-icon k-i-chevron-down AssemblyIcon AssemblyIcon--medium"></span>
                </button>
                {show && <DropDownCustom show={show} items={items} />}
              </div>
              {lessons.length > 0 ? (
                <label className="AssemblyInput AssemblyInput--inverted">
                  <input
                    className="AssemblyInput-input AssemblyInput-placeholder js-bound"
                    placeholder="Search your sets"
                    type="text"
                  />
                  <div className="ionmch8">
                    <div className="f1dpcrgz">
                      <span className="k-icon k-i-search"></span>
                    </div>
                  </div>
                </label>
              ) : (
                ""
              )}
            </div>
            {lessons.length > 0 ? (
              <div className="UIDiv LatestActivityFeed">
                <div className="LatestActivityFeed-unpublishedSets">
                  <div className="DashboardFeedGroup">
                    <header className="DashboardFeedGroup-header">
                      <h3 className="DashboardFeedGroup-title">In progress</h3>
                      <div className="DashboardFeedGroup-separator">
                        <hr className="UIHorizontalRule" />
                      </div>
                    </header>
                    <DashBoardListItems items={lessons} />
                  </div>
                </div>
                <div></div>
              </div>
            ) : (
              <div className="c87nrzn">
                <img
                  alt="No sets found in your library"
                  srcSet="https://assets.quizlet.com/a/j/dist/app/i/library/sets_empty.4533dc3cae314a7.svg"
                />
                <div className="t1obl4kx t1ne2oir">
                  You haven't created any sets yet
                </div>
                <div className="s27gyf7 t1ne2oir">
                  Create a study set on anything you need to study
                </div>
                <div className="cphr65e">
                  <button
                    type="button"
                    aria-label="Create a set"
                    className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--medium AssemblyButtonBase--padding"
                  >
                    <span>Create a set</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
