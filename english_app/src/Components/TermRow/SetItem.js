/** @format */

import { useNavigate } from "react-router";

export default function SetItem(props) {
  const navigate = useNavigate();
  const set = props.set;
  const MoveToLessonDetail_onClick = () => {
    navigate(`/${set.id}/lesson-detail/`);
  };
  return (
    <div className="UISetCard">
      <div
        className="UIDiv UIBaseCard UIBaseCard--noLinkBox"
        onClick={MoveToLessonDetail_onClick}
      >
        <div className="UIDiv UIBaseCard-inner">
          <div className="UIBaseCard-header">
            <div className="UIBaseCardHeader">
              <div className="UIBaseCardHeader-info">
                <div className="UIBaseCardHeader-title">
                  <a
                    aria-label="set 1"
                    className="UILink UILink--revert"
                    data-testid="UILink-anchor"
                    href="https://quizlet.com/vn/834385771/set-1-flash-cards/?funnelUUID=8c90ecc0-f5b5-4ff5-a571-ec2c8467c351"
                    title="set 1"
                  >
                    <h4 className="h1pg7t7p">{set.title}</h4>
                  </a>
                </div>
                <div className="UIBaseCardHeader-meta">
                  <div className="mf334l5">
                    <span className="AssemblyPill">
                      <span className="AssemblyPillText">{`${set.words.length} terms`}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="UIDiv UIBaseCard-footer">
            <div className="UserLink">
              <div className="UserLink-inner">
                <div className="UserLink-avatar">
                  <a
                    className="UILink"
                    tabIndex="0"
                    title="Visit toandang123's profile"
                    href="/toandang123"
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
                          referrerPolicy="no-referrer"
                          src="https://up.quizlet.com/4ifjnn-9DkUu-96s.jpg"
                          width={24}
                        />
                      </div>
                    </span>
                  </a>
                </div>
                <div className="UserLink-content">
                  <div className="UserLink-pill-badge">
                    <a className="UILink" tabIndex="0" href="#">
                      <span className="UserLink-username">toandang123</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="UIBaseCard-contextMenu">
              <span className="UIBaseCard-contextMenuIcon">
                <span className="UIIconButton is-Popover is-Tooltip UIOverlayTrigger-target">
                  <button
                    className="UIButton UIButton--borderless"
                    type="button"
                  >
                    <span className="UIButton-wrapper">
                      <span className="k-icon k-i-more-vertical UIIcon UIIcon--more-vertical UIIcon--large"></span>
                    </span>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
