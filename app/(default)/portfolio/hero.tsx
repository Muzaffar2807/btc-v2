import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-1 pt-32 md:pb-10 md:pt-40">
          {/* Section header */}
          <div className="pb-1 text-center">
            <h1 className="mb-2 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Portfolio
            </h1>
          </div>
        </div>

        {/* Project Section */}
        <section className="flex flex-col space-y-12 pb-20">
          {/* FurnitureKing Project */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 pb-20">
            <div className="md:w-1/2">
              {/*   <Image
                src="/images/furnitureking.jpg"
                width={600}
                height={400}
                alt="FurnitureKing Project"
                className="rounded-lg shadow-lg"
              /> */}
              <video controls>
                <source src="/videos/furnitureking.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="md:w-1/2">
              <h5 className="text-2xl font-bold mt-2 md:mt-0">
                Furnitureking.com
              </h5>

              <p className="mt-2">
                FurnitureKing is a sophisticated e-commerce platform designed to
                streamline the furniture shopping experience for both
                administrators and customers. With a feature-rich admin panel
                and an intuitive customer interface, it provides a seamless and
                efficient shopping journey.
              </p>
              <div className="mt-1">
                <h4 className="text-xl font-semibold">Admin Panel Features:</h4>
                <ul className="list-disc ml-5">
                  <li>
                    Product Management: Easily add, edit, and remove products
                    from the inventory.
                  </li>

                  <li>
                    Order Management: Update and track orders with ease,
                    ensuring efficient processing and fulfillment.
                  </li>
                </ul>
              </div>
              <div className="mt-1">
                <h4 className="text-xl font-semibold">
                  Customer Panel Features:
                </h4>
                <ul className="list-disc ml-5">
                  <li>
                    Product Browsing: Explore a wide range of furniture products
                    with detailed descriptions and images.
                  </li>
                  <li>
                    Shopping Cart: Add products to the cart, review selections,
                    and place orders effortlessly.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* QR Menu Scanner Project */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2">
              {/*    <Image
                src="/images/qr-menu-scanner.jpg"
                width={600}
                height={400}
                alt="QR Menu Scanner Project"
                className="rounded-lg shadow-lg"
              /> */}
              <video
                controls
                style={{ width: "100%", maxWidth: "600px", height: "300px" }}
              >
                <source src="/videos/palacemenu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="md:w-1/2">
              <h5 className="text-2xl font-bold mt-4 md:mt-0">
                QR Menu Scanner
              </h5> 
              <p className="mt-4">
                Our QR Menu Scanner project for "The Palace" restaurant offers
                customers a modern and convenient way to access the menu. Placed
                on each table, the QR code directs diners to an online menu,
                providing a touchless and efficient dining experience. The
                project has garnered significant engagement, with 10,000 views
                per month.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
