/** @format */
import { useDispatch } from "react-redux";
import "../../css/Common.css";
import "../../css/SiteNavModals.css";
import { TurnOffNewSet } from "../../Creators/CommonCreator";
import ComBoBox from "../DropDown/ComBoBox";
import { useEffect, useRef, useState } from "react";
import Apis, { endpoints } from "../../config/Apis";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";
import { IsLoading, StopLoading } from "../../Creators/LoadingCreator";
import { ExceptCommon } from "../../js/ExceptCommon";

export default function DialogNewSet(props) {
  //   const showRef = useRef(false);
  const [showCbb, setShowCbb] = useState(false);
  const [course, setCourse] = useState(null);
  const [txtSearch, setTxtSearch] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const turnOffNewSet = () => {
    dispatch(TurnOffNewSet());
  };

  //   useEffect(() => {
  //     setShowCbb(showRef.current);
  //   }, [showRef]);

  const showCbbCourse = () => {
    setShowCbb(!showCbb);
    loadCourses();
  };

  const loadCourses = async (txt = null) => {
    if (txt === null) {
      txt = txtSearch;
    }
    try {
      const res = await Apis.postForm(
        endpoints["getAllCoursesOfUser"],
        {
          kw: txt,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        }
      );
      var data = [];
      if (res) {
        res.data.forEach((element) => {
          data.push({
            action: () => {
              setShowCbb(false);
              setCourse(element);
              setTxtSearch(element.title);
            },
            displayName: element.title,
            icon: "",
          });
        });
      }
      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };

  const changeTxtSearch = (e) => {
    setTxtSearch(e.target.value);
    loadCourses(e.target.value);
  };

  const validateInput = () => {
    var chkCourseInput = true;
    var chkTitleInput = true;
    if (course === null || txtSearch === "") {
      chkCourseInput = false;
    }

    if (title === "") {
      chkTitleInput = false;
    }

    return chkCourseInput == true && chkTitleInput == true;
  };

  const createSetOnlick = async () => {
    var check = validateInput();
    if (check) {
      try {
        let res = await Apis.postForm(
          endpoints["createLesson"],
          {
            title: title,
            description: description,
            course: course.id,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access-token")}`,
            },
          }
        );
        if (res) {
          dispatch(StopLoading());
          navigate(`/${res.data.id}/lesson-detail/`);
        } else {
          dispatch(IsLoading());
        }
      } catch (e) {
        var user = cookies.load("current-user");
        ExceptCommon(e, user.id);
      }
    }
  };
  return (
    <div className="ReactModalPortal">
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open oz4nps6 openAnimation"
        style={{
          zIndex: 1000,
          width: "100%",
          height: "100%",
          top: 0,
          position: "fixed",
          left: 0,
        }}
      >
        <div
          className="ReactModal__Content ReactModal__Content--after-open mnlifen o1cv2anc l6ngt95"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="c120w4gu"
            aria-label="Close window"
            style={{ "--c120w4gu-0": "var(--gray-100-gray-700)" }}
          >
            <span
              className="k-icon k-i-close AssemblyIcon AssemblyIcon--medium"
              onClick={turnOffNewSet}
              style={{ cursor: "pointer", fontSize: "26px" }}
            ></span>
          </div>
          <div data-testid="AssemblyModal" className="sn9k23w">
            <div
              className="c1i2nkrh"
              style={{
                "--c1i2nkrh-0": "stretch",
                "--c1i2nkrh-1": "2rem",
                "--c1i2nkrh-2": "left",
                "--c1i2nkrh-4": "1.5rem",
              }}
            >
              <header>
                <h2 className="th6yw7v">Create a new set</h2>
              </header>
              <div className="cni01z">
                <div className="nt7usgx">
                  <label
                    className="AssemblyInput"
                    htmlFor="CreateFolderModal--name"
                  >
                    <input
                      className="AssemblyInput-input AssemblyInput-placeholder js-bound"
                      id="CreateFolderModal--name"
                      aria-label="search"
                      placeholder="Choose a course"
                      type="text"
                      //   onBlur={showCbbCourse}
                      onClick={showCbbCourse}
                      value={txtSearch}
                      onChange={(e) => changeTxtSearch(e)}
                    />
                  </label>
                  {showCbb && items && <ComBoBox show={true} items={items} />}
                </div>
                <div className="nt7usgx">
                  <label
                    className="AssemblyInput"
                    htmlFor="CreateFolderModal--name"
                  >
                    <input
                      className="AssemblyInput-input AssemblyInput-placeholder js-bound"
                      id="CreateFolderModal--name"
                      aria-label="Title"
                      placeholder="Enter a title"
                      type="text"
                      //   onBlur={showCbbCourse}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                </div>
                <label
                  htmlFor="CreateFolderModal--description"
                  className="l16bbkbz"
                >
                  <div className="al0f14n">
                    <div className="asc1vt2">
                      <div
                        className="a17bzrsx"
                        style={{
                          "--a17bzrsx-0": "auto",
                          "--a17bzrsx-1": "auto",
                        }}
                      >
                        {" "}
                      </div>
                      <div
                        className="a1fcz3cu"
                        style={{ "--a1fcz3cu-0": "var(--gray-200-gray-800)" }}
                      >
                        <textarea
                          id="CreateFolderModal--description"
                          placeholder="Enter a description (optional)"
                          className="a161zioz bxtl8jy as2ws6i"
                          aria-label="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        >
                          {description}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="f13e2cpr f1ext0pg" style={{ "--f1ext0pg-0": "row" }}>
            <div
              className="fnxms34"
              style={{
                "--fnxms34-1": "row-reverse",
                "--fnxms34-2": "0",
                "--fnxms34-4": "column-reverse",
              }}
            >
              <button
                type="button"
                aria-label="Create folder"
                className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--medium AssemblyButtonBase--padding"
                onClick={createSetOnlick}
              >
                <span>Create set</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
