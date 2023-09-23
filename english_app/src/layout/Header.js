/** @format */

import { useEffect, useState } from "react";
import ButtonAvatar from "../Components/ButtonNavBar/ButtonAvatar";
import ButtonBell from "../Components/ButtonNavBar/ButtonBell";
import ButtonPlus from "../Components/ButtonNavBar/ButtonPlus";
import Search from "../Components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import ButtonLogin from "../Components/ButtonNavBar/ButtonLogin";
import ButtonSignup from "../Components/ButtonNavBar/ButtonSignup";

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (user !== null && user !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);
  return (
    <div className="TopNavigationWrapper" id="TopNavigationReactTarget">
      <header className="TopNavigation">
        <div className="TopNavigation-content">
          <div className="TopNavigation-contentLeft">
            <div className="TopNavigationItem LogoNavigationItem">
              <div className="SiteHeaderLogo">
                <div className="SiteHeaderLogo-full">
                  <a className="SiteHeaderLogo-link" href="/">
                    <div className="SiteLogo">QUIZLET</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="TopNavigation-menuItems">
              <div className="NavigationTabs">
                <span className="sghi5jd" style={{ "--sghi5jd-1": "none" }}>
                  <a
                    href="/"
                    className="NavigationTab s13oqxd2 r1k7ho1y etur5fu"
                    data-testid="NavigationTab-anchor"
                  >
                    <span className="NavigationTab--span">Home</span>
                  </a>
                </span>
                <div className="d17q9lq7">
                  <button className="NavigationTab r1ep6ugx r1k7ho1y etur5fu">
                    <span className="NavigationTab--span">Your Library</span>
                  </button>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </div>
          <div className="TopNavigation-contentMiddle">
            <div className="TopNavigationItem FullSeachNavigationItem">
              <Search />
            </div>
          </div>
          {isLogin ? (
            <div className="TopNavigation-contentRight">
              <ButtonPlus />
              <ButtonBell />
              <ButtonAvatar />
              {/* <div className="TopNavigationItem RightNavigationItem">
                <div className="SiteUpgradeButton">
                  <a
                    href="/#"
                    className="AssemblyButtonBase AssemblyPrimaryButton--upgrade AssemblyButtonBase--medium AssemblyButtonBase--padding"
                  >
                    <span>Nâng cấp: dùng thử miễn phí 7 ngày</span>
                  </a>
                </div>
              </div> */}
            </div>
          ) : (
            <div className="TopNavigation-contentRight">
              <ButtonPlus />
              {!user ? (
                <>
                  <ButtonLogin />
                  <ButtonSignup />
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
