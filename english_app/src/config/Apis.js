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
  signup: "/users/", // API đăng ký tài khoản
  currentUser: "/users/current-user/", // API lấy user đang đăng nhập
  getProfile: (user_id) => `/users/${user_id}/get-profile/`, // API lấy profile của user
  checkExists: "/users/check-exists/",

  //-----------------

  // Điểm danh
  getStudyInfoByDay: "/users/get-study-info-by-day/", // API lấy thông tin điểm danh của ngày
  getListRollCallDay: "/users/get-list-study-info/", // API lấy danh sách những ngày đã điểm danh
  checkin: "/users/checkin/", // API điểm danh

  //-----------------

  // Khóa học - Course
  getCoursesByID: (course_id) => `/courses/${course_id}/`, // API lấy khóa học
  getAllCoursesOfUser: "/courses/get-all-my-courses-created/", // API lấy danh sách các khóa học đã tạo của user
  getCoursesJoined: "/users/get-courses-joined/", // API lấy các khóa học đã tham gia
  createCourse: "/courses/", // API tạo mới khóa học

  //-----------------

  // Bài học - Lesson
  getAllLessonOfUser: "/lessons/get-all-my-lesson-created/", // API lấy danh sách các bài học đã được tạo của user
  getLesson: (lesson_id) => `/lessons/${lesson_id}/`, // API lấy bài học
  updateLesson: (lesson_id) => `/lessons/${lesson_id}/`, // Cập nhật master lesson
  getLessonsJoined: "/users/get-lessons-joined/", // Lấy danh sách khóa học đã tham gia
  createLesson: "/lessons/",

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
  baseURL: "https://dangviettoan181101.pythonanywhere.com/",
});
