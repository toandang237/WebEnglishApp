/** @format */

import { Link } from "react-router-dom";

export default function DashBoardItemCourse(props) {
  const item = props.item;
  return (
    <div className="DashboardListItem">
      <div className="FolderPreviewLink">
        <div className="UILinkBox">
          <div className="UILinkBox-inner">
            <div className="FolderPreview">
              <div className="FolderPreview-cardByLineWrapper">
                <div className="PreviewCardByline">
                  <div className="UIDelimiter">
                    <span className="FolderPreview-cardBylineSetsCount"></span>
                  </div>
                </div>
              </div>
              <header className="FolderPreview-cardHeader">
                <span
                  className="k-icon k-i-folder UIIcon UIIcon--folder FolderPreview-icon"
                  style={{ fontSize: "30px" }}
                ></span>
                <span className="FolderPreview-cardHeaderTitle">
                  <span>{item.title}</span>
                </span>
              </header>
            </div>
          </div>
          <div className="UILinkBox-link">
            <Link
              aria-label="sd"
              className="UILink"
              data-testid="UILink-anchor"
              to={`/folders/${item.id}/sets/`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
