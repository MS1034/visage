import React from "react";
import "./Services.css";

function Services() {
  const features = [
    {
      name: "Barcode Sharing",
      description:
        "Unveil the magic of efficient photo distribution through barcode technology, simplifying the way you share captivating moments.",
      svg: (
        <svg
          className="feat-svg"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M0,11H11V0H0V11ZM1,1H10V10H1V1Zm2,7h5V3H3v5Zm1-4h3v3h-3v-3ZM13,0V11h11V0H13Zm10,10H14V1h9V10Zm-2-7h-5v5h5V3Zm-1,4h-3v-3h3v3ZM0,24H11V13H0v11ZM1,14H10v9H1V14Zm2,7h5v-5H3v5Zm1-4h3v3h-3v-3Zm16-1h-3v-3h-4v4h3v3h-3v4h4v-3h4v-4h3v-4h-4v3Zm-6,0v-2h2v2h-2Zm2,7h-2v-2h2v2Zm4-3h-3v-3h3v3Zm1-6h2v2h-2v-2Z" />
        </svg>
      ),
    },
    {
      name: "Access Attributes",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="feat-svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M22,15.34v-1.84c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v1.84c-1.18,.56-2,1.77-2,3.16v2c0,1.93,1.57,3.5,3.5,3.5h4c1.93,0,3.5-1.57,3.5-3.5v-2c0-1.39-.82-2.6-2-3.16Zm-6-1.84c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v1.54c-.16-.02-.33-.04-.5-.04h-4c-.17,0-.34,.01-.5,.04v-1.54Zm7,7c0,1.38-1.12,2.5-2.5,2.5h-4c-1.38,0-2.5-1.12-2.5-2.5v-2c0-1.38,1.12-2.5,2.5-2.5h4c1.38,0,2.5,1.12,2.5,2.5v2Zm-3.5-1c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1ZM11.5,6.04c-1.38,0-2.5,1.12-2.5,2.5,0,1.26,.79,2.87,1.97,4.07-.88,.83-2.04,1.43-3.47,1.43-1,0-1.96-.52-2.83-1.35,2.12-2.32,3.33-5.91,3.33-8.65C8,1.83,6.21,.04,4,.04S0,1.83,0,4.04c0,2.7,1.3,6.29,3.27,8.62-.83,.72-1.78,1.21-2.83,1.34-.27,.03-.47,.28-.44,.56,.03,.27,.29,.47,.56,.44,1.28-.16,2.42-.75,3.4-1.6,1.06,1.01,2.26,1.65,3.54,1.65,4.21,0,6.5-4.29,6.5-6.5,0-1.38-1.12-2.5-2.5-2.5ZM1,4.04c0-1.65,1.35-3,3-3s3,1.35,3,3c0,2.46-1.11,5.79-3.01,7.91-1.77-2.15-2.99-5.53-2.99-7.91Zm10.64,7.83c-1.08-1.11-1.64-2.47-1.64-3.33s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.46,2.17-1.36,3.33Zm3.48-6.06c-.17-.22-.12-.53,.1-.7,.22-.17,.53-.12,.7,.1,.49,.65,.84,1.41,1,2.2,.06,.27-.12,.54-.39,.59-.03,0-.07,.01-.1,.01-.23,0-.44-.16-.49-.4-.14-.66-.41-1.26-.82-1.8Zm-4.12,11.7c0,.28-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H10.5c.28,0,.5,.22,.5,.5Z" />
        </svg>
      ),
      description:
        "Empower your photo journey by customizing access attributes, ensuring only the chosen ones can embark on the enchanting exploration of your memories.",
    },
    {
      name: "No Quality Loss",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          className="feat-svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="m16.611,8.144l.701.712-5.793,5.707c-.28.281-.657.437-1.058.437s-.777-.156-1.061-.439l-2.788-2.702.696-.718,2.793,2.707c.2.199.524.195.712.005l5.797-5.71Zm7.074,5.119l-4.445,8.362c-.452.848-1.328,1.375-2.286,1.375H7.067c-.957,0-1.831-.525-2.283-1.371L.317,13.272c-.424-.793-.424-1.741,0-2.535L4.784,2.372c.452-.847,1.327-1.372,2.284-1.372h9.887c.958,0,1.834.527,2.286,1.375l4.445,8.362c.42.791.42,1.734,0,2.525Zm-.883-2.056l-4.445-8.361c-.278-.521-.815-.846-1.403-.846H7.067c-.587,0-1.124.323-1.402.843L1.199,11.208c-.266.499-.266,1.094,0,1.593l4.466,8.356c.278.52.815.843,1.401.843h9.887c.588,0,1.125-.324,1.403-.846l4.445-8.36c.264-.497.264-1.09,0-1.587Z" />
        </svg>
      ),
      description:
        "Preserve the brilliance of every pixel as you embark on your photo odyssey, ensuring each moment retains its captivating essence.",
    },
    {
      name: "Face Recognition",
      svg: (
        <svg
          className="feat-svg"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="m16,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-7,1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm3,9c-4.411,0-8-3.589-8-8S7.589,4,12,4s8,3.589,8,8-3.589,8-8,8Zm7-8c0-3.86-3.141-7-7-7s-7,3.14-7,7,3.141,7,7,7,7-3.14,7-7Zm-3.853,1.646c-.014.014-1.388,1.354-3.147,1.354s-3.134-1.341-3.147-1.354c-.195-.193-.513-.193-.706.002-.195.196-.195.511,0,.706.067.067,1.672,1.646,3.854,1.646s3.786-1.579,3.854-1.646c.195-.195.195-.51,0-.706-.193-.195-.511-.195-.706-.002Zm-7.647,9.354h-3c-1.93,0-3.5-1.57-3.5-3.5v-3c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0,2.481,2.019,4.5,4.5,4.5h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm16-7c-.276,0-.5.224-.5.5v3c0,1.93-1.57,3.5-3.5,3.5h-3c-.276,0-.5.224-.5.5s.224.5.5.5h3c2.481,0,4.5-2.019,4.5-4.5v-3c0-.276-.224-.5-.5-.5ZM19.5,0h-3c-.276,0-.5.224-.5.5s.224.5.5.5h3c1.93,0,3.5,1.57,3.5,3.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5ZM.5,8c.276,0,.5-.224.5-.5v-3c0-1.93,1.57-3.5,3.5-3.5h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-3C2.019,0,0,2.019,0,4.5v3c0,.276.224.5.5.5Z" />
        </svg>
      ),

      description:
        "Unlock the secret to effortlessly organizing your cherished memories with the power of facial recognition, turning each image into a timeless treasure trove.",
    },
    {
      name: "Data Security",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="feat-svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M22,15v-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v1.5h-2v6.5c0,1.38,1.12,2.5,2.5,2.5h6c1.38,0,2.5-1.12,2.5-2.5v-6.5h-2Zm-6-1.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v1.5h-5v-1.5Zm7,8c0,.83-.67,1.5-1.5,1.5h-6c-.83,0-1.5-.67-1.5-1.5v-5.5h9v5.5Zm-4-1h-1v-2h1v2ZM4,13v11h-1V14.64l-2.26,2.32L.03,16.27l3.18-3.27h.8ZM8,4C8,1.79,6.21,0,4,0S0,1.79,0,4v3c0,2.21,1.79,4,4,4s4-1.79,4-4v-3Zm-1,3c0,1.65-1.35,3-3,3s-3-1.35-3-3v-3c0-1.65,1.35-3,3-3s3,1.35,3,3v3Zm4.24,15.89c.13,.38,.29,.75,.51,1.08-2.09-.13-3.75-1.86-3.75-3.97v-3c0-1.86,1.28-3.41,3-3.86v1.04c-1.16,.41-2,1.51-2,2.82v3c0,1.39,.96,2.55,2.24,2.89Zm.5-18.93l-.72-.7L14.2,0h.8V9.28c-.38,.32-.72,.68-1,1.08V1.64l-2.26,2.32Z" />
        </svg>
      ),
      description:
        "Embark on your photo adventure with peace of mind, knowing that your precious memories are safeguarded by formidable encryption and protective enchantments.",
    },
    {
      name: "Google Drive Plugin",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          className="feat-svg"
          // xml:space="preserve"
          width="512"
          height="512"
        >
          <g>
            <path d="M0,17.725l2.031,3.504l0,0c0.396,0.793,1.222,1.335,2.169,1.335l0,0l0,0h13.457l-2.792-4.839H0z" />
            <path d="M24,17.749c0-0.485-0.146-0.939-0.388-1.311L15.73,2.723c-0.405-0.769-1.214-1.287-2.144-1.287H9.419l12.178,21.103   l1.918-3.326C23.903,18.575,24,18.299,24,17.749z" />
            <polygon points="12.874,14.286 7.428,4.851 1.982,14.286  " />
          </g>
        </svg>
      ),
      description:
        "Merge the realms of imagination and reality as you seamlessly connect Visage with Google Drive, crafting a wondrous vault for your ever-expanding photo realm.",
    },
  ];
  const Feature = ({ name, description, svg }) => (
    <div className="feat-container">
      {svg}
      <h2 className="feat-title">{name}</h2>
      <p className="feat-desc">{description}</p>
    </div>
  );

  return (
    <div className="services-container">
      <h1 className="contact-title">Why Visage?</h1>
      <p className="contact-description">
        Discover the magical capabilities of Visage, where every moment captured
        becomes an enchanting journey of seamless sharing and organization.
      </p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <Feature
            key={index}
            name={feature.name}
            description={feature.description}
            svg={feature.svg}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
