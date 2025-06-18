import React from "react";
import "./FeaturesSection.css";
import { FaRupeeSign, FaRegSmile, FaShieldAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import payment from "./runimage/mobile-banking.png";
const features = [
  {
    icon: <RiSecurePaymentLine />,
    title: "Digital Payments",
    description: "Convenient and secure payment options for a hassle-free shopping experience.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Best Prices",
    description: "Competitive pricing and exclusive offers for all your daily needs.",
  },
  {
    icon: <FaRegSmile />,
    title: "Customer Support",
    description: "Friendly support to help you with orders, returns, and more.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    description: "Your transactions are protected with top-notch security.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose Kirana?</h2>
      <div className="features-list">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;