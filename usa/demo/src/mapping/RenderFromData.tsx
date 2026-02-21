import ProblemCard from "../extras/ProblemCard";


export const RenderFromData = () => {
  const users = [
    { id: 1, name: "Ava", email: "ava@email.com" },
    { id: 2, name: "Noah", email: "noah@email.com" },
    { id: 2, name: "Aravind", email: "arv@email.com" },
  ];

  return (
    <ProblemCard
      title="Map 06 — Render components from data"
      method="map"
      question="Use map() to render a <UserCard /> for each user."
      dataPreview={users}
    >
      {users.map((u) => {
        return <UserCard name={u.name} email={u.email} />;
      })}
    </ProblemCard>
  );
};

// separate component

// const [name, setName] = useState<string>("")

type UserCardType = {
  name: string;
  email: string;
};

const UserCard = (props: UserCardType) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: 10,
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <div>
        <strong>{props.name}</strong>
      </div>
      <div style={{ opacity: 0.8 }}>{props.email}</div>
    </div>
  );
};
