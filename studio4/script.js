function g(a) {
  throw a;
}
var i = void 0,
  j = !0,
  m = null,
  n = !1;

function p() {
  return function() {}
}

function r(a) {
  return function() {
    return this[a]
  }
}

function aa(a) {
  return function() {
    return a
  }
}
var s, t = this;

function ba(a, b) {
  var c = a.split("."),
    d = t;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for (var f; c.length && (f = c.shift());) !c.length && ca(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
}

function da() {}

function ea(a) {
  a.pb = function() {
    return a.Bd ? a.Bd : a.Bd = new a
  }
}

function fa(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b
}

function ca(a) {
  return a !== i
}

function ga(a) {
  return "array" == fa(a)
}

function ha(a) {
  var b = fa(a);
  return "array" == b || "object" == b && "number" == typeof a.length
}

function u(a) {
  return "string" == typeof a
}

function v(a) {
  return "function" == fa(a)
}

function ia(a) {
  var b = typeof a;
  return "object" == b && a != m || "function" == b
}

function ja(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
  la = 0;

function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}

function na(a, b, c) {
  a || g(Error());
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}

function oa(a, b, c) {
  oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return oa.apply(m, arguments)
}

function pa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var qa = Date.now || function() {
  return +new Date
};

function z(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.K = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};

function ra(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}

function sa(a) {
  if (!ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
  return a
}
var ua = /&/g,
  va = /</g,
  wa = />/g,
  xa = /\"/g,
  ta = /[&<>\"]/;

function ya(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
};
var B = Array.prototype,
  za = B.indexOf ? function(a, b, c) {
    return B.indexOf.call(a, b, c)
  } : function(a, b, c) {
    c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  },
  C = B.forEach ? function(a, b, c) {
    B.forEach.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, f = u(a) ? a.split("") : a, e = 0; e < d; e++) e in f && b.call(c, f[e], e, a)
  },
  Aa = B.filter ? function(a, b, c) {
    return B.filter.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, f = [], e = 0, h = u(a) ? a.split("") :
        a, k = 0; k < d; k++)
      if (k in h) {
        var l = h[k];
        b.call(c, l, k, a) && (f[e++] = l)
      } return f
  },
  Ba = B.map ? function(a, b, c) {
    return B.map.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, f = Array(d), e = u(a) ? a.split("") : a, h = 0; h < d; h++) h in e && (f[h] = b.call(c, e[h], h, a));
    return f
  },
  Ca = B.every ? function(a, b, c) {
    return B.every.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, f = u(a) ? a.split("") : a, e = 0; e < d; e++)
      if (e in f && !b.call(c, f[e], e, a)) return n;
    return j
  };

function Da(a, b) {
  var c;
  a: {
    c = a.length;
    for (var d = u(a) ? a.split("") : a, f = 0; f < c; f++)
      if (f in d && b.call(i, d[f], f, a)) {
        c = f;
        break a
      } c = -1
  }
  return 0 > c ? m : u(a) ? a.charAt(c) : a[c]
}

function Ea(a, b) {
  return 0 <= za(a, b)
}

function D(a, b) {
  var c = za(a, b);
  0 <= c && B.splice.call(a, c, 1)
}

function Fa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}

function Ga(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c],
      f;
    if (ga(d) || (f = ha(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
    else if (f)
      for (var e = a.length, h = d.length, k = 0; k < h; k++) a[e + k] = d[k];
    else a.push(d)
  }
}

function Ha(a, b, c) {
  return 2 >= arguments.length ? B.slice.call(a, b) : B.slice.call(a, b, c)
}

function Ia(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
var Ja, Ka, La, Ma, Na;

function Oa() {
  return t.navigator ? t.navigator.userAgent : m
}

function Pa() {
  return t.navigator
}
Ma = La = Ka = Ja = n;
var Qa;
if (Qa = Oa()) {
  var Ra = Pa();
  Ja = 0 == Qa.indexOf("Opera");
  Ka = !Ja && -1 != Qa.indexOf("MSIE");
  La = !Ja && -1 != Qa.indexOf("WebKit");
  Ma = !Ja && !La && "Gecko" == Ra.product
}
var Sa = Ja,
  E = Ka,
  F = Ma,
  G = La,
  Ta = Pa();
Na = -1 != (Ta && Ta.platform || "").indexOf("Mac");
var Ua = !!Pa() && -1 != (Pa().appVersion || "").indexOf("X11"),
  Va;
a: {
  var Wa = "",
    Xa;
  if (Sa && t.opera) var Ya = t.opera.version,
    Wa = "function" == typeof Ya ? Ya() : Ya;
  else if (F ? Xa = /rv\:([^\);]+)(\)|;)/ : E ? Xa = /MSIE\s+([^\);]+)(\)|;)/ : G && (Xa = /WebKit\/(\S+)/), Xa) var Za = Xa.exec(Oa()),
    Wa = Za ? Za[1] : "";
  if (E) {
    var $a, ab = t.document;
    $a = ab ? ab.documentMode : i;
    if ($a > parseFloat(Wa)) {
      Va = String($a);
      break a
    }
  }
  Va = Wa
}
var bb = {};

