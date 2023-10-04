/** @format */

import { useEffect } from "react";
import { useState } from "react";
import Apis, { endpoints } from "../../config/Apis";
import { ExceptCommon } from "../../js/ExceptCommon";
import cookies from "react-cookies";

export default function DashBoardItem(props) {
  const item = props.item;
  //   const [course, setCourse] = useState();
  const [courseName, setCourseName] = useState("");
  useEffect(() => {
    try {
      let loadCourse = async () => {
        let res = await Apis.get(endpoints["getCoursesByID"](item.course));
        if (res !== null) {
          setCourseName(res.data.title);
        }
      };
      loadCourse();
    } catch (e) {
      setCourseName("");
      var user = cookies.load("current-user");
      ExceptCommon(e, user.id);
    }
  }, []);
  return (
    <div className="DashboardListItem">
      <div className="SetPreviewLink">
        <div className="UILinkBox">
          <div className="UILinkBox-inner">
            <div className="SetPreview">
              <div className="SetPreview-inner">
                <div className="SetPreview-cardBylineWrapper">
                  <div className="PreviewCardByline">
                    <div className="UIDelimiter">
                      <span className="SetPreview-cardBylineTermsCount">
                        <span>{item.words.length} terms</span>
                      </span>
                    </div>
                  </div>
                </div>
                <header className="SetPreview-cardHeader">
                  <span className="SetPreview-cardHeaderTitle">
                    <span>({courseName}) </span>
                    <span>{item.title}</span>
                  </span>
                </header>
              </div>
            </div>
          </div>
          <div className="UILinkBox-link">
            <a className="UILink" href={`/${item.id}/lesson-detail`}></a>
          </div>
        </div>
      </div>
    </div>
  );
}
