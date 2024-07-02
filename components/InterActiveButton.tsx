// components/InteractiveButton.js
"use client";

export default function InteractiveButton() {
  const handleContactUsClick = () => {
    const emailAddress = "connect@brotocode.com"; // Replace with your email
    const subject = "Client Details"; // You can customize the email subject here

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
      onClick={handleContactUsClick}
    >
      <a
        className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href="#0"
      >
        <span className="relative inline-flex items-center">Send Email</span>
      </a>
    </div>
  );
}
