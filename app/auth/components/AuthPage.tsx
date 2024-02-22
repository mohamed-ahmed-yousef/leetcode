import Hero from "@/public/hero.png";
import Image from "next/image";
import Modal from "./Modal/Modal";
export default function AuthPage() {
  return (
    <div className="h-[calc(100vh - 70px)] flex items-center justify-center">
      <Image src={Hero} alt="hero section image w-[min(500px, 90%)]" />
      <Modal />
    </div>
  );
}
