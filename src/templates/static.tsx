/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Banner from "../components/banner";
import PageLayout from "../components/page-layout";
import { ExternalImage } from "../types/ExternalImage";
/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Hand and Stone Massage | Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <>

      <div className="bg-blue-700 text-white py-3">
        <div className="container mx-auto flex justify-end">
          <a href="#" className="text-sm font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded">
            Account
          </a>
        </div>
      </div>
      <header className="bg-white-900 text-blue p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#">
            <img src="https://handandstone.com/wp-content/uploads/2022/11/HS_Logo.png" alt="Hand & Stone Logo" className="h-10 w-auto" />
          </a>
          <nav>
            <a href="https://handandstone.com/locations/" className="text-lg mx-4 hover:underline">Locations</a>
            <a href="https://handandstone.com/massage/swedish-massage/" className="text-lg mx-4 hover:underline">Spa Services</a>
            <a href="https://handandstone.com/memberships/" className="text-lg mx-4 hover:underline">Membership</a>
            <a href="https://handandstone.com/book-an-appointment/" className="text-lg mx-4 hover:underline">Book an Appointment</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative">
        <img
          src="https://handandstone.com/wp-content/uploads/2023/02/Location-Page-Placeholder-Image.jpg"
          alt="Chesterfield Location"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hand & Stone - Chesterfield</h1>
            <p className="text-lg">Experience our full range of spa services</p>
          </div>
        </div>
      </section>

      {/* Section with Image on Left and Details/Buttons on Right */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left Section - Image */}
            <div>
              <img
                src="https://handandstone.com/wp-content/uploads/2023/02/Location-Page-Placeholder-Image.jpg"
                alt="Chesterfield Location"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Section - Location Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Hand & Stone - Chesterfield, VA</h1>
              <p className="text-lg text-gray-600 mb-2">Call us: <span className="font-semibold text-blue-700">(804) 639-1113</span></p>
              <p className="text-lg text-gray-600 mb-4">Find us: <span className="font-semibold text-blue-700">7204 Hancock Village Drive, Chesterfield, VA 23832</span></p>

              <div className="flex flex-col space-y-4">
                <a
                  href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                  style={{ backgroundColor: '#043b76' }}  // Replace with your desired hex color
                  className="text-white text-lg px-6 py-3 rounded hover:bg-blue-500 text-center">
                  Book an Appointment
                </a>
                <a
                  href="https://handandstone.com/locations/chesterfield/spa-menu/"
                  style={{ backgroundColor: '#043b76' }}  // Replace with your desired hex color
                  className="text-white text-lg px-6 py-3 rounded hover:bg-gray-700 text-center">
                  View Spa Menu
                </a>
                <a
                  href="https://handandstone.com/gift-cards?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                  style={{ backgroundColor: '#043b76' }}  // Replace with your desired hex color
                  className="text-white text-lg px-6 py-3 rounded hover:bg-blue-500 text-center">
                  Buy a Gift Card
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>






      {/* Welcome Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Hand & Stone Chesterfield</h2>
        <p className="text-lg mb-4 text-center">
          Welcome to Hand & Stone Massage and Facial Spa in Chesterfield, where we provide
          top-quality massages, facials, and other spa services. Whether you're looking for a
          rejuvenating treatment or a relaxing escape, we are here for you.
        </p>
      </section>




      {/* Introductory Offers Section */}
      <section className="bg-blue-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Introductory Offers</h2>
          <p className="text-lg mb-8">At Hand & Stone Chesterfield, we offer great introductory prices for first-time visitors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Massage</h3>
              <p className="mb-4">Introductory 1-Hour Massage for only $59.95</p>
              <a href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Book Now</a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Facial</h3>
              <p className="mb-4">Introductory 1-Hour Facial for only $59.95</p>
              <a href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Book Now</a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Hot Stone Massage</h3>
              <p className="mb-4">1-Hour Hot Stone Massage for only $79.95</p>
              <a href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Book Now</a>
            </div>
          </div>
        </div>
      </section>







      {/* Our Services Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <p className="text-lg mb-8 text-center">
          We offer a range of services including massages, facials, and spa treatments. Discover what Hand & Stone Chesterfield has to offer!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/01/Massage_Overview-Hero-1.jpg" alt="Massage" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Massages</h3>
            <p className="mb-4">Relax and unwind with our professional massage services.</p>
            <a href="https://handandstone.com/massage/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Explore Massages</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/01/Facial_Overview-Hero.jpg" alt="Facial" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Facials</h3>
            <p className="mb-4">Rejuvenate your skin with our customized facial treatments.</p>
            <a href="https://handandstone.com/facials/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Explore Facials</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/02/Cryoskin_Overview-Hero-1.jpg" alt="Spa Treatments" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Neveskin™</h3>
            <p className="mb-4">Shape, Tone, and Firm Your Physique. No suction, no surgery, just incredible results</p>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Explore Spa Treatments</a>
          </div>
        </div>
      </section>




      {/* Gift Cards Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Gift Cards</h2>
          <p className="text-lg mb-8">Give the gift of relaxation with Hand & Stone Gift Cards, perfect for any occasion.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Buy Online</h3>
              <p className="mb-4">Purchase Hand & Stone Gift Cards conveniently online and send them directly to your loved ones.</p>
              <a href="https://handandstone.zenoti.com/webstoreNew/giftcards/0c4b087e-3de1-4412-b05f-bee1c335f9e8" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Buy Gift Cards</a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">In-Store Purchase</h3>
              <p className="mb-4">Visit our Chesterfield location to purchase gift cards and pick them up in person.</p>
              <a href="https://handandstone.com/locations/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Find a Location</a>
            </div>
          </div>
        </div>
      </section>


      {/* Spa Membership Section */}

      <section style={{ backgroundColor: '#80384c' }} className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Spa Membership</h2>
          <p className="text-lg text-white mb-8">Become a member of Hand & Stone and enjoy exclusive benefits and discounts year-round.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Monthly Massages</h3>
              <p className="mb-4">Receive a 1-hour massage every month at a discounted membership rate.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Facials and Skin Care</h3>
              <p className="mb-4">Enjoy personalized facials and skin care treatments as part of your membership.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Exclusive Discounts</h3>
              <p className="mb-4">Members enjoy exclusive offers and discounts on additional services and gift cards.</p>
            </div>
          </div>
          <a href="https://handandstone.com/memberships/" className="bg-blue-600 text-white px-4 py-2 mt-6 inline-block rounded hover:bg-blue-500">Join Now</a>
        </div>
      </section>


      {/* Join Our Team Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8">At Hand & Stone Chesterfield, we are always looking for talented and passionate professionals to join our team. If you're a licensed massage therapist, esthetician, or front desk professional, we'd love to hear from you!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Massage Therapist</h3>
              <p className="mb-4">Join our team of professional massage therapists and help clients relax and rejuvenate.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Esthetician</h3>
              <p className="mb-4">Be part of our esthetician team and provide personalized facial and skincare services.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Front Desk Associate</h3>
              <p className="mb-4">Work at the front desk and help clients schedule appointments and manage their spa experiences.</p>
            </div>
          </div>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 mt-6 inline-block rounded hover:bg-blue-500">Apply Now</a>
        </div>
      </section>






      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Hand & Stone Massage and Facial Spa. All Rights Reserved.</p>
        </div>
      </footer>


    </>
  );
};

export default Static;
