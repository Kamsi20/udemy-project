import React from 'react'
// import img from "/public/img.png"
import img from "/public/10.png"

const NavbarDetails = () => {
  return (
    <div>

    </div>
  )
}

export default NavbarDetails


export const AboutUs = () => {
  return (


    <div className='lg:w-[1300px] mx-auto  my-38 mx-30  '>
      <h1 className='mx-100 mb-15 text-4xl font-semibold'>About Us</h1>
      <p className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        Our organization was established with the goal of providing reliable, efficient, and innovative digital solutions that improve the way individuals and organizations interact with technology. We believe that modern technology should not only simplify processes but also empower people to access services, information, and tools in a fast, secure, and convenient manner.

        From the beginning, our mission has been centered around creating systems that focus on usability, reliability, and accessibility. We understand that users come from diverse backgrounds with different levels of technical knowledge. For this reason, we place great emphasis on designing platforms that are intuitive and easy to navigate while still offering advanced features for more experienced users.

        Our platform was developed to serve as a comprehensive environment where users can access important resources, perform tasks efficiently, and receive the support they need when challenges arise. We continuously invest in improving our systems through research, user feedback, and technological advancements.

        One of the core values that drives our organization is innovation. Technology continues to evolve rapidly, and we strive to remain at the forefront by adopting modern development practices, implementing secure systems, and introducing features that improve user experience. Our team constantly evaluates the performance of our services to ensure that we meet industry standards and provide a platform that users can trust.

        Another important principle guiding our work is transparency and trust. We believe that users should feel confident when interacting with our platform. For this reason, we are committed to maintaining clear policies regarding privacy, security, and user rights. Every effort is made to ensure that personal information is handled responsibly and that our services remain dependable.

        Our organization also values customer satisfaction. We actively listen to feedback from our users and use it to improve our services. Whether it is a suggestion for a new feature, a report of a technical issue, or general feedback about user experience, we consider every piece of information valuable in helping us refine our platform.

        In addition to providing services through our platform, we also strive to build long-term relationships with our users. We believe that successful technology solutions are built through collaboration and continuous communication between developers and users.

        Looking ahead, our vision is to expand our platform, improve the quality of our services, and continue delivering innovative solutions that address real-world problems. By combining technology, creativity, and dedication, we aim to create a digital environment that benefits individuals, organizations, and communities.</p>
      <img src='public/img.png' />
    </div>

  )
}

