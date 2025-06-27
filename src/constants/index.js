const navLinks = [
  {
    name: "Our Work",
    link: "#work",
  },
  {
    name: "Our Expertise",
    link: "#experience",
  },
  {
    name: "Our Team",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  {text: 'Ideas', imgpath: 'images/ideas.svg'},
  {text: 'Stories', imgpath: 'images/designs.svg'},
  {text: 'Visions', imgpath: 'images/concepts.svg'},
  {text: 'Creativity', imgpath: 'images/ideas.svg'},
  {text: 'Ideas', imgpath: 'images/ideas.svg'},
  {text: 'Stories', imgpath: 'images/designs.svg'},
  {text: 'Visions', imgpath: 'images/concepts.svg'},
  {text: 'Creativity', imgpath: 'images/ideas.svg'},
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 46, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "%", label: "Focus on Customization" },
  { value: 100, suffix: "%", label: "Satisfaction rate in our first year" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Precision in Every Detail",
    desc: "We don’t just plan events — we perfect them. From the tiniest flower placement to the final guest exit, every element is handled with care.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear & Consistent Communication",
    desc: "No surprises. We keep you in the loop at every stage — from idea to execution — ensuring your vision is always respected.",
  },
  {
    imgPath: "/images/time.png",
    title: "Punctual & Dependable Execution\n",
    desc: "Your event starts on time, runs on time, and ends with applause. We deliver every milestone exactly when you need it.",
  },
];

const techStackImgs = [
  {
    name: "Creative Design Team",
    imgPath: "/images/logos/cdt.png",
  },
  {
    name: "Event Planning & Coordination team",
    imgPath: "/images/logos/epct.png",
  },
  {
    name: "Program & Entertainment Curation team",
    imgPath: "/images/logos/pect.png",
  },
  {
    name: "On-Ground Execution Team",
    imgPath: "/images/logos/oget.png",
  },
  {
    name: " Marketing & Promotion Team (For Public Events)",
    imgPath: "/images/logos/mpt.png",
  },
];

const techStackIcons = [
  {
    name: "Creative Design Team",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Event Planning & Coordination team",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Program & Entertainment Curation team",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "On-Ground Execution Team",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: " Marketing & Promotion Team (For Public Events)",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Our jewellery brand launch felt like a premium red-carpet event. The ambience, lighting, and guest flow were flawless. The team knew exactly how to keep things elegant and organized.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Corporate Events  ",
    date: "Ideal for: Business conferences, product launches, award functions",
    responsibilities: [
      "Professional planning, stage setup, AV & logistics",
      "Speaker coordination, RSVP handling, and branding elements",
      "Smooth, punctual execution with an eye for detail",
    ],
  },
  {
    review: "They turned a simple birthday into a full-blown celebration! From the balloon decor to the themed cake table and games for kids, everything was perfectly arranged. It was stress-free and super fun — we couldn’t have asked for more.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Weddings & Personal Celebrations",
    date: "Ideal for: Weddings, engagements, anniversaries, birthdays",
    responsibilities: [
      "Themed decor, entry setup, lights & floral arrangements",
      "Guest management, food coordination, and entertainment",
      "Aesthetic design + emotion-driven experiences",
    ],
  },
  {
    review: "The farewell was unforgettable. These guys made the entire setup feel special — from the custom photo booth to the lights and last dance moment. The students were emotional and thrilled at the same time. Total win!",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Cultural & Youth Events",
    date: "Ideal for: College fests, music shows, community events",
    responsibilities: [
      "Artist coordination, stage lighting, sound, and vibe creation",
      "Game zones, merchandise booths, food court planning",
      "Coordination of competitions, performances & crowd flow",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: " Sarhaan Khan",
    mentions: "-Birthday girl's parent",
    review:
        "We wanted a small birthday celebration at home for our daughter, but what the team delivered felt straight out of a fairy tale. The balloon arch, themed cake table, fun games, and even a custom welcome board made the whole evening magical. The best part? We didn’t have to stress about a single thing. Everything was taken care of with a smile and such attention to detail. My daughter still talks about it, and the photos are just perfect!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Kaushik Raj Boruah",
    mentions: "- Event Guest",
    review:
        "Launching a new luxury jewellery brand meant everything had to reflect elegance, class, and style — and the event team delivered just that. From the ambient lighting to the layout, from the stage presentation to how guests were guided around — everything felt premium and thoughtful. The launch was not only smooth but also created a lasting impression on our invitees, influencers, and even press. We couldn’t have pulled it off without this team’s creativity and professionalism.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Dhritipriya Konwar",
    mentions: "- Event Guest",
    review:
        "Farewells are emotional, and we wanted it to be memorable for our students. This team didn’t just set up a party — they created an experience. There was a custom backdrop with every student’s name, soft lighting for speeches, a fun DJ set, and a beautifully decorated memory lane corner. They coordinated everything with minimal supervision and maximum creativity. The students danced, cried, laughed — and they left with big smiles and even bigger memories.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Arnav Aggarwal",
    mentions: "Host father",
    review:
        "Felt like they planned it with the same love and care we would’ve given. Our family had a beautiful day.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Aryan Rajkhowa",
    mentions: "- Client",
    review:
        "Elegant, efficient, and exactly what we needed. The event felt premium and completely stress-free.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Darshil Kejriwal",
    mentions: "- Client",
    review:
        "What impressed us most was how smoothly everything ran behind the scenes. Not one hiccup. Incredible team.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url:"https://www.instagram.com/sorteed_/",
    imgPath: "/images/insta.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
