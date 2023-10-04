/** @format */
import { useDispatch } from "react-redux";
import "../../css/Common.css";
import "../../css/SiteNavModals.css";
import { TurnOffNewFolder } from "../../Creators/CommonCreator";
import { useState } from "react";
import Apis, { endpoints } from "../../config/Apis";
import cookies from "react-cookies";
import { IsLoading, StopLoading } from "../../Creators/LoadingCreator";
import { ExceptCommon } from "../../js/ExceptCommon";
import LoadingLittle from "../Common/loadingLittle";

export default function DialogNewFolder(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const dispatch = useDispatch();
  const turnOffNewFolder = () => {
    dispatch(TurnOffNewFolder());
  };

  const validateInput = () => {
    var chkDescriptionInput = true;
    var chkTitleInput = true;
    if (description === "") {
      chkDescriptionInput = false;
    }

    if (title === "") {
      chkTitleInput = false;
    }

    return chkDescriptionInput == true && chkTitleInput == true;
  };

  const createFolderOnlick = async () => {
    var check = validateInput();
    if (check) {
      try {
        let res = await Apis.postForm(
          endpoints["createCourse"],
          {
            title: title,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access-token")}`,
            },
          }
        );
        if (res) {
          setIsLoadingCreate(false);
          dispatch(TurnOffNewFolder());
        } else {
          setIsLoadingCreate(true);
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
              onClick={turnOffNewFolder}
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
                <h2 className="th6yw7v">Create a new folder</h2>
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
                      aria-label="Title"
                      placeholder="Enter a title"
                      type="text"
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
                onClick={createFolderOnlick}
              >
                {!isLoadingCreate ? (
                  <span>Create folder</span>
                ) : (
                  <LoadingLittle />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
