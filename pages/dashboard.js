import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Usuário: {user?.displayName}</h1>
      <h1>Email: {user?.email}</h1>
    </div>
  );
}
