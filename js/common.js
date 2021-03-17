const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// searchEl 안에서 input을 찾아라

searchEl.addEventListener('click', function(){
  //search클래스를 클릭하면 아래를 실행하라
  //아래:Logic..
  searchInputEl.focus();
  // 클릭하면 찾은 input에 focus 하라.(focus는 밑에서 우리가 쓸 변수)
});

searchInputEl.addEventListener('focus', function(){
  // 기다렸다가 focus(input을 클릭시 focus가 할당됨)되면,
  searchEl.classList.add('focused'); //focused라는 클래스를 주어라
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});




const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021 이 this-year라는 클래스를 가진 요소 thisYear에 글자내용으로 삽입된다(textContent) 
