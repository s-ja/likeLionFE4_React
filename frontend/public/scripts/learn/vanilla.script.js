"use strict";

// 아래 마크업을 JavaScript + DOM API를 사용해 동적으로 렌더링 합니다.
// DOM API : 동적으로 마크업 (React가 하는 일)
// - [ ] innerHTML, insertAdjacentHTML 사용하면 안 됨
// - [x] document.createElement API

// DOM 스크립트 (바닐라 스크립트)
// DOM API (접근, 탐색, 조작, 이벤트 핸들링)
// querySelector, querySelectorAll
// addEventListener, classList, setAttribute, dataset, ....

// 아래 처럼 작성하지 마세요. 😓
// function renderVanillaApp() {
//   rootElement.innerHTML = /* html */`
//     <div class="container container--md">
//       <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
//       <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
//       <ul>
//         <li>React 및 ReactDOM API 활용</li>
//         <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
//       </ul>
//     </div>
//   `;
// }

/* -------------------------------------------------------------------------- */

var rootElement = document.getElementById("root");
function renderVanillaApp() {
  // let contents = document.createElement("div")
  rootElement.innerHTML = /* html */"\n    <div class=\"container container--md\">\n        <h1>\uC6F9\uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C React \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC2DC\uC791\uD558\uAE30</h1>\n        <p>React \uB77C\uC774\uBE0C\uB7EC\uB9AC \uCF54\uB4DC\uAC00 \uC6F9 \uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uD574\uC11D\uB418\uACE0 \uC791\uB3D9\uB418\uB294 \uC9C0 \uC0B4\uD3B4\uBD05\uB2C8\uB2E4.</p>\n        <ul>\n            <li>React \uBC0F ReactDOM API \uD65C\uC6A9</li>\n            <li>\uAC00\uC0C1(Virtual) \uB178\uB4DC vs. \uC2E4\uC81C(Actual) DOM \uB178\uB4DC</li>\n        </ul>\n    </div>\n    ";
}
function render() {
  // console.log('test');

  // <div></div>
  var container = document.createElement("div");
  container.classList.add("container", "container--md");

  // <h1></h1>
  var containerHeadLine = document.createElement("h1");
  containerHeadLine.textContent = "웹브라우저 환경에서 React 라이브러리 시작하기";
  // const containerTextContent = document.createTextNode('웹브라우저 환경에서 React 라이브러리 시작하기');

  // <p></p>
  var containerDescription = document.createElement("p");
  containerDescription.textContent = "React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.";

  // data -> rendering
  var learningSubject = ["React 및 ReactDOM API 활용", "가상(Virtual) 노드 vs. 실제(Actual) DOM 노드"];

  // <ul></ul>
  var subjectList = document.createElement("ul");

  // loop (for문, forEach or map 메서드)
  learningSubject.forEach(function (subject) {
    var listItem = document.createElement("li");
    listItem.textContent = subject;
    subjectList.append(listItem);
  });
  container.append(containerHeadLine);
  container.append(containerDescription);
  container.append(subjectList);
  rootElement.append(container);
}
render();