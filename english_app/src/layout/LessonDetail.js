/** @format */

/**
 * layout chi tiết bài học
 */
import { useRef, useState } from "react";
import "../css/Create_set.css";
import WordItem from "../Components/TermRow/WordItem";
import getMessage from "../js/MessageError";
import { useEffect } from "react";
import Apis, { endpoints } from "../config/Apis";
import { useParams, useSearchParams } from "react-router-dom";
import cookies from "react-cookies";
import dispatch, { useDispatch, useSelector } from "react-redux";
import { TurnOnDialog } from "../Creators/DialogCreator";
import { SaveLesson, WordIndex } from "../Creators/CommonCreator";
import { IsLoading, StopLoading } from "../Creators/LoadingCreator";
import { ExceptCommon } from "../js/ExceptCommon";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
export default function LessonDetail() {
  const [focusTitle, setFocusTitle] = useState("");
  const [focusDescription, setFocusDescription] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lesson, setLesson] = useState({
    id: "",
    active: "",
    content: "",
    course: "",
    image: "",
    title: "",
    created_date: "",
    updated_date: "",
    description: "",
  });
  const [words, setWords] = useState([]);
  const { lesson_id } = useParams();
  const [ref, setRef] = useState(-1);
  const [idxDelete, setIdxDelete] = useState(-1);
  const dispatch = useDispatch();
  const [firstLoad, setFirstLoad] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const isSave = useSelector((state) => state.checkSaveLesson);
  const [isShowImage, setIsShowImage] = useState({ isShow: false, image: "" });

  useEffect(() => {
    document.title = getMessage("T0001", false);
    getLesson();
    getWords();
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      if (!isSave) {
        dispatch(StopLoading());
      }
      setSaveSuccess(!isSave);
    }
  }, [isSave]);

  useEffect(() => {
    if (ref == 1) {
      let listWords = words;
      listWords.push({
        id: 0,
        title: " ",
        meaning: " ",
        image: "",
        order: words.length + 1,
        lesson: lesson.id,
        image_path: "",
        words: [],
      });
      setWords(listWords);
      setRef(-1);
    }
    if (ref == 0) {
      let listWords = words;
      if (idxDelete != -1) {
        listWords.splice(idxDelete - 1, 1);
      }
      setWords(listWords);
      setRef(-1);
    }
  }, [ref]);

  async function deleteItem(idx, id = 0) {
    setRef(0);
    setIdxDelete(idx);
    try {
    } catch (e) {}
  }

  function btnAddTermClick() {
    setRef(1);
  }

  /**
   * Xử lý lấy danh sách từ vựng
   */
  async function getWords(isLoadFirst = true) {
    try {
      let res = await Apis.get(endpoints["getWordsLesson"](lesson_id), {
        headers: {
          Authorization: `Bearer ${cookies.load("access-token")}`,
        },
      });
      if (res) {
        setWords(res.data);
        if (isLoadFirst) {
          dispatch(StopLoading());
        }
      } else {
        if (isLoadFirst) {
          dispatch(IsLoading());
        }
      }
    } catch (e) {
      var user = cookies.load("current-user");
      ExceptCommon(e, user.id);
    }
  }

  /**
   *Xử lý lấy chi tiết bài học
   */
  async function getLesson() {
    try {
      let res = await Apis.get(endpoints["getLesson"](lesson_id), {
        headers: {
          Authorization: `Bearer ${cookies.load("access-token")}`,
        },
      });
      if (res) {
        setLesson(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
      }
    } catch (e) {
      var user = cookies.load("current-user");
      ExceptCommon(e, user.id);
    }
  }

  function CheckValidate() {
    var check = true;
    // Kiểm tra trước khi lưu
    if (title === "") {
      let titleError = document.getElementById("error-lesson-title");
      titleError.innerHTML = getMessage("M0001");
      check = false;
    } else {
      let titleError = document.getElementById("error-lesson-title");
      titleError.innerHTML = "";
    }

    if (description === "") {
      let titleError = document.getElementById("error-lesson-description");
      titleError.innerHTML = getMessage("M0001");
      check = false;
    } else {
      let titleError = document.getElementById("error-lesson-description");
      titleError.innerHTML = "";
    }

    return check;
  }

  /**
   * Lưu thông tin bài học
   */
  async function SaveMaster() {
    try {
      let res = await Apis.patch(
        endpoints["updateLesson"](lesson_id),
        {
          description: description,
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        }
      );
      if (res) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  }

  function Save() {
    var checkValidate = CheckValidate();
    dispatch(IsLoading());
    if (checkValidate === true) {
      let checkSaveMaster = SaveMaster(); // Kiểm tra lưu lesson thành công => lưu words
      if (!checkSaveMaster) {
        var title = "Cảnh báo";
        var content = getMessage("M0002");
        dispatch(TurnOnDialog(title, content));
      } else {
        if (words.length > 0) {
          dispatch(SaveLesson());
        } else {
          dispatch(StopLoading());
        }
      }
    }
  }

  function showImage(data) {
    setIsShowImage(data);
  }

  return (
    <main className="page" id="page">
      <div id="SetPageTarget">
        <div className="CreateSetPage">
          <div className="CreateSetHeader has-adz">
            <div className="CreateSetHeader-stickyPlaceholder">
              <div className="CreateSetHeader-sticky">
                <div className="UIContainer">
                  <div className="CreateSetHeader-heading">
                    <div className="CreateSetHeader-headingText">
                      <div className="CreateSetHeader-title">
                        <span>Create a new study set</span>
                      </div>
                    </div>
                    <div className="CreateSetHeader-adz">
                      <div className="CreateSetHeader-adzContainer">
                        <div className="CreateSetHeader-adzWrapper">
                          <div className="SiteAd cwmffqe c17rhi9m a1g86l20">
                            <div
                              className="SiteAd-adContainer agk2jqb"
                              id="dfp-CreateSetHeader"
                              style={{ display: "none" }}
                            >
                              <div
                                id="google_ads_iframe_/6396803/CreateSetHeader_1__container__"
                                style={{
                                  border: "0pt none",
                                  width: "320px",
                                  height: "0px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CreateSetHeader-infoButtonWrap">
                      <button
                        type="button"
                        className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--medium AssemblyButtonBase--padding"
                        onClick={Save}
                      >
                        <span>Done</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="UIContainer">
              <div className="CreateSetHeader-headingContent">
                <div className="CreateSetHeader-textarea CreateSetHeader-title">
                  <div className={`SpecialCharacterTextarea ${focusTitle}`}>
                    <label className="UITextarea">
                      <div className="UITextarea-content">
                        <div
                          className={`AutoExpandTextarea UITextarea-textarea UITextarea-autoExpandTextarea ${focusTitle}`}
                        >
                          <div className="AutoExpandTextarea-sizer"> </div>
                          <div className="AutoExpandTextarea-wrapper">
                            <textarea
                              maxLength={255}
                              placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
                              className="AutoExpandTextarea-textarea"
                              onFocus={() => setFocusTitle("is-focused")}
                              onBlur={() => setFocusTitle("")}
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <span className="UITextarea-border"></span>
                      </div>
                      <span className="UITextarea-label">
                        <span>Title</span>
                        <span
                          className="eng-errors"
                          id="error-lesson-title"
                        ></span>
                      </span>
                    </label>
                    <div className="hideBelow--s"></div>
                  </div>
                </div>
                <div className="CreateSetHeader-textarea CreateSetHeader-description">
                  <div
                    className={`SpecialCharacterTextarea ${focusDescription}`}
                  >
                    <label className="UITextarea">
                      <div className="UITextarea-content">
                        <div
                          className={`AutoExpandTextarea UITextarea-textarea UITextarea-autoExpandTextarea ${focusDescription}`}
                        >
                          <div className="AutoExpandTextarea-sizer"> </div>
                          <div className="AutoExpandTextarea-wrapper">
                            <textarea
                              placeholder="Add a description..."
                              className="AutoExpandTextarea-textarea"
                              onFocus={() => setFocusDescription("is-focused")}
                              onBlur={() => setFocusDescription("")}
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                          </div>
                          <span className="UITextarea-border"></span>
                        </div>
                      </div>
                      <span className="UITextarea-label">
                        <span>Description</span>
                        <span
                          className="eng-errors"
                          id="error-lesson-description"
                        ></span>
                      </span>
                    </label>
                    <div className="hideBelow--s"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="UIContainer">
              <div className="UIDiv CreateSetHeader-permissionsAndImport">
                <div className="CreateSetHeader-importActionsWrap">
                  <button className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--medium AssemblyButtonBase--padding">
                    <span className="k-icon k-i-plus AssemblyIcon AssemblyIcon--medium CustomsizeIcon"></span>
                    <span>Import</span>
                  </button>
                </div>
                <div className="CreateSetHeader-permissionsWrap">
                  <div className="CreateSetHeader-permissionWrap">
                    <div className="f1dpcrgz">
                      <button
                        className="AssemblyButtonBase AssemblyIconButton AssemblyIconButton--secondary AssemblyIconButton--circle AssemblyButtonBase--medium AssemblyButtonBase--circle"
                        title="Save"
                      >
                        <span className="k-icon k-i-save AssemblyIcon AssemblyIcon--medium CustomsizeIcon"></span>
                      </button>
                    </div>
                  </div>
                  <div className="CreateSetHeader-permissionWrap">
                    <div className="f1dpcrgz">
                      <button className="AssemblyButtonBase AssemblyIconButton AssemblyIconButton--secondary AssemblyIconButton--circle AssemblyButtonBase--medium AssemblyButtonBase--circle">
                        <span className="k-icon k-i-gear AssemblyIcon AssemblyIcon--medium CustomsizeIcon"></span>
                      </button>
                    </div>
                  </div>
                  <div className="CreateSetHeader-permissionWrap">
                    <div className="CreateSetHeader-tooltips">
                      <div className="AssemblyTooltip--base">
                        <button
                          title="Flip terms and definitions"
                          className="AssemblyButtonBase AssemblyIconButton AssemblyIconButton--secondary AssemblyIconButton--circle AssemblyButtonBase--medium AssemblyButtonBase--circle"
                          disabled
                        >
                          <span className="k-icon k-i-arrows-no-change AssemblyIcon AssemblyIcon--medium"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="UIContainer">
              <span></span>
            </div>
          </div>
          <div className="CreateSetPage-container">
            <div className="UIContainer">
              <div className="CreateSetPage-list">
                <div className="StudiableItems">
                  <div className="e1phsipe" id="editor-term-side">
                    TERM
                  </div>
                  <div className="e1phsipe" id="editor-definition-side">
                    DEFINITION
                  </div>
                  <div className="e1phsipe" id="editor-question-side">
                    QUESTION
                  </div>
                  <div className="e1phsipe" id="editor-answer-side">
                    ANSWER
                  </div>
                  <div className="e1phsipe" id="editor-custom-distractor">
                    MULTIPLE CHOICE OPTION
                  </div>
                  <div className="TermRows">
                    <div>
                      {words.map((e, idx) => {
                        return (
                          <WordItem
                            obj={e}
                            key={idx}
                            deleteItem={() => deleteItem(idx)}
                            idx={idx}
                            length={words.length}
                            getWords={getWords}
                            showImage={showImage}
                          />
                        );
                      })}
                      <div className="TermRows-termRowWrap">
                        <div className="TermRow is-phantom">
                          <div className="TermRow-bareSide TermRow-bareSide--word TermText">
                            {" "}
                          </div>
                          <div className="TermRow-bareSide TermRow-bareSide--definition TermText lang-en">
                            {" "}
                          </div>
                          <div className="TermContent has-richTextToolbar rt-clean-design">
                            <div className="TermContent-inner" draggable="true">
                              <div className="TermContent-inner-padding">
                                <div
                                  className="TermContent-sides"
                                  draggable="true"
                                >
                                  <div className="TermContent-sideWrap">
                                    {/* <div className="TermContent-side TermContent-side--word">
                                      <div className="WordSide">
                                        <div className="RichTextEditor">
                                          <div className="PMEditor ugck83a notranslate pc1cm7j">
                                            <div
                                              contentEditable={true}
                                              pm-placeholder="Enter term"
                                              aria-placeholder="Enter term"
                                              role="textbox"
                                              aria-multiline="true"
                                              aria-labelledby="editor-term-side"
                                              className="ProseMirror"
                                              defaultValue={""}
                                            >
                                              <p>
                                                <br />
                                              </p>
                                            </div>
                                          </div>
                                          <div className="b18prmdf"></div>
                                          <span className="RichTextEditor-label">
                                            <div className="RichTextEditor-labelText">
                                              TERM
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="TermContent-side TermContent-side--definition">
                                      <div className="DefinitionSide">
                                        <div className="DefinitionSide-richTextEditor">
                                          <div className="DefinitionSide-imageContainer">
                                            <div className="ImageUploadComponent">
                                              <div>
                                                <span className="ContextToggle">
                                                  <div
                                                    className="ImageUploadProminentContextToggle"
                                                    data-testid="ImageUploadProminentContextToggle"
                                                  >
                                                    <span className="k-icon k-i-image UIIcon UIIcon--image UIIcon--large"></span>
                                                    <div className="ImageUploadProminentContextToggle-IconExplanation">
                                                      <span>IMAGE</span>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="RichTextEditor"
                                            data-testid="RichTextEditor"
                                          >
                                            <div
                                              className="PMEditor lang-en ugck83a notranslate pc1cm7j"
                                              data-testid="PMEditor"
                                            >
                                              <div
                                                contentEditable={true}
                                                pm-placeholder="Enter the English"
                                                aria-placeholder="Enter the English"
                                                aria-multiline="true"
                                                aria-labelledby="editor-definition-side"
                                                className="ProseMirror"
                                                defaultValue={""}
                                              >
                                                <p>
                                                  <br />
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="b18prmdf"></div>
                                          <span className="RichTextEditor-label">
                                            <div className="RichTextEditor-labelText">
                                              DEFINITION
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div> */}
                                    <a
                                      className="TermContent-addRow"
                                      id="addRow"
                                    >
                                      <span className="TermContent-addRowButton">
                                        <button
                                          aria-label="+ Add card"
                                          className="UILinkButton"
                                          type="button"
                                          onClick={btnAddTermClick}
                                        >
                                          <span>+ Add card</span>
                                        </button>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Fade>
        {saveSuccess && (
          <NotificationGroup
            style={{
              top: 65,
              right: 0,
              alignItems: "flex-end",
            }}
          >
            <Notification
              type={{
                style: "success",
                icon: true,
              }}
              closable={true}
              onClose={() => setSaveSuccess(false)}
            >
              <span>Your data has been saved.</span>
            </Notification>
          </NotificationGroup>
        )}
      </Fade>
      {isShowImage.isShow && (
        <>
          <div
            className="Overlay ZoomableImage-overlay"
            style={{ opacity: 1 }}
            onClick={() => setIsShowImage({ isShow: false, image: "" })}
          ></div>
          <img
            src={isShowImage.image}
            className="ZoomableImage-image"
            style={{
              width: 500,
              height: 413,
              left: 710,
              top: 110,
              transform: "translate(0px, 0px) scale(1)",
              opacity: 1,
            }}
            onClick={() => setIsShowImage({ isShow: false, image: "" })}
          />
        </>
      )}
    </main>
  );
}
