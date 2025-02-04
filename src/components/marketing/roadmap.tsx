const RoadmapSection: React.FC = () => {
    const roadmap = [
      {
        date: 'Q1 2024',
        milestones: [
          'Website Launch',
          'Private Launch',
          'Team Recruitment',
          'Initial Marketing',
        ],
      },
      {
        date: 'Q2 2024',
        milestones: [
          'Public Launch',
          'Growth Marketing',
          'Exchange Listings',
          'Partnerships',
        ],
      },
    ];
  
    return (
      <section className=" py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Our Roadmap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="cardGradientBg p-6 rounded-lg space-y-4"
              >
                <h3 className="text-xl font-semibold">{item.date}</h3>
                <ul className="list-disc list-inside text-sm text-left">
                  {item.milestones.map((milestone, i) => (
                    <li key={i}>{milestone}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RoadmapSection;
  