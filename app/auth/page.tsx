import NavBar from "@/components/NavBar/NavBar";
import AuthPage from "./components/AuthPage";

type AuthProps = {};
export default function Auth({}: AuthProps) {
  return (
    <div className="h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 ">
      <NavBar />
      <AuthPage />
    </div>
  );
}
