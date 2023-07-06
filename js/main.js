/**
 * @author ThanhTuVo
 */
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#b2003d',
      lineColor: '#b660cd'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }, false);
  // Another color can use
  //5cbdaa