import updateStudentPairHistoryData from "./update-student-data-pair-history";
import updateStudentQrServerResponseData from "./update-student-data-qr-server-response";

const updateStudentData = (state, action) => {
  return {
    pairHistory: updateStudentPairHistoryData(state, action),
    qrServerResponse: updateStudentQrServerResponseData(state, action),
  };
};

export default updateStudentData;
