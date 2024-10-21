import { JsonLd } from "react-schemaorg";
import { Place, ItemList, LocalBusiness, FAQPage } from "schema-dts";
const Schema = (props: any) => {
  const { document } = props;
  const name = `${document.name} in ${document.address.city}, ${document.address.region}`;
  const address = document.address;
  const telephone = document.mainPhone;
  const description = document.decription;
  const faqsList: any = [];
  const servicesOffered: any = [];
  const offersOffered: any = [];
  if (document.c_relatedServices) {
    document.c_relatedServices.map((item) =>
      offersOffered.push({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${item.name}`,
        },
      })
    );
  }
  if (document.c_relatedOffers) {
    document.c_relatedOffers.map((item) =>
      servicesOffered.push({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${item.name}`,
        },
      })
    );
  }

  if (document.c_relatedFAQs) {
    document.c_relatedFAQs.map((item) =>
      faqsList.push({
        "@type": "Question",
        name: "Q3",
        acceptedAnswer: {
          "@type": "Answer",
          text: JSON.stringify(item.answerV2.json),
        },
      })
    );
  }

  return (
    <>
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          description: description,
          openingHours: document.hours
            ? buildHoursSchema(document.hours)
            : "Mo,Tu,We,Th 09:00-12:00",
          telephone: telephone,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Store services",
            itemListElement: servicesOffered,
          },
        }}
      />
      <JsonLd<ItemList>
        item={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: offersOffered,
        }}
      />
      <JsonLd<FAQPage>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsList,
        }}
      />

      {document.geocodedCoordinate && (
        <JsonLd<Place>
          item={{
            "@context": "https://schema.org",
            "@type": "Place",
            geo: {
              "@type": "GeoCoordinates",
              latitude: document.geocodedCoordinate.latitude,
              longitude: document.geocodedCoordinate.longitude,
            },
          }}
        />
      )}
    </>
  );
};

const buildHoursSchema = (hoursData: any) => {
  const nHrs: any = [];
  Object.keys(hoursData).forEach((item) =>
    nHrs.push(
      hoursData[item].openIntervals &&
        `${item.substring(0, 2).replace(/./, (c) => c.toUpperCase())} ${
          hoursData[item].openIntervals[0].start
        }-${hoursData[item].openIntervals[0].end}`
    )
  );
  return nHrs;
};

export default Schema;
