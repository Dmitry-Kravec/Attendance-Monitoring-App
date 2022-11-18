import { $host } from "./Axios";

export default class ApiServiceAxios {
    login = async (data) => {
        const { email, password } = data;
        const response = await $host.post("api/login/login", {
            email,
            password,
        });
        return response;
    };

    registrerUser = async (user) => {
        const { firstName, lastName, email, password, accesscode } = user;

        const response = await $host.post("api/login/registration", {
            firstName,
            lastName,
            email,
            password,
            accesscode,
        });

        return response;
    };

    requestMailAccessCode = async (email) => {
        const response = await $host.put("api/login/mailaccesscode", { email });
        return response;
    };

    //TEACHER
    getTeacherLessons = async (email) => {
        const response = await $host.get(
            `api/teacher/lessonList?email=${email}`
        );
        return response;
    };

    getTeacherLessonInfo = async (lessonID) => {
        const response = await $host.get(
            `api/teacher/LessonInfo?lessonID=${lessonID}`
        );
        return response;
    };

    requestNewPairQr = async (ID) => {
        let response = await $host.post(`api/teacher/newqr`, { lessonID: ID });
        return response;
    };

    refreshPairQr = async (ID) => {
        let response = await $host.put(`api/teacher/refreshQr`, {
            pairID: ID,
        });
        return response;
    };

    requestTeacherQr = async (ID, isNewPair = false) => {
        let response;
        if (isNewPair) {
            response = await $host.post(`api/teacher/qr`, { lessonID: ID });
        } else {
            response = await $host.post(`api/teacher/qr`, { pairID: ID });
        }
        return response;
    };

    // STUDENT
    getStudentPairsHistory = async (email) => {
        const response = await $host.get(`api/student/history?email=${email}`);
        return response;
    };

    sendStudentQrCode = async (user, qrCode) => {
        const { email } = user;
        const response = await $host.put(`api/student/sendqr`, {
            studentQrCode: qrCode,
            email,
        });
        return response;
    };
}
