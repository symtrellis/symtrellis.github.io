document.addEventListener('DOMContentLoaded', function () {
  var copyButtons = document.querySelectorAll('.copy-button[data-copy-target]');

  copyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-copy-target');
      var target = document.getElementById(targetId);

      navigator.clipboard.writeText(target.innerText).then(function () {
        button.classList.add('is-copied');
        window.setTimeout(function () {
          button.classList.remove('is-copied');
        }, 1200);
      });
    });
  });
});
