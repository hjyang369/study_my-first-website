//id는 파일 중 1개만 있어서 id값만 넣어주면 되지만 class는 여러개가 있을 수 있어서 배열로 나오기때문에 순서를 적어주어야함
const inputComment = document.getElementById("input");
const buttonComment = document.getElementById("button");
const newComment = document.getElementById("newComment");
const commentForm = document.getElementsByClassName("comment")[0];

const man = document.getElementById("man");

const searchUserId = document.getElementsByClassName("searchUser")[0];
const search = document.getElementById("search");
const explore = document.getElementsByClassName("explore")[0];

let userArray = [
  {
    id: "wecode_bootcamp",
    subname: ">wecode | 위코드",
    url: "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside",
  },
  {
    id: "wecode_founder",
    subname: "송은우 (Eun Woo Song)",
    url: "https://images.unsplash.com/photo-1685856861907-0c20cd9d22c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "wecode_korea",
    subname: "",
    url: "https://images.unsplash.com/photo-1686110432947-293cb3c7ac54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "Wecode",
    subname: "강남구 테헤란로 427, 서울",
    url: "https://images.unsplash.com/photo-1685944722478-284349a10211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "ggulbbang",
    subname: "꿀빵이와 앙꼬",
    url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
];

//위치에 따라 함수가 작동할때도 있고 안할때도 있어서 맨 위에 배치
//addEventListener는 순서에 덜 구애 받음
inputComment.addEventListener("keyup", responseBtn);

function responseBtn() {
  const inputValue = inputComment.value;
  //input에 값이 하나라도 생겼을 시 작동하게 만들었음
  if (inputValue.length > 0) {
    buttonComment.style.color = "blue";
    buttonComment.disabled = false;
  } else {
    buttonComment.style.color = "#cbe0f9";
    buttonComment.disabled = true;
  }
  return;
}

//댓글 생성 함수
function addComment(e) {
  //각 태그들을 생성
  const comment = document.createElement("div");
  const userID = document.createElement("span");
  const commentText = document.createElement("span");
  const likeBtn = document.createElement("button");
  const deletBtn = document.createElement("button");

  //enter 키에 포커스가 잡혀있지 않더라도 enter 누르면 댓글이 등록되도록 form 태그와 짝지
  e.preventDefault();

  //각 태그에 class 생성
  comment.classList.add("comentClass");
  userID.classList.add("userIDClass");
  commentText.classList.add("commentTextClass");
  likeBtn.classList.add("likeBtnClass");
  deletBtn.classList.add("deletBtnClass");

  //id에 wecode 값을 넣어주고
  userID.innerHTML = "wecode ";
  //댓글이 들어갈 span 태그에 input 값을 넣어줌
  commentText.innerHTML = inputComment.value;

  //자식으로 들어갈 수 있게 각각 넣어줌
  newComment.appendChild(comment);
  comment.appendChild(userID);
  comment.appendChild(commentText);
  comment.appendChild(likeBtn);
  comment.appendChild(deletBtn);

  //댓글이 올라가고 나면 다시 댓글창이 처음으로 돌아올 수 있도록 세팅해줌
  inputComment.value = "";
  buttonComment.style.color = "#cbe0f9";
  buttonComment.disabled = true;

  //댓글 삭제 함수, comment 변수 쓰기 위에 addComment 함수 안에 배치
  function commentDelet() {
    //생성한 div 태그 제거해줌
    comment.remove("comment");
  }

  //likeBtn, deletBtn 사용 위에 함수 안에 배치
  //좋아요 버튼 클릭 시 함수 실행되도록
  likeBtn.addEventListener("click", likechange);
  //삭제 버튼 클릭 시 함수 실행되도록
  deletBtn.addEventListener("click", commentDelet);
}

// buttonComment.addEventListener("click", enterKey);
buttonComment.addEventListener("click", addComment);

//좋아요 누르면 빨간하트로 변경되는 함수
function likechange(e) {
  //좋아요 버튼 class 잡아주는 변수 설정
  let target = e.target.classList;

  //초기 세팅은 빈하트지만 시작을 빨간하트로 해야 한번에 인식
  //빈하트로 시작하면 첫 클릭이 먹히지 않음
  if (target.contains("redheart")) {
    //빨간하트라면 빨간하트에서 빈하트로 클래스 변경
    target.remove("redheart");
    target.add("likebtnClass");
  } else {
    //빨간하트가 아니라면 빈하트에서 빨간하트로 클래스 변경
    target.remove("likebtnClass");
    target.add("redheart");
  }
}

//프로필 누르면 메뉴박스 나오는 함수
function menuBox() {
  //프로필 버튼 누르면 나올 div 박스의 class 불러냄
  let profileMenu = document.getElementsByClassName("profileMenu")[0];
  //display:none을 쓰고 싶었지만 display:flex로 요소들을 배치해둬서 opacity로 설정함
  if (profileMenu.style.opacity === "1") {
    profileMenu.style.opacity = "0";
  } else {
    profileMenu.style.opacity = "1";
  }
}
// console.dir(profileMenu)
//profile의 속성을 자세히 볼 수 있는 코드 : 스타일 속성이 먹히는지 보려고 써봤음

//man button click 시 함수 실행
man.addEventListener("click", menuBox);

//man button 외 다른데 누르면 꺼지는 기능
function exitMenu() {
  //menuBox 함수 안에 넣으면 작동 안돼서 뺐고 profileMenu 변수 재지정
  let profileMenu = document.getElementsByClassName("profileMenu")[0];
  profileMenu.style.opacity = "0";
}
//man button 버튼 외를 누르는 것을 감지하는 blur event 사용
man.addEventListener("blur", exitMenu);

//아이디 검색 기능
function searchUserNameData(e) {
  //explore.value로 설정하려했으나 안돼서 e.target으로 잡아줌
  const searchValue = e.target.value;

  if (searchValue) {
    //console.log("userArray", userArray, searchValue);

    //방법1
    //filter와 includes 사용해서 input값과 겹치는 아이디만 보여줌
    //userArray의 index값 = user
    //객체이기 때문에 user 중 id 값에서 input 값과 같은 것 filter해서 보여줌
    // let filterArr = userArray.filter((user) => user.id.includes(searchValue));

    //방법2
    //filter와 indexOf 사용해서 input값과 겹치는 아이디만 보여줌
    //user 중 id 값에서 input 값과 같지 않은 것 제외하고 filter해서 보여줌
    let filterArr = userArray.filter(
      (user) => user.id.indexOf(searchValue) !== -1
    );

    search.style.opacity = "1";

    //addComment 함수처럼 할 수도 있지만 다른 방법을 써보고 싶었음
    //map으로 filter된 userArray 배열을 돌면서 변수에 값을 넣어 보여줌
    search.innerHTML = filterArr.map((data) => {
      //map과 forEach를 쓸 수 있지만 forEach의 경우 새로운 배열을 반환하지 않기때문에 return 못함
      //변수가 들어가는 곳을 ${}로 감싸주고 넣어줄 html 부분 작성 후 앞 뒤를 백틱으로 묶어줌
      return `<div class="eachUser">
        <img alt="user" src=${data.url} />
        <div class="userPTag">
          <p class="weightbolder userPTagP">${data.id}</p>
          <p class="gray userPTagP">${data.subname}</p>
        </div>
      </div>`;
    });
  } else {
    search.style.opacity = "0";
  }
}
//검색 input에 변화가 생기면 실행되는 Input event 사용
explore.addEventListener("input", searchUserNameData);
