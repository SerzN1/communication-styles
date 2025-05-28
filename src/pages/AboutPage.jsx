import { useEffect } from "react";
import { Card, CardTitle, H1, H3 } from "../components/toolkit";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="about" className="page mx-auto">
      <div className="text-center mb-12">
        <H1>
          About <span className="text-blue-600">Communication Styles</span>
        </H1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Learn how our <strong>communication style assessment</strong> can help you improve communication skills, strengthen workplace relationships, and unlock your unique communication strengths.
        </p>
      </div>

      <Card className="lg:p-8 mb-8">
        <CardTitle>Our Mission</CardTitle>
        <p className="text-gray-600 mb-6">
          At CommStyle, our mission is to empower individuals and organizations to communicate more effectively. We believe that understanding your <strong>communication style</strong> is the key to building stronger relationships, improving teamwork, and achieving professional growth.
        </p>
        <p className="text-gray-600">
          The <strong>Communication Styles Assessment</strong> is grounded in research from psychology, communication theory, and organizational behavior. While the model simplifies complex human behavior, it provides a practical framework for improving interpersonal interactions and <strong>workplace communication</strong>.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="lg:p-8">
          <CardTitle>The Science Behind It</CardTitle>
          <p className="text-gray-600 mb-4">
            Our <strong>communication style assessment</strong> is based on the widely recognized four-style communication model, building on the work of psychologists like Carl Jung and William Moulton Marston. This model has been adapted and refined through decades of practical application in business and counseling settings.
          </p>
          <p className="text-gray-600">
            While no personality or communication assessment can capture the full complexity of human behavior, research shows that these frameworks can significantly <strong>improve communication skills</strong> and effectiveness when used appropriately.
          </p>
        </Card>

        <Card className="lg:p-8">
          <CardTitle>How It Works</CardTitle>
          <p className="text-gray-600 mb-4">
            The assessment consists of 20 carefully designed questions that measure your natural communication preferences across four dimensions:
          </p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li><strong>Task vs. People Orientation</strong> - Are you more focused on tasks or relationships?</li>
            <li><strong>Direct vs. Indirect Style</strong> - Do you communicate directly or more subtly?</li>
            <li><strong>Formal vs. Informal Approach</strong> - Do you prefer structured or casual interactions?</li>
            <li><strong>Detail vs. Big Picture</strong> - Do you focus on specifics or the overall vision?</li>
          </ul>
          <p className="text-gray-600">
            Your responses are analyzed to determine your dominant <strong>communication style</strong> and provide personalized insights to help you <strong>improve your communication strengths</strong>.
          </p>
        </Card>
      </div>

      <Card className="lg:p-8">
        <CardTitle>Meet The Team</CardTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <H3 className="font-semibold mmy-0">Dr. AI Victoria Johnson</H3>
            <p className="text-gray-600">Lead Psychologist</p>
            <p className="text-gray-500 text-sm mt-2">PhD in Communication Studies with 15 years of research experience</p>
          </div>
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <H3>Sergei No</H3>
            <p className="text-gray-600">Assessment Developer</p>
            <p className="text-gray-500 text-sm mt-2">Specializes in psychometrics and behavioral assessment design</p>
          </div>
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <H3>AI Anna Smith</H3>
            <p className="text-gray-600">User Experience</p>
            <p className="text-gray-500 text-sm mt-2">Ensures our tools are accessible and easy to use for everyone</p>
          </div>
        </div>
      </Card>

      <div className="mt-12 text-center">
        <a href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300 nav-link">
          <i className="fas fa-home mr-2"></i> Back to Home
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
