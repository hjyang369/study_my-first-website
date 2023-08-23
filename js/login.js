const idForm = document.getElementById("name");
const pwForm = document.getElementById("password");
const loginButton = document.getElementById("button");

function changeColor() {
  let idValue = idForm.value;
  let pwValue = pwForm.value;
  // console.log("아이디 value", idForm.value);
  // console.log("비밀번호 value", pwForm.value);
  if (
    idValue.length > 0 &&
    idValue.indexOf("@") !== -1 &&
    pwValue.length >= 5
  ) {
    loginButton.style.backgroundColor = "#0095f6";
    //disabled 속성: 해당 요소가 비활성화
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = "#cae0f9";
    loginButton.disabled = true;
  }
  return;
}

function moveLink() {
  //로그인 버튼 누르면 메인 페이지로 이동하도록 링크 넣어줌
  location.replace("westaMain.html");
}

//keyup event 발생 시 로그인 버튼 색 변경되도록
idForm.addEventListener("keyup", changeColor);
pwForm.addEventListener("keyup", changeColor);
loginButton.addEventListener("click", moveLink);
