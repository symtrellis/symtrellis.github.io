document.addEventListener('DOMContentLoaded', function () {
  var frame = document.querySelector('.demo-embed-frame');

  if (!frame) {
    return;
  }

  var nativeWidth = 1920;
  var nativeHeight = 1080;

  function resizeDemoEmbed() {
    var scale = Math.min(frame.clientWidth / nativeWidth, 1);

    frame.style.setProperty('--demo-scale', scale.toString());
    frame.style.height = nativeHeight * scale + 'px';
  }

  resizeDemoEmbed();

  if ('ResizeObserver' in window) {
    var observer = new ResizeObserver(resizeDemoEmbed);
    observer.observe(frame);
  } else {
    window.addEventListener('resize', resizeDemoEmbed);
  }
});
