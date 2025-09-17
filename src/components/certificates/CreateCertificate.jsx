import React, { useState } from "react";

const CreateCertificate = () => {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    issueDate: "",
    img: "",
    description: "",
    tag: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://68c926a2ceef5a150f639897.mockapi.io/certificates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create certificate");
      }

      const data = await response.json();
      console.log("Certificate Created:", data);

      // Reset form
      setFormData({
        title: "",
        issuer: "",
        issueDate: "",
        img: "",
        tag: "",
        description: "",
      });

      alert("Certificate created successfully ✅");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create certificate ❌");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 mx-auto contact p-1 rounded-5">
          <form
            className="w-100 p-4 p-md-5 bg-black rounded-5"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-3">Create Certificate</h2>

            {/* Certificate Title + Issuer */}
            <div className="row g-3 mb-3">
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="title"
                  placeholder="Certificate Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="title" className="text-secondary">
                  Certificate Title
                </label>
              </div>
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="issuer"
                  placeholder="Issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="issuer" className="text-secondary">
                  Issuer
                </label>
              </div>
            </div>

            {/* Issue Date */}
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control bg-white text-dark border-0"
                id="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                required
              />
              <label htmlFor="issueDate" className="text-secondary">
                Issue Date
              </label>
            </div>

            {/* Image URL */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control bg-white text-dark border-0"
                id="img"
                placeholder="Image URL"
                value={formData.img}
                onChange={handleChange}
                required
              />
              <label htmlFor="img" className="text-secondary">
                Certificate Image URL
              </label>
              <small className="text-secondary">
                Example: /cert1.png (if stored in public folder)
              </small>
            </div>

            {/* Tag */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control bg-white text-dark border-0"
                id="tag"
                placeholder="Tag"
                value={formData.tag}
                onChange={handleChange}
              />
              <label htmlFor="tag" className="text-secondary">
                Tag
              </label>
            </div>

            {/* Description */}
            <div className="form-floating mb-3">
              <textarea
                className="form-control bg-white text-dark border-0"
                placeholder="Description"
                id="description"
                style={{ height: "120px" }}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="description" className="text-secondary">
                Description
              </label>
            </div>


            {/* Submit Button */}
            <button
              className="btn btn-primary w-100 py-2 fw-semibold tag-box"
              type="submit"
            >
              <span className="tag">Create</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
