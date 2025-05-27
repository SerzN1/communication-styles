import Card from "./Card";

const IntroCardsSection = () => (
  <section className="w-full max-w-5xl px-4 grid md:grid-cols-2 gap-8 mb-10">
    <Card className="p-8">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <i className="fas fa-bullseye text-blue-600 text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          Why Communication Styles Matter
        </h3>
      </div>
      <p className="text-gray-600">
        Effective communication is the foundation of all successful relationships, both personal and professional. By understanding your natural communication style and recognizing others', you can reduce conflicts, improve collaboration, and build stronger connections.
      </p>
    </Card>
    <Card className="p-8">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <i className="fas fa-chart-pie text-green-600 text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          The Four Main Styles
        </h3>
      </div>
      <p className="text-gray-600">
        Our assessment identifies four primary communication styles: <strong>Analytical</strong>, <strong>Driver</strong>, <strong>Amiable</strong>, and <strong>Expressive</strong>. Each has unique strengths and potential blind spots. Most people are a blend of styles with one dominant preference.
      </p>
    </Card>
  </section>
);

export default IntroCardsSection;
