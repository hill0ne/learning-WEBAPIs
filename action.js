let parent = document.querySelector(".parentElement");
let childElement = null;
let nodeText = null;

for (let i = 1; i < 11; ++i) {
  childElement = document.createElement("div");
  childElement.className = "childElement" + i;
  let nodeText = document.createTextNode(i);
  childElement.appendChild(nodeText);
  parent.append(childElement);
}

// 동적으로 스타일 적용하기

let commonChild = document.querySelectorAll(".parentElement div");

commonChild.forEach(
  (el) =>
    (el.style.cssText =
      "position: relative; width: 10em; height: 10em; border: 1px solid #F7DC6F ; background-color: #F5FEB7;")
);

let selectedEl = document.querySelector(".childElement7");
selectedEl.style.backgroundColor = "#FB3F21 ";

// 마우스 이벤트를 사용하여 좌표 값 얻기
// getCordinate 이벤트 핸들러에 'e' 이벤트 객체를 인수로 전달
function getCordinate(e) {
  e.preventDefault();
  console.log(selectedEl.getBoundingClientRect());
  let clientX = e.clientX;
  let clientY = e.clientY;
  let pageX = e.pageX;
  let pageY = e.pageY;
  console.log(
    "clientX : " + clientX,
    "clientY : " + clientY,
    "pageX : " + pageX,
    "pageY : " + pageY
  );
}

selectedEl.addEventListener("click", getCordinate);

// scroll 이동 버튼 추가

let button = document.querySelectorAll("button");
let by100btn = document.querySelector(".button_by100px");
let to100btn = document.querySelector(".button_to100px");
let intoPointBtn = document.querySelector(".button_intoPoint");

//버튼 click 이벤트 발생 시 실행되는 함수

button.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (event.target === by100btn) {
      window.scrollBy(0, 100);
    } else if (event.target === intoPointBtn) {
      window.scrollTo(0, 1005);
    } else if (event.target === to100btn) {
      window.scrollTo(0, 100);
    }
  })
);
