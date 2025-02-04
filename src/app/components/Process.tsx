// app/components/Timeline.tsx
import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { date: "Primer pas", title: "Project Kickoff", description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga ipsa, molestiae accusantium provident autem, maxime officiis minus, nisi esse deserunt cumque sapiente porro nemo necessitatibus cum veritatis ipsam est." },
  { date: "Segon pas", title: "First Prototype", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga ipsa, molestiae accusantium provident autem, maxime officiis minus, nisi esse deserunt cumque sapiente porro nemo necessitatibus cum veritatis ipsam est." },
  { date: "Tercer pas", title: "Beta Release", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga ipsa, molestiae accusantium provident autem, maxime officiis minus, nisi esse deserunt cumque sapiente porro nemo necessitatibus cum veritatis ipsam est. " },
  { date: "Quart pas", title: "Public Launch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga ipsa, molestiae accusantium provident autem, maxime officiis minus, nisi esse deserunt cumque sapiente porro nemo necessitatibus cum veritatis ipsam est. " }
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-40 py-8 flex flex-col md:flex-row xlmax-w-7xl  ">
      {/* Sticky Section on the Left */}
      <div className="w-full md:sticky top-16 h-fit pr-6">
        <h2 className="text-3xl font-bold">Com puc aconseguir la meva pagina web?</h2>
        <p className="text-gray-700 mt-2">Els nostres productes són el resultat d'una gran experiència, una comprensió clara de les tasques i una profunda immersió en el negoci del client. Fem tot el possible per trobar l'equilibri fluït entre l'enfocament experimental i una metodologia sòlida que utilitzem segons els reptes que cada nou projecte presenta. Un procés de desenvolupament d'aplicacions web racionalitzat ens permet fer possibles serveis de desenvolupament web personalitzats a preus assequibles i rendibles i crear programari de manera més ràpida i rendible sense deixar de ser el més transparent possible.</p>
      </div>

      {/* Timeline in the Center */}
      <div className="w-1/12 relative flex flex-col items-center">
        <div className="absolute w-1 bg-gray-300 h-full"></div>
        {timelineData.map((_, index) => (
          <div key={index} className="relative w-6 h-6 bg-gray-900 rounded-full mb-40 mt-20" />
        ))}
      </div>

      {/* Content on the Right */}
      <div className="w-full md:w-2/3 pl-6">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 relative ">
            <p className="text-gray-500 text-sm mt-10">{item.date}</p>
            <h3 className="text-lg font-semibold py-5">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

