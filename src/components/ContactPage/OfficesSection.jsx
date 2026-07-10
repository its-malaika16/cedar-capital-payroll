import "./OfficesSection.css";

const offices = [
  {
    city: "Manchester",
    country: "UNITED KINGDOM",
    address:
      "The Point Building, 173-175 Cheetham Hill Rd, Manchester M8 8LG",
    mapEmbed:
      "https://maps.google.com/maps?q=The%20Point%20Building%20Manchester&t=&z=13&ie=UTF8&iwloc=&output=embed",
    link:
      "https://www.google.com/maps/search/?api=1&query=The+Point+Building+Manchester"
  },
  {
    city: "Delaware",
    country: "UNITED STATES",
    address:
      "501 Silverside Rd, Ste 105-1545, Wilmington, Delaware 19809, USA",
    mapEmbed:
      "https://maps.google.com/maps?q=501%20Silverside%20Rd%20Delaware&t=&z=13&output=embed",
    link:
      "https://www.google.com/maps/search/?api=1&query=501+Silverside+Rd+Delaware"
  },
  {
    city: "Beirut",
    country: "LEBANON",
    address:
      "Gauche Rive Tower, Floor 10, Achrafieh, Beirut, Lebanon",
    mapEmbed:
      "https://maps.google.com/maps?q=Achrafieh%20Beirut&t=&z=13&output=embed",
    link:
      "https://www.google.com/maps/search/?api=1&query=Achrafieh+Beirut"
  },
  {
    city: "Dubai",
    country: "UNITED ARAB EMIRATES",
    address:
      "Blue Bay Tower, Business Bay, Dubai, United Arab Emirates",
    mapEmbed:
      "https://maps.google.com/maps?q=Blue%20Bay%20Tower%20Dubai&t=&z=13&output=embed",
    link:
      "https://www.google.com/maps/search/?api=1&query=Blue+Bay+Tower+Dubai"
  }
];

export default function OfficesSection() {
  return (
    <section className="offices-section">

      <h2>
        Visit Our <span className="yellow-text">Offices</span>
      </h2>

      <p className="subtitle">
        Four global locations to serve you better
      </p>

      <div className="offices-grid">

        {offices.map((item, i) => (
          <div className="office-card" key={i}>

            {/* ✅ LIVE MAP */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <iframe
                src={item.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={item.city}
              ></iframe>
            </a>

            {/* ✅ DETAILS */}
            <div className="content">

              <h3>{item.city}</h3>
              <span className="country">{item.country}</span>

              <p>{item.address}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Maps →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}