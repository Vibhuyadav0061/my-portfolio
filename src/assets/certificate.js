import IBMAI from './certificates/IBMAI.jpg'
import DSS from './certificates/DSS.jpg'
import JS from './certificates/JS.jpg'
import React from './certificates/reactcertificate.jpg'
import Anudeep from './certificates/AnudeepCertificate.jpg'

const certification = [
    {
        id: 0,
        title: "Web Development with React",
        issuer: "Anudeep Foundation",
        date: "15 December 2025",
        description: "Full stack web development certification covering React, Node.js, Express, and MongoDB for building dynamic web applications.",
        skills: ["React", "Node.js", "Express", "MongoDB", "Web Development", "JavaScript", "Nodemailer", "JWT Authentication","Mongoose","MySql","SQL","Sequelize","Full Stack Development"],         
        img: Anudeep,
        credentialUrl: "#",
        type: "Professional Certificate"
    },
    {
        id: 1,
        title: "JavaScript",
        issuer: "Infosys Springboard",
        date: "11 may 2024",
        description: "Comprehensive JavaScript certification covering ES6, algorithms, data structures, and functional programming.",
        skills: ["JavaScript", "ES6", "Algorithms", "Functional Programming", "Web Development"],
        img: JS,
        credentialUrl: "#",
        type: "Specialization"
    },
    {
        id: 2,
        title: "React JS",
        issuer: "Infosys Springboard",
        date: "11 may 2024",
        description: "Comprehensive React JS certification covering components, hooks, state management, and best practices.",
        skills: ["React JS", "Components", "Hooks", "State Management", "Best Practices"],
        img: React,
        credentialUrl: "#",
        type: "Specialization"
    },
     {
        id: 3,
        title: "Artificial Intelligence Professional Certificate",
        issuer: "IBM SkilsBuild",
        date: "2024",
        description: "AI concept and building a customer support ai chatbot using IBM Watson Assistant.",
        skills: ["Artificial Intelligence", "Chatbot Development", "IBM Watson Assistant", "AI chatbot integration", "AI Concepts"],
        img: IBMAI,
        credentialUrl: "#",
        type: "Certification"
    },
    {
        id: 4,
        title: "Developing Soft Skills & Personality",
        issuer: "NPTEL",
        date: "2022",
        description: "In-depth course focused on enhancing communication, leadership, and interpersonal skills for personal and professional growth.",
        skills: ["Communication", "Leadership", "Interpersonal Skills", "Personal Development", "Professional Growth"],
        img: DSS,
        credentialUrl: "#",
        type: "Professional Certificate"
    }
];

export default certification;