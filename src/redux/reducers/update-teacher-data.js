import updateTeacherLessonInfoData from "./update-teacher-data-lesson-info";
import updateTeacherLessonListData from "./update-teacher-data-lesson-list";
import updateTeacherLessonQrCodeData from "./update-teacher-data-lesson-qrcode";

const updateTeacherData = (state, action) => {
  return {
    lesList: updateTeacherLessonListData(state, action),
    lesInfo: updateTeacherLessonInfoData(state, action),
    lesQrCode: updateTeacherLessonQrCodeData(state, action),
  };
};

export default updateTeacherData;
