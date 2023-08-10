import { r as reactExports } from './__federation_shared_react.js';
import { importShared } from './__federation_fn_import.js';
import useStore from './__federation_expose_Store-a4096e46.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const App$1 = '';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const {useState} = await importShared('react');


// returns a Promisized version of Image() api
var imagePromiseFactory = (function (_ref) {
  var _ref$decode = _ref.decode,
    decode = _ref$decode === void 0 ? true : _ref$decode,
    _ref$crossOrigin = _ref.crossOrigin,
    crossOrigin = _ref$crossOrigin === void 0 ? '' : _ref$crossOrigin;
  return function (src) {
    return new Promise(function (resolve, reject) {
      var i = new Image();
      if (crossOrigin) i.crossOrigin = crossOrigin;
      i.onload = function () {
        decode && i.decode ? i.decode().then(resolve)["catch"](reject) : resolve();
      };
      i.onerror = reject;
      i.src = src;
    });
  };
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var removeBlankArrayElements = function removeBlankArrayElements(a) {
  return a.filter(function (x) {
    return x;
  });
};
var stringToArray = function stringToArray(x) {
  return Array.isArray(x) ? x : [x];
};
var cache = {};
// sequential map.find for promises
var promiseFind = function promiseFind(arr, promiseFactory) {
  var done = false;
  return new Promise(function (resolve, reject) {
    var queueNext = function queueNext(src) {
      return promiseFactory(src).then(function () {
        done = true;
        resolve(src);
      });
    };
    arr.reduce(function (p, src) {
      // ensure we aren't done before enqueuing the next source
      return p["catch"](function () {
        if (!done) return queueNext(src);
      });
    }, queueNext(arr.shift()))["catch"](reject);
  });
};
function useImage(_ref) {
  var srcList = _ref.srcList,
    _ref$imgPromise = _ref.imgPromise,
    imgPromise = _ref$imgPromise === void 0 ? imagePromiseFactory({
      decode: true
    }) : _ref$imgPromise,
    _ref$useSuspense = _ref.useSuspense,
    useSuspense = _ref$useSuspense === void 0 ? true : _ref$useSuspense;
  var _useState = useState(false),
    setIsSettled = _useState[1];
  var sourceList = removeBlankArrayElements(stringToArray(srcList));
  var sourceKey = sourceList.join('');
  if (!cache[sourceKey]) {
    // create promise to loop through sources and try to load one
    cache[sourceKey] = {
      promise: promiseFind(sourceList, imgPromise),
      cache: 'pending',
      error: null
    };
  }
  // when promise resolves/reject, update cache & state
  if (cache[sourceKey].cache === 'resolved') {
    return {
      src: cache[sourceKey].src,
      isLoading: false,
      error: null
    };
  }
  if (cache[sourceKey].cache === 'rejected') {
    if (useSuspense) throw cache[sourceKey].error;
    return {
      isLoading: false,
      error: cache[sourceKey].error,
      src: undefined
    };
  }
  cache[sourceKey].promise
  // if a source was found, update cache
  // when not using suspense, update state to force a rerender
  .then(function (src) {
    cache[sourceKey] = _objectSpread$1(_objectSpread$1({}, cache[sourceKey]), {}, {
      cache: 'resolved',
      src: src
    });
    if (!useSuspense) setIsSettled(sourceKey);
  })
  // if no source was found, or if another error occurred, update cache
  // when not using suspense, update state to force a rerender
  ["catch"](function (error) {
    cache[sourceKey] = _objectSpread$1(_objectSpread$1({}, cache[sourceKey]), {}, {
      cache: 'rejected',
      error: error
    });
    if (!useSuspense) setIsSettled(sourceKey);
  });
  // cache[sourceKey].cache === 'pending')
  if (useSuspense) throw cache[sourceKey].promise;
  return {
    isLoading: true,
    src: undefined,
    error: null
  };
}

const React = await importShared('react');

var _excluded = ["decode", "src", "loader", "unloader", "container", "loaderContainer", "unloaderContainer", "imgPromise", "crossorigin", "useSuspense"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var passthroughContainer = function passthroughContainer(x) {
  return x;
};
function Img(_ref) {
  var _ref$decode = _ref.decode,
    decode = _ref$decode === void 0 ? true : _ref$decode,
    _ref$src = _ref.src,
    srcList = _ref$src === void 0 ? [] : _ref$src,
    _ref$loader = _ref.loader,
    loader = _ref$loader === void 0 ? null : _ref$loader,
    _ref$unloader = _ref.unloader,
    unloader = _ref$unloader === void 0 ? null : _ref$unloader,
    _ref$container = _ref.container,
    container = _ref$container === void 0 ? passthroughContainer : _ref$container,
    _ref$loaderContainer = _ref.loaderContainer,
    loaderContainer = _ref$loaderContainer === void 0 ? passthroughContainer : _ref$loaderContainer,
    _ref$unloaderContaine = _ref.unloaderContainer,
    unloaderContainer = _ref$unloaderContaine === void 0 ? passthroughContainer : _ref$unloaderContaine,
    imgPromise = _ref.imgPromise,
    crossorigin = _ref.crossorigin,
    _ref$useSuspense = _ref.useSuspense,
    useSuspense = _ref$useSuspense === void 0 ? false : _ref$useSuspense,
    imgProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  imgPromise = imgPromise || imagePromiseFactory({
    decode: decode,
    crossOrigin: crossorigin
  });
  var _useImage = useImage({
      srcList: srcList,
      imgPromise: imgPromise,
      useSuspense: useSuspense
    }),
    src = _useImage.src,
    isLoading = _useImage.isLoading;
  // console.log({src, isLoading, resolvedSrc, useSuspense})
  // show img if loaded
  if (src) return container( /*#__PURE__*/React.createElement("img", _objectSpread({
    src: src
  }, imgProps)));
  // show loader if we have one and were still trying to load image
  if (!useSuspense && isLoading) return loaderContainer(loader);
  // show unloader if we have one and we have no more work to do
  if (!useSuspense && unloader) return unloaderContainer(unloader);
  return null;
}

const Image$1 = ({
  src,
  alt,
  className
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Img,
    {
      src,
      alt,
      className,
      loader: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-full h-full bg-gray-50 rounded-md rounded-b-none animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "w-10 h-10 text-gray-200",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 20 18",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" })
        }
      ) })
    }
  );
};

