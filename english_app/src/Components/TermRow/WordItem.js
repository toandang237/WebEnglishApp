/** @format */

import { useEffect, useRef, useState } from "react";
import Apis, { endpoints } from "../../config/Apis";
import cookies from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { SaveLessonFinish } from "../../Creators/CommonCreator";
import { StopLoading } from "../../Creators/LoadingCreator";
import { TurnOnDialog } from "../../Creators/DialogCreator";
import getMessage from "../../js/MessageError";
import { ExceptCommon } from "../../js/ExceptCommon";
import ImageZoom from "../Common/ImageZoom";

export default function WordItem(props) {
  /**
   * Begin state
   */
  const [term, setTerm] = useState(
    props.obj.title != "" || props.obj.title != null ? props.obj.title : " "
  );
  const [definition, setDefinition] = useState(
    props.obj.meaning != "" || props.obj.meaning != null
      ? props.obj.meaning
      : " "
  );
  const [isActive, setIsActive] = useState(false);
  const [focusTrash, setFocusTrash] = useState("");
  const [obj, setObj] = useState(props.obj);
  const checkSave = useSelector((state) => state.checkSaveLesson);
  const dialogStatus = useSelector((state) => state.dialog.status);
  const dispatch = useDispatch();
  const imageWord = useRef();
  const changeTerm = (event) => {};

  useEffect(() => {
    if (checkSave) {
      CreateOrUpdate();
      if (props.idx === props.length - 1) {
        setTimeout(() => {
          dispatch(SaveLessonFinish());
          props.getWords(false);
        }, 2000);
      }
    }
  }, [checkSave]);

  async function CreateOrUpdate() {
    try {
      let form = new FormData();
      if (obj.id === 0) {
        let title = term !== " " ? term : "";
        let meaning = definition !== " " ? definition : "";
        form.append("title", title);
        form.append("meaning", meaning);
        form.append("order", obj.order);
        form.append("lesson", obj.lesson);
        if (imageWord.current.value) {
          form.append("image", imageWord.current.files[0]);
        } else {
          if (!obj.image) form.append("image", "");
        }
        let res = await Apis.postForm(endpoints["createWord"], form, {
          headers: {
            Authorization: `Bearer ${cookies.load("access-token")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (res) {
          let title = res.data.title ? res.data.title : "";
          let meaning = res.data.meaning ? res.data.meaning : "";
          setTerm(title);
          setDefinition(meaning);
          setObj(res.data);
        }
      } else {
        var file = document.getElementById(`imageWord${props.idx}`);
        form.append("title", term);
        form.append("meaning", definition);
        if (imageWord.current.value) {
          form.append("image", imageWord.current.files[0]);
        } else {
          if (obj.image === "") form.append("image", "");
        }
        let res = await Apis.patchForm(endpoints["updateWord"](obj.id), form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookies.load("access-token")}`,
          },
        });
        if (res) {
          let title = res.data.title ? res.data.title : "";
          let meaning = res.data.meaning ? res.data.meaning : "";
          setTerm(title);
          setDefinition(meaning);
          setObj(res.data);
        }
      }
    } catch (e) {
      var user = cookies.load("current-user");
      ExceptCommon(e, user.id);

      setTimeout(() => {
        if (!dialogStatus) {
          var title = "Warning!!!";
          var content = getMessage("M0002");
          dispatch(TurnOnDialog(title, content));
        }
        dispatch(SaveLessonFinish());
      }, 2000);
    }
  }

  function deleteImage() {
    var word = {
      id: obj.id,
      title: obj.title,
      meaning: obj.meaning,
      order: obj.order,
      image: "",
      lesson: obj.lesson,
      image_path: "",
    };
    setObj(word);
    if (imageWord.current.value) {
      imageWord.current.value = null;
    }
  }

  function changeImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      debugger;
      var word = {
        id: obj.id,
        title: obj.title,
        meaning: obj.meaning,
        order: obj.order,
        image: objectUrl,
        lesson: obj.lesson,
        image_path: objectUrl,
      };
      setObj(word);
      setIsActive(!isActive);
    }
  }

  function openFile(e) {
    e.preventDefault();
    imageWord.current.click();
  }
  return (
    <>
      <div className="TermRows-termRowWrap" id={`termRow_Item${props.idx}`}>
        <div
          className={`TermRow is-active ${isActive ? "has-activeContext" : ""}`}
        >
          <div className="TermRow-bareSide TermRow-bareSide--word TermText">
            &nbsp;
          </div>
          <div className="TermRow-bareSide TermRow-bareSide--definition TermText lang-en">
            &nbsp;
          </div>
          <div className="TermContent has-richTextToolbar rt-clean-design">
            <div className="TermContent-inner" draggable={true}>
              <div className="StudiableItemToolbar">
                <span className="StudiableItemToolbar-counter"></span>
                <div className="StudiableItemToolbar-editableToggles"></div>
                <div className="StudiableItemToolbar-dragToggle">
                  <span className="ContextToggle">
                    <span className="UIIconButton">
                      <button className="UIButton UIButton--borderless">
                        <span className="UIButton-wrapper">
                          <span className="k-icon k-i-equal UIIcon UIIcon--drag"></span>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
                <div className="StudiableItemToolbar-actionableToggles">
                  <span
                    className="ContextToggle"
                    onFocus={() => setFocusTrash("UIOverlayTrigger-enabled")}
                    onBlur={() => setFocusTrash("")}
                  >
                    <span
                      className={`UIIconButton is-Popover is-Tooltip UIOverlayTrigger-target UIOverlayTrigger-element-attached-top UIOverlayTrigger-element-attached-center UIOverlayTrigger-target-attached-bottom UIOverlayTrigger-target-attached-center UIOverlayTrigger-out-of-bounds UIOverlayTrigger-out-of-bounds-bottom UIOverlayTrigger-out-of-bounds-left 
                                      UIOverlayTrigger-out-of-bounds-right ${focusTrash}`}
                    >
                      <button
                        type="button"
                        className="UIButton UIButton--borderless"
                        aria-label="Delete"
                        onClick={() => props.deleteItem(props.idx, obj.id)}
                      >
                        <span className="UIButton-wrapper">
                          <span
                            className="k-icon k-i-trash UIIcon UIIcon--garbage"
                            role="img"
                          ></span>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>
              <div className="TermContent-inner-padding">
                <div className="TermContent-sides" draggable={true}>
                  <div className="TermContent-sideWrap">
                    <div className="TermContent-side TermContent-side--word">
                      <div className="WordSide">
                        <div className="RichTextEditor">
                          <div className="PMEditor ugck83a notranslate pc1cm7j">
                            <div
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              aria-placeholder="Enter term"
                              aria-multiline="true"
                              aria-labelledby="editor-term-side"
                              className="ProseMirror"
                              defaultValue={""}
                              onBlur={(e) => setTerm(e.currentTarget.innerHTML)}
                              // onInput={changeTerm}
                              // onKeyDown={changeTerm}
                              // onKeyPress={changeTerm}
                            >
                              {term}
                            </div>
                          </div>
                          <div
                            className="b18prmdf"
                            id={`term${props.idx}`}
                          ></div>
                          <span className="RichTextEditor-label">
                            <div className="RichTextEditor-labelText">TERM</div>
                          </span>
                        </div>
                      </div>
                      <span></span>
                    </div>
                    <div className="TermContent-side TermContent-side--definition">
                      <div className="DefinitionSide">
                        <div className="DefinitionSide-richTextEditor">
                          <div className="DefinitionSide-imageContainer">
                            {obj.image === "" || !obj.image ? (
                              <div
                                className="ImageUploadComponent"
                                onClick={() => setIsActive(!isActive)}
                              >
                                <div datatestid="ImageUploadComponent-contextToggle">
                                  <span className="ContextToggle">
                                    <div className="ImageUploadProminentContextToggle">
                                      <span className="k-icon k-i-image UIIcon UIIcon--image UIIcon--large"></span>
                                      <div className="ImageUploadProminentContextToggle-IconExplanation">
                                        <span>IMAGE</span>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <span className="DefinitionSide-image">
                                <div className="UploadedImage">
                                  <div className="UploadedImage-imageWrap">
                                    <div className="ZoomableImage">
                                      <img
                                        alt="image"
                                        className="ZoomableImage-rawImage UploadedImage-image"
                                        height={65}
                                        width={90}
                                        src={obj.image_path}
                                      />
                                    </div>
                                    <a
                                      className="UploadedImage-overlay"
                                      onClick={() =>
                                        props.showImage({
                                          isShow: true,
                                          image: obj.image_path,
                                        })
                                      }
                                    ></a>
                                    <a
                                      className="UploadedImage-imageOverlay"
                                      onClick={deleteImage}
                                    >
                                      <span
                                        className="UIIcon UIIcon--garbage UploadedImage-imageOverlayIcon k-icon k-i-trash"
                                        role="img"
                                      ></span>
                                    </a>
                                  </div>
                                </div>
                              </span>
                            )}
                          </div>
                          <div className="RichTextEditor">
                            <div className="PMEditor lang-en ugck83a notranslate pc1cm7j">
                              <div
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-labelledby="editor-definition-side"
                                className="ProseMirror"
                                suppressContentEditableWarning={true}
                                defaultValue={""}
                                onBlur={(e) =>
                                  setDefinition(e.currentTarget.innerHTML)
                                }
                              >
                                {definition}
                              </div>
                            </div>
                            <div
                              className="b18prmdf"
                              id={`definition${props.idx}`}
                            ></div>
                            <span className="RichTextEditor-label">
                              <div className="RichTextEditor-labelText">
                                DEFINITION
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TermContent-contexts">
              <span></span>
              <span>
                <div
                  className="TermContent-context TermContent-imageUploadContext"
                  style={{ display: !isActive ? "none" : "block" }}
                >
                  <div className="ImageUploadContext is-open is-waitingForQuery">
                    <div className="ImageUploadContext-header">
                      <div className="ImageUploadContext-headerItem">
                        <div className="ImageUploadContext-upsellButton">
                          <button
                            className="UIButton"
                            type="button"
                            style={{ display: "flex" }}
                            onClick={openFile}
                          >
                            <span className="UIButton-wrapper">
                              Upload your own image
                            </span>
                            <div className="m14q111w cgmj6b4">
                              <div className="f1dpcrgz">
                                <span className="AssemblyPill AssemblyPill--plus">
                                  <span className="AssemblyPillIcon">
                                    <span className="k-i-image-export k-icon AssemblyIcon AssemblyIcon--small"></span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </button>
                          <input
                            accept="image/png, image/jpeg"
                            style={{ display: "none" }}
                            type="file"
                            name={`imageWord${props.idx}`}
                            id={`imageWord${props.idx}`}
                            ref={imageWord}
                            onChange={changeImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ImageUploadContext-wrapper">
                      <div className="ImageUploadContext-searchWrap"></div>
                    </div>
                    <div className="ImageUploadContext-header"></div>
                  </div>
                </div>
              </span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="TermRowSeparator" data-term-luid="term-0">
        <span className="TermRowSeparator-addRowBetweenButton">
          <span className="UIIconButton">
            <button className="UIButton" title="+ Add card" type="button">
              <span className="UIButton-wrapper">
                <span
                  className="k-icon k-i-plus UIIcon UIIcon--plus"
                  role="img"
                ></span>
              </span>
            </button>
          </span>
        </span>
      </div>
    </>
  );
}