export const ContactUs = () => {

  return (
    <div className='lg:w-[1300px] mx-auto  my-38 mx-10  '>
      <h1  className='mx-100 mb-15 text-4xl font-semibold'>Contact Us</h1>
      <ul className='flex gap-10 mb-15  justify-center'>
        <div className=' mb-15 border-r-1 pr-5'>
          <a href='mailto:okaforkamsimic@gmail.com' className='text-lg font-bold mb-2 border-b-1'>Email Us</a>
          <p>Okaforkamsimic@gmail.com</p>
        </div>
        <div className=' mb-15 border-r-1 pr-5'>
          <a   href="tel:+2347067693860" className='text-lg font-bold mb-2  border-b-1'>Phone Number</a>
          <p>+234 7067693860</p>
        </div>
        {/* <div className=' mb-15 border-r-1 pr-5'>
          <h2 className='text-lg font-bold mb-2  border-b-1'>Whatsapp</h2>
          <p>+234 7011291359</p>
        </div> */}
        <div>
          <p className='text-lg font-bold mb-2  border-b-1'>Office Address</p>
          <p>New Horizon, Lekki phase 1, Lagos, Nigeria</p>
        </div>
      </ul>

      <div className='blur-none ' >
        <div
          className="bg-cover bg-center py-20 px-6 text-white rounded-2xl shadow-3xl bg-gray-200"


        >

          <div className="max-w-5xl mx-auto text-black  p-10 rounded-lg blu">
            <p className='text-lg mb-10'>
              We recognize the importance of open communication and welcome the opportunity to interact with our users. Whether you have questions about our services, need technical assistance, or wish to provide feedback, our support team is ready to assist you.
              <br /><br />
              Our Contact Us page is designed to ensure that users can easily reach out to us through a variety of communication channels. We aim to make the process of contacting our organization simple, efficient, and convenient for all users.
              <br /><br />
              Users may contact us for a number of reasons including inquiries about services, reporting technical issues, requesting additional information, providing feedback, or seeking general support. Every inquiry is treated with professionalism and reviewed carefully by our support team.
              <br /><br />
              The following communication options are available for users who wish to contact us:
              <br /><br />
              <p className='font-bold'>Email Communication</p>Email Communication

              Email remains one of the most reliable ways to communicate with our support team. Users can send detailed inquiries, attach relevant documents, and explain their concerns clearly. Our team reviews incoming messages regularly and strives to respond within an appropriate timeframe.
              <br /><br />
              <p className='font-bold'>Telephone Support</p>

              For urgent issues that require immediate attention, users may reach out to our customer service representatives via telephone during designated working hours. Our representatives are trained to provide quick and helpful responses to a wide range of inquiries.
              <br /><br />
              <p className='font-bold'> Online Contact Form</p>

              The website includes a contact form that allows users to submit questions directly through the platform. This form typically requires users to provide basic details such as their name, email address, and a description of their inquiry. Once submitted, the request is forwarded to our support team for review.
              <br /><br />
              <p className='font-bold'>Office Address</p>
              In cases where physical communication is necessary, users may contact our office through our official address. Some matters, such as business partnerships or official documentation, may require in-person communication or scheduled appointments.

              We strongly value the feedback and suggestions provided by our users. Every message helps us understand user needs better and contributes to the continuous improvement of our services.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export const HelpAndSupport = () => {
  return (
    <div className='lg:w-[1300px] mx-auto  mt-30 mx-15 '>
      <h1 className='mx-100 mb-15 text-4xl font-semibold'>Help And Support</h1>
      <p className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        Our Help and Support section is designed to assist users in understanding how to effectively use our platform and resolve any issues that may arise. We understand that users may occasionally encounter challenges while navigating digital systems, and we are committed to providing the necessary resources to help them overcome these difficulties.
        <br /> <br />

        The support resources available on our platform are organized in a structured and user-friendly manner so that users can quickly locate the assistance they need. These resources include instructional guides, frequently asked questions, troubleshooting information, and direct communication with our support team.
        <br /> <br />
        Frequently Asked Questions (FAQs)

        The FAQ section provides answers to common questions that users may have regarding our services, account management, and platform functionality. This section is regularly updated to reflect the most frequently reported issues and the solutions that have proven helpful to users.
        <br /> <br />
        User Guides and Tutorials

        To assist users in navigating the platform, we provide detailed user guides and tutorials that explain how to perform various tasks. These guides often include step-by-step instructions that make it easier for users to complete processes such as creating accounts, managing profiles, accessing services, or troubleshooting minor issues.
        <br /> <br />
        Technical Assistance

        In situations where users encounter technical problems that cannot be resolved through self-help resources, our support team is available to provide direct assistance. Users may contact the support team through the available communication channels to report issues or request guidance.
        <br /> <br />
        Continuous Support Improvements

        Our organization continuously monitors the effectiveness of our support services. By analyzing user feedback and common technical issues, we are able to improve the support materials available on the platform and enhance the overall user experience.
        <br /> <br />
        We remain committed to ensuring that every user receives the help they need to fully benefit from the platform and its services.
      </p>
    </div>
  )
}

export const AccessabilityStatement = () => {
  return (
    <div className='lg:w-[1300px] mx-auto  mt-30 mx-15 '>
      <h1 className='mx-90 mb-15 text-4xl font-semibold'> Accessability Statement</h1>
      <p className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        Our organization is committed to ensuring that our website is accessible to the widest possible audience, including individuals with disabilities or limitations that may affect how they interact with digital platforms.
        <br /> <br />
        Accessibility is an important component of responsible web design. We believe that everyone should have equal access to information, services, and opportunities available through our platform.
        <br /> <br />
        To support accessibility, our website is designed to comply with widely accepted accessibility standards and guidelines. These guidelines encourage developers to create websites that can be used by individuals with different abilities, including those who rely on assistive technologies.
        <br /> <br />
        Examples of accessibility considerations include:
        <br /> <br />
        1: Ensuring that website content is compatible with screen readers used by visually impaired users
        <br /> <br />
        2:Providing clear and readable text formatting
        <br /> <br />
        3:Supporting keyboard navigation for users who cannot use a mouse
        <br /> <br />
        4:Designing layouts that adapt to different screen sizes and devices
        <br /> <br />
        5:Using color combinations that improve readability
        <br /> <br />
        We continuously evaluate the accessibility of our platform and make improvements where necessary. Accessibility is an ongoing process, and we are committed to identifying areas where the website can become more inclusive.
        <br /> <br />
        Users who encounter accessibility challenges while using the platform are encouraged to contact us so that we can provide assistance and work toward resolving the issue.
      </p>
    </div>
  )
}

export const PrivacyPolicy = () => {
  return (
    <div className='lg:w-[1300px] mx-auto  mt-30 mx-15  '>
      <p className='mx-110 mb-15 text-4xl font-semibold'>Privacy Policy</p>
      <div className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        Protecting the privacy of our users is a fundamental responsibility that we take seriously. This Privacy Policy explains how we collect, use, store, and safeguard the personal information of individuals who interact with our platform.
        <br /> <br />
        When users visit or interact with our website, certain information may be collected to enable the proper functioning of our services. This information may include personal details provided voluntarily by users as well as technical information generated automatically during website usage.
        <br /> <br />
        Examples of information that may be collected include:
        <br /> <br />
        1:Personal identification information such as names and email addresses
        <br /> <br />
        2:Contact details provided through forms or support requests
        <br /> <br />
        3:Technical data such as IP addresses, device type, and browser information
        <br /> <br />
        4:Usage data that helps us understand how users interact with our platform
        <br /> <br />
        The information collected is used solely for legitimate purposes such as improving user experience, responding to inquiries, maintaining system security, and delivering requested services.
        <br /> <br />
        We implement appropriate technical and organizational measures to ensure that personal information is protected against unauthorized access, loss, misuse, or disclosure. Access to sensitive information is restricted to authorized personnel who require it to perform their duties.
        <br /> <br />
        We do not sell or trade personal information to third parties. In certain cases, information may be shared with trusted service providers who assist in operating our platform, provided that they comply with strict confidentiality and data protection requirements.
        <br /> <br />
        Users have the right to request access to their personal information and may also request corrections or updates if necessary.
        <br /> <br />
        By using our platform, users acknowledge and agree to the practices described in this Privacy Policy.
      </div>

    </div>
  )
}

export const SiteMap = () => {
  return (
    <div className='lg:w-[1300px] mx-auto  mt-30 mx-15  '>
      <p className='mx-110 mb-15 text-4xl font-semibold'>The Sitemap</p>
      <div className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        The sitemap serves as a structured overview of the pages and sections available on our website. Its primary purpose is to help users navigate the platform easily and locate information efficiently.
        <br /> <br />
        Websites often contain multiple pages and sections that provide different types of information. Without proper organization, it can become difficult for users to find specific content. The sitemap addresses this challenge by presenting the structure of the website in a clear and organized format.
        <br /> <br />
        Typical sections included in the sitemap may include:
        <br /> <br />
        <ol >
          <li> 1:Home Page</li>
          <li> 2:About Us</li>
          <li> 3:Services</li>
          <li>4:Products or Features</li>
          <li> 5:Help and Support</li>
          <li> 6:Contact Us</li>
          <li>7:Privacy Policy</li>
          <li>8:Terms and Conditions</li>
        </ol>
        <br /> <br />
        Each section within the sitemap provides direct links to the corresponding pages. This allows users to quickly access the information they are looking for without navigating through multiple layers of menus.
        <br /> <br />
        In addition to improving user navigation, sitemaps also play an important role in search engine optimization. Search engines use sitemaps to better understand the structure of a website and index its pages more efficiently.
      </div>
    </div>
  )
}

export const TermsAndConditions = () => {
  return (
    <div className='lg:w-[1300px] mx-auto  mt-30 mx-15  '>
      <p className='mx-85 mb-15 text-4xl font-semibold'>The Terms and Condition</p>
      <div className="bg-cover bg-center py-20 px-10  rounded-2xl shadow-3xl bg-gray-200 text-black text-lg mb-10">
        The Terms and Conditions page outlines the rules, guidelines, and legal agreements that govern the use of our website and services. By accessing or using our platform, users agree to comply with these terms.
        <br /> <br />
        These terms are designed to ensure that the platform is used responsibly and that all users have a safe and reliable experience.
        <br /> <br />
        Users agree not to engage in activities that could harm the platform or interfere with its operation. Prohibited activities may include unauthorized access to system resources, attempts to compromise security, or the distribution of harmful software.
        <br /> <br />
        Users are also responsible for maintaining the confidentiality of their account credentials. Sharing login details with unauthorized individuals may lead to security risks and may violate the terms of service.
        <br /> <br />
        While we strive to ensure that the information available on our platform is accurate and up to date, we cannot guarantee that all content will always be free from errors. Users are encouraged to verify important information before relying on it for critical decisions.
        <br /> <br />
        Our organization reserves the right to modify, suspend, or discontinue any part of the platform at any time. Updates to these terms may also occur periodically, and users are encouraged to review the Terms and Conditions page regularly.
        <br /> <br />
        Failure to comply with these terms may result in restricted access to the platform or termination of user accounts.
      </div>
    </div>
  )
}
