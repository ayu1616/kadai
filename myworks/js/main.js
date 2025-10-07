//メニューを表示する関数の定義
function menuOpen() {
    document.getElementById("menu").classList.toggle("menu-open");
    document.getElementById("humb-close").classList.toggle("menu-open");
};

//開くアイコンをクリックしたときにmenuOpen関数を呼び出す
document.getElementById("humb-open").onclick = menuOpen;

//メニューを非表示にする関数の定義
function menuClose() {
    document.getElementById("menu").classList.toggle("menu-open");
    document.getElementById("humb-close").classList.toggle("menu-open");
};

//閉じるアイコンをクリックしたときにmenuClose関数を呼び出す
document.getElementById("humb-close").onclick = menuClose;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});