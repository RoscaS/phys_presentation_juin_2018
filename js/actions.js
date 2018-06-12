function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

Reveal.addEventListener('trois', function() {
    let sub = $('.trois').find('.sub-title-context');
    if (!sub.hasClass('toggled')) {
        sub.addClass('toggled');
        sleep(2000).then(()=>{
            sub.velocity({opacity: '1'}, 400)
        })
    }
}, false );
