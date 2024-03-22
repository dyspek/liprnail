document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    // すべてのスライドを非表示にする
    slides.forEach(slide => {
      slide.style.display = "none";
    });
    // 現在のスライドを表示する
    slides[index].style.display = "block";
    // 次のスライドのインデックスを計算する
    index = (index + 1) % slides.length;
  }

  // 最初のスライドを表示する
  showSlide();

  // 3.25秒ごとにスライドを変更する
  setInterval(showSlide, 3250);
});


// ページの読み込みが完了したら実行される
document.addEventListener("DOMContentLoaded", function() {
    // ボタンの要素を取得
    var topButton = document.getElementById('topButton');
    
    // ボタンがクリックされた時の処理を定義
    topButton.addEventListener('click', function() {
      // ページの一番上にスクロールする
      window.scrollTo({
        top: 0, // 上端にスクロール
        behavior: 'smooth' // スムーズなスクロール
      });
    });
 });
  