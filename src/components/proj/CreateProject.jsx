import React, { useState } from "react";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    timeDuration: "",
    companyName: "",
    url: "",
    tags: [], // changed from tag: "" to tags: []
    description: "",
  });

  const [tagInput, setTagInput] = useState(""); // for input field only

  // Handle input changes (except tags)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle tag input (comma or Enter adds new tag)
  const handleTagKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  // Remove a tag
  const removeTag = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://68c926a2ceef5a150f639897.mockapi.io/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();
      console.log("Project Created:", data);

      // Reset form
      setFormData({
        name: "",
        timeDuration: "",
        companyName: "",
        url: "",
        tags: [],
        description: "",
      });
      setTagInput("");

      alert("Project created successfully ✅");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create project ❌");
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
            {/* Title */}
            <h2 className="mb-3">Create Project</h2>

            {/* Project Name + Time Duration */}
            <div className="row g-3 mb-3">
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="name"
                  placeholder="Project Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="text-secondary">
                  Project Name
                </label>
              </div>
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="timeDuration"
                  placeholder="Time Duration"
                  value={formData.timeDuration}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="timeDuration" className="text-secondary">
                  Time Duration
                </label>
              </div>

              {/* Company */}
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="companyName" className="text-secondary">
                  Company Name
                </label>
              </div>

              {/* Tags input */}
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control bg-white text-dark border-0"
                  id="tags"
                  placeholder="Add tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                />
                <label htmlFor="tags" className="text-secondary">
                  Tags (press Enter or comma)
                </label>
                {/* Show added tags */}
                <div className="mt-2 d-flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-primary d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeTag(index)}
                    >
                      {tag} ✕
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* URL */}
            <div className="col-md-12 form-floating">
              <input
                type="url"
                className="form-control bg-white text-dark border-0 mb-3"
                id="url"
                placeholder="URL"
                value={formData.url}
                onChange={handleChange}
              />
              <label htmlFor="url" className="text-secondary">
                Github URL
              </label>
            </div>

            {/* Description */}
            <div className="mb-4 form-floating">
              <textarea
                className="form-control bg-white text-dark border-0"
                placeholder="About your project"
                id="description"
                style={{ height: "120px" }}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="description" className="text-secondary">
                Description
              </label>
            </div>

            {/* Button */}
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

export default CreateProject;
