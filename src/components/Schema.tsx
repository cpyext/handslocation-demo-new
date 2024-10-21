import { JsonLd } from "react-schemaorg";
import { Place, ItemList, LocalBusiness, FAQPage } from "schema-dts";
const Schema = (props: any) => {
  const { document } = props;
  const name = `${document.name} in ${document.address.city}, ${document.address.region}`;
  const address = document.address;
  const telephone = document.mainPhone;
  const description = document.decription;
  const faqsList: any = [];
  const productsList: any = [];
  const itemListElement: any = [];
  const servicesOffered: any = [];
  if (document.c_relatedServices) {
    document.c_relatedServices.forEach((item: any) => {
      servicesOffered.push({
        "@type": "OfferCatalog",
        itemOffered: {
          "@type": "Service",
          name: `${item.name}`,
        },
      });
    });
  }
  if (document.c_relatedOffers) {
    document.c_relatedOffers.forEach((item: any) => {
      itemListElement.push({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${item.name}`,
        },
      });
    });
  }

  if (document.c_entityCollection) {
    document.c_entityCollection.forEach((item1: any, index: any) => {
      item1.c_products.forEach((item: Product, index: any) => {
        console.log(JSON.stringify(item));

        productsList.push({
          "@type": "ListItem",
          position: parseInt(index) + 1,
          item: {
            "@type": "Product",
            name: item.name,
            image: item.photoGallery && item.photoGallery[0].image.url,
            category: item.c_category && item.c_category,
            sku: document.id,
            aggregateRating: {
              "@type": "AggregateRating",
              bestRating: "5",
              ratingCount: item.c_reviews,
              ratingValue: item.c_rating,
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: item.price && item.price.value,
              priceCurrency: item.price && item.price.currencyCode,
            },
          },
        });
      });
    });
  }

  if (document.c_relatedFAQs) {
    document.c_relatedFAQs.map((item) =>
      faqsList.push({
        "@type": item.question,
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
          offers: [
            {
              "@type": "Offer",
              name: "Intro Image Classic Facial",
              price: "79.95",
              priceCurrency: "USD",
              url: "https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8",
              description: `Introductory pricing for first-time customers only. 
                Service includes time for dressing and consultation.`,
            },
            {
              "@type": "Offer",
              name: "Introductory Swedish Massage 1 Hour",
              price: "79.95",
              priceCurrency: "USD",
              url: "https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8",
            },
          ],
        }}
      />
      <JsonLd<ItemList>
        item={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: productsList,
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
