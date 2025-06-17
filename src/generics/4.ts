type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "Maks",
    surname: "Drachenko",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
