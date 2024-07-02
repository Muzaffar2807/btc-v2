import Image from "next/image";
import PageIllustration from "@/components/page-illustration"; 

export default function HeroHome() {
    const handleContactUsClick = () => {
    const emailAddress = "connect@brotocode.com"; // Replace with your email
    const subject = "Client Details"; // You can customize the email subject here

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-1 pt-32 md:pb-0 md:pt-40">
          {/* Section header */}
          <div className="pb-1 text-center md:pb-1">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            ></div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {" "}
              Customized Solutions for Web <br className="max-lg:hidden" /> &
              App Development
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                We work with brands, businesses and individuals who are
                committed to moving things forward through vision, action and
                leadership.
              </p>
              
            </div>
             <a 
        className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href="/portfolio"
      >See Our Work</a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
