import { Card, CardTitle } from "../toolkit";

{/* SEO SUGGESTIONS:
  - Use "communication styles assessment" in the first sentence.
  - Mention "improve communication skills" and "workplace communication" for relevance.
  - Add a call to action with "start your free communication assessment now".
*/}

const IntroCardsSection = () => (
  <section className="w-full max-w-5xl mb-10">
    <Card>
      <CardTitle>Why Communication Styles Matter</CardTitle>
      <p className="text-gray-600 mb-6">
        Take our free <strong>communication styles assessment</strong> to unlock your unique communication strengths.
        Discover how your communication habits shape your workplace relationships, teamwork, and leadership.
        This quick, science-backed <strong>communication style assessment</strong> helps you identify your dominant style, improve communication skills, and connect more effectively with colleagues and clients.
      </p>
      <p className="text-gray-600">Start your free communication assessment now to get personalized results and practical tips for more effective, confident, and impactful communication.</p>
    </Card>
  </section>
);

export default IntroCardsSection;
