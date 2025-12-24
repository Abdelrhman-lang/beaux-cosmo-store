"use client";
import { useRef, useState } from "react";
import SecondryBtn from "../(components)/sec-btn/SecondryBtn";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const inputClass =
  "border border-secondary px-6 py-4 text-lg text-secondary focus:outline-0 focus:border-primary transition-colors duration-200";
export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });
  const inputsGrid = [
    {
      id: 1,
      placeHolder: "Name",
      type: "text",
      value: formData.name,
      name: "name",
    },
    {
      id: 2,
      placeHolder: "Email",
      type: "email",
      value: formData.email,
      name: "email",
    },
  ];

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        toast("Message sent successfully! ✅");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          comment: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        toast("Failed to send message. ❌");
      }
    );
  };
  return (
    <div className="mt-20">
      <h2 className="uppercase tracking-[4px] text-secondary mb-10 font-semibold text-xl">
        contact form
      </h2>
      <form ref={formRef} onSubmit={handelSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {inputsGrid.map((input) => {
            return (
              <input
                name={input.name}
                type={input.type}
                key={input.id}
                className={inputClass}
                placeholder={input.placeHolder}
                value={input.value}
                onChange={handelChange}
                required
              />
            );
          })}
        </div>
        <div className="mt-5">
          <input
            className={`${inputClass} w-full`}
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handelChange}
            required
          />
        </div>
        <textarea
          className={`${inputClass} w-full h-[200px] mt-5`}
          placeholder="Comment"
          value={formData.comment}
          onChange={handelChange}
          required
          name="comment"
        />
        <div className="mt-5">
          <SecondryBtn
            title={loading ? "Sending...." : "Send"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
}
