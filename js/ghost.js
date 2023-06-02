function creatGhost() {
  //유령은 알아서 움직여야하니까 js로 div를 만들어줌
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";

  ghostElement.style.top = "0px";

  //랜덤으로 숫자 나오게하는 함수 생성
  function randomNum() {
    let randomNum755 = Math.floor(Math.random() * 755);
    return randomNum755;
  }
  //랜덤으로 숫자 나오는 함수를 변수로 선언
  let randomLeft = randomNum();
  //left값을 랜덤으로 나오는 함수의 값+px
  ghostElement.style.left = randomLeft + "px";

  ghostElement.style.width = "45px";
  ghostElement.style.height = "54px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  ghostElement.className = "ghost";
  //bg에 ghost 넣어줌
  bgElement.appendChild(ghostElement);

  //유령이 n초에 한번씩 떨어지게 하기
  setInterval(function () {
    //top 값을 number로 변경 후 +1만큼 움직이기
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 1;
    let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
    let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

    if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_WIDTH)) {
      if (
        ghostLeftNum < heroLeftNum &&
        heroLeftNum < ghostLeftNum + GHOST_HEIGHT
      ) {
        killGhost(ghostElement);
        return;
      }
    }

    //유령이 바닥에 닿으면 사라짐
    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    ghostElement.style.top = ghostTopNum + "px";
  }, 10);

  function killGhost(ghostElement) {
    ghostElement.classList.add("die");
    ghostElement.style.backgroundPosition = "-45px 0px";
    const soundEffect = new Audio("./audio/dying.wav");
    soundEffect.play();
    setTimeout(function () {
      ghostElement.remove();
    }, 1000);
  }
}

creatGhost();
setInterval(creatGhost, 3000);
