/** @format */

import axios from "axios";

/**
 * endpoint lấy địa chỉ API
 */
export let endpoints = {
  // xác thực
  outh2Info: "/users/oauth2-info/", // API lấy thông tin oauth2
  login: "/o/token/", // API lấy token xác thực -> đăng nhập
  logout: "/users/update-last-login/", // API xử lý đăng xuất và cập nhật thời gian đăng nhập cuối cùng
  currentUser: "/users/current-user/", // API lấy user đang đăng nhập
  getProfile: (user_id) => `/users/${user_id}/get-profile/`, // API lấy profile của user

  //-----------------

  // Điểm danh
  getStudyInfoByDay: "/users/get-study-info-by-day/", // API lấy thông tin điểm danh của ngày
  getListRollCallDay: "/users/get-list-study-info/", // API lấy danh sách những ngày đã điểm danh
  checkin: "/users/checkin/", // API điểm danh

  //-----------------

  // Khóa học - Course
  getAllLessonOfUser: "/lessons/get-all-my-lesson-created/", // API lấy danh sách các bài học đã được tạo của user
  getCoursesByID: (course_id) => `/courses/${course_id}/`, // API lấy khóa học

  //-----------------

  // Bài học - Lesson
  getLesson: (lesson_id) => `/lessons/${lesson_id}/`, // API lấy bài học
  updateLesson: (lesson_id) => `/lessons/${lesson_id}/`, // Cập nhật master lesson

  //-----------------

  // Từ vựng - Word
  getWordsLesson: (lesson_id) => `/lessons/${lesson_id}/get-all-words/`, // API lấy list từ vựng của lesson
  updateWord: (word_id) => `/words/${word_id}/`, // Cập nhật từ vựng
  createWord: "/words/",
};

// -------------------------------------------------------------------------

/**
 * Khởi tạo axios lấy đường dẫn để sủ dụng API
 */
export default axios.create({
  // baseURL: "https://dangviettoan181101.pythonanywhere.com/", //"http://127.0.0.1:8000/"
  baseURL: "http://127.0.0.1:8000/",
});
