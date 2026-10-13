import type { EducationItem } from "../../types";

export const educationItems: EducationItem[] = [
  {
    level: "University",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    admissionYear: "2019",
    passingYear: "2024",
    result: "CGPA 2.81 / 4.00",
  },
  {
    level: "College",
    degree: "Higher Secondary Certificate in Science (HSC)",
    institution: "Govt. Shah Sultan College",
    location: "Bogura, Bangladesh",
    admissionYear: "2017",
    passingYear: "2019",
    result: "GPA 4.50 / 5.00",
  },
  {
    level: "School",
    degree: "Secondary School Certificate in Science (SSC)",
    institution: "Bogura Zilla School",
    location: "Bogura, Bangladesh",
    admissionYear: "2009",
    passingYear: "2017",
    result: "GPA 5.00 / 5.00",
  },
];

export const thesis = {
  title: "Weighted Graph Mining (WeGM)",
  summary:
    "Undergraduate thesis: an algorithm that mines frequent subgraphs with edge weights from graph datasets, extending the gSpan algorithm with weighted graph mining.",
  tech: ["Python", "Google Colab", "Jupyter Notebook", "DFS", "PubChem", "Kaggle"],
};
