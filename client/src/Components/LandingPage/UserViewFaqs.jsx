import React, { useEffect, useState } from "react";
import { viewCount } from "../Services/AdminService";
import { toast } from "react-toastify";
import "../Admin/AdminDashBoard/faq.css";
import { FaSearch } from "react-icons/fa";
function UserViewFaqs() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Tracks the currently open accordion
  const [filteredFaqs, setFilteredFaqs] = useState([]); // State to store filtered FAQs
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input
  const fetchData = async () => {
    try {
      const result = await viewCount("viewFAQs");

      if (result.success) {
        if (result.user.length > 0) {
          setFaqs(result.user);
          setFilteredFaqs(result.user); // Initialize filtered FAQs
        } else {
          setFaqs([]);
          setFilteredFaqs([]);
        }
      } else {
        console.error("Data error:", result);
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred during Data View");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(term)
    );
    setFilteredFaqs(filtered);
  };
  return (
    <div className="container mt-3">
      <h5 className="mt-5 voLogin-mainText vo-pwd-main">FAQs</h5>



 {/* Search Box */}
 <div className="faq-search-container">
        <div className="faq-search-box">
          <FaSearch className="faq-search-icon" />
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>


      {filteredFaqs.length > 0 ? (
        <div className="faq-accordion">
          {filteredFaqs.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question2"
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-slno">{index + 1}.</span>
                {item.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer2">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <center>
          <h3>No FAQs Found</h3>
        </center>
      )}
    </div>
  );
}

export default UserViewFaqs;
