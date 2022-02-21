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