const PaypalIcon = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "72",
      height: "18",
      viewBox: "0 0 72 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M55.6932 5H52.0409C51.8261 5 51.6113 5.21053 51.5039 5.42105L50 14.6842C50 14.8947 50.1074 15 50.3223 15H52.2558C52.4706 15 52.578 14.8947 52.578 14.6842L53.0077 12.0526C53.0077 11.8421 53.2225 11.6316 53.5448 11.6316H54.7264C57.197 11.6316 58.5935 10.4737 58.9157 8.15789C59.1306 7.21053 58.9157 6.36842 58.486 5.84211C57.8415 5.31579 56.8748 5 55.6932 5ZM56.1228 8.47368C55.908 9.73684 54.9412 9.73684 53.9745 9.73684H53.33L53.7596 7.31579C53.7596 7.21053 53.8671 7.10526 54.0819 7.10526H54.2967C54.9412 7.10526 55.5858 7.10526 55.908 7.52631C56.1228 7.63158 56.1228 7.94737 56.1228 8.47368Z",
            fill: "#139AD6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M27.6572 4.59998H23.7715C23.5429 4.59998 23.3144 4.82855 23.2001 5.05712L21.6001 15.1142C21.6001 15.3428 21.7144 15.4571 21.943 15.4571H23.7715C24.0001 15.4571 24.2287 15.2285 24.3429 14.9999L24.8001 12.2571C24.8001 12.0285 25.0287 11.8 25.3715 11.8H26.6287C29.2572 11.8 30.7429 10.5428 31.0858 8.02854C31.3144 6.99997 31.0858 6.08569 30.6286 5.51426C29.9429 4.94283 29.0286 4.59998 27.6572 4.59998ZM28.1144 8.37139C27.8858 9.74282 26.8572 9.74282 25.8287 9.74282H25.2572L25.7144 7.11425C25.7144 6.99997 25.8287 6.88568 26.0572 6.88568H26.2858C26.9715 6.88568 27.6572 6.88568 28.0001 7.34282C28.1144 7.45711 28.2287 7.79997 28.1144 8.37139Z",
            fill: "#263B80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M39.4286 8.25714H37.6C37.4857 8.25714 37.2572 8.37142 37.2572 8.48571L37.1429 9.05713L37.0286 8.82856C36.5714 8.25714 35.7714 8.02856 34.8572 8.02856C32.8 8.02856 30.9715 9.62856 30.6286 11.8C30.4 12.9428 30.7429 13.9714 31.3143 14.6571C31.8857 15.3428 32.6857 15.5714 33.7143 15.5714C35.4286 15.5714 36.3429 14.5428 36.3429 14.5428L36.2286 15.1143C36.2286 15.3428 36.3429 15.4571 36.5714 15.4571H38.2857C38.5143 15.4571 38.7429 15.2285 38.8572 15L39.8857 8.59999C39.7714 8.48571 39.5429 8.25714 39.4286 8.25714ZM36.8 11.9143C36.5714 12.9428 35.7714 13.7428 34.6286 13.7428C34.0572 13.7428 33.6 13.5143 33.3715 13.2857C33.1429 12.9428 33.0286 12.4857 33.0286 11.9143C33.1429 10.8857 34.0572 10.0857 35.0857 10.0857C35.6572 10.0857 36 10.3143 36.3429 10.5428C36.6857 10.8857 36.8 11.4571 36.8 11.9143Z",
            fill: "#263B80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M67.51 8.24243H65.5498C65.4273 8.24243 65.1823 8.36364 65.1823 8.48485L65.0598 9.09091L64.9373 8.84849C64.4472 8.24243 63.5897 8 62.6096 8C60.4044 8 58.4443 9.69697 58.0767 12C57.8317 13.2121 58.1993 14.303 58.8118 15.0303C59.4243 15.7576 60.2819 16 61.3845 16C63.2221 16 64.2022 14.9091 64.2022 14.9091L64.0797 15.5151C64.0797 15.7576 64.2022 15.8788 64.4472 15.8788H66.2849C66.5299 15.8788 66.7749 15.6364 66.8974 15.3939L68 8.60606C67.8775 8.48485 67.755 8.24243 67.51 8.24243ZM64.6922 12.1212C64.4472 13.2121 63.5897 14.0606 62.3646 14.0606C61.752 14.0606 61.262 13.8182 61.017 13.5758C60.7719 13.2121 60.6494 12.7273 60.6494 12.1212C60.772 11.0303 61.752 10.1818 62.8546 10.1818C63.4672 10.1818 63.8347 10.4242 64.2022 10.6667C64.6922 11.0303 64.8148 11.6364 64.6922 12.1212Z",
            fill: "#139AD6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M49.7137 8H47.7899C47.5636 8 47.4504 8.11494 47.3372 8.22988L44.8476 12.1379L43.716 8.45977C43.6028 8.22988 43.4896 8.11494 43.1501 8.11494H41.3395C41.1132 8.11494 41 8.34483 41 8.57471L43.037 14.6667L41.1132 17.4253C41 17.6552 41.1132 18 41.3395 18H43.1501C43.3765 18 43.4896 17.8851 43.6028 17.7701L49.8269 8.68966C50.1664 8.34483 49.94 8 49.7137 8Z",
            fill: "#263B80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M69.5556 5.27587L68 15.6541C68 15.8847 68.1111 16 68.3333 16H69.8889C70.1111 16 70.3333 15.7694 70.4444 15.5387L72 5.39118C72 5.16055 71.8889 5.04524 71.6667 5.04524H69.8889C69.7778 4.92992 69.6667 5.04524 69.5556 5.27587Z",
            fill: "#139AD6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M13.0638 1.35211C12.2686 0.450703 10.7918 0 8.74706 0H3.06715C2.72636 0 2.38556 0.338026 2.27196 0.676055L0 15.4366C0 15.7746 0.227196 16 0.454393 16H3.97594L4.88472 10.4789V10.7042C4.99832 10.3662 5.33911 10.0282 5.67991 10.0282H7.38388C10.6782 10.0282 13.1774 8.67605 13.9726 4.95775C13.9726 4.84507 13.9726 4.73239 13.9726 4.61972C13.859 4.61972 13.859 4.61972 13.9726 4.61972C14.0862 3.15493 13.859 2.25352 13.0638 1.35211Z",
            fill: "#263B80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M13.712 4C13.712 4.11765 13.712 4.2353 13.712 4.35294C12.9566 8.35294 10.5826 9.64706 7.45314 9.64706H5.83448C5.51075 9.64706 5.18702 10 5.07911 10.3529L4 17.5294C4 17.7647 4.10791 18 4.43164 18H7.23732C7.56105 18 7.88479 17.7647 7.88479 17.4118V17.2941L8.42434 13.6471V13.4118C8.42434 13.0588 8.74807 12.8235 9.07181 12.8235H9.50345C12.2012 12.8235 14.3594 11.6471 14.899 8.11765C15.1148 6.70588 15.0069 5.41176 14.3594 4.58824C14.2515 4.35294 14.0357 4.11765 13.712 4Z",
            fill: "#139AD6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M13 4.35C12.8889 4.35 12.7778 4.23333 12.6667 4.23333C12.5556 4.23333 12.4444 4.23333 12.3333 4.11666C11.8889 4 11.4444 4 10.8889 4H6.55556C6.44444 4 6.33333 4 6.22222 4.11666C6 4.23333 5.88889 4.46666 5.88889 4.7L5 10.7667V11C5.11111 10.65 5.44444 10.3 5.77778 10.3H7.44444C10.6667 10.3 13.1111 8.9 13.8889 5.05C13.8889 4.93333 13.8889 4.81666 14 4.7C13.7778 4.58333 13.6667 4.46667 13.4444 4.46667C13.1111 4.35 13.1111 4.35 13 4.35Z",
            fill: "#232C65"
          }
        )
      ]
    }
  );
};

