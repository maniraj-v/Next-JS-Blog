import Image from "next/image";
import CharacterImage from "@/public/assets/character.png";
import SkillSets from "./components/SkillSets";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <article className="grid grid-cols-2 border-b-2 mb-8">
        <div className="w-full h-full px-16 py-4">
          <Image
            src={CharacterImage}
            alt={"about person"}
            width={410}
            height={410}
            className="object-center object-cover"
          />
        </div>
        <div className="px-16 py-16 border-l-2">
          <h1 className="text-6xl font-bold mb-4">
            Dream Big, Work Hard, Achieve More!
          </h1>
          <p>
            {`This Mantra Drives My Work As A Passionate Freelancer. I Blend
            Innovative Technology With Timeless Design For Captivating Digital
            Experiences. Inspired By Nature And Literature, I'm A Perpetual
            Learner Embracing Challenges. With Each Project, I Aim To Leave A
            Lasting Impact—One Pixel At A Time.`}
          </p>
        </div>
      </article>
      <SkillSets />
      {/* Reach via Email */}
      <p className="text-2xl font-mr font-semibold mb-8 px-16">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href={"/contact"} className="underline">
          here
        </Link>{" "}
        and let&apos;s make it happen.
      </p>
    </section>
  );
}
