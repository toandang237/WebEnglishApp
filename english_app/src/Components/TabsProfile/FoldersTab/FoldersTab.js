/** @format */

import { useState } from "react";
import DropDownList from "../../DropDown/DropDownList";
import cookies from "react-cookies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExceptCommon } from "../../../js/ExceptCommon";
import { IsLoading, StopLoading } from "../../../Creators/LoadingCreator";
import Apis, { endpoints } from "../../../config/Apis";
import DashBoardListItemCourse from "../../DashBoardItems/DashBoardListItemCourse";
import DialogNewFolder from "../../Dialog/DialogNewFolder";
import { TurnOnNewFolder } from "../../../Creators/CommonCreator";

export default function FoldersTab(props) {
  const items = [
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 1, displayName: "Created" });
      },
      displayName: "Created",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 2, displayName: "Joined" });
      },
      displayName: "Joined",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 3, displayName: "Studied" });
      },
      displayName: "Studied",
      icon: "",
    },
  ];
  const [show, setShow] = useState(false);
  const [chooseIdx, setChooseIdx] = useState({
    idx: 1,
    displayName: items[0].displayName,
  });
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const isTurnOnNewFolder = useSelector(
    (state) => state.isTurnOnNewFolder.isTurnOn
  );

  const turnOnNewFolderOnClick = () => {
    dispatch(TurnOnNewFolder());
  };

  useEffect(() => {
    dispatch(IsLoading());
    let accessToken = cookies.load("access-token");
    let res = null;
    const loadCourse = async () => {
      try {
        if (chooseIdx.idx === 1) {
          res = await Apis.post(
            endpoints["getAllCoursesOfUser"],
            {
              user_id: props.user?.id,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
        } else if (chooseIdx.idx === 2) {
          res = await Apis.get(endpoints["getCoursesJoined"], {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        } else {
          dispatch(StopLoading());
          setCourses([]);
        }
        if (res && res.data.msg !== "M0005") {
          setCourses(res.data);
          dispatch(StopLoading());
        }
      } catch (e) {
        dispatch(StopLoading());
        var user = cookies.load("current-user");
        ExceptCommon(e, user.id);
      }
    };
    loadCourse();
  }, [chooseIdx]);

  const onClick = () => {
    setShow(!show);
  };
  return (
    <div className="UIContainer">
      <div className="ProfilePage-content">
        <div className="ProfileRecentPage">
          <div className="ProfileRecentFeed">
            <div className="p1vmf404">
              <div data-overlay-container="true">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="react-aria9611039168-45"
                  aria-label="Recent"
                  className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--medium AssemblyButtonBase--padding"
                  onClick={onClick}
                >
                  <span>{chooseIdx.displayName}</span>
                  <span className="k-icon k-i-chevron-down AssemblyIcon AssemblyIcon--medium"></span>
                </button>
                {show && <DropDownList show={show} items={items} />}
              </div>
            </div>
            <DashBoardListItemCourse items={courses} />
            {chooseIdx.idx == 1 ? (
              <div className="c87nrzn">
                <img
                  alt="No folders found in your library"
                  srcSet="https://assets.quizlet.com/a/j/dist/app/i/library/folders_empty.4ec6ab1f66e648f.svg"
                />
                <div className="t1obl4kx t1ne2oir">
                  Organise all the sets you're revising for a particular subject
                </div>
                {/* <div className="s27gyf7 t1ne2oir">
                Organise all the sets you're revising for a particular subject
              </div> */}
                <div className="cphr65e">
                  <button
                    className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--medium AssemblyButtonBase--padding"
                    type="button"
                    aria-label="Create a folder"
                    onClick={turnOnNewFolderOnClick}
                  >
                    <span>Create a folder</span>
                  </button>
                </div>
                {isTurnOnNewFolder && <DialogNewFolder />}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