const Summary = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-96 flex flex-col gap-3 px-8 py-6 bg-[#F6F7FF] shadow-sm rounded-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-2xl", children: "Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "Estimate Shipping and Tax" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-thin text-gray-500", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius temporibus mollitia repellendus neque sunt ea dolore iure consectetur pariatur blanditiis." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "Apply Discount Code" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-gray-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Subtotal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "$1300" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Shipping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-thin max-w-[80%]", children: "(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "$21" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Tax" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "$12" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Order Total" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: "$121312" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-gray-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-blue-600 grow p-3 text-white rounded-full text-sm font-semibold", children: "Proceed to Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-yellow-400 grow p-3 text-[#232C65] rounded-full text-sm font-semibold flex flex-nowrap gap-3 items-center justify-center", children: [
      "Checkout with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaypalIcon, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: true,
        className: "bg-gray-50 grow p-3 text-gray-400 border-2 rounded-full text-sm font-semibold flex flex-nowrap gap-3 items-center justify-center",
        children: "Checkout with Buy Now Pay L`ater"
      }
    )
  ] });
};

function App() {
  const { products, removeFromCart, clearCart } = useStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-screen-xl p-8 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold text-3xl", children: "Shopping Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 md:gap-10 lg:gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 grow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "table-auto text-left border-b border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-sm h-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((product) => {
            const {
              id,
              title,
              img,
              type,
              variants,
              price,
              quantity,
              subTotal
            } = product;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "align-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-36 aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Image$1,
                  {
                    src: img,
                    className: "w-full h-full object-cover rounded-md group-hover:scale-125 filter-none group-hover:filter contrast-[115%] transition-all duration-200"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-thin text-gray-400 text-sm", children: type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-thin text-gray-400 text-sm", children: variants })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
                "$",
                price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
                "$",
                subTotal
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(product), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 6H6V12H7V6Z", fill: "#F5222D" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 6H9V12H10V6Z", fill: "#F5222D" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z",
                        fill: "#F5222D"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 1H6V2H10V1Z", fill: "#F5222D" })
                  ]
                }
              ) }) })
            ] }, id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-48 bg-gray-50 p-2 text-gray-400 border-2 rounded-full text-sm flex flex-nowrap gap-3 items-center justify-center", children: "Continue Shopping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "w-48 bg-black p-2 text-white border-2 rounded-full text-sm flex flex-nowrap gap-3 items-center justify-center",
              onClick: clearCart,
              children: "Clear Cart"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, {})
    ] })
  ] }) });
}

export { App as default, jsxRuntimeExports as j };
