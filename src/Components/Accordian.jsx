import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordion() {
  return (
    <div>
      <h1 className="my-10 font-bold text-[#3D405B] text-2xl">Frequently Asked Questions</h1>
      {[
        { question: "What is CritiQ, and what does it do?", answer: "CritiQ is a Service Review Application System that allows users to explore, review, and rate various services. It provides user authentication, CRUD operations for services and reviews, and search and filter functionalities." },
        { question: "How do I authenticate users in CritiQ?", answer: "CritiQ uses Firebase Authentication for user login and registration. It supports email/password authentication and integrates JWT (JSON Web Token) for secure API access." },
        { question: "How are reviews managed in CritiQ?", answer: "Users can create, edit, and delete their own reviews. The system ensures that only authenticated users can add or modify reviews, and all reviews are linked to a specific service." },
        { question: "What database does CritiQ use?", answer: "The backend is powered by MongoDB, where service details, user data, and reviews are stored securely. Mongoose is used for schema validation and database operations." },
        { question: "Does CritiQ have role-based access control (RBAC)?", answer: "Currently, CritiQ allows authenticated users to add and manage their own reviews. Admin-level access control can be added in the future for better service management." },
        { question: "Can users edit or delete their reviews?", answer: "Yes, users can edit or delete only their own reviews. The system verifies ownership before allowing any modifications to maintain data integrity." },
      ].map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-[#3D405B]" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className="font-extrabold text-[#3D405B]">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