function I(a) {
  var b;
  if (!(b = bb[a])) {
    b = 0;
    for (var c = ra(String(Va)).split("."), d = ra(String(a)).split("."), f = Math.max(c.length, d.length), e = 0; 0 == b && e < f; e++) {
      var h = c[e] || "",
        k = d[e] || "",
        l = RegExp("(\\d*)(\\D*)", "g"),
        q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = l.exec(h) || ["", "", ""],
          y = q.exec(k) || ["", "", ""];
        if (0 == w[0].length && 0 == y[0].length) break;
        b = ((0 == w[1].length ? 0 : parseInt(w[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == w[1].length ? 0 : parseInt(w[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == w[2].length) <
          (0 == y[2].length) ? -1 : (0 == w[2].length) > (0 == y[2].length) ? 1 : 0) || (w[2] < y[2] ? -1 : w[2] > y[2] ? 1 : 0)
      } while (0 == b)
    }
    b = bb[a] = 0 <= b
  }
  return b
}
var cb = {};

function db(a) {
  return cb[a] || (cb[a] = E && !!document.documentMode && document.documentMode >= a)
};
var eb, fb = !E || db(9);
!F && !E || E && db(9) || F && I("1.9.1");
E && I("9");
var gb = E || Sa || G;

function hb(a) {
  a = a.className;
  return u(a) && a.match(/\S+/g) || []
}

function ib(a, b) {
  var c = hb(a),
    d = Ha(arguments, 1),
    f = c.length + d.length;
  jb(c, d);
  a.className = c.join(" ");
  return c.length == f
}

function kb(a, b) {
  var c = hb(a),
    d = Ha(arguments, 1),
    f = lb(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}

function jb(a, b) {
  for (var c = 0; c < b.length; c++) Ea(a, b[c]) || a.push(b[c])
}

function lb(a, b) {
  return Aa(a, function(a) {
    return !Ea(b, a)
  })
}

function mb(a, b, c) {
  var d = hb(a);
  u(b) ? D(d, b) : ga(b) && (d = lb(d, b));
  u(c) && !Ea(d, c) ? d.push(c) : ga(c) && jb(d, c);
  a.className = d.join(" ")
};

function J(a, b) {
  this.x = ca(a) ? a : 0;
  this.y = ca(b) ? b : 0
};

function nb(a, b) {
  this.width = a;
  this.height = b
}
nb.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
nb.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};

function ob(a, b) {
  for (var c in a) b.call(i, a[c], c, a)
}
var pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function qb(a, b) {
  for (var c, d, f = 1; f < arguments.length; f++) {
    d = arguments[f];
    for (c in d) a[c] = d[c];
    for (var e = 0; e < pb.length; e++) c = pb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
};

function rb(a) {
  return a ? new sb(K(a)) : eb || (eb = new sb)
}

function tb() {
  var a, b, c, d;
  a = document;
  if (a.querySelectorAll && a.querySelector) return a.querySelectorAll(".openseadragon-container");
  if (a.getElementsByClassName) {
    var f = a.getElementsByClassName("openseadragon-container");
    return f
  }
  f = a.getElementsByTagName("*");
  d = {};
  for (b = c = 0; a = f[b]; b++) {
    var e = a.className;
    "function" == typeof e.split && Ea(e.split(/\s+/), "openseadragon-container") && (d[c++] = a)
  }
  d.length = c;
  return d
}

function ub(a, b) {
  ob(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in vb ? a.setAttribute(vb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var vb = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width"
};

function wb(a, b, c) {
  var d = arguments,
    f = document,
    e = d[0],
    h = d[1];
  if (!fb && h && (h.name || h.type)) {
    e = ["<", e];
    h.name && e.push(' name="', sa(h.name), '"');
    if (h.type) {
      e.push(' type="', sa(h.type), '"');
      var k = {};
      qb(k, h);
      delete k.type;
      h = k
    }
    e.push(">");
    e = e.join("")
  }
  e = f.createElement(e);
  h && (u(h) ? e.className = h : ga(h) ? ib.apply(m, [e].concat(h)) : ub(e, h));
  2 < d.length && xb(f, e, d, 2);
  return e
}

function xb(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for (; d < c.length; d++) {
    var e = c[d];
    if (ha(e) && !(ia(e) && 0 < e.nodeType)) {
      var h;
      a: {
        if (e && "number" == typeof e.length) {
          if (ia(e)) {
            h = "function" == typeof e.item || "string" == typeof e.item;
            break a
          }
          if (v(e)) {
            h = "function" == typeof e.item;
            break a
          }
        }
        h = n
      }
      C(h ? Fa(e) : e, f)
    } else f(e)
  }
}

function yb(a) {
  for (var b; b = a.firstChild;) a.removeChild(b)
}

function zb(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}

function Ab(a) {
  return ia(a) && 1 == a.nodeType
}

function Bb(a, b) {
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  for (; b && a != b;) b = b.parentNode;
  return b == a
}

function K(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function Cb(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : n
}

function sb(a) {
  this.M = a || t.document || document
}
s = sb.prototype;
s.pd = rb;
s.d = function(a) {
  return u(a) ? this.M.getElementById(a) : a
};
s.ga = ub;
s.createElement = function(a) {
  return this.M.createElement(a)
};
s.createTextNode = function(a) {
  return this.M.createTextNode(a)
};

function Db(a) {
  var b = a.M,
    a = !G ? b.documentElement : b.body,
    b = b.parentWindow || b.defaultView;
  return new J(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  xb(K(a), a, arguments, 1)
};
s.contains = Bb;
var Eb;
Eb = aa(j);
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Fb(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Gb = G && "BackCompat" == document.compatMode,
  Hb = document.firstChild.children ? "children" : "childNodes",
  Ib = n;

function Jb(a) {
  function b() {
    0 <= q && (x.id = c(q, A).replace(/\\/g, ""), q = -1);
    if (0 <= w) {
      var a = w == A ? m : c(w, A);
      0 > ">~+".indexOf(a) ? x.H = a : x.Qb = a;
      w = -1
    }
    0 <= l && (x.ca.push(c(l + 1, A).replace(/\\/g, "")), l = -1)
  }

  function c(b, c) {
    return ra(a.slice(b, c))
  }
  for (var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, e = -1, h = -1, k = -1, l = -1, q = -1, w = -1, y = "", H = "", S, A = 0, Me = a.length, x = m, M = m; y = H, H = a.charAt(A), A < Me; A++)
    if ("\\" != y)
      if (x || (S = A, x = {
          Ua: m,
          Ba: [],
          Ab: [],
          ca: [],
          H: m,
          Qb: m,
          id: m,
          rc: function() {
            return Ib ? this.he : this.H
          }
        }, w = A), 0 <= f)
        if ("]" ==
          H) {
          M.nc ? M.yc = c(h || f + 1, A) : M.nc = c(f + 1, A);
          if ((f = M.yc) && ('"' == f.charAt(0) || "'" == f.charAt(0))) M.yc = f.slice(1, -1);
          x.Ab.push(M);
          M = m;
          f = h = -1
        } else "=" == H && (h = 0 <= "|~^$*".indexOf(y) ? y : "", M.type = h + H, M.nc = c(f + 1, A - h.length), h = A + 1);
  else 0 <= e ? ")" == H && (0 <= k && (M.value = c(e + 1, A)), k = e = -1) : "#" == H ? (b(), q = A + 1) : "." == H ? (b(), l = A) : ":" == H ? (b(), k = A) : "[" == H ? (b(), f = A, M = {}) : "(" == H ? (0 <= k && (M = {
    name: c(k + 1, A),
    value: m
  }, x.Ba.push(M)), e = A) : " " == H && y != H && (b(), 0 <= k && x.Ba.push({
      name: c(k + 1, A)
    }), x.Ed = x.Ba.length || x.Ab.length || x.ca.length, x.ye =
    x.Ua = c(S, A), x.he = x.H = x.Qb ? m : x.H || "*", x.H && (x.H = x.H.toUpperCase()), d.length && d[d.length - 1].Qb && (x.Ad = d.pop(), x.Ua = x.Ad.Ua + " " + x.Ua), d.push(x), x = m);
  return d
}

function Kb(a, b) {
  return !a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}

function Lb(a) {
  return 1 == a.nodeType
}

function Mb(a, b) {
  return !a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Ib ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Nb = {
    "*=": function(a, b) {
      return function(c) {
        return 0 <= Mb(c, a).indexOf(b)
      }
    },
    "^=": function(a, b) {
      return function(c) {
        return 0 == Mb(c, a).indexOf(b)
      }
    },
    "$=": function(a, b) {
      return function(c) {
        c = " " + Mb(c, a);
        return c.lastIndexOf(b) == c.length - b.length
      }
    },
    "~=": function(a, b) {
      var c = " " + b + " ";
      return function(b) {
        return 0 <= (" " + Mb(b, a) + " ").indexOf(c)
      }
    },
    "|=": function(a, b) {
      b = " " + b;
      return function(c) {
        c = " " + Mb(c, a);
        return c == b || 0 == c.indexOf(b + "-")
      }
    },
    "=": function(a, b) {
      return function(c) {
        return Mb(c, a) == b
      }
    }
  },
  Ob = "undefined" ==
  typeof document.firstChild.nextElementSibling,
  Pb = !Ob ? "nextElementSibling" : "nextSibling",
  Qb = !Ob ? "previousElementSibling" : "previousSibling",
  Rb = Ob ? Lb : Eb;

function Sb(a) {
  for (; a = a[Qb];)
    if (Rb(a)) return n;
  return j
}

function Tb(a) {
  for (; a = a[Pb];)
    if (Rb(a)) return n;
  return j
}

function Ub(a) {
  var b = a.parentNode,
    c = 0,
    d = b[Hb],
    f = a._i || -1,
    e = b._l || -1;
  if (!d) return -1;
  d = d.length;
  if (e == d && 0 <= f && 0 <= e) return f;
  b._l = d;
  f = -1;
  for (b = b.firstElementChild || b.firstChild; b; b = b[Pb]) Rb(b) && (b._i = ++c, a === b && (f = c));
  return f
}

function Vb(a) {
  return !(Ub(a) % 2)
}

function Wb(a) {
  return Ub(a) % 2
}
var Yb = {
    checked: function() {
      return function(a) {
        return a.checked || a.attributes.checked
      }
    },
    "first-child": function() {
      return Sb
    },
    "last-child": function() {
      return Tb
    },
    "only-child": function() {
      return function(a) {
        return !Sb(a) || !Tb(a) ? n : j
      }
    },
    empty: function() {
      return function(a) {
        for (var b = a.childNodes, a = a.childNodes.length - 1; 0 <= a; a--) {
          var c = b[a].nodeType;
          if (1 === c || 3 == c) return n
        }
        return j
      }
    },
    contains: function(a, b) {
      var c = b.charAt(0);
      if ('"' == c || "'" == c) b = b.slice(1, -1);
      return function(a) {
        return 0 <= a.innerHTML.indexOf(b)
      }
    },
    not: function(a, b) {
      var c = Jb(b)[0],
        d = {
          D: 1
        };
      "*" != c.H && (d.H = 1);
      c.ca.length || (d.ca = 1);
      var f = Xb(c, d);
      return function(a) {
        return !f(a)
      }
    },
    "nth-child": function(a, b) {
      if ("odd" == b) return Wb;
      if ("even" == b) return Vb;
      if (-1 != b.indexOf("n")) {
        var c = b.split("n", 2),
          d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1,
          f = c[1] ? parseInt(c[1], 10) : 0,
          e = 0,
          h = -1;
        0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (e = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (h = f, f %= d));
        if (0 < d) return function(a) {
          a = Ub(a);
          return a >= e && (0 > h || a <= h) && a % d == f
        };
        b = f
      }
      var k = parseInt(b, 10);
      return function(a) {
        return Ub(a) ==
          k
      }
    }
  },
  Zb = E ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Ib ? c.getAttribute(a) : c[a] || c[b]
    }
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a)
    }
  };

function Xb(a, b) {
  if (!a) return Eb;
  var b = b || {},
    c = m;
  b.D || (c = Kb(c, Lb));
  b.H || "*" != a.H && (c = Kb(c, function(b) {
    return b && b.tagName == a.rc()
  }));
  b.ca || C(a.ca, function(a, b) {
    var e = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Kb(c, function(a) {
      return e.test(a.className)
    });
    c.count = b
  });
  b.Ba || C(a.Ba, function(a) {
    var b = a.name;
    Yb[b] && (c = Kb(c, Yb[b](b, a.value)))
  });
  b.Ab || C(a.Ab, function(a) {
    var b, e = a.nc;
    a.type && Nb[a.type] ? b = Nb[a.type](e, a.yc) : e.length && (b = Zb(e));
    b && (c = Kb(c, b))
  });
  b.id || a.id && (c = Kb(c, function(b) {
    return !!b && b.id == a.id
  }));
  c || "default" in b || (c = Eb);
  return c
}
var $b = {};

function ac(a) {
  var b = $b[a.Ua];
  if (b) return b;
  var c = a.Ad,
    c = c ? c.Qb : "",
    d = Xb(a, {
      D: 1
    }),
    f = "*" == a.H,
    e = document.getElementsByClassName;
  if (c)
    if (e = {
        D: 1
      }, f && (e.H = 1), d = Xb(a, e), "+" == c) var h = d,
      b = function(a, b, c) {
        for (; a = a[Pb];)
          if (!Ob || Lb(a)) {
            (!c || bc(a, c)) && h(a) && b.push(a);
            break
          } return b
      };
    else if ("~" == c) var k = d,
    b = function(a, b, c) {
      for (a = a[Pb]; a;) {
        if (Rb(a)) {
          if (c && !bc(a, c)) break;
          k(a) && b.push(a)
        }
        a = a[Pb]
      }
      return b
    };
  else {
    if (">" == c) var l = d,
      l = l || Eb,
      b = function(a, b, c) {
        for (var d = 0, f = a[Hb]; a = f[d++];) Rb(a) && ((!c || bc(a, c)) && l(a, d)) &&
          b.push(a);
        return b
      }
  } else if (a.id) d = !a.Ed && f ? Eb : Xb(a, {
    D: 1,
    id: 1
  }), b = function(b, c) {
    var f = rb(b).d(a.id),
      e;
    if (e = f && d(f))
      if (!(e = 9 == b.nodeType)) {
        for (e = f.parentNode; e && e != b;) e = e.parentNode;
        e = !!e
      } if (e) return Fb(f, c)
  };
  else if (e && /\{\s*\[native code\]\s*\}/.test(String(e)) && a.ca.length && !Gb) var d = Xb(a, {
      D: 1,
      ca: 1,
      id: 1
    }),
    q = a.ca.join(" "),
    b = function(a, b) {
      for (var c = Fb(0, b), f, e = 0, h = a.getElementsByClassName(q); f = h[e++];) d(f, a) && c.push(f);
      return c
    };
  else !f && !a.Ed ? b = function(b, c) {
    for (var d = Fb(0, c), f, e = 0, h = b.getElementsByTagName(a.rc()); f =
      h[e++];) d.push(f);
    return d
  } : (d = Xb(a, {
    D: 1,
    H: 1,
    id: 1
  }), b = function(b, c) {
    for (var f = Fb(0, c), e, h = 0, k = b.getElementsByTagName(a.rc()); e = k[h++];) d(e, b) && f.push(e);
    return f
  });
  return $b[a.Ua] = b
}
var cc = {},
  dc = {};

function ec(a) {
  var b = Jb(ra(a));
  if (1 == b.length) {
    var c = ac(b[0]);
    return function(a) {
      if (a = c(a, [])) a.Pb = j;
      return a
    }
  }
  return function(a) {
    for (var a = Fb(a), c, e, h = b.length, k, l, q = 0; q < h; q++) {
      l = [];
      c = b[q];
      e = a.length - 1;
      0 < e && (k = {}, l.Pb = j);
      e = ac(c);
      for (var w = 0; c = a[w]; w++) e(c, l, k);
      if (!l.length) break;
      a = l
    }
    return l
  }
}
var fc = !!document.querySelectorAll && (!G || I("526"));

function gc(a, b) {
  if (fc) {
    var c = dc[a];
    if (c && !b) return c
  }
  if (c = cc[a]) return c;
  var c = a.charAt(0),
    d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = j);
  if (fc && !b && -1 == ">~+".indexOf(c) && (!E || -1 == a.indexOf(":")) && !(Gb && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return dc[a] = function(b) {
      try {
        9 == b.nodeType || d || g("");
        var c = b.querySelectorAll(f);
        E ? c.Td = j : c.Pb = j;
        return c
      } catch (e) {
        return gc(a, j)(b)
      }
    }
  }
  var e = a.split(/\s*,\s*/);
  return cc[a] =
    2 > e.length ? ec(a) : function(a) {
      for (var b = 0, c = [], d; d = e[b++];) c = c.concat(ec(d)(a));
      return c
    }
}
var hc = 0,
  ic = E ? function(a) {
    return Ib ? a.getAttribute("_uid") || a.setAttribute("_uid", ++hc) || hc : a.uniqueID
  } : function(a) {
    return a._uid || (a._uid = ++hc)
  };

function bc(a, b) {
  if (!b) return 1;
  var c = ic(a);
  return !b[c] ? b[c] = 1 : 0
}

function jc(a) {
  if (a && a.Pb) return a;
  var b = [];
  if (!a || !a.length) return b;
  a[0] && b.push(a[0]);
  if (2 > a.length) return b;
  hc++;
  if (E && Ib) {
    var c = hc + "";
    a[0].setAttribute("_zipIdx", c);
    for (var d = 1, f; f = a[d]; d++) a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
  } else if (E && a.Td) try {
    for (d = 1; f = a[d]; d++) Lb(f) && b.push(f)
  } catch (e) {} else {
    a[0] && (a[0]._zipIdx = hc);
    for (d = 1; f = a[d]; d++) a[d]._zipIdx != hc && b.push(f), f._zipIdx = hc
  }
  return b
}

function L(a, b) {
  if (!a) return [];
  if (a.constructor == Array) return a;
  if (!u(a)) return [a];
  if (u(b) && (b = u(b) ? document.getElementById(b) : b, !b)) return [];
  var b = b || document,
    c = b.ownerDocument || b.documentElement;
  Ib = b.contentType && "application/xml" == b.contentType || Sa && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (E ? c.xml : b.xmlVersion || c.xmlVersion);
  return (c = gc(a)(b)) && c.Pb ? c : jc(c)
}
L.Ba = Yb;
ba("goog.dom.query", L);
ba("goog.dom.query.pseudos", L.Ba);
var kc = !E || db(9),
  lc = !E || db(9),
  mc = E && !I("9");
!G || I("528");
F && I("1.9b") || E && I("8") || Sa && I("9.5") || G && I("528");
F && !I("8") || E && I("9");

function nc() {
  0 != oc && (this.se = Error().stack, ja(this))
}
var oc = 0;
nc.prototype.ld = n;

function pc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
s = pc.prototype;
s.Aa = n;
s.defaultPrevented = n;
s.Ub = j;
s.stopPropagation = function() {
  this.Aa = j
};
s.preventDefault = function() {
  this.defaultPrevented = j;
  this.Ub = n
};

function qc(a) {
  a.preventDefault()
};

function rc(a) {
  rc[" "](a);
  return a
}
rc[" "] = da;

function sc(a, b) {
  a && this.init(a, b)
}
z(sc, pc);
var tc = [1, 4, 2];
s = sc.prototype;
s.target = m;
s.relatedTarget = m;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = n;
s.altKey = n;
s.shiftKey = n;
s.metaKey = n;
s.Cc = n;
s.n = m;
s.init = function(a, b) {
  var c = this.type = a.type;
  pc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (F) {
      var f;
      a: {
        try {
          rc(d.nodeName);
          f = j;
          break a
        } catch (e) {}
        f = n
      }
      f || (d = m)
    }
  } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = G || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = G || a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX =
    a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Cc = Na ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.n = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Aa
};

function uc(a) {
  return (kc ? 0 == a.n.button : "click" == a.type ? j : !!(a.n.button & tc[0])) && !(G && Na && a.ctrlKey)
}
s.stopPropagation = function() {
  sc.K.stopPropagation.call(this);
  this.n.stopPropagation ? this.n.stopPropagation() : this.n.cancelBubble = j
};
s.preventDefault = function() {
  sc.K.preventDefault.call(this);
  var a = this.n;
  if (a.preventDefault) a.preventDefault();
  else if (a.returnValue = n, mc) try {
    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
  } catch (b) {}
};
s.Ud = r("n");

function vc() {}
var wc = 0;
s = vc.prototype;
s.key = 0;
s.Ca = n;
s.fd = n;
s.init = function(a, b, c, d, f, e) {
  v(a) ? this.Dd = j : a && a.handleEvent && v(a.handleEvent) ? this.Dd = n : g(Error("Invalid listener argument"));
  this.Ta = a;
  this.Hd = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Pa = e;
  this.fd = n;
  this.key = ++wc;
  this.Ca = n
};
s.handleEvent = function(a) {
  return this.Dd ? this.Ta.call(this.Pa || this.src, a) : this.Ta.handleEvent.call(this.Ta, a)
};
var xc = {},
  N = {},
  yc = {},
  zc = {};

function O(a, b, c, d, f) {
  if (b) {
    if (ga(b)) {
      for (var e = 0; e < b.length; e++) O(a, b[e], c, d, f);
      return m
    }
    var d = !!d,
      h = N;
    b in h || (h[b] = {
      m: 0,
      O: 0
    });
    h = h[b];
    d in h || (h[d] = {
      m: 0,
      O: 0
    }, h.m++);
    var h = h[d],
      k = ja(a),
      l;
    h.O++;
    if (h[k]) {
      l = h[k];
      for (e = 0; e < l.length; e++)
        if (h = l[e], h.Ta == c && h.Pa == f) {
          if (h.Ca) break;
          return l[e].key
        }
    } else l = h[k] = [], h.m++;
    var q = Ac,
      w = lc ? function(a) {
        return q.call(w.src, w.key, a)
      } : function(a) {
        a = q.call(w.src, w.key, a);
        if (!a) return a
      },
      e = w;
    e.src = a;
    h = new vc;
    h.init(c, e, a, b, d, f);
    c = h.key;
    e.key = c;
    l.push(h);
    xc[c] = h;
    yc[k] ||
      (yc[k] = []);
    yc[k].push(h);
    a.addEventListener ? (a == t || !a.hd) && a.addEventListener(b, e, d) : a.attachEvent(b in zc ? zc[b] : zc[b] = "on" + b, e);
    return c
  }
  g(Error("Invalid event type"))
}

function Bc(a, b, c, d, f) {
  if (ga(b))
    for (var e = 0; e < b.length; e++) Bc(a, b[e], c, d, f);
  else if (d = !!d, a = Cc(a, b, d))
    for (e = 0; e < a.length; e++)
      if (a[e].Ta == c && a[e].capture == d && a[e].Pa == f) {
        P(a[e].key);
        break
      }
}

function P(a) {
  if (!xc[a]) return n;
  var b = xc[a];
  if (b.Ca) return n;
  var c = b.src,
    d = b.type,
    f = b.Hd,
    e = b.capture;
  c.removeEventListener ? (c == t || !c.hd) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in zc ? zc[d] : zc[d] = "on" + d, f);
  c = ja(c);
  yc[c] && (f = yc[c], D(f, b), 0 == f.length && delete yc[c]);
  b.Ca = j;
  if (b = N[d][e][c]) b.Gd = j, Dc(d, e, c, b);
  delete xc[a];
  return j
}

function Dc(a, b, c, d) {
  if (!d.Kb && d.Gd) {
    for (var f = 0, e = 0; f < d.length; f++) d[f].Ca ? d[f].Hd.src = m : (f != e && (d[e] = d[f]), e++);
    d.length = e;
    d.Gd = n;
    0 == e && (delete N[a][b][c], N[a][b].m--, 0 == N[a][b].m && (delete N[a][b], N[a].m--), 0 == N[a].m && delete N[a])
  }
}

function Cc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : m
}

function Ec(a, b, c, d, f) {
  var e = 1,
    b = ja(b);
  if (a[b]) {
    a.O--;
    a = a[b];
    a.Kb ? a.Kb++ : a.Kb = 1;
    try {
      for (var h = a.length, k = 0; k < h; k++) {
        var l = a[k];
        l && !l.Ca && (e &= Fc(l, f) !== n)
      }
    } finally {
      a.Kb--, Dc(c, d, b, a)
    }
  }
  return Boolean(e)
}

function Fc(a, b) {
  a.fd && P(a.key);
  return a.handleEvent(b)
}

function Ac(a, b) {
  if (!xc[a]) return j;
  var c = xc[a],
    d = c.type,
    f = N;
  if (!(d in f)) return j;
  var f = f[d],
    e, h;
  if (!lc) {
    var k;
    if (!(k = b)) a: {
      k = ["window", "event"];
      for (var l = t; e = k.shift();)
        if (l[e] != m) l = l[e];
        else {
          k = m;
          break a
        } k = l
    }
    e = k;
    k = j in f;
    l = n in f;
    if (k) {
      if (0 > e.keyCode || e.returnValue != i) return j;
      a: {
        var q = n;
        if (0 == e.keyCode) try {
          e.keyCode = -1;
          break a
        } catch (w) {
          q = j
        }
        if (q || e.returnValue == i) e.returnValue = j
      }
    }
    q = new sc;
    q.init(e, this);
    e = j;
    try {
      if (k) {
        for (var y = [], H = q.currentTarget; H; H = H.parentNode) y.push(H);
        h = f[j];
        h.O = h.m;
        for (var S =
            y.length - 1; !q.Aa && 0 <= S && h.O; S--) q.currentTarget = y[S], e &= Ec(h, y[S], d, j, q);
        if (l) {
          h = f[n];
          h.O = h.m;
          for (S = 0; !q.Aa && S < y.length && h.O; S++) q.currentTarget = y[S], e &= Ec(h, y[S], d, n, q)
        }
      } else e = Fc(c, q)
    } finally {
      y && (y.length = 0)
    }
    return e
  }
  d = new sc(b, this);
  return e = Fc(c, d)
};

function Gc(a) {
  nc.call(this);
  this.xd = a;
  this.j = []
}
z(Gc, nc);
var Hc = [];

function Q(a, b, c, d, f) {
  ga(c) || (Hc[0] = c, c = Hc);
  for (var e = 0; e < c.length; e++) {
    var h = O(b, c[e], d || a, f || n, a.xd || a);
    a.j.push(h)
  }
  return a
}

function Ic(a, b, c, d, f, e) {
  if (ga(c))
    for (var h = 0; h < c.length; h++) Ic(a, b, c[h], d, f, e);
  else {
    a: {
      d = d || a;e = e || a.xd || a;f = !!f;
      if (b = Cc(b, c, f))
        for (c = 0; c < b.length; c++)
          if (!b[c].Ca && b[c].Ta == d && b[c].capture == f && b[c].Pa == e) {
            b = b[c];
            break a
          } b = m
    }
    b && (b = b.key, P(b), D(a.j, b))
  }
  return a
}
Gc.prototype.Sb = function() {
  C(this.j, P);
  this.j.length = 0
};
Gc.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};

function Jc() {
  nc.call(this)
}
z(Jc, nc);
s = Jc.prototype;
s.hd = j;
s.Bc = m;
s.Gc = function(a) {
  this.Bc = a
};
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Bc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a,
    c = N;
  if (b in c) {
    if (u(a)) a = new pc(a, this);
    else if (a instanceof pc) a.target = a.target || this;
    else {
      var d = a,
        a = new pc(b, this);
      qb(a, d)
    }
    var d = 1,
      f, c = c[b],
      b = j in c,
      e;
    if (b) {
      f = [];
      for (e = this; e; e = e.Bc) f.push(e);
      e = c[j];
      e.O = e.m;
      for (var h = f.length - 1; !a.Aa && 0 <= h && e.O; h--) a.currentTarget = f[h], d &= Ec(e, f[h], a.type, j, a) && a.Ub != n
    }
    if (n in c)
      if (e = c[n], e.O = e.m, b)
        for (h = 0; !a.Aa && h < f.length && e.O; h++) a.currentTarget = f[h], d &= Ec(e, f[h], a.type, n, a) && a.Ub != n;
      else
        for (f = this; !a.Aa && f && e.O; f =
          f.Bc) a.currentTarget = f, d &= Ec(e, f, a.type, n, a) && a.Ub != n;
    a = Boolean(d)
  } else a = j;
  return a
};

function Kc(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
Kc.prototype.contains = function(a) {
  return !this || !a ? n : a instanceof Kc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};

function Lc(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Lc.prototype.contains = function(a) {
  return a instanceof Lc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};

function R(a, b, c) {
  u(b) ? Mc(a, c, b) : ob(b, pa(Mc, a))
}

function Mc(a, b, c) {
  a.style[ya(c)] = b
}

function T(a, b) {
  var c = K(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function Nc(a, b) {
  return a.currentStyle ? a.currentStyle[b] : m
}

function Oc(a, b) {
  return T(a, b) || Nc(a, b) || a.style && a.style[b]
}

function Pc(a, b, c) {
  var d, f = F && (Na || Ua) && I("1.9");
  b instanceof J ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Qc(d, f);
  a.style.top = Qc(b, f)
}

function Rc(a) {
  var b = a.getBoundingClientRect();
  E && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}

function Sc(a) {
  if (E && !db(8)) return a.offsetParent;
  for (var b = K(a), c = Oc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
    if (c = Oc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
  return m
}

function Tc(a) {
  var b, c = K(a),
    d = Oc(a, "position"),
    f = F && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
    e = new J(0, 0),
    h;
  b = c ? K(c) : document;
  if (h = E)
    if (h = !db(9)) rb(b), h = n;
  h = h ? b.body : b.documentElement;
  if (a == h) return e;
  if (a.getBoundingClientRect) b = Rc(a), a = Db(rb(c)), e.x = b.left + a.x, e.y = b.top + a.y;
  else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), e.x = b.screenX - a.screenX, e.y = b.screenY - a.screenY;
  else {
    f = a;
    do {
      e.x += f.offsetLeft;
      e.y += f.offsetTop;
      f != a && (e.x += f.clientLeft || 0, e.y += f.clientTop || 0);
      if (G && "fixed" == Oc(f, "position")) {
        e.x += c.body.scrollLeft;
        e.y += c.body.scrollTop;
        break
      }
      f = f.offsetParent
    } while (f && f != a);
    if (Sa || G && "absolute" == d) e.y -= c.body.offsetTop;
    for (f = a;
      (f = Sc(f)) && f != c.body && f != h;)
      if (e.x -= f.scrollLeft, !Sa || "TR" != f.tagName) e.y -= f.scrollTop
  }
  return e
}

function Uc(a, b) {
  var c = Vc(a),
    d = Vc(b);
  return new J(c.x - d.x, c.y - d.y)
}

function Vc(a) {
  var b = new J;
  if (1 == a.nodeType) {
    if (a.getBoundingClientRect) {
      var c = Rc(a);
      b.x = c.left;
      b.y = c.top
    } else {
      var c = Db(rb(a)),
        d = Tc(a);
      b.x = d.x - c.x;
      b.y = d.y - c.y
    }
    if (F && !I(12)) {
      var f;
      E ? f = "-ms-transform" : G ? f = "-webkit-transform" : Sa ? f = "-o-transform" : F && (f = "-moz-transform");
      var e;
      f && (e = Oc(a, f));
      e || (e = Oc(a, "transform"));
      e ? (a = e.match(Wc), a = !a ? new J(0, 0) : new J(parseFloat(a[1]), parseFloat(a[2]))) : a = new J(0, 0);
      b = new J(b.x + a.x, b.y + a.y)
    }
  } else f = v(a.Ud), e = a, a.targetTouches ? e = a.targetTouches[0] : f && a.n.targetTouches &&
    (e = a.n.targetTouches[0]), b.x = e.clientX, b.y = e.clientY;
  return b
}

function Xc(a, b, c) {
  b instanceof nb ? (c = b.height, b = b.width) : c == i && g(Error("missing height argument"));
  a.style.width = Qc(b, j);
  a.style.height = Qc(c, j)
}

function Qc(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}

function Yc(a) {
  if ("none" != Oc(a, "display")) return Zc(a);
  var b = a.style,
    c = b.display,
    d = b.visibility,
    f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Zc(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}

function Zc(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    d = G && !b && !c;
  return (!ca(b) || d) && a.getBoundingClientRect ? (a = Rc(a), new nb(a.right - a.left, a.bottom - a.top)) : new nb(b, c)
}

function $c(a) {
  var b = Tc(a),
    a = Yc(a);
  return new Lc(b.x, b.y, a.width, a.height)
}

function U(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}

function V(a, b) {
  a.style.display = b ? "" : "none"
}

function ad(a) {
  return "rtl" == Oc(a, "direction")
}
var bd = F ? "MozUserSelect" : G ? "WebkitUserSelect" : m;

function cd(a, b) {
  if (/^\d+px?$/.test(b)) return parseInt(b, 10);
  var c = a.style.left,
    d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var f = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return f
}

function dd(a, b) {
  if (E) {
    var c = cd(a, Nc(a, b + "Left")),
      d = cd(a, Nc(a, b + "Right")),
      f = cd(a, Nc(a, b + "Top")),
      e = cd(a, Nc(a, b + "Bottom"));
    return new Kc(f, d, e, c)
  }
  c = T(a, b + "Left");
  d = T(a, b + "Right");
  f = T(a, b + "Top");
  e = T(a, b + "Bottom");
  return new Kc(parseFloat(f), parseFloat(d), parseFloat(e), parseFloat(c))
}
var ed = {
  thin: 2,
  medium: 4,
  thick: 6
};

function fd(a, b) {
  if ("none" == Nc(a, b + "Style")) return 0;
  var c = Nc(a, b + "Width");
  return c in ed ? ed[c] : cd(a, c)
}

function gd(a) {
  if (E) {
    var b = fd(a, "borderLeft"),
      c = fd(a, "borderRight"),
      d = fd(a, "borderTop"),
      a = fd(a, "borderBottom");
    return new Kc(d, c, a, b)
  }
  b = T(a, "borderLeftWidth");
  c = T(a, "borderRightWidth");
  d = T(a, "borderTopWidth");
  a = T(a, "borderBottomWidth");
  return new Kc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Wc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

function hd(a, b, c) {
  nc.call(this);
  this.target = a;
  this.handle = b || a;
  this.wc = c || new Lc(NaN, NaN, NaN, NaN);
  this.M = K(a);
  this.ka = new Gc(this);
  O(this.handle, ["touchstart", "mousedown"], this.le, n, this)
}
z(hd, Jc);
var id = E || F && I("1.9.3");
s = hd.prototype;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.Ld = 0;
s.Md = 0;
s.Ka = 0;
s.La = 0;
s.md = j;
s.xa = n;
s.zd = 0;
s.de = 0;
s.ae = n;
s.Hc = n;
s.Eb = r("ka");

function jd(a) {
  ca(a.ra) || (a.ra = ad(a.target));
  return a.ra
}
s.le = function(a) {
  var b = "mousedown" == a.type;
  if (this.md && !this.xa && (!b || uc(a))) {
    kd(a);
    if (0 == this.zd)
      if (this.dispatchEvent(new ld("start", this, a.clientX, a.clientY, a))) this.xa = j, a.preventDefault();
      else return;
    else a.preventDefault();
    var b = this.M,
      c = b.documentElement,
      d = !id;
    Q(this.ka, b, ["touchmove", "mousemove"], this.Zd, d);
    Q(this.ka, b, ["touchend", "mouseup"], this.Cb, d);
    id ? (c.setCapture(n), Q(this.ka, c, "losecapture", this.Cb)) : Q(this.ka, b ? b.parentWindow || b.defaultView : window, "blur", this.Cb);
    E && this.ae && Q(this.ka,
      b, "dragstart", qc);
    this.je && Q(this.ka, this.je, "scroll", this.ge, d);
    this.clientX = this.Ld = a.clientX;
    this.clientY = this.Md = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Hc ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == Oc(a, "position") && (c = K(a).documentElement), c ? (F ? (d = gd(c), b += d.left) : db(8) && (d = gd(c), b -= d.left), a = ad(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.Ka = a;
    this.La = this.target.offsetTop;
    this.Ac = Db(rb(this.M));
    this.de = qa()
  } else this.dispatchEvent("earlycancel")
};
s.Cb = function(a, b) {
  this.ka.Sb();
  id && this.M.releaseCapture();
  if (this.xa) {
    kd(a);
    this.xa = n;
    var c = md(this, this.Ka),
      d = nd(this, this.La);
    this.dispatchEvent(new ld("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  } else this.dispatchEvent("earlycancel");
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};

function kd(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.n.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.init(a.n.changedTouches[0], a.currentTarget)
}
s.Zd = function(a) {
  if (this.md) {
    kd(a);
    var b = (this.Hc && jd(this) ? -1 : 1) * (a.clientX - this.clientX),
      c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if (!this.xa) {
      var d = this.Ld - this.clientX,
        f = this.Md - this.clientY;
      if (d * d + f * f > this.zd)
        if (this.dispatchEvent(new ld("start", this, a.clientX, a.clientY, a))) this.xa = j;
        else {
          this.ld || this.Cb(a);
          return
        }
    }
    c = od(this, b, c);
    b = c.x;
    c = c.y;
    this.xa && this.dispatchEvent(new ld("beforedrag", this, a.clientX, a.clientY, a,
      b, c)) && (pd(this, a, b, c), a.preventDefault())
  }
};

function od(a, b, c) {
  var d = Db(rb(a.M)),
    b = b + (d.x - a.Ac.x),
    c = c + (d.y - a.Ac.y);
  a.Ac = d;
  a.Ka += b;
  a.La += c;
  b = md(a, a.Ka);
  a = nd(a, a.La);
  return new J(b, a)
}
s.ge = function(a) {
  var b = od(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  pd(this, a, b.x, b.y)
};

function pd(a, b, c, d) {
  a.kd(c, d);
  a.dispatchEvent(new ld("drag", a, b.clientX, b.clientY, b, c, d))
}

function md(a, b) {
  var c = a.wc,
    d = !isNaN(c.left) ? c.left : m,
    c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}

function nd(a, b) {
  var c = a.wc,
    d = !isNaN(c.top) ? c.top : m,
    c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
s.kd = function(a, b) {
  this.Hc && jd(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
  this.target.style.top = b + "px"
};

function ld(a, b, c, d, f, e, h, k) {
  pc.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.qe = f;
  this.left = ca(e) ? e : b.Ka;
  this.top = ca(h) ? h : b.La;
  this.ue = b;
  this.te = !!k
}
z(ld, pc);

function qd(a) {
  for (var b = 0, c = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent;
  return {
    top: c,
    left: b
  }
};

function rd() {
  this.Za = []
}
rd.prototype.addHandler = function(a, b) {
  this.Za[a] || (this.Za[a] = []);
  this.Za[a].push(b)
};
rd.prototype.Tb = function(a, b) {
  var c = this.Za[a];
  c && D(c, b)
};
rd.prototype.fireEvent = function(a, b, c) {
  var d = n;
  (a = this.Za[a]) && C(a, function(a) {
    a = a(b, c);
    ca(a) && !a && (d = j)
  });
  return d
};

function sd(a, b) {
  this.Y = {};
  this.j = [];
  var c = arguments.length;
  if (1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else if (a) {
    var f;
    if (a instanceof sd) td(a), f = a.j.concat(), d = W(a);
    else {
      var c = [],
        e = 0;
      for (f in a) c[e++] = f;
      f = c;
      c = [];
      e = 0;
      for (d in a) c[e++] = a[d];
      d = c
    }
    for (c = 0; c < f.length; c++) this.set(f[c], d[c])
  }
}
s = sd.prototype;
s.m = 0;
s.Ic = 0;

function W(a) {
  td(a);
  for (var b = [], c = 0; c < a.j.length; c++) b.push(a.Y[a.j[c]]);
  return b
}
s.clear = function() {
  this.Y = {};
  this.Ic = this.m = this.j.length = 0
};
s.remove = function(a) {
  return ud(this.Y, a) ? (delete this.Y[a], this.m--, this.Ic++, this.j.length > 2 * this.m && td(this), j) : n
};

function td(a) {
  if (a.m != a.j.length) {
    for (var b = 0, c = 0; b < a.j.length;) {
      var d = a.j[b];
      ud(a.Y, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if (a.m != a.j.length) {
    for (var f = {}, c = b = 0; b < a.j.length;) d = a.j[b], ud(f, d) || (a.j[c++] = d, f[d] = 1), b++;
    a.j.length = c
  }
}
s.get = function(a, b) {
  return ud(this.Y, a) ? this.Y[a] : b
};
s.set = function(a, b) {
  ud(this.Y, a) || (this.m++, this.j.push(a), this.Ic++);
  this.Y[a] = b
};

function ud(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};

function vd(a, b) {
  this.x = a;
  this.y = b
};

function wd(a) {
  this.points = a
}

function xd(a) {
  for (var b = 0, c = a.length - 1, d = 0; d < a.length; d++) b += (a[c].x + a[d].x) * (a[c].y - a[d].y), c = d;
  return b / 2
}

function yd(a, b) {
  for (var c, d = c = 0, f, e = a.length - 1, h = 0; h < a.length; h++) f = a[h].x * a[e].y - a[e].x * a[h].y, c += (a[h].x + a[e].x) * f, d += (a[h].y + a[e].y) * f, e = h;
  f = 6 * xd(a);
  c = new vd(Math.abs(c / f), Math.abs(d / f));
  d = [];
  for (f = 0; f < a.length; f++) {
    var e = a[f],
      k = (0 > xd(a) ? -1 : 1) * b,
      h = e.x - c.x,
      l = e.y - c.y,
      q = 0 < k ? 1 : 0 > k ? -1 : 0,
      k = Math.sqrt(Math.pow(k, 2) / (1 + Math.pow(h / l, 2)));
    d.push({
      x: e.x + Math.abs(h / l * k) * (0 < h ? 1 : 0 > h ? -1 : 0) * q,
      y: e.y + Math.abs(k) * (0 < l ? 1 : 0 > l ? -1 : 0) * q
    })
  }
  return d
};

function zd(a, b, c, d) {
  0 < c ? (this.x = a, this.width = c) : (this.x = a + c, this.width = -c);
  0 < d ? (this.y = b, this.height = d) : (this.y = b + d, this.height = -d)
};

function Ad(a, b, c, d) {
  this.type = a;
  this.geometry = b;
  c && (this.units = c);
  this.style = d ? d : {}
}

function Bd(a) {
  return "rect" == a.type ? a.geometry.width * a.geometry.height : "polygon" == a.type ? Math.abs(xd(a.geometry.points)) : 0
}

function Cd(a) {
  if ("rect" == a.type) return a;
  if ("polygon" == a.type) {
    for (var b = a.geometry.points, c = b[0].x, d = b[0].x, f = b[0].y, e = b[0].y, h = 1; h < b.length; h++) b[h].x > d && (d = b[h].x), b[h].x < c && (c = b[h].x), b[h].y > e && (e = b[h].y), b[h].y < f && (f = b[h].y);
    return new Ad("rect", new zd(c, f, d - c, e - f), n, a.style)
  }
}

function Dd(a, b) {
  var c;
  c = a.geometry.points;
  var d = 0 > xd(c) ? -1 : 1;
  if (4 > c.length) c = yd(c, d * b);
  else {
    for (var f = c.length - 1, e = 1, h = [], k = 0; k < c.length; k++) f = yd([c[f], c[k], c[e]], d * b), h.push(f[1]), f = k, e++, e > c.length - 1 && (e = 0);
    c = h
  }
  return new Ad("polygon", new wd(c), n, a.style)
}

function Ed(a, b) {
  if ("rect" == a.type) {
    var c = b(a.geometry);
    return new Ad("rect", c, n, a.style)
  }
  if ("polygon" == a.type) {
    var d = [];
    C(a.geometry.points, function(a) {
      d.push(b(a))
    });
    return new Ad("polygon", new wd(d), n, a.style)
  }
}

function Fd(a) {
  return JSON.stringify(a.geometry)
};

function Gd(a, b, c) {
  this.src = a;
  this.text = b;
  this.shapes = [c];
  this.context = document.URL
};

function Hd() {}

function Id(a, b) {
  a.g = new sd;
  a.Uc = [];
  a.bb = [];
  a.Ha = [];
  a.Fa = [];
  a.$b = [];
  a.ub = {
    Ra: n,
    Qa: n
  };
  a.Ga = new sd;
  a.bc = i;
  a.bd = b
}

function Jd(a, b) {
  var c = a.Ga.get(b);
  c || (c = {
    Ra: n,
    Qa: n
  }, a.Ga.set(b, c));
  return c
}

function Kd(a, b) {
  var c = a.Fb(b);
  if (!a.g.get(c)) {
    var d = a.zc(b),
      f = [],
      e = [];
    C(a.Uc, function(a) {
      d.addHandler(a.type, a.Pa)
    });
    C(a.bb, function(a) {
      if (a.onInitAnnotator) a.onInitAnnotator(d)
    });
    C(a.Fa, function(a) {
      a.src == c && (d.J(a), f.push(a))
    });
    C(a.$b, function(a) {
      a.src == c && (d.A(a), e.push(a))
    });
    C(f, function(b) {
      D(a.Fa, b)
    });
    C(e, function(b) {
      D(a.$b, b)
    });
    var h = a.Ga.get(c);
    h ? (h.Ra && d.N(), h.Qa && d.ea(), a.Ga.remove(c)) : (a.ub.Ra && d.N(), a.ub.Qa && d.ea());
    a.bc && d.ga(a.bc);
    a.g.set(c, d);
    D(a.Ha, b)
  }
}

function Ld(a) {
  var b, c;
  for (c = a.Ha.length; 0 < c; c--) {
    for (var d = b = a.Ha[c - 1], f = d.offsetTop, e = d.offsetLeft, h = d.offsetWidth, k = d.offsetHeight; d.offsetParent;) d = d.offsetParent, f += d.offsetTop, e += d.offsetLeft;
    f < window.pageYOffset + window.innerHeight && (e < window.pageXOffset + window.innerWidth && f + k > window.pageYOffset && e + h > window.pageXOffset) && Kd(a, b)
  }
}

function Md(a, b, c) {
  if (b) {
    var d = a.g.get(b);
    d ? c ? d.Da() : d.ea() : Jd(a, b).Qa = c
  } else C(W(a.g), function(a) {
    c ? a.Da() : a.ea()
  }), a.ub.Qa = !c, C(W(a.Ga), function(a) {
    a.Qa = !c
  })
}

function Nd(a, b, c) {
  if (b) {
    var d = a.g.get(b);
    d ? c ? d.Z() : d.N() : Jd(a, b).Ra = c
  } else C(W(a.g), function(a) {
    c ? a.Z() : a.N()
  }), a.ub.Ra = !c, C(W(a.Ga), function(a) {
    a.Ra = !c
  })
}
s = Hd.prototype;
s.ba = function(a, b) {
  var c = i,
    d = i;
  u(a) ? (c = a, d = b) : v(a) && (d = a);
  c ? (c = this.g.get(c)) && c.ba(d) : C(W(this.g), function(a) {
    a.ba(d)
  })
};
s.stopSelection = function(a) {
  a ? (a = this.g.get(a)) && a.stopSelection() : C(W(this.g), function(a) {
    a.stopSelection()
  })
};
s.J = function(a, b) {
  if (Od(this, a.src)) {
    var c = this.g.get(a.src);
    c ? c.J(a, b) : (this.Fa.push(a), b && D(this.Fa, b))
  }
};
s.addHandler = function(a, b) {
  C(W(this.g), function(c) {
    c.addHandler(a, b)
  });
  this.Uc.push({
    type: a,
    Pa: b
  })
};
s.zb = function(a) {
  this.bb.push(a);
  C(W(this.g), function(b) {
    if (a.onInitAnnotator) a.onInitAnnotator(b)
  })
};

function Od(a, b) {
  return ud(a.g.Y, b) ? j : Da(a.Ha, function(c) {
    return a.Fb(c) == b
  }) != m
}
s.destroy = function(a) {
  if (a) {
    var b = this.g.get(a);
    b && (b.destroy(), this.g.remove(a))
  } else C(W(this.g), function(a) {
    a.destroy()
  }), this.g.clear()
};
s.la = function(a) {
  if (Od(this, a) && (a = this.g.get(a))) return a.la().getName()
};
s.t = function(a) {
  if (a) {
    var b = this.g.get(a);
    return b ? b.t() : Aa(this.Fa, function(b) {
      return b.src == a
    })
  }
  var c = [];
  C(W(this.g), function(a) {
    Ga(c, a.t())
  });
  Ga(c, this.Fa);
  return c
};
s.ma = function(a) {
  if (Od(this, a) && (a = this.g.get(a))) return Ba(a.ma(), function(a) {
    return a.getName()
  })
};
s.ea = function(a) {
  Md(this, a, n)
};
s.N = function(a) {
  Nd(this, a, n)
};
s.o = function(a) {
  if (a) {
    if (Od(this, a.src)) {
      var b = this.g.get(a.src);
      b && b.o(a)
    }
  } else C(W(this.g), function(a) {
    a.o()
  })
};
s.init = function() {
  this.bd && Ga(this.Ha, this.bd());
  Ld(this);
  var a = this,
    b = O(window, "scroll", function() {
      0 < a.Ha.length ? Ld(a) : P(b)
    })
};
s.xc = function(a) {
  this.Wb(a) && Kd(this, a)
};
s.A = function(a) {
  if (Od(this, a.src)) {
    var b = this.g.get(a.src);
    b ? b.A(a) : this.$b.push(a)
  }
};
s.sb = function(a, b) {
  if (Od(this, a)) {
    var c = this.g.get(a);
    c && c.Jd(b)
  }
};
s.ga = function(a) {
  this.bc = a;
  C(W(this.g), function(b) {
    b.ga(a)
  })
};
s.Da = function(a) {
  Md(this, a, j)
};
s.Z = function(a) {
  Nd(this, a, j)
};

function Pd(a, b) {
  var c = rb().createElement("DIV");
  c.innerHTML = a(b || Qd, i, i);
  if (1 == c.childNodes.length) {
    var d = c.firstChild;
    if (1 == d.nodeType) return d
  }
  return c
}
var Qd = {};

function Rd(a, b) {
  a != m && this.append.apply(this, arguments)
}
s = Rd.prototype;
s.wa = "";
s.set = function(a) {
  this.wa = "" + a
};
s.append = function(a, b, c) {
  this.wa += a;
  if (b != m)
    for (var d = 1; d < arguments.length; d++) this.wa += arguments[d];
  return this
};
s.clear = function() {
  this.wa = ""
};
s.toString = r("wa");
/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function Sd() {}
var Td = {
    we: "<",
    ve: ">",
    oe: "&",
    xe: "\u00a0",
    ze: '"',
    pe: "'"
  },
  Ud = {
    a: 0,
    abbr: 0,
    acronym: 0,
    address: 0,
    applet: 16,
    area: 2,
    b: 0,
    base: 18,
    basefont: 18,
    bdo: 0,
    big: 0,
    blockquote: 0,
    body: 49,
    br: 2,
    button: 0,
    caption: 0,
    center: 0,
    cite: 0,
    code: 0,
    col: 2,
    colgroup: 1,
    dd: 1,
    del: 0,
    dfn: 0,
    dir: 0,
    div: 0,
    dl: 0,
    dt: 1,
    em: 0,
    fieldset: 0,
    font: 0,
    form: 0,
    frame: 18,
    frameset: 16,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    head: 49,
    hr: 2,
    html: 49,
    i: 0,
    iframe: 20,
    img: 2,
    input: 2,
    ins: 0,
    isindex: 18,
    kbd: 0,
    label: 0,
    legend: 0,
    li: 1,
    link: 18,
    map: 0,
    menu: 0,
    meta: 18,
    noframes: 20,
    noscript: 20,
    object: 16,
    ol: 0,
    optgroup: 0,
    option: 1,
    p: 1,
    param: 18,
    pre: 0,
    q: 0,
    s: 0,
    samp: 0,
    script: 20,
    select: 0,
    small: 0,
    span: 0,
    strike: 0,
    strong: 0,
    style: 20,
    sub: 0,
    sup: 0,
    table: 0,
    tbody: 1,
    td: 1,
    textarea: 8,
    tfoot: 1,
    th: 1,
    thead: 1,
    title: 24,
    tr: 1,
    tt: 0,
    u: 0,
    ul: 0,
    "var": 0
  },
  Vd = /&/g,
  Wd = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
  Xd = /</g,
  Yd = />/g,
  Zd = /\"/g,
  $d = /=/g,
  ae = /\0/g,
  be = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g,
  ce = /^#(\d+)$/,
  de = /^#x([0-9A-Fa-f]+)$/,
  ee = RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[^a-z\\s>]+)",
    "i"),
  fe = RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<[!]--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))", "i");
Sd.prototype.parse = function(a, b) {
  var c = m,
    d = n,
    f = [],
    e, h, k;
  a.Q = [];
  for (a.oa = n; b;) {
    var l = b.match(d ? ee : fe),
      b = b.substring(l[0].length);
    if (d)
      if (l[1]) {
        var q = l[1].toLowerCase();
        if (l[2]) {
          l = l[3];
          switch (l.charCodeAt(0)) {
            case 34:
            case 39:
              l = l.substring(1, l.length - 1)
          }
          l = l.replace(ae, "").replace(be, oa(this.be, this))
        } else l = q;
        f.push(q, l)
      } else l[4] && (h !== i && (k ? a.Kd && a.Kd(e, f) : a.nd && a.nd(e)), k && h & 12 && (c = c === m ? b.toLowerCase() : c.substring(c.length - b.length), d = c.indexOf("</" + e), 0 > d && (d = b.length), h & 4 ? a.gd && a.gd(b.substring(0,
        d)) : a.Id && a.Id(b.substring(0, d).replace(Wd, "&amp;$1").replace(Xd, "&lt;").replace(Yd, "&gt;")), b = b.substring(d)), e = h = k = i, f.length = 0, d = n);
    else if (l[1]) ge(a, l[0]);
    else if (l[3]) k = !l[2], d = j, e = l[3].toLowerCase(), h = Ud.hasOwnProperty(e) ? Ud[e] : i;
    else if (l[4]) ge(a, l[4]);
    else if (l[5]) switch (l[5]) {
      case "<":
        ge(a, "&lt;");
        break;
      case ">":
        ge(a, "&gt;");
        break;
      default:
        ge(a, "&amp;")
    }
  }
  for (c = a.Q.length; 0 <= --c;) a.ha.append("</", a.Q[c], ">");
  a.Q.length = 0
};
Sd.prototype.be = function(a) {
  a = a.toLowerCase();
  if (Td.hasOwnProperty(a)) return Td[a];
  var b = a.match(ce);
  return b ? String.fromCharCode(parseInt(b[1], 10)) : (b = a.match(de)) ? String.fromCharCode(parseInt(b[1], 16)) : ""
};

function he() {};
/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function ie(a, b, c) {
  this.ha = a;
  this.Q = [];
  this.oa = n;
  this.Od = b;
  this.Ob = c
}
z(ie, he);
var je = {
  "*::class": 9,
  "*::dir": 0,
  "*::id": 4,
  "*::lang": 0,
  "*::onclick": 2,
  "*::ondblclick": 2,
  "*::onkeydown": 2,
  "*::onkeypress": 2,
  "*::onkeyup": 2,
  "*::onload": 2,
  "*::onmousedown": 2,
  "*::onmousemove": 2,
  "*::onmouseout": 2,
  "*::onmouseover": 2,
  "*::onmouseup": 2,
  "*::style": 3,
  "*::title": 0,
  "*::accesskey": 0,
  "*::tabindex": 0,
  "*::onfocus": 2,
  "*::onblur": 2,
  "a::coords": 0,
  "a::href": 1,
  "a::hreflang": 0,
  "a::name": 7,
  "a::onblur": 2,
  "a::rel": 0,
  "a::rev": 0,
  "a::shape": 0,
  "a::target": 10,
  "a::type": 0,
  "area::accesskey": 0,
  "area::alt": 0,
  "area::coords": 0,
  "area::href": 1,
  "area::nohref": 0,
  "area::onfocus": 2,
  "area::shape": 0,
  "area::tabindex": 0,
  "area::target": 10,
  "bdo::dir": 0,
  "blockquote::cite": 1,
  "br::clear": 0,
  "button::accesskey": 0,
  "button::disabled": 0,
  "button::name": 8,
  "button::onblur": 2,
  "button::onfocus": 2,
  "button::tabindex": 0,
  "button::type": 0,
  "button::value": 0,
  "caption::align": 0,
  "col::align": 0,
  "col::char": 0,
  "col::charoff": 0,
  "col::span": 0,
  "col::valign": 0,
  "col::width": 0,
  "colgroup::align": 0,
  "colgroup::char": 0,
  "colgroup::charoff": 0,
  "colgroup::span": 0,
  "colgroup::valign": 0,
  "colgroup::width": 0,
  "del::cite": 1,
  "del::datetime": 0,
  "dir::compact": 0,
  "div::align": 0,
  "dl::compact": 0,
  "font::color": 0,
  "font::face": 0,
  "font::size": 0,
  "form::accept": 0,
  "form::action": 1,
  "form::autocomplete": 0,
  "form::enctype": 0,
  "form::method": 0,
  "form::name": 7,
  "form::onreset": 2,
  "form::onsubmit": 2,
  "form::target": 10,
  "h1::align": 0,
  "h2::align": 0,
  "h3::align": 0,
  "h4::align": 0,
  "h5::align": 0,
  "h6::align": 0,
  "hr::align": 0,
  "hr::noshade": 0,
  "hr::size": 0,
  "hr::width": 0,
  "img::align": 0,
  "img::alt": 0,
  "img::border": 0,
  "img::height": 0,
  "img::hspace": 0,
  "img::ismap": 0,
  "img::longdesc": 1,
  "img::name": 7,
  "img::src": 1,
  "img::usemap": 11,
  "img::vspace": 0,
  "img::width": 0,
  "input::accept": 0,
  "input::accesskey": 0,
  "input::autocomplete": 0,
  "input::align": 0,
  "input::alt": 0,
  "input::checked": 0,
  "input::disabled": 0,
  "input::ismap": 0,
  "input::maxlength": 0,
  "input::name": 8,
  "input::onblur": 2,
  "input::onchange": 2,
  "input::onfocus": 2,
  "input::onselect": 2,
  "input::readonly": 0,
  "input::size": 0,
  "input::src": 1,
  "input::tabindex": 0,
  "input::type": 0,
  "input::usemap": 11,
  "input::value": 0,
  "ins::cite": 1,
  "ins::datetime": 0,
  "label::accesskey": 0,
  "label::for": 5,
  "label::onblur": 2,
  "label::onfocus": 2,
  "legend::accesskey": 0,
  "legend::align": 0,
  "li::type": 0,
  "li::value": 0,
  "map::name": 7,
  "menu::compact": 0,
  "ol::compact": 0,
  "ol::start": 0,
  "ol::type": 0,
  "optgroup::disabled": 0,
  "optgroup::label": 0,
  "option::disabled": 0,
  "option::label": 0,
  "option::selected": 0,
  "option::value": 0,
  "p::align": 0,
  "pre::width": 0,
  "q::cite": 1,
  "select::disabled": 0,
  "select::multiple": 0,
  "select::name": 8,
  "select::onblur": 2,
  "select::onchange": 2,
  "select::onfocus": 2,
  "select::size": 0,
  "select::tabindex": 0,
  "table::align": 0,
  "table::bgcolor": 0,
  "table::border": 0,
  "table::cellpadding": 0,
  "table::cellspacing": 0,
  "table::frame": 0,
  "table::rules": 0,
  "table::summary": 0,
  "table::width": 0,
  "tbody::align": 0,
  "tbody::char": 0,
  "tbody::charoff": 0,
  "tbody::valign": 0,
  "td::abbr": 0,
  "td::align": 0,
  "td::axis": 0,
  "td::bgcolor": 0,
  "td::char": 0,
  "td::charoff": 0,
  "td::colspan": 0,
  "td::headers": 6,
  "td::height": 0,
  "td::nowrap": 0,
  "td::rowspan": 0,
  "td::scope": 0,
  "td::valign": 0,
  "td::width": 0,
  "textarea::accesskey": 0,
  "textarea::cols": 0,
  "textarea::disabled": 0,
  "textarea::name": 8,
  "textarea::onblur": 2,
  "textarea::onchange": 2,
  "textarea::onfocus": 2,
  "textarea::onselect": 2,
  "textarea::readonly": 0,
  "textarea::rows": 0,
  "textarea::tabindex": 0,
  "tfoot::align": 0,
  "tfoot::char": 0,
  "tfoot::charoff": 0,
  "tfoot::valign": 0,
  "th::abbr": 0,
  "th::align": 0,
  "th::axis": 0,
  "th::bgcolor": 0,
  "th::char": 0,
  "th::charoff": 0,
  "th::colspan": 0,
  "th::headers": 6,
  "th::height": 0,
  "th::nowrap": 0,
  "th::rowspan": 0,
  "th::scope": 0,
  "th::valign": 0,
  "th::width": 0,
  "thead::align": 0,
  "thead::char": 0,
  "thead::charoff": 0,
  "thead::valign": 0,
  "tr::align": 0,
  "tr::bgcolor": 0,
  "tr::char": 0,
  "tr::charoff": 0,
  "tr::valign": 0,
  "ul::compact": 0,
  "ul::type": 0
};
ie.prototype.Kd = function(a, b) {
  if (!this.oa && Ud.hasOwnProperty(a)) {
    var c = Ud[a];
    if (!(c & 32))
      if (c & 16) this.oa = !(c & 2);
      else {
        for (var d = b, f = 0; f < d.length; f += 2) {
          var e = d[f],
            h = d[f + 1],
            k = m,
            l;
          if ((l = a + "::" + e, je.hasOwnProperty(l)) || (l = "*::" + e, je.hasOwnProperty(l))) k = je[l];
          if (k !== m) switch (k) {
            case 0:
              break;
            case 2:
            case 3:
              h = m;
              break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              h = this.Ob ? this.Ob(h) : h;
              break;
            case 1:
              h = this.Od && this.Od(h);
              break;
            case 11:
              h && "#" === h.charAt(0) ? (h = this.Ob ? this.Ob(h) : h) && (h = "#" + h) : h = m;
              break;
            default:
              h =
                m
          } else h = m;
          d[f + 1] = h
        }
        if (b = d) {
          c & 2 || this.Q.push(a);
          this.ha.append("<", a);
          c = 0;
          for (d = b.length; c < d; c += 2) f = b[c], e = b[c + 1], e !== m && e !== i && this.ha.append(" ", f, '="', e.replace(Vd, "&amp;").replace(Xd, "&lt;").replace(Yd, "&gt;").replace(Zd, "&#34;").replace($d, "&#61;"), '"');
          this.ha.append(">")
        }
      }
  }
};
ie.prototype.nd = function(a) {
  if (this.oa) this.oa = n;
  else if (Ud.hasOwnProperty(a)) {
    var b = Ud[a];
    if (!(b & 50)) {
      if (b & 1)
        for (b = this.Q.length; 0 <= --b;) {
          var c = this.Q[b];
          if (c === a) break;
          if (!(Ud[c] & 1)) return
        } else
          for (b = this.Q.length; 0 <= --b && this.Q[b] !== a;);
      if (!(0 > b)) {
        for (var d = this.Q.length; --d > b;) c = this.Q[d], Ud[c] & 1 || this.ha.append("</", c, ">");
        this.Q.length = b;
        this.ha.append("</", a, ">")
      }
    }
  }
};

function ge(a, b) {
  a.oa || a.ha.append(b)
}
ie.prototype.Id = function(a) {
  this.oa || this.ha.append(a)
};
ie.prototype.gd = function(a) {
  this.oa || this.ha.append(a)
};

function ke(a, b, c, d, f) {
  if (!E && (!G || !I("525"))) return j;
  if (Na && f) return le(a);
  if (f && !d || !c && (17 == b || 18 == b) || E && d && b == a) return n;
  switch (a) {
    case 13:
      return !(E && db(9));
    case 27:
      return !G
  }
  return le(a)
}

function le(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || G && 0 == a) return j;
  switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return j;
    default:
      return n
  }
}

function me(a) {
  switch (a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
};

function ne(a, b) {
  nc.call(this);
  a && oe(this, a, b)
}
z(ne, Jc);
s = ne.prototype;
s.F = m;
s.Ib = m;
s.uc = m;
s.Jb = m;
s.qa = -1;
s.pa = -1;
s.mc = n;
var pe = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  },
  qe = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  },
  re = E || G && I("525"),
  se = Na && F;
s = ne.prototype;
s.Wd = function(a) {
  if (G && (17 == this.qa && !a.ctrlKey || 18 == this.qa && !a.altKey)) this.pa = this.qa = -1;
  re && !ke(a.keyCode, this.qa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.pa = F ? me(a.keyCode) : a.keyCode, se && (this.mc = a.altKey))
};
s.Yd = function(a) {
  this.pa = this.qa = -1;
  this.mc = a.altKey
};
s.handleEvent = function(a) {
  var b = a.n,
    c, d, f = b.altKey;
  E && "keypress" == a.type ? (c = this.pa, d = 13 != c && 27 != c ? b.keyCode : 0) : G && "keypress" == a.type ? (c = this.pa, d = 0 <= b.charCode && 63232 > b.charCode && le(c) ? b.charCode : 0) : Sa ? (c = this.pa, d = le(c) ? b.keyCode : 0) : (c = b.keyCode || this.pa, d = b.charCode || 0, se && (f = this.mc), Na && (63 == d && 224 == c) && (c = 191));
  var e = c,
    h = b.keyIdentifier;
  c ? 63232 <= c && c in pe ? e = pe[c] : 25 == c && a.shiftKey && (e = 9) : h && h in qe && (e = qe[h]);
  a = e == this.qa;
  this.qa = e;
  b = new te(e, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
s.d = r("F");

function oe(a, b, c) {
  a.Jb && a.detach();
  a.F = b;
  a.Ib = O(a.F, "keypress", a, c);
  a.uc = O(a.F, "keydown", a.Wd, c, a);
  a.Jb = O(a.F, "keyup", a.Yd, c, a)
}
s.detach = function() {
  this.Ib && (P(this.Ib), P(this.uc), P(this.Jb), this.Jb = this.uc = this.Ib = m);
  this.F = m;
  this.pa = this.qa = -1
};

function te(a, b, c, d) {
  d && this.init(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(te, sc);

function ue() {}
ea(ue);
ue.prototype.fe = 0;
ue.pb();

function ve(a) {
  nc.call(this);
  this.kb = a || rb();
  this.ra = we
}
z(ve, Jc);
ve.prototype.$d = ue.pb();
var we = m;

function xe(a, b) {
  switch (a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  g(Error("Invalid component state"))
}
s = ve.prototype;
s.Hb = m;
s.fa = n;
s.F = m;
s.ra = m;
s.za = m;
s.hb = m;
s.Ja = m;
s.ne = n;
s.d = r("F");
s.Eb = function() {
  return this.sc || (this.sc = new Gc(this))
};
s.Gc = function(a) {
  this.za && this.za != a && g(Error("Method not supported"));
  ve.K.Gc.call(this, a)
};
s.pd = r("kb");
s.jb = function(a) {
  this.fa && g(Error("Component already rendered"));
  if (a && this.gb(a)) {
    this.ne = j;
    if (!this.kb || this.kb.M != K(a)) this.kb = rb(a);
    this.jd(a);
    this.Ma()
  } else g(Error("Invalid element to decorate"))
};
s.gb = aa(j);
s.jd = function(a) {
  this.F = a
};
s.Ma = function() {
  function a(a) {
    !a.fa && a.d() && a.Ma()
  }
  this.fa = j;
  this.hb && C(this.hb, a, i)
};
s.Db = function() {
  function a(a) {
    a.fa && a.Db()
  }
  this.hb && C(this.hb, a, i);
  this.sc && this.sc.Sb();
  this.fa = n
};
s.nb = r("F");
s.Va = function(a) {
  this.fa && g(Error("Component already rendered"));
  this.ra = a
};
s.removeChild = function(a, b) {
  if (a) {
    var c = u(a) ? a : a.Hb || (a.Hb = ":" + (a.$d.fe++).toString(36)),
      d;
    this.Ja && c ? (d = this.Ja, d = (c in d ? d[c] : i) || m) : d = m;
    a = d;
    c && a && (d = this.Ja, c in d && delete d[c], D(this.hb, a), b && (a.Db(), a.F && zb(a.F)), c = a, c == m && g(Error("Unable to set parent component")), c.za = m, ve.K.Gc.call(c, m))
  }
  a || g(Error("Child is not in parent component"));
  return a
};

function ye() {}
var ze;
ea(ye);
s = ye.prototype;
s.nb = function(a) {
  return a
};
s.lb = function(a, b, c) {
  if (a = a.d ? a.d() : a)
    if (E && !I("7")) {
      var d = Ae(hb(a), b);
      d.push(b);
      pa(c ? ib : kb, a).apply(m, d)
    } else c ? ib(a, b) : kb(a, b)
};
s.gb = aa(j);
s.jb = function(a, b) {
  if (b.id) {
    var c = b.id;
    if (a.za && a.za.Ja) {
      var d = a.za.Ja,
        f = a.Hb;
      f in d && delete d[f];
      d = a.za.Ja;
      c in d && g(Error('The object already contains the key "' + c + '"'));
      d[c] = a
    }
    a.Hb = c
  }(c = this.nb(b)) && c.firstChild ? (c = c.firstChild.nextSibling ? Fa(c.childNodes) : c.firstChild, a.ib = c) : a.ib = m;
  var e = 0,
    h = this.ob(),
    k = this.ob(),
    l = n,
    q = n,
    c = n,
    d = hb(b);
  C(d, function(a) {
    if (!l && a == h) l = j, k == h && (q = j);
    else if (!q && a == k) q = j;
    else {
      var b = e;
      if (!this.Nd) {
        this.Bb || Be(this);
        var c = this.Bb,
          d = {},
          f;
        for (f in c) d[c[f]] = f;
        this.Nd = d
      }
      a =
        parseInt(this.Nd[a], 10);
      e = b | (isNaN(a) ? 0 : a)
    }
  }, this);
  a.r = e;
  l || (d.push(h), k == h && (q = j));
  q || d.push(k);
  (f = a.da) && d.push.apply(d, f);
  if (E && !I("7")) {
    var w = Ae(d);
    0 < w.length && (d.push.apply(d, w), c = j)
  }
  if (!l || !q || f || c) b.className = d.join(" ");
  a.isEnabled() || this.Wa(b, 1, j);
  a.r & 8 && this.Wa(b, 8, j);
  a.V & 16 && this.Wa(b, 16, !!(a.r & 16));
  a.V & 64 && this.Wa(b, 64, !!(a.r & 64));
  return b
};
s.Vb = function(a, b) {
  var c = !b,
    d = E || Sa ? a.getElementsByTagName("*") : m;
  if (bd) {
    if (c = c ? "none" : "", a.style[bd] = c, d)
      for (var f = 0, e; e = d[f]; f++) e.style[bd] = c
  } else if (E || Sa)
    if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)
      for (f = 0; e = d[f]; f++) e.setAttribute("unselectable", c)
};
s.Va = function(a, b) {
  this.lb(a, this.ob() + "-rtl", b)
};
s.Cd = function(a) {
  var b;
  return a.V & 32 && (b = a.Na()) ? Cb(b) : n
};
s.Fc = function(a, b) {
  var c;
  if (a.V & 32 && (c = a.Na())) {
    if (!b && a.r & 32) {
      try {
        c.blur()
      } catch (d) {}
      a.r & 32 && a.qd()
    }
    Cb(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.P = function(a, b, c) {
  var d = a.d();
  if (d) {
    var f;
    this.Bb || Be(this);
    (f = this.Bb[b]) && this.lb(a, f, c);
    this.Wa(d, b, c)
  }
};
s.Wa = function(a, b, c) {
  ze || (ze = {
    1: "disabled",
    8: "selected",
    16: "checked",
    64: "expanded"
  });
  (b = ze[b]) && a.setAttribute("aria-" + b, c)
};
s.sa = function(a, b) {
  var c = this.nb(a);
  if (c && (yb(c), b))
    if (u(b))
      if ("textContent" in c) c.textContent = b;
      else if (c.firstChild && 3 == c.firstChild.nodeType) {
    for (; c.lastChild != c.firstChild;) c.removeChild(c.lastChild);
    c.firstChild.data = b
  } else yb(c), c.appendChild(K(c).createTextNode(b));
  else {
    var d = function(a) {
      if (a) {
        var b = K(c);
        c.appendChild(u(a) ? b.createTextNode(a) : a)
      }
    };
    ga(b) ? C(b, d) : ha(b) && !("nodeType" in b) ? C(Fa(b), d) : d(b)
  }
};
s.Na = function(a) {
  return a.d()
};
s.ob = aa("goog-control");

function Ae(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  C([], function(d) {
    Ca(d, pa(Ea, a)) && (!b || Ea(d, b)) && c.push(d.join("_"))
  });
  return c
}

function Be(a) {
  var b = a.ob();
  a.Bb = {
    1: b + "-disabled",
    2: b + "-hover",
    4: b + "-active",
    8: b + "-selected",
    16: b + "-checked",
    32: b + "-focused",
    64: b + "-open"
  }
};
var Ce = {};

function De(a, b, c) {
  ve.call(this, c);
  if (!b) {
    for (var b = this.constructor, d; b;) {
      d = ja(b);
      if (d = Ce[d]) break;
      b = b.K ? b.K.constructor : m
    }
    b = d ? v(d.pb) ? d.pb() : new d : m
  }
  this.G = b;
  this.ib = a
}
z(De, ve);
s = De.prototype;
s.ib = m;
s.r = 0;
s.V = 39;
s.oc = 255;
s.me = 0;
s.Yb = j;
s.da = m;
s.tc = j;
s.lc = n;
s.ie = m;

function Ee(a) {
  a.fa && n != a.tc && Fe(a, n);
  a.tc = n
}
s.Na = function() {
  return this.G.Na(this)
};
s.lb = function(a, b) {
  b ? a && (this.da ? Ea(this.da, a) || this.da.push(a) : this.da = [a], this.G.lb(this, a, j)) : a && this.da && (D(this.da, a), 0 == this.da.length && (this.da = m), this.G.lb(this, a, n))
};
s.nb = function() {
  return this.G.nb(this.d())
};
s.gb = function(a) {
  return this.G.gb(a)
};
s.jd = function(a) {
  this.F = a = this.G.jb(this, a);
  var b = this.ie || i;
  b && a.setAttribute("role", b);
  this.lc || this.G.Vb(a, n);
  this.Yb = "none" != a.style.display
};
s.Ma = function() {
  De.K.Ma.call(this);
  var a = this.G;
  this.ra == m && (this.ra = ad(this.fa ? this.F : this.kb.M.body));
  this.ra && a.Va(this.d(), j);
  this.isEnabled() && a.Fc(this, this.Yb);
  if (this.V & -2 && (this.tc && Fe(this, j), this.V & 32 && (a = this.Na()))) {
    var b = this.vc || (this.vc = new ne);
    oe(b, a);
    Q(Q(Q(this.Eb(), b, "key", this.Xd), a, "focus", this.Vd), a, "blur", this.qd)
  }
};

function Fe(a, b) {
  var c = a.Eb(),
    d = a.d();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.vd), d, "mousedown", a.sd), d, "mouseup", a.wd), d, "mouseout", a.ud), a.Gb != da && Q(c, d, "contextmenu", a.Gb), E && Q(c, d, "dblclick", a.rd)) : (Ic(Ic(Ic(Ic(c, d, "mouseover", a.vd), d, "mousedown", a.sd), d, "mouseup", a.wd), d, "mouseout", a.ud), a.Gb != da && Ic(c, d, "contextmenu", a.Gb), E && Ic(c, d, "dblclick", a.rd))
}
s.Db = function() {
  De.K.Db.call(this);
  this.vc && this.vc.detach();
  this.Yb && this.isEnabled() && this.G.Fc(this, n)
};
s.sa = function(a) {
  this.G.sa(this.d(), a);
  this.ib = a
};
s.Va = function(a) {
  De.K.Va.call(this, a);
  var b = this.d();
  b && this.G.Va(b, a)
};
s.Vb = function(a) {
  this.lc = a;
  var b = this.d();
  b && this.G.Vb(b, a)
};
s.isEnabled = function() {
  return !(this.r & 1)
};

function Ge(a, b) {
  He(a, 2, b) && a.P(2, b)
}
s.setActive = function(a) {
  He(this, 4, a) && this.P(4, a)
};
s.P = function(a, b) {
  this.V & a && b != !!(this.r & a) && (this.G.P(this, a, b), this.r = b ? this.r | a : this.r & ~a)
};

function X(a, b) {
  return !!(a.oc & b) && !!(a.V & b)
}

function He(a, b, c) {
  return !!(a.V & b) && !!(a.r & b) != c && (!(a.me & b) || a.dispatchEvent(xe(b, c))) && !a.ld
}
s.vd = function(a) {
  (!a.relatedTarget || !Bb(this.d(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Ge(this, j)
};
s.ud = function(a) {
  if ((!a.relatedTarget || !Bb(this.d(), a.relatedTarget)) && this.dispatchEvent("leave")) X(this, 4) && this.setActive(n), X(this, 2) && Ge(this, n)
};
s.Gb = da;
s.sd = function(a) {
  this.isEnabled() && (X(this, 2) && Ge(this, j), uc(a) && (X(this, 4) && this.setActive(j), this.G.Cd(this) && this.Na().focus()));
  !this.lc && uc(a) && a.preventDefault()
};
s.wd = function(a) {
  this.isEnabled() && (X(this, 2) && Ge(this, j), this.r & 4 && (Ie(this, a) && X(this, 4)) && this.setActive(n))
};
s.rd = function(a) {
  this.isEnabled() && Ie(this, a)
};

function Ie(a, b) {
  if (X(a, 16)) {
    var c = !(a.r & 16);
    He(a, 16, c) && a.P(16, c)
  }
  X(a, 8) && He(a, 8, j) && a.P(8, j);
  X(a, 64) && (c = !(a.r & 64), He(a, 64, c) && a.P(64, c));
  c = new pc("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.Cc = b.Cc);
  return a.dispatchEvent(c)
}
s.Vd = function() {
  X(this, 32) && He(this, 32, j) && this.P(32, j)
};
s.qd = function() {
  X(this, 4) && this.setActive(n);
  X(this, 32) && He(this, 32, n) && this.P(32, n)
};
s.Xd = function(a) {
  return this.Yb && this.isEnabled() && 13 == a.keyCode && Ie(this, a) ? (a.preventDefault(), a.stopPropagation(), j) : n
};
v(De) || g(Error("Invalid component class " + De));
v(ye) || g(Error("Invalid renderer class " + ye));
var Je = ja(De);
Ce[Je] = ye;

function Ke() {
  return new De(m)
}
v(Ke) || g(Error("Invalid decorator function " + Ke));

function Le() {}
z(Le, ye);
ea(Le);
s = Le.prototype;
s.jb = function(a, b) {
  Ee(a);
  a.oc &= -256;
  a.fa && a.r & 32 && g(Error("Component already rendered"));
  a.r & 32 && a.P(32, n);
  a.V &= -33;
  Le.K.jb.call(this, a, b);
  a.sa(b.value);
  return b
};
s.gb = function(a) {
  return "TEXTAREA" == a.tagName
};
s.Va = da;
s.Cd = function(a) {
  return a.isEnabled()
};
s.Fc = da;
s.P = function(a, b, c) {
  Le.K.P.call(this, a, b, c);
  if ((a = a.d()) && 1 == b) a.disabled = c
};
s.Wa = da;
s.sa = function(a, b) {
  a && (a.value = b)
};
s.ob = aa("goog-textarea");

function Ne(a, b, c) {
  De.call(this, a, b || Le.pb(), c);
  Ee(this);
  this.Vb(j);
  a || (this.ib = "")
}
z(Ne, De);
var Oe = F || G;
s = Ne.prototype;
s.Sa = n;
s.na = 0;
s.ce = 0;
s.Fd = 0;
s.yd = n;
s.Nb = n;
s.Ec = n;
s.Dc = n;

function Pe(a) {
  return a.rb.top + a.rb.bottom + a.ed.top + a.ed.bottom
}

function Qe(a) {
  var b = a.Fd,
    c = a.d();
  b && (c && a.Nb) && (b -= Pe(a));
  return b
}

function Re(a) {
  var b = a.ce,
    c = a.d();
  b && (c && a.Nb) && (b -= Pe(a));
  return b
}
s.sa = function(a) {
  Ne.K.sa.call(this, a);
  this.d() && this.Oa()
};
s.Ma = function() {
  Ne.K.Ma.call(this);
  var a = this.d();
  R(a, {
    overflowY: "hidden",
    overflowX: "auto",
    boxSizing: "border-box",
    MsBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    MozBoxSizing: "border-box"
  });
  this.rb = dd(a, "padding");
  this.ed = gd(a);
  Q(Q(Q(Q(this.Eb(), a, "scroll", this.Oa), a, "focus", this.Oa), a, "keyup", this.Oa), a, "mouseup", this.ee);
  this.d() && this.Oa()
};

function Se(a) {
  if (!a.yd) {
    var b = a.d().cloneNode(n);
    R(b, {
      position: "absolute",
      height: "auto",
      top: "-9999px",
      margin: "0",
      padding: "1px",
      border: "1px solid #000",
      overflow: "hidden"
    });
    a.pd().M.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Ec = d > c;
    b.style.borderWidth = "10px";
    a.Dc = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.Nb = j);
    zb(b);
    a.yd = j
  }
  var b = a.d(),
    c = a.d().scrollHeight,
    f = a.d(),
    d = f.offsetHeight - f.clientHeight;
  if (!a.Ec) var e = a.rb,
    d = d - (e.top + e.bottom);
  a.Dc || (f = gd(f), d -= f.top + f.bottom);
  c += 0 < d ? d : 0;
  a.Nb ? c -= Pe(a) : (a.Ec || (d = a.rb, c += d.top + d.bottom), a.Dc || (a = gd(b), c += a.top + a.bottom));
  return c
}

function Te(a, b) {
  a.na != b && (a.na = b, a.d().style.height = b + "px")
}

function Ue(a) {
  a = a.d();
  a.style.height = "auto";
  var b = a.value.match(/\n/g) || [];
  a.rows = b.length + 1
}
s.Oa = function() {
  if (!this.Sa) {
    var a = n;
    this.Sa = j;
    var b = this.d(),
      c = this.na;
    if (b.scrollHeight) {
      var d = n,
        f = n,
        e = Se(this),
        h = b.offsetHeight,
        k = Qe(this),
        l = Re(this);
      k && e < k ? (Te(this, k), d = j) : l && e > l ? (Te(this, l), b.style.overflowY = "", f = j) : h != e ? Te(this, e) : this.na || (this.na = e);
      !d && (!f && Oe) && (a = j)
    } else Ue(this);
    this.Sa = n;
    a && (a = this.d(), this.Sa || (this.Sa = j, b = n, a.value || (a.value = " ", b = j), (f = a.scrollHeight) ? (e = Se(this), d = Qe(this), h = Re(this), !(d && e <= d) && !(h && e >= h) && (h = this.rb, a.style.paddingBottom = h.bottom + 1 + "px", Se(this) ==
      e && (a.style.paddingBottom = h.bottom + f + "px", a.scrollTop = 0, f = Se(this) - f, f >= d ? Te(this, f) : Te(this, d)), a.style.paddingBottom = h.bottom + "px")) : Ue(this), b && (a.value = ""), this.Sa = n));
    c != this.na && this.dispatchEvent("resize")
  }
};
s.ee = function() {
  var a = this.d(),
    b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.na && (this.na = this.Fd = b)
};
E && I(8);

function Ve(a) {
  return "object" === typeof a && a && 0 === a.re ? a.content : String(a).replace(We, Xe)
}
var Ye = {
  "\x00": "&#0;",
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#39;",
  "<": "&lt;",
  ">": "&gt;",
  "\t": "&#9;",
  "\n": "&#10;",
  "\x0B": "&#11;",
  "\f": "&#12;",
  "\r": "&#13;",
  " ": "&#32;",
  "-": "&#45;",
  "/": "&#47;",
  "=": "&#61;",
  "`": "&#96;",
  "\u0085": "&#133;",
  "\u00a0": "&#160;",
  "\u2028": "&#8232;",
  "\u2029": "&#8233;"
};

function Xe(a) {
  return Ye[a]
}
var We = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Ze() {
  return '<div class="annotorious-popup top-left" style="position:absolute;z-index:1"><div class="annotorious-popup-buttons"><a class="annotorious-popup-button annotorious-popup-button-edit" title="Edit" href="javascript:void(0);">EDIT</a><a class="annotorious-popup-button annotorious-popup-button-delete" title="Delete" href="javascript:void(0);">DELETE</a></div><span class="annotorious-popup-text"></span></div>'
}

function $e() {
  return '<div class="annotorious-editor" style="position:absolute;z-index:1"><form><textarea class="annotorious-editor-text" placeholder="Add a Comment..." tabindex="1"></textarea><div class="annotorious-editor-button-container"><a class="annotorious-editor-button annotorious-editor-button-cancel" href="javascript:void(0);" tabindex="3">Cancel</a><a class="annotorious-editor-button annotorious-editor-button-save" href="javascript:void(0);" tabindex="2">Save</a></div></form></div>'
};

function af(a) {
  function b() {
    var a = d.Ia;
    a.d() && a.Oa()
  }
  this.element = Pd($e);
  this.e = a;
  this.Rd = a.getItem();
  this.Ia = new Ne("");
  this.Pd = L(".annotorious-editor-button-cancel", this.element)[0];
  this.Tc = L(".annotorious-editor-button-save", this.element)[0];
  var c;
  c = this.Tc;
  gb ? c = c.parentElement : (c = c.parentNode, c = Ab(c) ? c : m);
  this.Qd = c;
  this.Ya = [];
  var d = this;
  O(this.Pd, "click", function(b) {
    b.preventDefault();
    a.stopSelection(d.$c);
    d.close()
  });
  O(this.Tc, "click", function(b) {
    b.preventDefault();
    b = d.od();
    a.J(b);
    a.stopSelection();
    d.$c ? a.fireEvent("onAnnotationUpdated", b, a.getItem()) : a.fireEvent("onAnnotationCreated", b, a.getItem());
    d.close()
  });
  V(this.element, n);
  a.element.appendChild(this.element);
  this.Ia.jb(L(".annotorious-editor-text", this.element)[0]);
  var f = this.element;
  c = document.createElement("div");
  R(c, "position", "absolute");
  R(c, "top", "0px");
  R(c, "right", "0px");
  R(c, "width", "5px");
  R(c, "height", "100%");
  R(c, "cursor", "e-resize");
  f.appendChild(c);
  var e = gd(f),
    e = $c(f).width - e.right - e.left;
  c = new hd(c);
  c.wc = new Lc(e, 0, 800, 0) || new Lc(NaN,
    NaN, NaN, NaN);
  c.kd = function(a) {
    R(f, "width", a + "px");
    b && b()
  }
}
s = af.prototype;
s.kc = function(a) {
  var b = wb("div", "annotorious-editor-field");
  u(a) ? b.innerHTML = a : v(a) ? this.Ya.push({
    D: b,
    qc: a
  }) : Ab(a) && b.appendChild(a);
  a = this.Qd;
  a.parentNode && a.parentNode.insertBefore(b, a)
};
s.open = function(a) {
  (this.vb = this.$c = a) && this.Ia.sa(String(a.text));
  V(this.element, j);
  this.Ia.d().focus();
  C(this.Ya, function(b) {
    var c = b.qc(a);
    u(c) ? b.D.innerHTML = c : Ab(c) && (yb(b.D), b.D.appendChild(c))
  });
  this.e.fireEvent("onEditorShown", a)
};
s.close = function() {
  V(this.element, n);
  this.Ia.sa("")
};
s.setPosition = function(a) {
  Pc(this.element, a.x, a.y)
};
s.od = function() {
  var a;
  a = this.Ia.d().value;
  var b = new Rd;
  (new Sd).parse(new ie(b, function(a) {
    return a
  }, i), a);
  a = b.toString();
  this.vb ? this.vb.text = a : this.vb = new Gd(this.Rd.src, a, this.e.la().getShape());
  return this.vb
};
af.prototype.addField = af.prototype.kc;
af.prototype.getAnnotation = af.prototype.od;

function bf(a, b, c) {
  var d = this;
  c || (c = "Click and Drag to Annotate");
  this.element = Pd(cf, {
    Mb: c
  });
  this.e = a;
  this.Xc = L(".annotorious-hint-msg", this.element)[0];
  this.Vc = L(".annotorious-hint-icon", this.element)[0];
  this.ic = function() {
    d.show()
  };
  this.hc = function() {
    df(d)
  };
  this.Zb();
  df(this);
  b.appendChild(this.element)
}
bf.prototype.Zb = function() {
  var a = this;
  this.Zc = O(this.Vc, "mouseover", function() {
    a.show();
    window.clearTimeout(a.ec)
  });
  this.Yc = O(this.Vc, "mouseout", function() {
    df(a)
  });
  this.e.addHandler("onMouseOverItem", this.ic);
  this.e.addHandler("onMouseOutOfItem", this.hc)
};
bf.prototype.wb = function() {
  P(this.Zc);
  P(this.Yc);
  this.e.Tb("onMouseOverItem", this.ic);
  this.e.Tb("onMouseOutOfItem", this.hc)
};
bf.prototype.show = function() {
  window.clearTimeout(this.ec);
  U(this.Xc, 0.8);
  var a = this;
  this.ec = window.setTimeout(function() {
    df(a)
  }, 3E3)
};

function df(a) {
  window.clearTimeout(a.ec);
  U(a.Xc, 0)
}
bf.prototype.destroy = function() {
  this.wb();
  delete this.Zc;
  delete this.Yc;
  delete this.ic;
  delete this.hc;
  zb(this.element)
};

function ef(a) {
  this.element = Pd(Ze);
  this.e = a;
  this.Sd = L(".annotorious-popup-text", this.element)[0];
  this.R = L(".annotorious-popup-buttons", this.element)[0];
  this.cc = n;
  this.Ya = [];
  var b = L(".annotorious-popup-button-edit", this.R)[0],
    c = L(".annotorious-popup-button-delete", this.R)[0],
    d = this;
  O(b, "mouseover", function() {
    ib(b, "annotorious-popup-button-active")
  });
  O(b, "mouseout", function() {
    kb(b, "annotorious-popup-button-active")
  });
  O(b, "click", function() {
    U(d.element, 0);
    R(d.element, "pointer-events", "none");
    a.pc(d.f)
  });
  O(c, "mouseover", function() {
    ib(c, "annotorious-popup-button-active")
  });
  O(c, "mouseout", function() {
    kb(c, "annotorious-popup-button-active")
  });
  O(c, "click", function() {
    a.fireEvent("beforeAnnotationRemoved", d.f) || (U(d.element, 0), R(d.element, "pointer-events", "none"), a.A(d.f), a.fireEvent("onAnnotationRemoved", d.f))
  });
  ff && (O(this.element, "mouseover", function() {
      window.clearTimeout(d.ac);
      0.9 > (d.R.style[ya("opacity")] || "") && U(d.R, 0.9);
      d.clearHideTimer()
    }), O(this.element, "mouseout", function() {
      U(d.R, 0);
      d.startHideTimer()
    }),
    a.addHandler("onMouseOutOfItem", function() {
      d.startHideTimer()
    }));
  U(this.R, 0);
  U(this.element, 0);
  R(this.element, "pointer-events", "none");
  a.element.appendChild(this.element)
}
s = ef.prototype;
s.kc = function(a) {
  var b = wb("div", "annotorious-popup-field");
  u(a) ? b.innerHTML = a : v(a) ? this.Ya.push({
    D: b,
    qc: a
  }) : Ab(a) && b.appendChild(a);
  this.element.appendChild(b)
};
s.startHideTimer = function() {
  this.cc = n;
  if (!this.cb) {
    var a = this;
    this.cb = window.setTimeout(function() {
      a.e.fireEvent("beforePopupHide", a);
      a.cc || (U(a.element, 0), R(a.element, "pointer-events", "none"), U(a.R, 0.9), delete a.cb)
    }, 150)
  }
};
s.clearHideTimer = function() {
  this.cc = j;
  this.cb && (window.clearTimeout(this.cb), delete this.cb)
};
s.show = function(a, b) {
  this.clearHideTimer();
  b && this.setPosition(b);
  a && this.setAnnotation(a);
  this.ac && window.clearTimeout(this.ac);
  U(this.R, 0.9);
  if (ff) {
    var c = this;
    this.ac = window.setTimeout(function() {
      U(c.R, 0)
    }, 1E3)
  }
  U(this.element, 0.9);
  R(this.element, "pointer-events", "auto");
  this.e.fireEvent("onPopupShown", this.f)
};
s.setPosition = function(a) {
  Pc(this.element, new J(a.x, a.y))
};
s.setAnnotation = function(a) {
  this.f = a;
  this.Sd.innerHTML = a.text ? a.text.replace(/\n/g, "<br/>") : '<span class="annotorious-popup-empty">No comment</span>';
  "editable" in a && a.editable == n ? V(this.R, n) : V(this.R, j);
  C(this.Ya, function(b) {
    var c = b.qc(a);
    u(c) ? b.D.innerHTML = c : Ab(c) && (yb(b.D), b.D.appendChild(c))
  })
};
ef.prototype.addField = ef.prototype.kc;

function gf() {}
s = gf.prototype;
s.J = function(a, b) {
  this.h.J(a, b)
};
s.addHandler = function(a, b) {
  this.w.addHandler(a, b)
};
s.fireEvent = function(a, b, c) {
  return this.w.fireEvent(a, b, c)
};
s.la = r("v");
s.o = function(a) {
  this.h.o(a)
};
s.A = function(a) {
  this.h.A(a)
};
s.Tb = function(a, b) {
  this.w.Tb(a, b)
};
s.stopSelection = function(a) {
  ff && V(this.c, n);
  this.eb && (this.eb(), delete this.eb);
  this.v.stopSelection();
  a && this.h.J(a)
};

function hf(a, b) {
  O(b, jf, function(c) {
    console.log("start selection event");
    console.log(c);
    c = kf(c, b);
    a.h.o(n);
    a.yb ? (V(a.c, j), a.v.startSelection(c.x, c.y)) : (c = a.h.mb(c.x, c.y), 0 < c.length && a.h.o(c[0]))
  })
};

function lf(a, b) {
  this.W = a;
  this.e = b;
  this.Ea = [];
  this.aa = [];
  this.ua = this.W.getContext("2d");
  this.ta = j;
  this.xb = n;
  var c = this;
  O(this.W, mf, function(a) {
    if (c.ta) {
      var b = nf(c, a.offsetX, a.offsetY);
      b ? (c.xb = c.xb && b == c.f, c.f ? c.f != b && (c.ta = n, c.e.popup.startHideTimer()) : (c.f = b, of (c), c.e.fireEvent("onMouseOverAnnotation", {
        C: c.f,
        mouseEvent: a
      }))) : !c.xb && c.f && (c.ta = n, c.e.popup.startHideTimer())
    } else c.Xa = a
  });
  O(this.W, jf, function() {
    c.f !== i && c.f != n && c.e.fireEvent("onAnnotationClicked", c.f)
  });
  b.addHandler("onMouseOutOfItem",
    function() {
      delete c.f;
      c.ta = j
    });
  b.addHandler("beforePopupHide", function() {
    if (!c.ta && c.Xa) {
      var a = c.f;
      c.f = nf(c, c.Xa.offsetX, c.Xa.offsetY);
      c.ta = j;
      a != c.f ? ( of (c), c.e.fireEvent("onMouseOutOfAnnotation", {
        C: a,
        mouseEvent: c.Xa
      }), c.e.fireEvent("onMouseOverAnnotation", {
        C: c.f,
        mouseEvent: c.Xa
      })) : c.f && c.e.popup.clearHideTimer()
    } else of(c)
  })
}
s = lf.prototype;
s.J = function(a, b) {
  b && (b == this.f && delete this.f, D(this.Ea, b), delete this.aa[Fd(b.shapes[0])]);
  this.Ea.push(a);
  var c = a.shapes[0];
  if ("pixel" != c.units) var d = this,
    c = Ed(c, function(a) {
      return d.e.ya(a)
    });
  this.aa[Fd(a.shapes[0])] = c; of (this)
};
s.A = function(a) {
  a == this.f && delete this.f;
  D(this.Ea, a);
  delete this.aa[Fd(a.shapes[0])]; of (this)
};
s.t = function() {
  return Fa(this.Ea)
};
s.o = function(a) {
  (this.f = a) ? this.xb = j: this.e.popup.startHideTimer(); of (this);
  this.ta = j
};

function nf(a, b, c) {
  a = a.mb(b, c);
  if (0 < a.length) return a[0]
}
s.mb = function(a, b) {
  var c = [],
    d = this;
  C(this.Ea, function(f) {
    var e;
    e = d.aa[Fd(f.shapes[0])];
    if ("rect" == e.type) e = a < e.geometry.x || b < e.geometry.y || a > e.geometry.x + e.geometry.width || b > e.geometry.y + e.geometry.height ? n : j;
    else if ("polygon" == e.type) {
      e = e.geometry.points;
      for (var h = n, k = e.length - 1, l = 0; l < e.length; l++) e[l].y > b != e[k].y > b && a < (e[k].x - e[l].x) * (b - e[l].y) / (e[k].y - e[l].y) + e[l].x && (h = !h), k = l;
      e = h
    } else e = n;
    e && c.push(f)
  });
  B.sort.call(c, function(a, b) {
    var c = d.aa[Fd(a.shapes[0])],
      k = d.aa[Fd(b.shapes[0])];
    return Bd(c) -
      Bd(k)
  } || Ia);
  return c
};

function pf(a, b, c) {
  var d = Da(a.e.ma(), function(a) {
    return a.getSupportedShapeType() == b.type
  });
  d ? d.drawShape(a.ua, b, c) : console.log("WARNING unsupported shape type: " + b.type)
}

function of (a) {
  a.ua.clearRect(0, 0, a.W.width, a.W.height);
  C(a.Ea, function(b) {
    b != a.f && pf(a, a.aa[Fd(b.shapes[0])])
  });
  if (a.f) {
    var b = a.aa[Fd(a.f.shapes[0])];
    pf(a, b, j);
    b = Cd(b).geometry;
    a.e.popup.show(a.f, new vd(b.x, b.y + b.height + 5))
  }
};
var qf = "ontouchstart" in window,
  ff = !qf,
  jf = qf ? "touchstart" : "mousedown",
  rf = qf ? "touchenter" : "mouseover",
  mf = qf ? "touchmove" : "mousemove",
  sf = qf ? "touchend" : "mouseup",
  tf = qf ? "touchleave" : "mouseout";

function kf(a, b) {
  var c = n;
  a.offsetX = a.offsetX ? a.offsetX : n;
  a.offsetY = a.offsetY ? a.offsetY : n;
  return c = (!a.offsetX || !a.offsetY) && a.n.changedTouches ? {
    x: a.n.changedTouches[0].clientX - qd(b).left,
    y: a.n.changedTouches[0].clientY - qd(b).top
  } : {
    x: a.offsetX,
    y: a.offsetY
  }
};

function uf() {}
s = uf.prototype;
s.init = function(a, b) {
  this.Pc = "#000000";
  this.Rc = "#ffffff";
  this.Jc = n;
  this.Lc = "#000000";
  this.Nc = "#fff000";
  this.Kc = n;
  this.Mc = this.Sc = this.Qc = 1;
  this.Oc = 1.2;
  this.W = b;
  this.e = a;
  this.ua = b.getContext("2d");
  this.ua.lineWidth = 1;
  this.dc = n
};
s.Zb = function() {
  var a = this,
    b = this.W;
  this.fc = O(this.W, mf, function(c) {
    console.log(c);
    c = kf(c, b);
    if (a.dc) {
      a.B = {
        x: c.x,
        y: c.y
      };
      a.ua.clearRect(0, 0, b.width, b.height);
      var c = a.B.x - a.L.x,
        d = a.B.y - a.L.y;
      a.drawShape(a.ua, {
        type: "rect",
        geometry: {
          x: 0 < c ? a.L.x : a.B.x,
          y: 0 < d ? a.L.y : a.B.y,
          width: Math.abs(c),
          height: Math.abs(d)
        },
        style: {}
      })
    }
  });
  this.gc = O(b, sf, function(c) {
    var d = kf(c, b),
      f = a.getShape(),
      c = c.n ? c.n : c;
    a.dc = n;
    f ? (a.wb(), a.e.fireEvent("onSelectionCompleted", {
        mouseEvent: c,
        shape: f,
        viewportBounds: a.getViewportBounds()
      })) :
      (a.e.fireEvent("onSelectionCanceled"), c = a.e.mb(d.x, d.y), 0 < c.length && a.e.o(c[0]))
  })
};
s.wb = function() {
  this.fc && (P(this.fc), delete this.fc);
  this.gc && (P(this.gc), delete this.gc)
};
s.getName = aa("rect_drag");
s.getSupportedShapeType = aa("rect");
s.ga = function(a) {
  a.hasOwnProperty("outline") && (this.Pc = a.outline);
  a.hasOwnProperty("stroke") && (this.Rc = a.stroke);
  a.hasOwnProperty("fill") && (this.Jc = a.fill);
  a.hasOwnProperty("hi_outline") && (this.Lc = a.hi_outline);
  a.hasOwnProperty("hi_stroke") && (this.Nc = a.hi_stroke);
  a.hasOwnProperty("hi_fill") && (this.Kc = a.hi_fill);
  a.hasOwnProperty("outline_width") && (this.Qc = a.outline_width);
  a.hasOwnProperty("stroke_width") && (this.Sc = a.stroke_width);
  a.hasOwnProperty("hi_outline_width") && (this.Mc = a.hi_outline_width);
  a.hasOwnProperty("hi_stroke_width") &&
    (this.Oc = a.hi_stroke_width)
};
s.startSelection = function(a, b) {
  var c = {
    x: a,
    y: b
  };
  this.dc = j;
  this.Zb(c);
  this.L = new vd(a, b);
  this.e.fireEvent("onSelectionStarted", {
    offsetX: a,
    offsetY: b
  });
  R(document.body, "-webkit-user-select", "none")
};
s.stopSelection = function() {
  this.wb();
  this.ua.clearRect(0, 0, this.W.width, this.W.height);
  R(document.body, "-webkit-user-select", "auto");
  delete this.B
};
s.getShape = function() {
  if (this.B && 3 < Math.abs(this.B.x - this.L.x) && 3 < Math.abs(this.B.y - this.L.y)) {
    var a = this.getViewportBounds(),
      a = this.e.Xb({
        x: a.left,
        y: a.top,
        width: a.right - a.left,
        height: a.bottom - a.top
      });
    return new Ad("rect", a)
  }
};
s.getViewportBounds = function() {
  var a, b;
  this.B.x > this.L.x ? (a = this.B.x, b = this.L.x) : (a = this.L.x, b = this.B.x);
  var c, d;
  this.B.y > this.L.y ? (c = this.L.y, d = this.B.y) : (c = this.B.y, d = this.L.y);
  return {
    top: c,
    right: a,
    bottom: d,
    left: b
  }
};
s.drawShape = function(a, b, c) {
  var d, f, e, h;
  b.style || (b.style = {});
  "rect" == b.type && (c ? (d = b.style.hi_fill || this.Kc, c = b.style.hi_stroke || this.Nc, f = b.style.hi_outline || this.Lc, e = b.style.hi_outline_width || this.Mc, h = b.style.hi_stroke_width || this.Oc) : (d = b.style.fill || this.Jc, c = b.style.stroke || this.Rc, f = b.style.outline || this.Pc, e = b.style.outline_width || this.Qc, h = b.style.stroke_width || this.Sc), b = b.geometry, f && (a.lineJoin = "round", a.lineWidth = e, a.strokeStyle = f, a.strokeRect(b.x + e / 2, b.y + e / 2, b.width - e, b.height - e)),
    c && (a.lineJoin = "miter", a.lineWidth = h, a.strokeStyle = c, a.strokeRect(b.x + e + h / 2, b.y + e + h / 2, b.width - 2 * e - h, b.height - 2 * e - h)), d && (a.lineJoin = "miter", a.lineWidth = h, a.fillStyle = d, a.fillRect(b.x + e + h / 2, b.y + e + h / 2, b.width - 2 * e - h, b.height - 2 * e - h)))
};

function vf(a) {
  return '<canvas class="annotorious-item annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:' + Ve(a.width) + "px; height:" + Ve(a.height) + 'px; z-index:0" width="' + Ve(a.width) + '" height="' + Ve(a.height) + '"></canvas>'
}

function cf(a) {
  return '<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">' + Ve(a.Mb) + '</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'
};

function wf(a, b) {
  function c(b, c) {
    R(d, "margin-" + b, c + "px");
    R(a, "margin-" + b, 0);
    R(a, "padding-" + b, 0)
  }
  this.$ = a;
  this.ad = {
    padding: a.style.padding,
    margin: a.style.margin
  };
  this.w = new rd;
  this.ia = [];
  this.yb = j;
  this.element = wb("div", "annotorious-annotationlayer");
  R(this.element, "position", "relative");
  R(this.element, "display", "inline-block");
  var d = this.element,
    f = dd(a, "margin"),
    e = dd(a, "padding");
  (0 != f.top || 0 != e.top) && c("top", f.top + e.top);
  (0 != f.right || 0 != e.right) && c("right", f.right + e.right);
  (0 != f.bottom || 0 != e.bottom) &&
  c("bottom", f.bottom + e.bottom);
  (0 != f.left || 0 != e.left) && c("left", f.left + e.left);
  (f = a.parentNode) && f.replaceChild(this.element, a);
  this.element.appendChild(a);
  f = $c(a);
  this.ja = Pd(vf, {
    width: f.width,
    height: f.height
  });
  ff && ib(this.ja, "annotorious-item-unfocus");
  this.element.appendChild(this.ja);
  this.c = Pd(vf, {
    width: f.width,
    height: f.height
  });
  ff && V(this.c, n);
  this.element.appendChild(this.c);
  this.popup = b ? b : new ef(this);
  f = new uf;
  f.init(this, this.c);
  this.ia.push(f);
  this.v = f;
  this.editor = new af(this);
  this.h = new lf(this.ja,
    this);
  this.$a = new bf(this, this.element);
  var h = this;
  ff && (O(this.element, rf, function(a) {
    a = a.relatedTarget;
    if (!a || !Bb(h.element, a)) h.w.fireEvent("onMouseOverItem"), mb(h.ja, "annotorious-item-unfocus", "annotorious-item-focus")
  }), O(this.element, tf, function(a) {
    a = a.relatedTarget;
    if (!a || !Bb(h.element, a)) h.w.fireEvent("onMouseOutOfItem"), mb(h.ja, "annotorious-item-focus", "annotorious-item-unfocus")
  }));
  hf(this, qf ? this.c : this.ja);
  this.w.addHandler("onSelectionCompleted", function(a) {
    var b = a.viewportBounds;
    h.editor.setPosition(new vd(b.left +
      h.$.offsetLeft, b.bottom + 4 + h.$.offsetTop));
    h.editor.open(n, a)
  });
  this.w.addHandler("onSelectionCanceled", function() {
    ff && V(h.c, n);
    h.v.stopSelection()
  })
}
z(wf, gf);
s = wf.prototype;
s.ba = p();
s.cd = function(a) {
  a.init(this, this.c);
  this.ia.push(a)
};
s.destroy = function() {
  var a = this.$;
  a.style.margin = this.ad.margin;
  a.style.padding = this.ad.padding;
  var b = this.element,
    c = b.parentNode;
  c && c.replaceChild(a, b)
};
s.pc = function(a) {
  this.h.A(a);
  var b = Da(this.ia, function(b) {
    return b.getSupportedShapeType() == a.shapes[0].type
  });
  if (b) {
    V(this.c, j);
    this.h.o(n);
    var c = this.c.getContext("2d"),
      d = a.shapes[0],
      f = this,
      d = "pixel" == d.units ? d : Ed(d, function(a) {
        return f.ya(a)
      });
    b.drawShape(c, d)
  }
  b = Cd(a.shapes[0]).geometry;
  b = "pixel" == a.shapes[0].units ? new vd(b.x, b.y + b.height) : this.ya(new vd(b.x, b.y + b.height));
  this.editor.setPosition(new vd(b.x + this.$.offsetLeft, b.y + 4 + this.$.offsetTop));
  this.editor.open(a)
};
s.ya = function(a) {
  var b = Yc(this.$);
  return a.width ? {
    x: a.x * b.width,
    y: a.y * b.height,
    width: a.width * b.width,
    height: a.height * b.height
  } : {
    x: a.x * b.width,
    y: a.y * b.height
  }
};
s.la = r("v");
s.t = function() {
  return this.h.t()
};
s.mb = function(a, b) {
  return Fa(this.h.mb(a, b))
};
s.ma = r("ia");
s.getItem = function() {
  return {
    src: xf(this.$),
    element: this.$
  }
};

function xf(a) {
  var b = a.getAttribute("data-original");
  return b ? b : a.src
}
s.ea = function() {
  V(this.ja, n)
};
s.N = function() {
  this.yb = n;
  this.$a && (this.$a.destroy(), delete this.$a)
};
s.Jd = function(a) {
  (this.v = Da(this.ia, function(b) {
    return b.getName() == a
  })) || console.log('WARNING: selector "' + a + '" not available')
};
s.ga = function(a) {
  C(this.ia, function(b) {
    b.ga(a)
  }); of (this.h)
};
s.Da = function() {
  V(this.ja, j)
};
s.Z = function() {
  this.yb = j;
  this.$a || (this.$a = new bf(this, this.element))
};
s.stopSelection = function(a) {
  ff && V(this.c, n);
  this.v.stopSelection();
  a && this.h.J(a)
};
s.Xb = function(a) {
  var b = Yc(this.$);
  return a.width ? {
    x: a.x / b.width,
    y: a.y / b.height,
    width: a.width / b.width,
    height: a.height / b.height
  } : {
    x: a.x / b.width,
    y: a.y / b.height
  }
};
wf.prototype.addSelector = wf.prototype.cd;
wf.prototype.fireEvent = wf.prototype.fireEvent;
wf.prototype.setCurrentSelector = wf.prototype.Jd;
wf.prototype.toItemCoordinates = wf.prototype.Xb;

function yf() {
  Id(this, function() {
    return L("img.annotatable", document)
  })
}
z(yf, Hd);
yf.prototype.Fb = function(a) {
  return xf(a)
};
yf.prototype.zc = function(a) {
  return new wf(a)
};
yf.prototype.Wb = function(a) {
  return Ab(a) ? "IMG" == a.tagName : n
};

function zf(a) {
  return '<div class="annotorious-opacity-fade" style="white-space:nowrap; position:absolute; pointer-events:none; top:80px; width:100%; text-align:center;"><div class="annotorious-ol-hint" style="width: 400px; margin:0px auto;">' + Ve(a.Mb) + "</dvi></div>"
};

function Af(a, b) {
  this.X = a;
  this.S = $c(b.element);
  this.k = b.popup;
  R(this.k.element, "z-index", 99E3);
  this.z = [];
  this.tb = new OpenLayers.Layer.Boxes("Annotorious");
  this.X.addLayer(this.tb);
  var c = this;
  this.X.events.register("move", this.X, function() {
    c.I && c.ab()
  });
  b.addHandler("beforePopupHide", function() {
    c.va == c.I ? c.k.clearHideTimer() : c.fb(c.va, c.I)
  })
}
s = Af.prototype;
s.destroy = function() {
  this.tb.destroy()
};
s.ab = function() {
  var a = this.I.Lb.div,
    b = $c(a),
    c = Uc(a, this.X.div),
    a = c.y,
    c = c.x,
    d = b.width,
    f = b.height,
    b = $c(this.k.element),
    a = {
      y: a + f + 5
    };
  c + b.width > this.S.width ? (mb(this.k.element, "top-left", "top-right"), a.x = c + d - b.width) : (mb(this.k.element, "top-right", "top-left"), a.x = c);
  0 > a.x && (a.x = 0);
  a.x + b.width > this.S.width && (a.x = this.S.width - b.width);
  a.y + b.height > this.S.height && (a.y = this.S.height - b.height);
  this.k.setPosition(a)
};
s.jc = function(a) {
  this.k.setAnnotation(a);
  this.ab();
  this.k.show()
};
s.fb = function(a, b) {
  a ? (Uc(a.Lb.div, this.X.div), ya("height"), R(a.qb, "border-color", "#fff000"), this.I = a, this.jc(a.C)) : delete this.I;
  b && R(b.qb, "border-color", "#fff")
};
s.J = function(a) {
  var b = a.shapes[0].geometry,
    b = new OpenLayers.Marker.Box(new OpenLayers.Bounds(b.x, b.y, b.x + b.width, b.y + b.height));
  ib(b.div, "annotorious-ol-boxmarker-outer");
  R(b.div, "border", m);
  var c = wb("div", "annotorious-ol-boxmarker-inner");
  Xc(c, "100%", "100%");
  b.div.appendChild(c);
  var d = {
      C: a,
      Lb: b,
      qb: c
    },
    f = this;
  O(c, "mouseover", function() {
    f.I || f.fb(d);
    f.va = d
  });
  O(c, "mouseout", function() {
    delete f.va;
    f.k.startHideTimer()
  });
  this.z.push(d);
  B.sort.call(this.z, function(a, b) {
      return Bd(b.C.shapes[0]) - Bd(a.C.shapes[0])
    } ||
    Ia);
  var e = 1E4;
  C(this.z, function(a) {
    R(a.Lb.div, "z-index", e);
    e++
  });
  this.tb.addMarker(b)
};
s.A = function(a) {
  var b = Da(this.z, function(b) {
    return b.C == a
  });
  b && (D(this.z, b), this.tb.removeMarker(b.Lb))
};
s.t = function() {
  return Ba(this.z, function(a) {
    return a.C
  })
};
s.o = function(a) {
  a || this.k.startHideTimer()
};

function Bf(a) {
  function b() {
    var a = parseInt(T(d.element, "width"), 10),
      b = parseInt(T(d.element, "height"), 10);
    Xc(d.c, a, b);
    d.c.width = a;
    d.c.height = b
  }
  this.X = a;
  this.element = a.div;
  var c = this.element.style[ya("position")] || "";
  "absolute" != c && "relative" != c && R(this.element, "position", "relative");
  this.w = new rd;
  this.U = Pd(zf, {
    Mb: "Click and Drag"
  });
  R(this.U, "z-index", 9998);
  U(this.U, 0);
  this.element.appendChild(this.U);
  this.popup = new ef(this);
  this.h = new Af(a, this);
  this.c = Pd(vf, {
    width: "0",
    height: "0"
  });
  V(this.c, n);
  R(this.c,
    "position", "absolute");
  R(this.c, "top", "0px");
  R(this.c, "z-index", 9999);
  this.element.appendChild(this.c);
  var d = this;
  b();
  this.v = new uf;
  this.v.init(this, this.c);
  this.eb = i;
  this.editor = new af(this);
  R(this.editor.element, "z-index", 1E4);
  window.addEventListener ? window.addEventListener("resize", b, n) : window.attachEvent && window.attachEvent("onresize", b);
  O(this.element, "mouseover", function(a) {
    a = a.relatedTarget;
    (!a || !Bb(d.element, a)) && d.w.fireEvent("onMouseOverItem")
  });
  O(this.element, "mouseout", function(a) {
    a = a.relatedTarget;
    (!a || !Bb(d.element, a)) && d.w.fireEvent("onMouseOutOfItem")
  });
  O(this.c, "mousedown", function(a) {
    var b = Vc(d.element);
    d.v.startSelection(a.clientX - b.x, a.clientY - b.y)
  });
  this.w.addHandler("onSelectionCompleted", function(a) {
    R(d.c, "pointer-events", "none");
    a = a.viewportBounds;
    d.editor.setPosition(new vd(a.left, a.bottom + 4));
    d.editor.open()
  });
  this.w.addHandler("onSelectionCanceled", function() {
    d.stopSelection()
  })
}
z(Bf, gf);
s = Bf.prototype;
s.Z = p();
s.N = p();
s.ba = function(a) {
  R(this.c, "pointer-events", "auto");
  var b = this;
  V(this.c, j);
  U(this.U, 0.8);
  window.setTimeout(function() {
    U(b.U, 0)
  }, 2E3);
  a && (this.eb = a)
};
s.destroy = function() {
  this.h.destroy();
  zb(this.U);
  zb(this.c)
};
s.cd = p();
s.pc = function(a) {
  this.h.A(a);
  var b = this.v,
    c = this;
  if (b) {
    V(this.c, j);
    this.h.o(i);
    var d = this.c.getContext("2d"),
      f = Ed(a.shapes[0], function(a) {
        return c.ya(a)
      });
    console.log(f);
    b.drawShape(d, f);
    b = Cd(f).geometry;
    this.editor.setPosition(new vd(b.x, b.y + b.height));
    this.editor.open(a)
  }
};
s.ya = function(a) {
  var b = this.X.getViewPortPxFromLonLat(new OpenLayers.LonLat(a.x, a.y));
  return (a = a.width ? this.X.getViewPortPxFromLonLat(new OpenLayers.LonLat(a.x + a.width, a.y + a.height)) : n) ? {
    x: b.x,
    y: a.y,
    width: a.x - b.x + 2,
    height: b.y - a.y + 2
  } : {
    x: b.x,
    y: b.y
  }
};
s.t = function() {
  return this.h.t()
};
s.ma = p();
s.getItem = function() {
  return {
    src: "map://openlayers/something"
  }
};
s.sb = p();
s.Xb = function(a) {
  var b = this.X.getLonLatFromPixel(new OpenLayers.Pixel(a.x, a.y));
  return (a = a.width ? new OpenLayers.Pixel(a.x + a.width - 2, a.y + a.height - 2) : n) ? (a = this.X.getLonLatFromPixel(a), b = {
    x: b.lon,
    y: a.lat,
    width: a.lon - b.lon,
    height: b.lat - a.lat
  }, console.log(b), b) : {
    x: b.lon,
    y: b.lat
  }
};

function Cf() {
  Id(this)
}
z(Cf, Hd);
Cf.prototype.Fb = aa("map://openlayers/something");
Cf.prototype.zc = function(a) {
  return new Bf(a)
};
Cf.prototype.Wb = function(a) {
  return a instanceof OpenLayers.Map
};

function Df(a, b) {
  this.T = a;
  this.S = $c(a.element);
  this.k = b.popup;
  R(this.k.element, "z-index", 99E3);
  this.z = [];
  var c = this;
  this.T.addHandler("animation", function() {
    c.I && c.ab()
  });
  b.addHandler("beforePopupHide", function() {
    c.va == c.I ? c.k.clearHideTimer() : c.fb(c.va, c.I)
  })
}
s = Df.prototype;
s.ab = function() {
  var a = this.T.element,
    b = this.I.Rb,
    c = $c(b),
    b = Uc(b, a),
    a = b.y,
    b = b.x,
    d = c.width,
    f = c.height,
    c = $c(this.k.element),
    a = {
      x: b,
      y: a + f + 12
    };
  mb(this.k.element, "top-right", "top-left");
  this.T.isFullPage() || (b + c.width > this.S.width && (mb(this.k.element, "top-left", "top-right"), a.x = b + d - c.width), 0 > a.x && (a.x = 0), a.x + c.width > this.S.width && (a.x = this.S.width - c.width), a.y + c.height > this.S.height && (a.y = this.S.height - c.height));
  this.k.setPosition(a)
};
s.jc = function(a) {
  this.k.setAnnotation(a);
  this.ab();
  this.k.show()
};
s.fb = function(a, b) {
  a ? (R(a.qb, "border-color", "#fff000"), this.I = a, this.jc(a.C)) : delete this.I;
  b && R(b.qb, "border-color", "#fff")
};
s.J = function(a) {
  var b = a.shapes[0].geometry,
    c = wb("div", "annotorious-ol-boxmarker-outer"),
    d = wb("div", "annotorious-ol-boxmarker-inner");
  Xc(d, "100%", "100%");
  c.appendChild(d);
  var b = new OpenSeadragon.Rect(b.x, b.y, b.width, b.height),
    f = {
      C: a,
      Rb: c,
      qb: d
    },
    e = this;
  O(d, "mouseover", function() {
    e.I || e.fb(f);
    e.va = f
  });
  O(d, "mouseout", function() {
    delete e.va;
    e.k.startHideTimer()
  });
  this.z.push(f);
  B.sort.call(this.z, function(a, b) {
    return Bd(b.C.shapes[0]) - Bd(a.C.shapes[0])
  } || Ia);
  var h = 1;
  C(this.z, function(a) {
    R(a.Rb, "z-index",
      h);
    h++
  });
  this.T.drawer.addOverlay(c, b)
};
s.A = function(a) {
  var b = Da(this.z, function(b) {
    return b.C == a
  });
  b && (D(this.z, b), this.T.drawer.removeOverlay(b.Rb))
};
s.t = function() {
  return Ba(this.z, function(a) {
    console.log(a);
    return a.C
  })
};
s.o = p();
s.destroy = function() {
  var a = this;
  C(this.z, function(b) {
    a.T.removeOverlay(b.Rb)
  });
  this.z = []
};

function Ef(a) {
  this.element = a.element;
  var b = document;
  b.querySelectorAll && b.querySelector ? b = b.querySelector(".openseadragon-container") : (b = document, b = (b.querySelectorAll && b.querySelector ? b.querySelectorAll(".openseadragon-container") : b.getElementsByClassName ? b.getElementsByClassName("openseadragon-container") : tb())[0]);
  R(b || m, "z-index", 0);
  this.T = a;
  this.w = new rd;
  this.ia = [];
  this.yb = j;
  this.U = Pd(zf, {
    Mb: "Click and Drag"
  });
  U(this.U, 0);
  this.element.appendChild(this.U);
  this.popup = new ef(this);
  this.h = new Df(a,
    this);
  this.c = Pd(vf, {
    width: "0",
    height: "0"
  });
  V(this.c, n);
  this.element.appendChild(this.c);
  var c = this,
    a = parseInt(T(c.element, "width"), 10),
    b = parseInt(T(c.element, "height"), 10);
  Xc(c.c, a, b);
  c.c.width = a;
  c.c.height = b;
  a = new uf;
  a.init(this, this.c);
  this.ia.push(a);
  this.v = a;
  this.editor = new af(this);
  hf(this, this.c);
  this.w.addHandler("onSelectionCompleted", function(a) {
    a = a.viewportBounds;
    c.editor.setPosition(new vd(a.left, a.bottom + 4));
    c.editor.open()
  });
  this.w.addHandler("onSelectionCanceled", function() {
    c.stopSelection()
  })
}
z(Ef, gf);
s = Ef.prototype;
s.Z = p();
s.N = p();
s.destroy = function() {
  this.h.destroy();
  delete this.h
};
s.ba = function(a) {
  R(this.c, "pointer-events", "auto");
  var b = this;
  V(this.c, j);
  U(this.U, 0.8);
  window.setTimeout(function() {
    U(b.U, 0)
  }, 2E3);
  a && (this.eb = a)
};
s.pc = function(a) {
  this.h.A(a);
  var b = this.v,
    c = this;
  if (b) {
    V(this.c, j);
    this.h.o(i);
    var d = this.c.getContext("2d"),
      f = Ed(a.shapes[0], function(a) {
        return c.ya(a)
      });
    b.drawShape(d, f);
    b = Cd(f).geometry;
    this.editor.setPosition(new vd(b.x, b.y + b.height + 4));
    this.editor.open(a)
  }
};
s.ya = function(a) {
  var b = qd(this.element);
  b.top += window.pageYOffset;
  b.left += window.pageXOffset;
  var c = new OpenSeadragon.Point(a.x, a.y),
    a = a.width ? new OpenSeadragon.Point(a.x + a.width, a.y + a.height) : n,
    c = this.T.viewport.viewportToWindowCoordinates(c);
  return a ? (a = this.T.viewport.viewportToWindowCoordinates(a), {
    x: c.x - b.left,
    y: c.y - b.top,
    width: a.x - c.x + 2,
    height: a.y - c.y + 2
  }) : c
};
s.t = function() {
  return this.h.t()
};
s.ma = p();
s.getItem = function() {
  return {
    src: "dzi://openseadragon/something"
  }
};
s.sb = p();
s.la = r("v");
s.Xb = function(a) {
  var b = qd(this.element);
  b.top += window.pageYOffset;
  b.left += window.pageXOffset;
  var c = new OpenSeadragon.Point(a.x + b.left, a.y + b.top),
    a = a.width ? new OpenSeadragon.Point(a.x + b.left + a.width - 2, a.y + b.top + a.height - 2) : n,
    c = this.T.viewport.windowToViewportCoordinates(c);
  return a ? (a = this.T.viewport.windowToViewportCoordinates(a), {
    x: c.x,
    y: c.y,
    width: a.x - c.x,
    height: a.y - c.y
  }) : c
};

function Ff() {
  Id(this)
}
z(Ff, Hd);
Ff.prototype.Fb = aa("dzi://openseadragon/something");
Ff.prototype.zc = function(a) {
  return new Ef(a)
};
Ff.prototype.Wb = function(a) {
  return !a.id || 0 != a.id.indexOf("openseadragon") || !a.hasOwnProperty("drawer") ? n : j
};

function Y() {
  function a() {
    Gf(b)
  }
  this.Wc = n;
  this.l = [new yf];
  window.OpenLayers && this.l.push(new Cf);
  window.OpenSeadragon && this.l.push(new Ff);
  this.bb = [];
  var b = this;
  window.addEventListener ? window.addEventListener("load", a, n) : window.attachEvent && window.attachEvent("onload", a)
}

function Gf(a) {
  a.Wc || (C(a.l, function(a) {
    a.init()
  }), C(a.bb, function(b) {
    b.initPlugin && b.initPlugin(a);
    C(a.l, function(a) {
      a.zb(b)
    })
  }), a.Wc = j)
}

function Z(a, b) {
  return Da(a.l, function(a) {
    return Od(a, b)
  })
}
s = Y.prototype;
s.ba = function(a, b) {
  var c = i,
    d = i;
  u(a) ? (c = a, d = b) : v(a) && (d = a);
  if (c) {
    var f = Z(this, c);
    f && f.ba(c, d)
  } else C(this.l, function(a) {
    a.ba(d)
  })
};
s.J = function(a, b) {
  var c;
  c = a.src;
  if (!(0 < c.indexOf("://"))) {
    var d = document.createElement("a");
    d.href = c;
    c = d.protocol + "//" + d.host + d.pathname
  }
  a.src = c;
  (c = Z(this, a.src)) && c.J(a, b)
};
s.addHandler = function(a, b) {
  C(this.l, function(c) {
    c.addHandler(a, b)
  })
};
s.zb = function(a, b) {
  try {
    var c = new window.annotorious.plugin[a](b);
    "complete" == document.readyState ? (c.initPlugin && c.initPlugin(this), C(this.l, function(a) {
      a.zb(c)
    })) : this.bb.push(c)
  } catch (d) {
    console.log("Could not load plugin: " + a)
  }
};
s.destroy = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.destroy(a)
  } else C(this.l, function(a) {
    a.destroy()
  })
};
s.la = function(a) {
  var b = Z(this, a);
  if (b) return b.la(a)
};
s.t = function(a) {
  if (a) {
    var b = Z(this, a);
    return b ? b.t(a) : []
  }
  var c = [];
  C(this.l, function(a) {
    Ga(c, a.t())
  });
  return c
};
s.ma = function(a) {
  var b = Z(this, a);
  return b ? b.ma(a) : []
};
s.ea = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.ea(a)
  } else C(this.l, function(a) {
    a.ea()
  })
};
s.N = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.N(a)
  } else C(this.l, function(a) {
    a.N()
  })
};
s.stopSelection = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.stopSelection(a)
  } else C(this.l, function(a) {
    a.stopSelection()
  })
};
s.o = function(a) {
  if (a) {
    var b = Z(this, a.src);
    b && b.o(a)
  } else C(this.l, function(a) {
    a.o()
  })
};
s.xc = function(a) {
  Gf(this);
  var b = Da(this.l, function(b) {
    return b.Wb(a)
  });
  b ? b.xc(a) : g("Error: Annotorious does not support this media type in the current version or build configuration.")
};
s.Sb = function(a) {
  var b = this;
  C(this.t(a), function(a) {
    b.A(a)
  })
};
s.A = function(a) {
  var b = Z(this, a.src);
  b && b.A(a)
};
s.reset = function() {
  C(this.l, function(a) {
    a.destroy();
    a.init()
  })
};
s.sb = function(a, b) {
  var c = Z(this, a);
  c && c.sb(a, b)
};
s.ga = function(a) {
  C(this.l, function(b) {
    b.ga(a)
  })
};
s.ke = function(a) {
  a ? this.Z(i) : this.N(i)
};
s.Da = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.Da(a)
  } else C(this.l, function(a) {
    a.Da()
  })
};
s.Z = function(a) {
  if (a) {
    var b = Z(this, a);
    b && b.Z(a)
  } else C(this.l, function(a) {
    a.Z()
  })
};
window.anno = new Y;
Y.prototype.activateSelector = Y.prototype.ba;
Y.prototype.addAnnotation = Y.prototype.J;
Y.prototype.addHandler = Y.prototype.addHandler;
Y.prototype.addPlugin = Y.prototype.zb;
Y.prototype.destroy = Y.prototype.destroy;
Y.prototype.getActiveSelector = Y.prototype.la;
Y.prototype.getAnnotations = Y.prototype.t;
Y.prototype.getAvailableSelectors = Y.prototype.ma;
Y.prototype.hideAnnotations = Y.prototype.ea;
Y.prototype.hideSelectionWidget = Y.prototype.N;
Y.prototype.highlightAnnotation = Y.prototype.o;
Y.prototype.makeAnnotatable = Y.prototype.xc;
Y.prototype.removeAll = Y.prototype.Sb;
Y.prototype.removeAnnotation = Y.prototype.A;
Y.prototype.reset = Y.prototype.reset;
Y.prototype.setActiveSelector = Y.prototype.sb;
Y.prototype.setProperties = Y.prototype.ga;
Y.prototype.showAnnotations = Y.prototype.Da;
Y.prototype.showSelectionWidget = Y.prototype.Z;
window.annotorious || (window.annotorious = {});
window.annotorious.plugin || (window.annotorious.plugin = {});
window.annotorious.geometry || (window.annotorious.geometry = {}, window.annotorious.geometry.expand = Dd, window.annotorious.geometry.getBoundingRect = Cd);
Y.prototype.setSelectionEnabled = Y.prototype.ke;
