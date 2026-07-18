document.addEventListener('DOMContentLoaded', function () {
  var frame = document.querySelector('.demo-embed-frame');
  var openButton = document.querySelector('.demo-open-button');

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

  window.addEventListener('message', function (event) {
    if (
      event.origin === 'https://quantaji-symtrellis.hf.space' &&
      event.data &&
      event.data.type === 'symtrellis-demo-url'
    ) {
      openButton.href = event.data.url;
    }
  });
});
