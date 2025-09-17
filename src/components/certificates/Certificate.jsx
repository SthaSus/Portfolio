import React, { useEffect, useState } from "react";
import "./Certificate.css";
import { Award, Building, Calendar } from "lucide-react";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch certificates from MockAPI
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          "https://68c926a2ceef5a150f639897.mockapi.io/certificates"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return <p className="text-center">Loading certificates...</p>;
  }

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title cta-title">Certificates</h2>


        <div className="certificates-grid">
          {certificates.length > 0 ? (
            certificates.map((cert) => (
              <div className="certificate-card" key={cert.id}>
                {/* Certificate Image/Icon */}
                <div className="certificate-image">
                  {cert.img ? (
                    <img src={cert.img} alt={cert.title} className="cert-img" />
                  ) : (
                    <div className="certificate-icon">🎓</div>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-description">{cert.description}</p>

                  {/* Certificate Meta */}
                  <div className="certificate-meta">
                    <span className="certificate-tag issuer">
                      <Building size={14} />
                      {cert.issuer}
                    </span>
                    <span className="certificate-tag date">
                      <Calendar size={14} />
                      {cert.issueDate}
                    </span>
                    {cert.tag && (
                      <span className="certificate-tag category">
                        <Award size={14} />
                        {cert.tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-certificates">
              <div className="no-certificates-icon">🚫</div>
              <p>No certificates found</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
