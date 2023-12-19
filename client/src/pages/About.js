import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
         
          <p className="text-justify mt-2">
            We are Zareesha developers
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
