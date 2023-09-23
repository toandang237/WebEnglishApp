/** @format */
import { React, useState } from "react";
export default function Search() {
  const [kw, setKw] = useState("");
  document.getElementById("search-navbar");
  const clickSearch = (e) => {
    e.preventDefault();
    document.getElementById("search-navbar").classList.add("is-focused");
    document.getElementById("st01").classList.add("is-expanded");
    if (e.target.value !== "") {
      document.getElementById("closeText").classList.add("i1yitfys");
      document
        .getElementById("closeText")
        .addEventListener("click", function () {
          setKw("");
          document
            .getElementById("search-navbar")
            .classList.remove("is-focused");
          document.getElementById("st01").classList.remove("is-expanded");
          document.getElementById("closeText").classList.remove("i1yitfys");
        });
    }
  };
  const mouseLeave = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      document.getElementById("search-navbar").classList.remove("is-focused");
      document.getElementById("st01").classList.remove("is-expanded");
      document.getElementById("closeText").classList.remove("i1yitfys");
    }
  };
  const searchChange = (e) => {
    setKw(e.target.value);
    if (e.target.value !== "") {
      document.getElementById("closeText").classList.add("i1yitfys");
    } else {
      document.getElementById("closeText").classList.remove("i1yitfys");
    }
  };
  return (
    <div className="s1tlc74t">
      <form className="s19dmjr1" id="search-navbar">
        <div className="s2y71yx" id="st01">
          <div className="sellgo5">
            <span
              className="k-icon k-i-search AssemblyIcon AssemblyIcon--small"
              style={{ bottom: "7px" }}
            ></span>
          </div>
          <div className="s1b8qj0">
            <div className="UIAutosuggest">
              <div>
                <label className="AssemblyInput">
                  <input
                    className="AssemblyInput-input AssemblyInput-placeholder js-bound"
                    id="GlobalSearchBar"
                    type="text"
                    placeholder="Học phần, sách giáo khoa, câu hỏi"
                    onClick={clickSearch}
                    onBlur={mouseLeave}
                    value={kw}
                    onChange={(e) => searchChange(e)}
                  />
                </label>
                <div
                  id="react-autowhatever-site-header-global-search-autosuggest"
                  className="react-autosuggest__suggestions-container"
                ></div>
              </div>
            </div>
          </div>
          <div id="closeText" className="s1al0a3m">
            <span className="AssemblyIcon AssemblyIcon--small k-icon k-i-close"></span>
          </div>
        </div>
      </form>
    </div>
  );
}
