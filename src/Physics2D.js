/*!
 * Physics2DPlugin 3.1.2
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(i, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((i = i || self).window = i.window || {})
}(this, function(e) {
  "use strict";

  function h() {
      return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
  }

  function i(i) {
      return Math.round(1e4 * i) / 1e4
  }

  function l() {
      return String.fromCharCode.apply(null, arguments)
  }

  function o(i) {
      t = i || h(), u || (r = t.utils.getUnit, u = 1)
  }

  function p(i, e, t, n, l) {
      var s = i._gsap,
          o = s.get(i, e);
      this.p = e, this.set = s.set(i, e), this.s = this.val = parseFloat(o), this.u = r(o) || 0, this.vel = t || 0, this.v = this.vel / l, n || 0 === n ? (this.acc = n, this.a = this.acc / (l * l)) : this.acc = this.a = 0
  }
  var t, u, r, v = Math.PI / 180,
      s = "Physics2DPlugin",
      a = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
      n = (function(i) {
          for (var e = 0 === (window ? window.location.href : "").indexOf(l(102, 105, 108, 101, 58, 47, 47)) || -1 !== i.indexOf(l(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== i.indexOf(l(49, 50, 55, 46, 48, 32, 48, 46, 49)), t = [a, l(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), l(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), l(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), l(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(99, 100, 112, 110, 46, 105, 111), l(103, 97, 110, 110, 111, 110, 46, 116, 118), l(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), l(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), l(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), l(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), l(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), l(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), l(112, 108, 110, 107, 114, 46, 99, 111), l(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), l(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), l(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), l(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), l(99, 111, 100, 105, 101, 114, 46, 105, 111), l(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = t.length; - 1 < --n;)
              if (-1 !== i.indexOf(t[n])) return;
          e && window && window.console && console.log(l(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + s + l(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), e || (window.location.href = "http://" + a + l(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + s + "&source=codepen")
      }(window ? window.location.host : ""), {
          version: "3.1.2",
          name: "physics2D",
          register: o,
          init: function init(i, e, t) {
              u || o();
              var n = this,
                  l = +e.angle || 0,
                  s = +e.velocity || 0,
                  r = +e.acceleration || 0,
                  a = e.xProp || "x",
                  c = e.yProp || "y",
                  f = e.accelerationAngle || 0 === e.accelerationAngle ? +e.accelerationAngle : l;
              n.target = i, n.tween = t, n.step = 0, n.sps = 30, e.gravity && (r = +e.gravity, f = 90), l *= v, f *= v, n.fr = 1 - (+e.friction || 0), n._props.push(a, c), n.xp = new p(i, a, Math.cos(l) * s, Math.cos(f) * r, n.sps), n.yp = new p(i, c, Math.sin(l) * s, Math.sin(f) * r, n.sps), n.skipX = n.skipY = 0
          },
          render: function render(e, t) {
              var n, l, s, o, r, a, p = t.xp,
                  c = t.yp,
                  f = t.tween,
                  h = t.target,
                  u = t.step,
                  v = t.sps,
                  d = t.fr,
                  w = t.skipX,
                  g = t.skipY,
                  y = f._from ? f._dur - f._time : f._time;
              if (1 === t.fr) s = y * y * .5, n = p.s + (p.vel * y + p.acc * s), l = c.s + (c.vel * y + c.acc * s);
              else {
                  if (o = a = (0 | (y *= v)) - u, r = y % 1, 0 <= a)
                      for (; a--;) p.v += p.a, c.v += c.a, p.v *= d, c.v *= d, p.val += p.v, c.val += c.v;
                  else
                      for (a = -a; a--;) p.val -= p.v, c.val -= c.v, p.v /= d, c.v /= d, p.v -= p.a, c.v -= c.a;
                  n = p.val + p.v * r, l = c.val + c.v * r, t.step += o
              }
              w || p.set(h, p.p, i(n) + p.u), g || c.set(h, c.p, i(l) + c.u)
          },
          kill: function kill(i) {
              this.xp.p === i && (this.skipX = 1), this.yp.p === i && (this.skipY = 1)
          }
      });
  h() && t.registerPlugin(n), e.Physics2DPlugin = n, e.default = n;
  if (typeof(window) === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  } else {
      delete e.default
  }
});