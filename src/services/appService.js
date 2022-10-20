export default class AppService {
  _apiBase = "https://77d7-178-155-4-156.eu.ngrok.io";

  registrerUser = async (user) => {
    const { firstName, lastName, email, password, accesscode } = user;
    const res = await fetch(`${this._apiBase}/login/registration`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        accesscode,
      }),
    });
    return await res.json();
  };

  requestMailAccessCode = async (user) => {
    const { email } = user;
    const res = await fetch(`${this._apiBase}/login/mailaccesscode`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });
    return await res.json();
  };

  login = async (user) => {
    const { email, password } = user;

    const raw = JSON.stringify({
      email,
      password,
    });

    const res = await fetch(`${this._apiBase}/login/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: raw,
    });
    return await res.json();
  };

  getTeacherLessons = async (user) => {
    const { email } = user;
    const res = await fetch(
      `${this._apiBase}/teacher/lessonList?email=${email}`
    );
    return await res.json();
  };

  getTeacherLessonInfo = async (user) => {
    const { lessonID } = user;
    const res = await fetch(
      `${this._apiBase}/teacher/LessonInfo?lessonID=${lessonID}`
    );
    return await res.json();
  };

  requestTeacherQr = async (user) => {
    const { lessonID } = user;
    const res = await fetch(`${this._apiBase}/teacher/qr`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lessonID,
      }),
    });
    return await res.json();
  };

  getStudentPairsHistory = async (user) => {
    const { email } = user;
    const res = await fetch(`${this._apiBase}/student/history?email=${email}`);
    return await res.json();
  };

  sendUserQrCode = async (user, qrCode) => {
    const { email } = user;
    const res = await fetch(`${this._apiBase}/student/sendqr`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        studentQrCode: qrCode,
        email,
      }),
    });
    return await res.json();
  };

  // getUser1() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(this.user);
  //     }, 2700);
  //   });
  // }

  // getTest() {
  //   console.log("App SERV TEST FUNC");
  // }

  // getListOfUserLessons(user) {
  //   if (user.userRole === "student") {
  //     // 1)запрос к таблице StudentLessons
  //     // select lectInfID  where studID == user.ID
  //     // 2) за
  //   } else {
  //     // запрос к таблице
  //   }
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(this.listOfUserLessons);
  //     }, 2800);
  //   });
  // }
}
