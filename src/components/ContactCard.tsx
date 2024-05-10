"use client"

import { useMemo, useState } from "react";

import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";

import { MailIcon } from "lucide-react";

import emailjs from "@emailjs/browser";

export const ContactCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const readyToSubmit = useMemo(() => fullName && email && message, [fullName, email, message]);

  const handleSubmit = () => {
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          from_name: fullName,
          to_name: "Denzel",
          from_email: email,
          to_email: "denzel.iskandar@yahoo.com",
          message: message,
        },
        process.env.NEXT_PUBLIC_OPTIONS_ID as string
      )
      .then(
        () => {
          setFullName("");
          setEmail("");
          setMessage("");
          setLoading(false);

          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry, something went wrong. Please try again.");
        }
      );
  }

  return (
    <section id="contact" className="relative z-0 sm:min-h-[calc(100vh-241px-10rem)]">
      <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">GET IN TOUCH</h3>
      <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">Contact Me</h1>

      <div className="flex flex-col items-center mt-8 sm:gap-y-12 gap-y-8 w-full">
        <Link href={"mailto:denzel.iskandar@gmail.com"}>
          <Button color="primary" variant="shadow" radius="full" className="sm:text-xl sm:p-8 p-5">
            <MailIcon />denzel.iskandar@gmail.com
          </Button>
        </Link>

        <Input type="name" variant={"bordered"} label="Full Name" placeholder="Enter your full name" className="max-w-xl" onChange={handleFullNameChange} value={fullName} />
        <Input type="email" variant={"bordered"} label="Email" placeholder="Enter your email" className="max-w-xl" onChange={handleEmailChange} value={email} />
        <Textarea type="text" variant={"bordered"} label="Message" placeholder="What would you like to say to me?" className="max-w-xl" onChange={handleMessageChange} value={message} />
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="ghost"
          radius="full"
          className="sm:px-8 sm:py-5 px-6 py-4 hover:cursor-pointer"
          isLoading={loading}
          isDisabled={!readyToSubmit}
        >
          Submit
        </Button>
      </div>
    </section>
  )
}