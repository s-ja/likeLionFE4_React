"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
/**
 * 요소에 클래스 이름 추가 유틸리티
 * @param {HTMLElement} element HTML 요소 노드
 * @param {string} className 클래스 이름
 */
function addClass(element, className) {
  element.classList.add(className);
}

/**
 * 요소에 클래스 이름 제거 유틸리티
 * @param {HTMLElement} element HTML 요소 노드
 * @param {string} className 클래스 이름
 */
function removeClass(element, className) {
  element.classList.remove(className);
}