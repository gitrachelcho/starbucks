const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY); //스크롤 위치값 알아내기 위해
  if(window.scrollY > 500){
    //배지숨기기
    // gsap.to : 자바 애니메이션 gsap.to(요소, 지속시간, {옵션});
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' //''을 써줘야한다. 그냥 none은 css에서 쓰는 것

    });

    //스크롤버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else{
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });

    //스크롤버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  }
}, 300));
// 스크롤될때마다 함수가 우루루 실행되는 것을 방지하기 위해 0.3초 단위로 부하를 주는 것. 안그럼 버벅일수있음
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0 //scroll to plugin url을 붙여넣어야 쓸 수 있는 명령어 
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
// s붙는 것 잊지말기
fadeEls.forEach(function(fadeEl, index){
  // forEach(function(반복중인요소, 반복중인번호){  명령어   });
  gsap.to(fadeEl, 1, {
    // 1번만 반복
    delay: (index + 1) * .7, //0.7 1.4 2.1 2.7초 뒤에 각 반복
    opacity: 1

  });
});

// new Swiper(선택자, 옵션). loop: 자동재생
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10, //슬라이드 사이 여백 10px
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호로 사용하겠다고 요청
    clickable: true
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
    // 이렇게 해놓으면 자동으로 기능 제공해줌
  }
});



new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 오토
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5, 
  // slidesPerGroup: 5, // 한번에 넘길 슬라이드 개수
  navigation: {
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next' //swiper에 내장되어 있는
  }
});


//  Promotion 슬라이드 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false //프로모션이 숨겨져있니? 안숨겨져있다.
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // 클릭시 flase true 가 뒤바뀌도록
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
  //숨김처리가 되면 let에서 ture가 되고, click시 반대값인 fale가 출력되어 remove'hide'를 통해 다시 보여지게 됨
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1. easeInOut,
    delay: random(0,delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시하고있어라
      triggerElement: spyEl, // 감시할 요소가 triggerElement에 지정된다.
      triggerHook: .8 // 뷰포트 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 감시하던 spyEl 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


