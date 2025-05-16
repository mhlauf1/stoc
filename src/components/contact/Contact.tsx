"use client";
import React, { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with your contact backend/service
    console.log({ name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Your Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border bg-white text-neutral-900 placeholder-gray-500 font-gambetta px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#16333A]"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border bg-white text-neutral-900 placeholder-gray-500 font-gambetta px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#16333A]"
      />

      <textarea
        placeholder="Your Message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border bg-white text-neutral-900 placeholder-gray-500 font-gambetta px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16333A] h-40 resize-none"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-[#16333A] hover:bg-[#1E504F] text-white font-gambetta px-8 py-4 rounded-full transition"
      >
        Send Message
        <ArrowUpRight size={20} strokeWidth={2} />
      </button>
    </form>
  );
};

export default Contact;
