const initialEmails = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

function Star({ email, onToggleStar }) {
  return (
    <img
      className="star_img"
      src={email.isStarred ? "../images/filled_star.png" : "../images/star.png"}
      onClick={() => {
        onToggleStar(email.id);
      }}
    />
  );
}

function Email({ email, isHighlighted, onHover, onToggleStar }) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onFocus={() => {
        onHover(email.id);
      }}
      onPointerMove={() => {
        onHover(email.id);
      }}
    >
      <span>
        <Star email={email} onToggleStar={onToggleStar} /> {email.subject}
      </span>
    </li>
  );
}

function Emails() {
  const [emails, setEmails] = React.useState(initialEmails);
  const [highlightedId, setHighlightedId] = React.useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setEmails(
      emails.map((email) => {
        if (email.id === starredId) {
          return {
            ...email,
            isStarred: !email.isStarred,
          };
        } else {
          return email;
        }
      })
    );
  }

  return (
    <div className="inbox">
      <h2>Inbox</h2>
      <ul>
        {emails.map((email) => (
          <Email
            key={email.id}
            email={email}
            isHighlighted={email.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <Emails />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
