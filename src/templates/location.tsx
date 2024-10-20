import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import { HoursTable, LexicalRichText } from "@yext/pages-components";
import Hours from "../components/hours";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "c_relatedOffers.name",
      "c_relatedOffers.shortDescriptionV2",
      "c_relatedOffers.c_primaryCTA",
      "c_relatedOffers.price",
      // "c_relatedPromotions",
      // "c_ourServices",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 *
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template = ({ relativePrefixToRoot, path, document }) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    c_relatedOffers,
  } = document;
  return (
    <>
      <div className="bg-[#043b76] text-white py-3">
        <div className="container mx-auto flex justify-end">
          <a
            href="#"
            className="text-sm font-semibold px-4 py-2 bg-[#043b76] hover:bg-blue-500 rounded"
          >
            Account
          </a>
        </div>
      </div>
      <header className="bg-white-900 text-blue p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#">
            <img
              src="https://handandstone.com/wp-content/uploads/2022/11/HS_Logo.png"
              alt="Hand & Stone Logo"
              className="h-10 w-auto"
            />
          </a>
          <nav>
            <a
              href="https://handandstone.com/locations/"
              className="text-lg mx-4 hover:underline"
            >
              Locations
            </a>
            <a
              href="https://handandstone.com/massage/swedish-massage/"
              className="text-lg mx-4 hover:underline"
            >
              Spa Services
            </a>
            <a
              href="https://handandstone.com/memberships/"
              className="text-lg mx-4 hover:underline"
            >
              Membership
            </a>
            <a
              href="https://handandstone.com/book-an-appointment/"
              className="text-lg mx-4 hover:underline"
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <div className="relative bg-primary text-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 flex-row-reverse">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-xl leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {name.split("-")[0]}
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {address.city}, {address.region}
              </h1>
              <p className="mt-6 text-xl leading-8 ">
                <span className="font-bold">Call us: </span>{" "}
                {mainPhone
                  ? mainPhone
                      .replace("+1", "")
                      .replace(/\D+/g, "")
                      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  : `(610) 363-8020`}
              </p>
              <p className="mt-6 text-xl leading-8 ">
                <span className="font-bold">Find us: </span> {address.line1},{" "}
                {address.city}, {address.region} {address.postalCode}
              </p>
              <div className="mt-10 flex flex-col items-center gap-x-6">
                <div className="flex gap-4 mb-4 items-center">
                  <a
                    href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                    style={{ backgroundColor: "#043b76" }}
                    className="text-white text-lg px-6 py-3 rounded hover:bg-blue-500 text-center border border-white flex justify-center"
                  >
                    Book an Appointment
                  </a>
                  <a
                    href="https://handandstone.com/locations/chesterfield/spa-menu/"
                    style={{ backgroundColor: "#043b76" }}
                    className="text-white text-lg px-6 py-3 rounded hover:bg-gray-700 text-center border border-white flex justify-center"
                  >
                    View Spa Menu
                  </a>
                  <a
                    href="https://handandstone.com/gift-cards?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                    style={{ backgroundColor: "#043b76" }}
                    className="text-white text-lg px-6 py-3 rounded hover:bg-blue-500 text-center border border-white flex justify-center"
                  >
                    Buy a Gift Card
                  </a>
                </div>

                {/* Google Maps Section */}
                <div className="flex gap-8 mt-24">
                  <BsFacebook className="h-8 w-8" />
                  <BsTwitter className="h-8 w-8" />
                  <BsInstagram className="h-8 w-8" />
                  <BsLinkedin className="h-8 w-8" />
                  <BsYoutube className="h-8 w-8" />
                  <BsTiktok className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="container mx-auto p-6 flex justify-between gap-28 text-primary">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-3xl">Welcome</span>
            <br /> Hand & Stone Massage and Facial Spa in {address.city},{" "}
            {address.region}
          </h2>
          <p className="text-lg mb-4">{description}</p>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <Hours hours={hours} title="Hours" />
          <p className="text-3xl">Book an appointment</p>
          <button className="cta1-whitebg">Call {mainPhone}</button>
          <button className="cta1-whitebg">Book online</button>
          <p className="text-3xl">Find us</p>
          <button className="cta2-whitebg">Get Directions</button>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-8 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl mb-6 text-center">
            We offer a range of services including massages, facials, and spa
            treatments. Discover what Hand & Stone Chesterfield has to offer!
          </p>
          <div className="grid grid-cols-3 gap-12 w-full">
            {c_relatedOffers.map((item, index) => {
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <img
                    src="https://handandstone.com/wp-content/uploads/2023/01/Massage_Overview-Hero-1.jpg"
                    alt="Massage"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4">Massages</h3>
                  <p className="mb-4">
                    Relax and unwind with our professional massage services.
                  </p>
                  <button className="cta1-whitebg">Book online</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <p className="text-lg mb-8 text-center">
          We offer a range of services including massages, facials, and spa
          treatments. Discover what Hand & Stone Chesterfield has to offer!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://handandstone.com/wp-content/uploads/2023/01/Massage_Overview-Hero-1.jpg"
              alt="Massage"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Massages</h3>
            <p className="mb-4">
              Relax and unwind with our professional massage services.
            </p>
            <a
              href="https://handandstone.com/massage/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Explore Massages
            </a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://handandstone.com/wp-content/uploads/2023/01/Facial_Overview-Hero.jpg"
              alt="Facial"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Facials</h3>
            <p className="mb-4">
              Rejuvenate your skin with our customized facial treatments.
            </p>
            <a
              href="https://handandstone.com/facials/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Explore Facials
            </a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://handandstone.com/wp-content/uploads/2023/02/Cryoskin_Overview-Hero-1.jpg"
              alt="Spa Treatments"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Neveskin™</h3>
            <p className="mb-4">
              Shape, Tone, and Firm Your Physique. No suction, no surgery, just
              incredible results
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Explore Spa Treatments
            </a>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Gift Cards</h2>
          <p className="text-lg mb-8">
            Give the gift of relaxation with Hand & Stone Gift Cards, perfect
            for any occasion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Buy Online</h3>
              <p className="mb-4">
                Purchase Hand & Stone Gift Cards conveniently online and send
                them directly to your loved ones.
              </p>
              <a
                href="https://handandstone.zenoti.com/webstoreNew/giftcards/0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                style={{ backgroundColor: "#043b76" }}
                className="text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Buy Gift Cards
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">In-Store Purchase</h3>
              <p className="mb-4">
                Visit our Chesterfield location to purchase gift cards and pick
                them up in person.
              </p>
              <a
                href="https://handandstone.com/locations/"
                style={{ backgroundColor: "#043b76" }}
                className="text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Find a Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Membership Section */}

      <section style={{ backgroundColor: "#80384c" }} className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Spa Membership</h2>
          <p className="text-lg text-white mb-8">
            Become a member of Hand & Stone and enjoy exclusive benefits and
            discounts year-round.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Monthly Massages</h3>
              <p className="mb-4">
                Receive a 1-hour massage every month at a discounted membership
                rate.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Facials and Skin Care</h3>
              <p className="mb-4">
                Enjoy personalized facials and skin care treatments as part of
                your membership.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Exclusive Discounts</h3>
              <p className="mb-4">
                Members enjoy exclusive offers and discounts on additional
                services and gift cards.
              </p>
            </div>
          </div>
          <a
            href="https://handandstone.com/memberships/"
            style={{ backgroundColor: "#043b76" }}
            className="text-white px-4 py-2 mt-6 inline-block rounded hover:bg-blue-500"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8">
            At Hand & Stone Chesterfield, we are always looking for talented and
            passionate professionals to join our team. If you're a licensed
            massage therapist, esthetician, or front desk professional, we'd
            love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Massage Therapist</h3>
              <p className="mb-4">
                Join our team of professional massage therapists and help
                clients relax and rejuvenate.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Esthetician</h3>
              <p className="mb-4">
                Be part of our esthetician team and provide personalized facial
                and skincare services.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Front Desk Associate</h3>
              <p className="mb-4">
                Work at the front desk and help clients schedule appointments
                and manage their spa experiences.
              </p>
            </div>
          </div>
          <a
            href="#"
            style={{ backgroundColor: "#043b76" }} // Replace with your desired hex color
            className="text-white px-4 py-2 mt-6 inline-block rounded hover:bg-blue-500"
          >
            Apply Now
          </a>
        </div>
      </section>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap">
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-024-1.jpg"
            alt="Image 1"
            className="w-200 h-80 object-cover mr-4"
          />
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-033-1.jpg"
            alt="Image 2"
            className="w-200 h-80 object-cover mr-4"
          />
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-019-1.jpg"
            alt="Image 3"
            className="w-200 h-80 object-cover mr-4"
          />
        </div>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sign Up for Special Offers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our email list to receive special offers and updates!
          </p>
          <div className="flex justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a
              href="https://handandstone.com/locations/chesterfield/"
              className="bg-[#043b76] text-white px-6 py-2 rounded-r-md inline-block text-center"
            >
              {" "}
              Sign up{" "}
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            By signing up, you agree to receive emails from Hand & Stone.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/handandstoneusa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/01/Vector-6.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/handandstoneusa/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/01/Vector-5.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://twitter.com/handandstoneusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/08/twitter_x.png"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/hand-and-stone-massage-and-facial-spa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/01/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.youtube.com/user/HandAndStone/videos?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/01/youtube.png"
                alt="Music"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.tiktok.com/@handandstoneusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://handandstone.com/wp-content/uploads/2023/02/tiktok-icon.png"
                alt="Music"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </section>

      <bottom className="bg-[#043b76] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Hand & Stone Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">Hand & Stone</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Own A Franchise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Hand & Stone Canada
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Massages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Facials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Neveskin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Hair Removal
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Touchpoints: News & Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Join the Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Health & Safety
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms and Conditions Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Terms and Conditions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Customer Bill of Rights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Gift Card Program Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Reward Points Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Rules, Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    California Residents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Policy on Non Discrimination & Gender Identity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </bottom>

      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Hand & Stone Massage and Facial Spa. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Location;
