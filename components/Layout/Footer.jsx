"use client";
import SocialLinks from "./SocialLinks";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mx-10 mb-10 py-10 rounded-xl overflow-hidden bg-dark text-light grid justify-center gap-8">
      <h3 className="text-4xl font-semibold">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="max-w-2xl text-center">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-[25rem] bg-light mx-auto rounded-md overflow-hidden p-2 flex"
      >
        <input
          type="text"
          placeholder="Enter your email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full text-dark bg-transparent focus:ring-0 focus:border-dark border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light font-medium cursor-pointer px-6 py-2 rounded-md "
        />
      </form>
      <SocialLinks />
    </footer>
  );
};
export default Footer;
