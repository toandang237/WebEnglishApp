/** @format */
import "../css/FolderPageDetail.css";

export default function FolderDetail() {
  return (
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
                    tabindex="-1"
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
                                  <a
                                    className="UILink"
                                    title="Visit toandang123's profile"
                                    href="#"
                                  >
                                    <span
                                      className="UserAvatar"
                                      style={{ height: "24px", width: "24px" }}
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
                                  </a>
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
                              new folder
                            </span>
                          </div>
                          <div className="DashboardHeaderTitle-subtitle">
                            abc
                          </div>
                        </div>
                        <div className="DashboardHeaderActions">
                          <div className="MenuIconWithTooltip">
                            <div
                              tabindex="-1"
                              className="f1dpcrgz"
                              data-testid="AssemblyTooltip--base"
                            >
                              <button
                                type="button"
                                aria-label="add"
                                className="AssemblyButtonBase AssemblyIconButton AssemblyIconButton--secondary AssemblyIconButton--circle AssemblyButtonBase--medium AssemblyButtonBase--circle"
                              >
                                <span className="k-icon k-i-plus AssemblyIcon AssemblyIcon--medium k-icon-customize"></span>
                              </button>
                            </div>
                          </div>
                          <div className="MenuIconWithTooltip"></div>
                          <div className="MenuIconWithTooltip"></div>
                          <div className="MenuIconWithTooltip"></div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
