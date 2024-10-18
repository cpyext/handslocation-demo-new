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
    
     <div class="text-blue text-3xl">Welcome to the New York City branch</div>
     <header className="bg-blue-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Hand & Stone</a>
          <nav>
            <a href="#" className="text-lg mx-4 hover:underline">Locations</a>
            <a href="#" className="text-lg mx-4 hover:underline">Services</a>
            <a href="#" className="text-lg mx-4 hover:underline">Membership</a>
            <a href="#" className="text-lg mx-4 hover:underline">Offers</a>
          </nav>
        </div>
      </header>

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


<section className="container mx-auto p-6">
        <div className="flex flex-wrap">
          {/* Left Column - Info */}
          <div className="w-full md:w-2/3 p-4">
            <h2 className="text-3xl font-bold mb-4">Location Information</h2>
            <p className="text-lg mb-4">
              Visit us at our Chesterfield location for rejuvenating massages, facials, and more. Conveniently located near XYZ Street, we are open 7 days a week.
            </p>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="mt-2">
                Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
              </p>
              <p>
                Email: <a href="mailto:info@handandstone.com" className="text-blue-600 underline">info@handandstone.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Hours of Operation</h3>
              <p className="mt-2">Monday - Friday: 9:00 AM - 9:00 PM</p>
              <p>Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

 {/* Right Column - Appointment CTA */}
 <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
            <p className="mb-4">
              Whether you're looking to relax or treat yourself, book your spa services at our Chesterfield location today!
            </p>
            <a
              href="#"
              className="block bg-blue-600 text-white text-center py-3 rounded-md hover:bg-blue-500"
            >
              Book Online
            </a>
          </div>
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
