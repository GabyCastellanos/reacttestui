export default function Team() {
  const teamMembers = [
    {
      name: "Enolog",
      realname: "Afifa",
      avatar: "/avatars/enolog.png"
    },
    {
      name: "Whatson",
      realname: "Anastasiya ",
      avatar: "/avatars/whatson.png"
    },
    {
      name: "Quandary of Rivia",
      realname: "Arash",
      avatar: "/avatars/quandaryofrivia.png"
    },
    {
      name: "Query Bradshaw",
      realname: "Gabriela",
      avatar: "/avatars/querybradshaw.png"
    },
    {
      name: "HerQL Poirot",
      realname: "John",
      avatar: "/avatars/herqlpoirot.png"
    },
    {
      name: "Spongelog Squarepants",
      realname: "Luis",
      avatar: "/avatars/spongelogsquarepants.png"
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
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-36 h-36 mx-auto rounded-full object-contain bg-white border-4 border-primary-500/30"
                  onError={(e) => {
                    // Fallback to initial letter if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-36 h-36 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-4xl font-bold text-white" style={{display: 'none'}}>
                  {member.name.charAt(0)}
                </div>
                <div className="absolute inset-0 w-36 h-36 mx-auto rounded-full border-4 border-primary-500/30 animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary-400 font-semibold mb-4">{member.realname}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
