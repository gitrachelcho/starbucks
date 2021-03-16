// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
//'script'태그에 src로 외부 자바스크립트를 연결하는 것
var firstScriptTag = document.getElementsByTagName('script')[0];
//'script'라는 태그를 가지고 있는 요소들 중 0부터 번호를 매기는 방법을 이용해서 찾은 스크립트 중 첫번째 요소를 firstScroptTag에 할당
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//그렇게 찾은 첫번째 스크립트 태그의 부모요소를 찾아서, firstScroptTag 이전에 tag라는 변수를 삽입

// onYouTubePlayerAPIReady 함수 이름은 API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않는다.
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 유튜브 영상 ID. 제어를 쉽게 하기 위해 url 상 ID사용
    playerVars: {
      autoplay: true, 
      loop: true, // 반복 재생
      playlist: 'An6LvWQuj_8' // 다시 반복 재생할 유튜브 영상 ID 목록 필수로 써줘야함
    },
    events: {
      onReady: function (event) {
          //onReady라는 메소드가 실행되면, (익명함수의 매개변수 event)
        event.target.mute() // 음소거!
      }
    }
  })
}