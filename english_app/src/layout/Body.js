/** @format */

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import { useSelector } from "react-redux";
import HomeMain from "./HomeMain";
import HomePage from "./HomePage";
import Profile from "./Profile";
import DialogMessage from "../Components/Dialog/DialogMessage";
import LessonDetail from "./LessonDetail";
import FolderDetail from "./FolderDetail";

export default function Body() {
  const user = useSelector((state) => state.user.user);
  const classDefault = [
    "homepage",
    "index",
    "prismic-page",
    "has-footer",
    "has-sticky-header",
    "qad-is-hiding",
    "theme-default",
  ];

  const classNight = [
    "study_feed",
    "theme-default",
    "latest_activity",
    "has-no-footer",
    "has-sticky-header",
    "qad-is-showing",
    "flex-sidebar",
  ];

  useEffect(() => {
    if (user !== null && user !== undefined) {
      classDefault.map((e) => {
        document.body.classList.remove(e);
      });

      classNight.map((e) => {
        document.body.classList.add(e);
      });
    } else {
      classDefault.map((e) => {
        document.body.classList.add(e);
      });

      classNight.map((e) => {
        document.body.classList.remove(e);
      });
    }
  }, [user]);
  return (
    <div className="site">
      <BrowserRouter>
        <Header />
        {user !== null && user !== undefined ? (
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/:lesson_id/lesson-detail"
              element={<LessonDetail />}
            />
            <Route path="/folders/:course_id/sets" element={<FolderDetail />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
        <Footer />
        <Loading />
        <DialogMessage />
      </BrowserRouter>
    </div>
  );
}
