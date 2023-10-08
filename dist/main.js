(() => {
  "use strict";
  const t = (t) => {
      document.getElementById(`${t}-modal`).style.display = "block";
    },
    e = (e) => {
      if (document.getElementById(`${e}-modal`)) return void t(e);
      const n = st("div", { id: `${e}-modal`, classList: "popUp" }),
        r = st("form", { id: "form" }),
        a = st("span", {
          id: `close-${e}-modal`,
          classList: "close",
          textContent: "✕",
        });
      if (
        (a.addEventListener("click", () => (n.style.display = "none")),
        "list" === e)
      ) {
        const t = st("div", { id: "list-inputs" }),
          e = st("h3", { textContent: "New List" }),
          n = st("label", {
            for: "title-input",
            classList: "bold",
            textContent: "Title: ",
          }),
          i = st("input", { type: "text", id: "title-input", name: "title" }),
          o = st("label", {
            for: "description-input",
            classList: "bold",
            textContent: "Description: ",
          }),
          s = st("input", {
            type: "text",
            id: "description-input",
            name: "description",
          }),
          u = st("label", {
            for: "duedate-input",
            classList: "bold",
            textContent: "Due Date: ",
          }),
          l = st("input", {
            type: "date",
            id: "duedate-input",
            name: "duedate",
          });
        t.append(e, n, i, o, s, u, l);
        const d = st("div", { id: "priority-inputs" }),
          c = st("label", { classList: "bold", textContent: "Priority: " }),
          m = st("input", {
            type: "radio",
            id: "priority-low-input",
            name: "priority",
            value: "low priority",
          }),
          p = st("label", { for: "priority-low-input", textContent: "Low" }),
          h = st("input", {
            type: "radio",
            id: "priority-medium-input",
            name: "priority",
            value: "medium priority",
          }),
          g = st("label", {
            for: "priority-medium-input",
            textContent: "Medium",
          }),
          f = st("input", {
            type: "radio",
            id: "priority-high-input",
            name: "priority",
            value: "high priority",
          }),
          v = st("label", { for: "priority-high-input", textContent: "High" }),
          y = st("label", { for: "project-select", textContent: "Project: " }),
          b = st("select", { id: "project-select" });
        K().forEach((t) => {
          const e = st("option", {
            textContent: t.projectName,
            value: t.projectId,
          });
          b.append(e);
        }),
          d.append(c, m, p, h, g, f, v),
          t.append(d, y, b);
        const w = st("button", {
          id: "new-list-submit",
          textContent: "Add List",
        });
        t.append(w), r.append(a, t), r.addEventListener("submit", R);
      } else if ("project" === e) {
        const t = st("div", { id: "list-inputs" }),
          e = st("h3", { textContent: "New Project" }),
          n = st("label", {
            for: "name-input",
            classList: "bold",
            textContent: "Name: ",
          }),
          i = st("input", { type: "text", id: "name-input", name: "name" });
        t.append(e, n, i);
        const o = st("button", {
          id: "new-project-submit",
          textContent: "Add Project",
        });
        t.append(o), r.append(a, t), r.addEventListener("submit", et);
      }
      n.append(r), document.getElementById("main").append(n);
    };
  function n(t) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      n(t)
    );
  }
  function r(t, e) {
    if (e.length < t)
      throw new TypeError(
        t +
          " argument" +
          (t > 1 ? "s" : "") +
          " required, but only " +
          e.length +
          " present"
      );
  }
  function a(t) {
    r(1, arguments);
    var e = Object.prototype.toString.call(t);
    return t instanceof Date || ("object" === n(t) && "[object Date]" === e)
      ? new Date(t.getTime())
      : "number" == typeof t || "[object Number]" === e
      ? new Date(t)
      : (("string" != typeof t && "[object String]" !== e) ||
          "undefined" == typeof console ||
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function i(t, e) {
    r(2, arguments);
    var n = a(t),
      i = a(e),
      o = n.getTime() - i.getTime();
    return o < 0 ? -1 : o > 0 ? 1 : o;
  }
  function o(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  function s(t, e) {
    if ((r(2, arguments), !e || "object" !== n(e))) return new Date(NaN);
    var i = e.years ? o(e.years) : 0,
      s = e.months ? o(e.months) : 0,
      u = e.weeks ? o(e.weeks) : 0,
      l = e.days ? o(e.days) : 0,
      d = e.hours ? o(e.hours) : 0,
      c = e.minutes ? o(e.minutes) : 0,
      m = e.seconds ? o(e.seconds) : 0,
      p = a(t),
      h =
        s || i
          ? (function (t, e) {
              r(2, arguments);
              var n = a(t),
                i = o(e);
              if (isNaN(i)) return new Date(NaN);
              if (!i) return n;
              var s = n.getDate(),
                u = new Date(n.getTime());
              return (
                u.setMonth(n.getMonth() + i + 1, 0),
                s >= u.getDate()
                  ? u
                  : (n.setFullYear(u.getFullYear(), u.getMonth(), s), n)
              );
            })(p, s + 12 * i)
          : p,
      g =
        l || u
          ? (function (t, e) {
              r(2, arguments);
              var n = a(t),
                i = o(e);
              return isNaN(i)
                ? new Date(NaN)
                : i
                ? (n.setDate(n.getDate() + i), n)
                : n;
            })(h, l + 7 * u)
          : h,
      f = 1e3 * (m + 60 * (c + 60 * d));
    return new Date(g.getTime() + f);
  }
  function u(t) {
    var e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
  }
  function l(t) {
    r(1, arguments);
    var e = a(t);
    return e.setHours(0, 0, 0, 0), e;
  }
  var d = 864e5;
  function c(t, e) {
    var n =
      t.getFullYear() - e.getFullYear() ||
      t.getMonth() - e.getMonth() ||
      t.getDate() - e.getDate() ||
      t.getHours() - e.getHours() ||
      t.getMinutes() - e.getMinutes() ||
      t.getSeconds() - e.getSeconds() ||
      t.getMilliseconds() - e.getMilliseconds();
    return n < 0 ? -1 : n > 0 ? 1 : n;
  }
  Math.pow(10, 8);
  var m = 6e4,
    p = 36e5;
  function h(t, e) {
    return r(2, arguments), a(t).getTime() - a(e).getTime();
  }
  var g = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      },
    },
    f = "trunc";
  function v(t) {
    return t ? g[t] : g[f];
  }
  function y(t, e) {
    r(2, arguments);
    var n,
      o = a(t),
      s = a(e),
      u = i(o, s),
      l = Math.abs(
        (function (t, e) {
          r(2, arguments);
          var n = a(t),
            i = a(e);
          return (
            12 * (n.getFullYear() - i.getFullYear()) +
            (n.getMonth() - i.getMonth())
          );
        })(o, s)
      );
    if (l < 1) n = 0;
    else {
      1 === o.getMonth() && o.getDate() > 27 && o.setDate(30),
        o.setMonth(o.getMonth() - u * l);
      var d = i(o, s) === -u;
      (function (t) {
        r(1, arguments);
        var e = a(t);
        return (
          (function (t) {
            r(1, arguments);
            var e = a(t);
            return e.setHours(23, 59, 59, 999), e;
          })(e).getTime() ===
          (function (t) {
            r(1, arguments);
            var e = a(t),
              n = e.getMonth();
            return (
              e.setFullYear(e.getFullYear(), n + 1, 0),
              e.setHours(23, 59, 59, 999),
              e
            );
          })(e).getTime()
        );
      })(a(t)) &&
        1 === l &&
        1 === i(t, s) &&
        (d = !1),
        (n = u * (l - Number(d)));
    }
    return 0 === n ? 0 : n;
  }
  function b(t) {
    r(1, arguments);
    var e = a(t.start),
      n = a(t.end);
    if (isNaN(e.getTime())) throw new RangeError("Start Date is invalid");
    if (isNaN(n.getTime())) throw new RangeError("End Date is invalid");
    var o = {};
    o.years = Math.abs(
      (function (t, e) {
        r(2, arguments);
        var n = a(t),
          o = a(e),
          s = i(n, o),
          u = Math.abs(
            (function (t, e) {
              r(2, arguments);
              var n = a(t),
                i = a(e);
              return n.getFullYear() - i.getFullYear();
            })(n, o)
          );
        n.setFullYear(1584), o.setFullYear(1584);
        var l = i(n, o) === -s,
          d = s * (u - Number(l));
        return 0 === d ? 0 : d;
      })(n, e)
    );
    var g = i(n, e),
      f = s(e, { years: g * o.years });
    o.months = Math.abs(y(n, f));
    var b = s(f, { months: g * o.months });
    o.days = Math.abs(
      (function (t, e) {
        r(2, arguments);
        var n = a(t),
          i = a(e),
          o = c(n, i),
          s = Math.abs(
            (function (t, e) {
              r(2, arguments);
              var n = l(t),
                a = l(e),
                i = n.getTime() - u(n),
                o = a.getTime() - u(a);
              return Math.round((i - o) / d);
            })(n, i)
          );
        n.setDate(n.getDate() - o * s);
        var m = o * (s - Number(c(n, i) === -o));
        return 0 === m ? 0 : m;
      })(n, b)
    );
    var w = s(b, { days: g * o.days });
    o.hours = Math.abs(
      (function (t, e, n) {
        r(2, arguments);
        var a = h(t, e) / p;
        return v(null == n ? void 0 : n.roundingMethod)(a);
      })(n, w)
    );
    var M = s(w, { hours: g * o.hours });
    o.minutes = Math.abs(
      (function (t, e, n) {
        r(2, arguments);
        var a = h(t, e) / m;
        return v(null == n ? void 0 : n.roundingMethod)(a);
      })(n, M)
    );
    var N = s(M, { minutes: g * o.minutes });
    return (
      (o.seconds = Math.abs(
        (function (t, e, n) {
          r(2, arguments);
          var a = h(t, e) / 1e3;
          return v(null == n ? void 0 : n.roundingMethod)(a);
        })(n, N)
      )),
      o
    );
  }
  function w(t, e) {
    var n;
    r(1, arguments);
    var a = o(
      null !== (n = null == e ? void 0 : e.additionalDigits) && void 0 !== n
        ? n
        : 2
    );
    if (2 !== a && 1 !== a && 0 !== a)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (
      "string" != typeof t &&
      "[object String]" !== Object.prototype.toString.call(t)
    )
      return new Date(NaN);
    var i,
      s = (function (t) {
        var e,
          n = {},
          r = t.split(M.dateTimeDelimiter);
        if (r.length > 2) return n;
        if (
          (/:/.test(r[0])
            ? (e = r[0])
            : ((n.date = r[0]),
              (e = r[1]),
              M.timeZoneDelimiter.test(n.date) &&
                ((n.date = t.split(M.timeZoneDelimiter)[0]),
                (e = t.substr(n.date.length, t.length)))),
          e)
        ) {
          var a = M.timezone.exec(e);
          a
            ? ((n.time = e.replace(a[1], "")), (n.timezone = a[1]))
            : (n.time = e);
        }
        return n;
      })(t);
    if (s.date) {
      var u = (function (t, e) {
        var n = new RegExp(
            "^(?:(\\d{4}|[+-]\\d{" +
              (4 + e) +
              "})|(\\d{2}|[+-]\\d{" +
              (2 + e) +
              "})$)"
          ),
          r = t.match(n);
        if (!r) return { year: NaN, restDateString: "" };
        var a = r[1] ? parseInt(r[1]) : null,
          i = r[2] ? parseInt(r[2]) : null;
        return {
          year: null === i ? a : 100 * i,
          restDateString: t.slice((r[1] || r[2]).length),
        };
      })(s.date, a);
      i = (function (t, e) {
        if (null === e) return new Date(NaN);
        var n = t.match(N);
        if (!n) return new Date(NaN);
        var r = !!n[4],
          a = C(n[1]),
          i = C(n[2]) - 1,
          o = C(n[3]),
          s = C(n[4]),
          u = C(n[5]) - 1;
        if (r)
          return (function (t, e, n) {
            return e >= 1 && e <= 53 && n >= 0 && n <= 6;
          })(0, s, u)
            ? (function (t, e, n) {
                var r = new Date(0);
                r.setUTCFullYear(t, 0, 4);
                var a = 7 * (e - 1) + n + 1 - (r.getUTCDay() || 7);
                return r.setUTCDate(r.getUTCDate() + a), r;
              })(e, s, u)
            : new Date(NaN);
        var l = new Date(0);
        return (function (t, e, n) {
          return e >= 0 && e <= 11 && n >= 1 && n <= (S[e] || (T(t) ? 29 : 28));
        })(e, i, o) &&
          (function (t, e) {
            return e >= 1 && e <= (T(t) ? 366 : 365);
          })(e, a)
          ? (l.setUTCFullYear(e, i, Math.max(a, o)), l)
          : new Date(NaN);
      })(u.restDateString, u.year);
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var l,
      d = i.getTime(),
      c = 0;
    if (
      s.time &&
      ((c = (function (t) {
        var e = t.match(j);
        if (!e) return NaN;
        var n = E(e[1]),
          r = E(e[2]),
          a = E(e[3]);
        return (function (t, e, n) {
          return 24 === t
            ? 0 === e && 0 === n
            : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
        })(n, r, a)
          ? n * p + r * m + 1e3 * a
          : NaN;
      })(s.time)),
      isNaN(c))
    )
      return new Date(NaN);
    if (!s.timezone) {
      var h = new Date(d + c),
        g = new Date(0);
      return (
        g.setFullYear(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate()),
        g.setHours(
          h.getUTCHours(),
          h.getUTCMinutes(),
          h.getUTCSeconds(),
          h.getUTCMilliseconds()
        ),
        g
      );
    }
    return (
      (l = (function (t) {
        if ("Z" === t) return 0;
        var e = t.match(D);
        if (!e) return 0;
        var n = "+" === e[1] ? -1 : 1,
          r = parseInt(e[2]),
          a = (e[3] && parseInt(e[3])) || 0;
        return (function (t, e) {
          return e >= 0 && e <= 59;
        })(0, a)
          ? n * (r * p + a * m)
          : NaN;
      })(s.timezone)),
      isNaN(l) ? new Date(NaN) : new Date(d + c + l)
    );
  }
  var M = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/,
    },
    N = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    j =
      /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    D = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function C(t) {
    return t ? parseInt(t) : 1;
  }
  function E(t) {
    return (t && parseFloat(t.replace(",", "."))) || 0;
  }
  var S = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function T(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
  }
  var k = {};
  function x() {
    return k;
  }
  var L = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  };
  function P(t) {
    return function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  var W,
    I = {
      date: P({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: P({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: P({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    F = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function A(t) {
    return function (e, n) {
      var r;
      if (
        "formatting" ===
          (null != n && n.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        var a = t.defaultFormattingWidth || t.defaultWidth,
          i = null != n && n.width ? String(n.width) : a;
        r = t.formattingValues[i] || t.formattingValues[a];
      } else {
        var o = t.defaultWidth,
          s = null != n && n.width ? String(n.width) : t.defaultWidth;
        r = t.values[s] || t.values[o];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  function Y(t) {
    return function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        i = e.match(a);
      if (!i) return null;
      var o,
        s = i[0],
        u = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        l = Array.isArray(u)
          ? (function (t, e) {
              for (var n = 0; n < t.length; n++) if (t[n].test(s)) return n;
            })(u)
          : (function (t, e) {
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n].test(s)) return n;
            })(u);
      return (
        (o = t.valueCallback ? t.valueCallback(l) : l),
        {
          value: (o = n.valueCallback ? n.valueCallback(o) : o),
          rest: e.slice(s.length),
        }
      );
    };
  }
  const U = {
    code: "en-US",
    formatDistance: function (t, e, n) {
      var r,
        a = L[t];
      return (
        (r =
          "string" == typeof a
            ? a
            : 1 === e
            ? a.one
            : a.other.replace("{{count}}", e.toString())),
        null != n && n.addSuffix
          ? n.comparison && n.comparison > 0
            ? "in " + r
            : r + " ago"
          : r
      );
    },
    formatLong: I,
    formatRelative: function (t, e, n, r) {
      return F[t];
    },
    localize: {
      ordinalNumber: function (t, e) {
        var n = Number(t),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      era: A({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        defaultWidth: "wide",
      }),
      quarter: A({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: function (t) {
          return t - 1;
        },
      }),
      month: A({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      day: A({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      dayPeriod: A({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
    },
    match: {
      ordinalNumber:
        ((W = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (t) {
            return parseInt(t, 10);
          },
        }),
        function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.match(W.matchPattern);
          if (!n) return null;
          var r = n[0],
            a = t.match(W.parsePattern);
          if (!a) return null;
          var i = W.valueCallback ? W.valueCallback(a[0]) : a[0];
          return {
            value: (i = e.valueCallback ? e.valueCallback(i) : i),
            rest: t.slice(r.length),
          };
        }),
      era: Y({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/^b/i, /^(a|c)/i] },
        defaultParseWidth: "any",
      }),
      quarter: Y({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: "any",
        valueCallback: function (t) {
          return t + 1;
        },
      }),
      month: Y({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: "any",
      }),
      day: Y({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: "any",
      }),
      dayPeriod: Y({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: "any",
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  var q = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
  function B(t, e) {
    var n, r, a, i, o;
    if (arguments.length < 1)
      throw new TypeError(
        "1 argument required, but only ".concat(arguments.length, " present")
      );
    var s = x(),
      u =
        null !==
          (n =
            null !== (r = null == e ? void 0 : e.locale) && void 0 !== r
              ? r
              : s.locale) && void 0 !== n
          ? n
          : U,
      l = null !== (a = null == e ? void 0 : e.format) && void 0 !== a ? a : q,
      d = null !== (i = null == e ? void 0 : e.zero) && void 0 !== i && i,
      c =
        null !== (o = null == e ? void 0 : e.delimiter) && void 0 !== o
          ? o
          : " ";
    return u.formatDistance
      ? l
          .reduce(function (e, n) {
            var r = "x".concat(
                n.replace(/(^.)/, function (t) {
                  return t.toUpperCase();
                })
              ),
              a = t[n];
            return "number" == typeof a && (d || t[n])
              ? e.concat(u.formatDistance(r, a))
              : e;
          }, [])
          .join(c)
      : "";
  }
  const $ = (t) => {
      t.target.parentElement.parentElement.querySelector(
        ".list-description"
      ).style.display = "block";
      const e = t.target;
      e.removeEventListener("click", $), e.addEventListener("click", H);
    },
    H = (t) => {
      t.target.parentElement.parentElement.querySelector(
        ".list-description"
      ).style.display = "none";
      const e = t.target;
      e.removeEventListener("click", H), e.addEventListener("click", $);
    },
    z = (t) => {
      const e = st("div", { classList: "project-section" });
      e.setAttribute("project-id", t);
      const n = _(t),
        r = st("h3", { textContent: n.projectName }),
        a = st("button", { id: "delete-project", textContent: "␡" });
      a.setAttribute("project-id", t),
        a.addEventListener("click", rt),
        r.append(a),
        e.append(r);
      const i = tt(t);
      return (
        i &&
          i.forEach((t) => {
            const n = ((t) => {
              const e = st("div", { classList: "list-section" });
              e.setAttribute("list-id", t.id);
              let n = ((t) => {
                let e, n;
                switch (t) {
                  case "low priority":
                    (e = "green"), (n = "lightgreen");
                    break;
                  case "medium priority":
                    (e = "yellow"), (n = "lightyellow");
                    break;
                  case "high priority":
                    (e = "red"), (n = "indianred");
                }
                return [e, n];
              })(t.priority);
              (e.style.border = ` 5px ridge ${n[0]}`),
                (e.style.backgroundColor = n[1]);
              const r = st("div", { id: "list-btns-div" }),
                a = st("button", { id: "show-details", textContent: "ℹ️" });
              a.addEventListener("click", $);
              const i = st("button", { id: "delete-list", textContent: "␡" });
              i.addEventListener("click", (t) => {
                const e = Q(t);
                console.log("info:", e);
                const n = e[0],
                  r = e[1];
                V(n),
                  ((t) => {
                    t.remove();
                  })(r);
              }),
                r.append(a, i);
              const o = st("h3", {
                  classList: "list-title",
                  textContent: `${t.title}`,
                }),
                s = st("p", {
                  classList: "list-description",
                  textContent: `${t.description}`,
                });
              s.style.display = "none";
              let u = b({ start: new Date(), end: w(t.dueDate) });
              const l = Object.entries(u)
                  .filter(([t, e]) => e || !1)
                  .map(([t, e]) => t),
                d = st("p", {
                  classList: "list-duedate",
                  textContent: `Time left: ${B(u, {
                    format: [
                      "years",
                      "months",
                      "weeks",
                      "days",
                      "hours",
                      "minutes",
                      "seconds",
                    ]
                      .filter((t) => new Set(l).has(t))
                      .slice(0, 3),
                    delimiter: ", ",
                  })}`,
                });
              return e.append(r, o, s, d), e;
            })(t);
            e.append(n);
          }),
        e
      );
    },
    J = (t) => {
      const e = document.getElementById("projects-container");
      (e.innerHTML = ""), e.append(z(t));
    },
    O = (t, e) => {
      let n = JSON.parse(localStorage.getItem(t) || "[]");
      ("allProjects" === t && n.find((t) => t.projectId === e.projectId)) ||
        n.push(e),
        localStorage.setItem(t, JSON.stringify(n));
    },
    X = (t) => JSON.parse(localStorage.getItem(t) || "[]"),
    Z = () => {
      e("list"), t("list");
    },
    R = (t) => {
      t.preventDefault();
      const e = document.querySelector("#project-select"),
        n = Number(e.value),
        r = document.getElementById("title-input").value,
        a = document.getElementById("description-input").value,
        i = document.getElementById("duedate-input").value,
        o = document.getElementsByName("priority");
      ((t) => {
        const [e, n, r, a, i] = t,
          o = X("allLists").map((t) => t.id);
        let s = 0;
        for (; o.includes(s); ) s++;
        const u = ((t, e, n, r, a, i, o = !1) => ({
          id: t,
          title: e,
          description: n,
          dueDate: r,
          priority: a,
          projectId: i,
          isComplete: o,
        }))(s, e, n, r, a, i, !1);
        O("allLists", u);
      })([r, a, i, Array.from(o).find((t) => t.checked).value, n]),
        J(n),
        document.querySelector(".popUp").remove();
    },
    Q = (t) => {
      console.log("getlistid event:", t);
      const e = t.target.parentElement.parentElement;
      return [e.getAttribute("list-id"), e];
    },
    V = (t) => {
      let e = X("allLists");
      (e = e.filter((e) => Number(e.id) !== Number(t))),
        localStorage.removeItem("allLists"),
        e.forEach((t) => O("allLists", t));
    },
    G = (t, e) => {
      X("allProjects")
        .map((t) => t.projectName)
        .includes(e) || O("allProjects", { projectId: t, projectName: e });
    },
    K = (G(0, "default project"), () => X("allProjects")),
    _ = (t) => K().find((e) => e.projectId === t),
    tt = (t) => X("allLists").filter((e) => e.projectId === t),
    et = (t) => {
      t.preventDefault();
      const e = X("allProjects"),
        n = document.getElementById("name-input").value,
        r = e.map((t) => t.projectId);
      let a = 0;
      for (; r.includes(a); ) a++;
      G(a, n), at(a, n), J(a), document.querySelector(".popUp").remove();
    },
    nt = () => {
      e("project"), t("project");
    },
    rt = (t) => {
      const e = t.target.parentElement.parentElement,
        n = t.target.getAttribute("project-id");
      let r = X("allProjects");
      (r = r.filter((t) => Number(t.id) !== Number(n))),
        tt(Number(n)).forEach((t) => V(t.id)),
        localStorage.removeItem("allProjects"),
        (r = r.filter((t) => Number(t.projectId) !== Number(n))),
        r.forEach((t) => O("allProjects", t)),
        e.remove(),
        it(n);
    },
    at = (t, e) => {
      const n = document.getElementById("side-list"),
        r = st("li", { classList: "side-list-item" });
      r.setAttribute("project-id", t);
      const a = st("a", { classList: "side-link", textContent: e });
      a.addEventListener("click", () => J(t)), r.append(a), n.append(r);
    },
    it = (t) => {
      document.querySelector(`[project-id="${t}"]`).remove();
    },
    ot = () => {
      const t = st("div", { id: "main" }),
        e = (() => {
          const t = st("div", { id: "main-btn-div" }),
            e = (() => {
              const t = st("button", {
                id: "new-project-btn",
                textContent: "New Project",
              });
              return t.addEventListener("click", nt), t;
            })(),
            n = (() => {
              const t = st("button", {
                id: "new-list-btn",
                textContent: "New List",
              });
              return t.addEventListener("click", Z), t;
            })();
          return t.append(e, n), t;
        })(),
        n = st("div", { id: "projects-container" });
      return t.append(e, n), t;
    },
    st = (t, e) => {
      const n = document.createElement(t);
      for (const t in e) n[t] = e[t];
      return n;
    },
    ut = () => {
      const t = document.getElementById("container");
      (t.innerHTML = ""),
        t.append(
          (() => {
            const t = st("div", { id: "sidebar" }),
              e = (() => {
                const t = st("a", { id: "side-logo-link" }),
                  e = st("img", {
                    id: "side-logo",
                    src: "/src/images/todo-logo.png",
                  });
                return (
                  e.addEventListener(
                    "mouseover",
                    (t) => (t.target.src = "/src/images/todo-logo-hover.png")
                  ),
                  e.addEventListener(
                    "mouseout",
                    (t) => (t.target.src = "/src/images/todo-logo.png")
                  ),
                  t.append(e),
                  t.addEventListener("click", ut),
                  t
                );
              })(),
              n = st("div", { id: "side-title", textContent: "All Projects" }),
              r = (() => {
                const t = st("ul", { id: "side-list" });
                return (
                  K().forEach((e) => {
                    if (e.projectName) {
                      const n = st("li", { classList: "side-list-item" });
                      n.setAttribute("project-id", e.projectId);
                      const r = st("a", {
                        classList: "side-link",
                        textContent: e.projectName,
                      });
                      r.addEventListener("click", () => J(e.projectId)),
                        n.append(r),
                        t.append(n);
                    }
                  }),
                  t
                );
              })();
            return t.append(e, n, r), t;
          })()
        ),
        t.append(ot()),
        (() => {
          const t = document.getElementById("projects-container");
          K().forEach((e) => {
            t.append(z(e.projectId));
          });
        })();
    };
  ut();
})();
