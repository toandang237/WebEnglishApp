/** @format */
import { useState } from "react";
import "../css/FolderPageDetail.css";
import { useEffect } from "react";
import Apis, { endpoints } from "../config/Apis";
import { Link, useParams } from "react-router-dom";
import { IsLoading, StopLoading } from "../Creators/LoadingCreator";
import { useDispatch } from "react-redux";
import { ExceptCommon } from "../js/ExceptCommon";
import cookies from "react-cookies";
import SetItem from "../Components/TermRow/SetItem";

export default function FolderDetail() {
  const [setList, setSetList] = useState([]);
  const [course, setCourse] = useState(null);
  const { course_id } = useParams();
  const dispatch = useDispatch();
  const ItemHeaderAction = [
    {
      classIcon: "k-i-plus",
      action: () => {},
    },
    {
      classIcon: "k-i-select-box",
      action: () => {},
    },
    {
      classIcon: "k-i-share",
      action: () => {},
    },
    {
      classIcon: "k-i-more-horizontal",
      action: () => {},
    },
  ];

  useEffect(() => {
    let loadLesson = async () => {
      try {
        let res = await Apis.get(endpoints["getLessonsByCourse"](course_id));
        let resCourse = await Apis.get(endpoints["getCoursesByID"](course_id), {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        });
        if (res && resCourse) {
          setSetList(res.data);
          setCourse(resCourse.data);
          dispatch(StopLoading());
        } else {
          dispatch(IsLoading());
        }
      } catch (e) {
        dispatch(StopLoading());
        var user = cookies.load("current-user");
        ExceptCommon(e, user.id);
      }
    };
    loadLesson();
  }, []);

  return (
    course && (
      <div className="DashboardLayout">
        <div id="DashboardPageTarget">
          <div className="DashboardLayout-container has-sidebar-adz">
            <section className="DashboardLayout-main" role="contentinfo">
              <div className="DashboardPage">
                <div className="DashboardPage-header">
                  <div>
                    <div
                      className="DashboardHeader"
                      role="contentinfo"
                      tabIndex="-1"
                    >
                      <div className="UIContainer">
                        <div className="UIDiv FolderPageHeader">
                          <div className="FolderPageHeader-info">
                            <span>1 set</span>
                            <span className="FolderPageHeader-byline">
                              created by
                            </span>
                            <div className="FolderPageHeader-userLink">
                              <div className="UserLink">
                                <div className="UserLink-inner">
                                  <div className="UserLink-avatar">
                                    <Link
                                      className="UILink"
                                      title="Visit toandang123's profile"
                                      to="#"
                                    >
                                      <span
                                        className="UserAvatar"
                                        style={{
                                          height: "24px",
                                          width: "24px",
                                        }}
                                      >
                                        <div className="Image">
                                          <img
                                            alt="Profile Picture"
                                            className="Image-image"
                                            height={24}
                                            width={24}
                                            referrerPolicy="no-referrer"
                                            src="https://up.quizlet.com/4ifjnn-9DkUu-96s.jpg"
                                          />
                                        </div>
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="UserLink-content">
                                    <div className="UserLink-pill-badge">
                                      <a className="UILink" href="#">
                                        <span className="UserLink-username">
                                          toandang123
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="DashboardHeaderTitle">
                            <div className="DashboardHeaderTitle-main">
                              <span
                                className="k-icon k-i-folder UIIcon UIIcon--folder"
                                style={{ fontSize: "55px" }}
                              ></span>
                              <span className="DashboardHeaderTitle-title">
                                {course.title}
                              </span>
                            </div>
                            <div className="DashboardHeaderTitle-subtitle">
                              {course.description}
                            </div>
                          </div>
                          <div className="DashboardHeaderActions">
                            {ItemHeaderAction.map((e, idx) => {
                              return (
                                <div className="MenuIconWithTooltip" key={idx}>
                                  <div
                                    tabIndex="-1"
                                    className="f1dpcrgz"
                                    data-testid="AssemblyTooltip--base"
                                  >
                                    <button
                                      type="button"
                                      aria-label="add"
                                      className="AssemblyButtonBase AssemblyIconButton AssemblyIconButton--secondary AssemblyIconButton--circle AssemblyButtonBase--medium AssemblyButtonBase--circle"
                                      onClick={e.action}
                                    >
                                      <span
                                        className={`k-icon ${e.classIcon} AssemblyIcon AssemblyIcon--medium k-icon-customize`}
                                      ></span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div>
                          <div className="DeleteFolderModal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="DashboardPage-primaryContents">
                  <div className="DashboardPage-main">
                    <div className="UIContainer">
                      <div className="FolderPage-content">
                        <div className="FolderPageSetsView">
                          <div className="UIDiv FolderPageSetsView-sets">
                            <div>
                              <div className="UIDiv FolderPageSetsList-setsFeed">
                                {setList.map((item, idx) => {
                                  return <SetItem set={item} key={idx} />;
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
