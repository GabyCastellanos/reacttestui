export default function Team() {
  const teamMembers = [
    {
      name: "Afifa",
      role: "AI/ML Engineer",
      contributions: [
        "Something",
        "Something",
        "S0mething"
      ]
    },
    {
      name: "John",
      role: "Developer",
      contributions: [
                "Something",
        "Something",
        "S0mething"
      ]
    },
    {
      name: "Arash",
      role: "Dev",
      contributions: [
               "Something",
        "Something",
        "S0mething"
      ]
    },
    {
      name: "Luis",
      role: "Dev",
      contributions: [
               "Something",
        "Something",
        "S0mething"
      ]
    },
    {
      name: "Anastasiya",
      role: "Dev",
      contributions: [
                "Something",
        "Something",
        "S0mething"
      ]
    },
    {
      name: "Gabriela",
      role: " Dev",
      contributions: [
                "Something",
        "Something",
        "S0mething"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark-900 investigation-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six peeps and stuff
          </p>
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

              {/* Contributions */}
              <div className="text-left mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Key Contributions:</h4>
                <ul className="space-y-2">
                  {member.contributions.map((contribution, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                      <span className="text-secondary-500 mr-2">•</span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
