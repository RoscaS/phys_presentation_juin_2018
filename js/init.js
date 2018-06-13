Reveal.initialize({
    dependencies: [
        {src: 'plugin/markdown/marked.js'},
        {src: 'plugin/markdown/markdown.js'},
        {src: 'plugin/notes/notes.js', async: true},
        {src: 'plugin/math/math.js', async: true },
        {
            src: 'plugin/highlight/highlight.js',
            async: true,
            callback: function() { hljs.initHighlightingOnLoad(); }
        }
    ],
    mouseWheel: true,
    width: 1920,
   	height: 1080,
    slideNumber: true,
});


// $('section').each(function(i){
//     let id = $(this).attr('id');
//     $('#'+id).load(`slides/${id}.html`);
// });



$('#01').load('slides/01.html');
// $('#intro').load('slides/introduction.html');
$('#02').load('slides/02.html');
$('#03').load('slides/03.html');
$('#04').load('slides/04.html');
$('#05').load('slides/05.html');
$('#06').load('slides/06.html');
$('#07').load('slides/07.html');
$('#08').load('slides/08.html');
$('#09').load('slides/09.html');
$('#10').load('slides/10.html');
$('#11').load('slides/11.html');
$('#12').load('slides/12.html');
$('#13').load('slides/13.html');
$('#14').load('slides/14.html');
$('#15').load('slides/15.html');
