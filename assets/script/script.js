// =========== Slider card Start =========
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// =========== Slider card End =========

// =========== Slider Banner  Start  =========

(function (e) {
  e.fn.circle = function (t) {
    var n = e.extend(
      {
        speed: "5000",
      },
      t
    );
    return this.each(function () {
      function t() {
        var e = i.find("li.block.active").index();
        c.removeClass("active"), c.eq(e).addClass("active");
      }

      function o() {
        var n;
        i.addClass("disable-hover"),
          i.stop(!0, !0).animate(
            {
              rotatedeg: (p.deg += p.step),
            },
            {
              duration: 400,
              step: function (t) {
                t >= 360 ? (t -= 360) : t <= -360 && (t += 360),
                  e(this).css("transform", "rotate(" + t + "deg)"),
                  e(this).css(
                    "-webkit-transform",
                    "rotate(" + t + "deg)"
                  );
              },
              complete: function () {
                (p.active = i.find("li.active").removeClass("active")),
                  "right" == p.direction &&
                  p.step == d &&
                  (p.active.prev() && p.active.prev().length
                    ? ((n = p.active.prev().index()),
                      p.active.prev().addClass("active"))
                    : (p.active
                      .siblings(":last-child")
                      .addClass("active"),
                      (n = 9))),
                  "left" == p.direction &&
                  p.step == u &&
                  (p.active.next() && p.active.next().length
                    ? ((n = p.active.next().index()),
                      p.active.next().addClass("active"))
                    : (p.active
                      .siblings(":first-child")
                      .addClass("active"),
                      (n = 0))),
                  i.is(":animated"),
                  i.removeClass("disable-hover"),
                  t();
              },
            },
            "ease"
          );
      }

      function r() {
        i.addClass("disable-hover"),
          i.stop(!0, !0).animate(
            {
              rotatedeg: (p.deg += p.step),
            },
            {
              duration: 400,
              step: function (t) {
                t >= 360 ? (t -= 360) : t <= -360 && (t += 360),
                  e(this).css("transform", "rotate(" + t + "deg)"),
                  e(this).css(
                    "-webkit-transform",
                    "rotate(" + t + "deg)"
                  );
              },
              complete: function () {
                (p.active = i.find("li.active")),
                  i.is(":animated"),
                  i.removeClass("disable-hover");
              },
            },
            "ease"
          );
      }
      var i = e(this),
        s = i.find("li").length,
        a = i.find(" > li .icon"),
        l = "count" + s,
        u = 0,
        c = i.next().find(".animate"),
        p = {
          duration: n.speed,
          deg: 0,
          step: u,
          active: i.find("li.active"),
          direction: "left",
        };
      switch (s) {
        case 10:
          u = -36;
          break;
        case 9:
          u = -40;
          break;
        case 8:
          u = -45;
          break;
        case 7:
          u = -51.5;
          break;
        case 6:
          u = -60;
          break;
        case 5:
          u = -72;
          break;
        case 4:
          u = -90;
          break;
        case 3:
          u = -120;
          break;
        case 2:
          u = -180;
          break;
        case 1:
          u = -360;
      }
      i.addClass(l);
      var d = u - 2 * u;
      i.find("> li").first().addClass("active"),
        i.find("> li").first().find("a").attr("href"),
        c.eq(0).addClass("active"),
        e(a).on("click", function () {
          var n = e(this).parent().index() - i.find("li.active").index();
          i.children("li").removeClass("active"),
            e(this).parent().addClass("active"),
            (p.step = -n * d),
            n * d >= 288 && (p.step = -n * d + 360),
            n * d <= -288 && (p.step = -n * d - 360),
            r(),
            (p.step = u),
            (p.direction = "left"),
            t();
        });
    });
  };
})(jQuery);
let temp = 0
$(function () {
function autoHeightCircle() {
  var circle = $(".circle--rotate"),
    circleInner = $(".animate-wrapper"),
    circleH = circle.width(),
    circleInnerH = circleInner.width();
  circle.height(circleH);
  circleInner.height(circleInnerH);
  let circle12 = $("#circle--rotate .icon");

  circle12.each(function (index, element) {
    console.log(element.getAttribute("alt"));
    if (index === temp) {
      $(element).addClass("newIcon");
    } else {
      $(element).removeClass("newIcon");
    }
  });
}

$("#circle--rotate").circle();

autoHeightCircle();

$("#circle--rotate").click(function () {
  console.log("Circle clicked!");
  if (temp > 2) {
    temp = 0
  } else {
    temp++
  }
  autoHeightCircle()
});
$(window).resize(function () {
  autoHeightCircle();
});
});

// =========== Slider Banner  Start  =========