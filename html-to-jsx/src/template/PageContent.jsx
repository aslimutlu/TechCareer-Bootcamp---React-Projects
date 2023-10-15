import React from "react";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ImageOfLocation from "./ImageOfLocation";

function PageContent() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <ImageOfLocation />
      </div>
    </>
  );
}

export default PageContent;
