import React,{useState} from "react";
import Styles from "./Question.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Question = () => {
    const [expanded, setExpanded] = useState(false);
  const faqList = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Material UI is a popular React UI framework that implements Google's Material Design.",
    },
    {
        question: "Why choose our medical for your family?",
        answer:
          "Material UI is a popular React UI framework that implements Google's Material Design.",
      },
    {
      question: "Trusted & experience senior care & love?",
      answer:
        "You can install Material UI by running `npm install @mui/material @emotion/react @emotion/styled`.",
    },
    {
      question: "How to get appointment for emergency",
      answer:
        "Yes, Material UI provides extensive options for customization, from themes to individual component styles.",
    },
    // Add more FAQs as needed
  ];
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box component="div" py={5} className={Styles.questionBox}>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={Styles.title}>Get Your Answer</Typography>
        <Typography className={Styles.subTitle}>
          Frequently Asked Questions
        </Typography>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              className={Styles.img}
              src={require("../../assets/question.png")}
              alt="question"
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
          >
            {faqList.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={Styles.AccordionBox}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? <RemoveIcon  className={Styles.icon}/> : <AddIcon className={Styles.icon} />
            }
            aria-controls={`faq-${index}-content`}
            id={`faq-${index}-header`}
          >
            <Typography  className={Styles.questionTitle}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Question;
