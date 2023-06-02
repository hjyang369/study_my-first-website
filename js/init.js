document.addEventListener("keydown", function (e) {
  //
  //inline style이 아니라서 바로 left값을 가지고 올 수 없어서 getComputedStyle사용
  //-> <div style='400px' id="hero" class="stop"></div> 로 쓰면 heroElement.style.left 가능
  const heroLeft = getComputedStyle(heroElement).left;
  //배경에 삐져나가지 않게 left가 0 이하면 좌측방향키 작동 안함
  //left가 176이상이면 우측방향키 작동 안함
  //px를 제외하고 배열로 나타내기위해 .split()사용
  //string에서 숫자로 바꿔 주기 위해 Number()함수 사용
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
  if (
    (heroLeftWithoutPx - 1 < 0 && e.keyCode === 37) ||
    (heroLeftWithoutPx + 1 > 765 && e.keyCode === 39)
  ) {
    return;
  }
  //왼쪽 방향키코드 37 오른쪽 방향키코드 39
  if (e.keyCode === 37) {
    //id값이 hero인 요소의 style값중 하나인 left 변경
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    //클래스 값을 가져와서 클래스 이름이 래프트가 되도록 변경
    heroElement.className = "left";
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    //클래스 값을 가져와서 클래스 이름이 라이트가 되도록 변경
    heroElement.className = "right";
  }
});
//키보드를 뗐을 때 hero class를 stop으로 변경
document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});
