var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var initialEmails = [{
  id: 0,
  subject: "Ready for adventure?",
  isStarred: true
}, {
  id: 1,
  subject: "Time to check in!",
  isStarred: false
}, {
  id: 2,
  subject: "Festival Begins in Just SEVEN Days!",
  isStarred: false
}];

function Star(_ref) {
  var email = _ref.email,
      onToggleStar = _ref.onToggleStar;

  return React.createElement("img", {
    className: "star_img",
    src: email.isStarred ? "../images/filled_star.png" : "../images/star.png",
    onClick: function onClick() {
      onToggleStar(email.id);
    }
  });
}

function Email(_ref2) {
  var email = _ref2.email,
      isHighlighted = _ref2.isHighlighted,
      onHover = _ref2.onHover,
      onToggleStar = _ref2.onToggleStar;

  return React.createElement(
    "li",
    {
      className: isHighlighted ? "highlighted" : "",
      onFocus: function onFocus() {
        onHover(email.id);
      },
      onPointerMove: function onPointerMove() {
        onHover(email.id);
      }
    },
    React.createElement(
      "span",
      null,
      React.createElement(Star, { email: email, onToggleStar: onToggleStar }),
      " ",
      email.subject
    )
  );
}

function Emails() {
  var _React$useState = React.useState(initialEmails),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      emails = _React$useState2[0],
      setEmails = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      highlightedId = _React$useState4[0],
      setHighlightedId = _React$useState4[1];

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setEmails(emails.map(function (email) {
      if (email.id === starredId) {
        return Object.assign({}, email, {
          isStarred: !email.isStarred
        });
      } else {
        return email;
      }
    }));
  }

  return React.createElement(
    "div",
    { className: "inbox" },
    React.createElement(
      "h2",
      null,
      "Inbox"
    ),
    React.createElement(
      "ul",
      null,
      emails.map(function (email) {
        return React.createElement(Email, {
          key: email.id,
          email: email,
          isHighlighted: email.id === highlightedId,
          onHover: handleHover,
          onToggleStar: handleStar
        });
      })
    )
  );
}

export default function App() {
  return React.createElement(Emails, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));