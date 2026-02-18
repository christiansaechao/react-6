import React from "react";
import ProblemCard from "../extras/ProblemCard";

type UserType = {
  id: number;
  name: string;
  role: string;
};

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];

  const filteredUsers = users.reduce(
    (acc, curr) => {
      console.log(curr);

      if (curr.role === "admin") {
        acc.admin.push(curr);
      } else {
        acc.user.push(curr);
      }

      return acc;
    },
    { admin: [] as UserType[], user: [] as UserType[] },
  );

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      {filteredUsers}
    </ProblemCard>
  );
};
