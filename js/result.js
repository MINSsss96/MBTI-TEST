import { results, mbtis } from "./data.js";

// 1.title
console.log(results[0].title)
// 2. 혼자서 맨탈... 출력
console.log(results[0].results)
// 3. 창업가 출력
console.log(results[0].jobs[1])
// 4. mbtis 에서 intp 출력
console.log(mbtis.intp)
// const mbti = 'intp'
// console.log(mbits[mbti])

// http://127.0.0.1:5501/result.html?mbti=infp
// 쿼리 스트링 가져와야함

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbtis[mbti])

const resultMbti = results[mbtis[mbti]]
console.log(resultMbti)

// 1. 각각의 태그를 지정해야 함.
const titleEl = document.querySelector(".page-title")
const characterEl = document.querySelector(".character")
const boxEls = document.querySelectorAll('.box')
const jobsEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture > img")

// 위의 내용에 innerHTML 로 표시
// 단 querySelectorAll 로 가져온 아이들은
// forEach 구문을 이용해서 처리(문법은 찾아서)

titleEl.innerHTML = resultMbti.title
characterEl.src = resultMbti.character

boxEls.forEach(function(box,i){box.innerHTML=resultMbti.results[i]})

jobsEls.forEach((job, i) => {job.innerHTML = resultMbti.jobs[i]})
lectureEl.href = resultMbti.lectureUrl 
lectureImgEl.src = resultMbti.lectureImg



// document.addEventListener("DOMContentLoaded", () => {
//   // 1. MBTI 값 가져오기
//   const mbti = new URLSearchParams(location.search).get('mbti');
//   const index = mbtis[mbti];
//   const result = results[index];

//   // 2. DOM 요소 선택
//   const titleEl = document.querySelector('.title');
//   const characterEl = document.querySelector('.character');
//   const boxEls = document.querySelectorAll('.box');
//   const jobEls = document.querySelectorAll('.job');
//   const lectureImgEl = document.querySelector('.lecture-img');
//   const lectureLinkEl = document.querySelector('.lecture-link');

//   // 3. innerHTML 및 속성 설정
//   if (titleEl) titleEl.innerHTML = result.title;
//   if (characterEl) characterEl.setAttribute('src', result.character);

//   boxEls.forEach((el, i) => {
//     el.innerHTML = result.results[i] || '';
//   });

//   jobEls.forEach((el, i) => {
//     el.innerHTML = result.jobs[i] || '';
//   });

//   if (lectureImgEl) lectureImgEl.setAttribute('src', result.lectureImg);
//   if (lectureLinkEl) lectureLinkEl.setAttribute('href', result.lectureUrl);
// });


// console.log(mbtis.infp)
// const mbti = new URLSearchParams(location.search).get('mbti')
// console.log(mbtis[mbti])
// const mbti = new URLSearchParams(location.search).get('mbti');
// const result = mbtis[mbti];
// console.log(result);


// // 2. 각각의 태그 선택
// const titleEl = document.querySelector(".title");
// const characterEl = document.querySelector(".character"); // 오타 있었음: charater -> character
// const jobEls = document.querySelectorAll(".job");         // 여러 개일 것으로 예상
// const boxEls = document.querySelectorAll(".box");   
// const lectureEl = document.querySelector(".lecture");
// const lectureImgEl = document.querySelector(".lecture-img"); // 클래스명 또는 ID 확인 필요

// // 3. innerHTML로 표시
// titleEl.innerHTML = result.title;
// characterEl.innerHTML = result.character;


// // ✅ boxEls 출력 (예시: 콘솔에 요소 출력)
// boxEls.forEach((el, index) => {
//   console.log(`box ${index}:`, el);
//   // 필요한 내용이 있다면 여기에 innerHTML 설정 가능
//   // 예: el.innerHTML = `박스 내용 ${index + 1}`;
// });


// // 4. job 요소들에 대해 forEach로 순회
// jobEls.forEach((el, index) => {
//   el.innerHTML = result.jobs[index] || "";
// });

// // 5. 특강 정보
// lectureEl.innerHTML = result.lecture.name;
// lectureImgEl.setAttribute("src", result.lecture.image);



// // 1. 각각의 태그를 지정해야 함.
// const titleEl = document.querySelector(".title")
// const characterEl = document.querySelector(".character")
// const boxEls = document.querySelectorAll(array.forEach(element => { console.log(element);
// });)
// const jobsEls = document.querySelectorAll(array.forEach(element => { console.log(element);
// });)
// const lectureEl = document.querySelector("lecture")
// const lectureImgEl = document.querySelector

// // 위의 내용에 innerHTML 로 표시
// // 단 querySelectorAll 로 가져온 아이들은
// // forEach 구문을 이용해서 처리(문법은 찾아서)
