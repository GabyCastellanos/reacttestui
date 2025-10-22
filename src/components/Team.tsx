export default function Team() {
  const teamMembers = [
    {
      name: "Enolog",
      role: "Afifa"
    },
    {
      name: "Whatson",
      role: "Anastasiya"
    },
    {
      name: "Quandary of Rivia",
      role: "Arash"
    },
    {

      name: "Query Bradshaw",
      role: "Gabriela",
    },
    {
      name: "HerQL Poirot",
      role: "John",
    },
    {
      name: "Spongelog Squarepants",
      role: " Luis"
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark-900 investigation-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card text-center transform hover:scale-105 transition-all duration-300 hover:castle-glow"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-4 border-primary-500/30 animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary-400 font-semibold mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
