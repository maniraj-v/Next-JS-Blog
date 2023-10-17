import Image from "next/image";
import ContactForm from "./ContactForm";
import connectingPeople from "../../../../../public/assets/connecting-people.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Fill your details in the form to connect",
};

export default function Contact() {
  return (
    <section className="overflow-hidden">
      <article className="grid grid-cols-2 border-b-2 mb-8">
        <div className="max-h-[400px]">
          <Image
            priority
            src={connectingPeople}
            alt="connecting people"
            className="object-contain object-center pt-4 w-full h-full"
          />
        </div>
        <div className="px-16 py-4 border-l-2">
          <h1 className="font-in text-4xl font-semibold mb-8">{`Let's Connect!`}</h1>
          <ContactForm />
        </div>
      </article>
    </section>
  );
}
