import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user, signin } = useAuth();
  console.log("user ", user);
  return (
    <div>
      <h1>Home</h1>
      <h2>Aprenda programação direto ao ponto 100% Free</h2>
      <button type="button" className="" onClick={() => signin()}>
        Entrar com github
      </button>
    </div>
  );
}
