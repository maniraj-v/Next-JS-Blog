/* eslint-disable no-console */
"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-md font-in"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="rounded-md"
        {...register("Name", { required: true, maxLength: 80 })}
      />
      <input
        type="email"
        placeholder="Your email"
        className="rounded-md"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        placeholder="My Project is about..."
        rows={4}
        className="rounded-md"
        {...register("projectInfo", { required: true, maxLength: 80 })}
      />
      <button
        type="submit"
        className="bg-dark text-light py-3 text-lg font-medium rounded-md cursor-pointer"
      >
        Submit Request
      </button>
    </form>
  );
}
