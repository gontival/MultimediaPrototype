/// <reference path="jquery-3.1.1.js" />
$(document).ready(function () {
    $('#media').on('play', function () {
        $('#message').html($('#media')[0].currentSrc);
    });

    $('.w3-closenav').click(closeMenu);
    $('nav > a').click(closeMenu);
    $('.w3-white').on('click', openMenu);

    $('.song').on('click', function () {
        playMusic($(this));
    });

    $('.video').on('click', function () {
        playVideo($(this));
    });
});

function closeMenu() {
    $('nav').css("display", "none");
}

function openMenu() {
    $('nav').css("display", "block");
}

function playMusic(evt) {
    if (evt.html().includes('Castle of Glass')) {
        $('img').attr('src', 'Media/CastleOfGlassCover.jpg');
        $('audio').attr('src', 'Media/Linkin%20Park%20-%20Castle%20Of%20Glass%20(lyrics).mp3')
            .trigger('play');
    }
    if (evt.html().includes('One Call Away')) {
        $('img').attr('src', 'Media/OneCallAwayCover.jpg');
        $('audio').attr('src', 'Media/One%20Call%20Away.mp3')
            .trigger('play');
    }
}

function playVideo(evt) {
    if (evt.html() =='Hololens') {
        $('video').attr('src', 'Media/hololens.mp4')
            .trigger('play');
    }
    if (evt.html().includes('exploded')) {
        $('video').attr('src', 'Media/HoloLensExplodedView.mp4')
            .trigger('play');
    }
    if (evt.html().includes('headband')) {
        $('video').attr('src', 'Media/HoloLensHeadBand.mp4')
            .trigger('play');
    }
    if (evt.html().includes('sideview')) {
        $('video').attr('src', 'Media/HoloLensSideView.mp4')
            .trigger('play');
    }
    if (evt.html().includes('topview')) {
        $('video').attr('src', 'Media/HoloLensTopView.mp4')
            .trigger('play');
    }
}