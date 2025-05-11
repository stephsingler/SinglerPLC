const state = {
  practiceAreas: [
    {
      id: 0,
      title: "Franchise Law",
      description: "We represent exclusively franchisees and associations with regard to franchise matters. Our clients range from single-unit franchise owners to the nation's largest franchisee associations. We assist clients with negotiating agreements, resolving disputes and with day-to-day business issues as described within our other practice area descriptions.​"
    },
    {
      id: 1,
      title: "General Business",
      description: "We give our clients the needed advice and assistance to effectively run a business in today's regulatory and over- litigious environment. This includes: reviewing and drafting contracts; providing updates and advice concerning legislative changes and legal requirements affecting the client's business; and, representing clients before various administrative agencies."
    },
    {
      id: 2,
      title: "Finance & Entity Structuring",
      description: "We provide the information and expert advice necessary to structure legal entities, and which entity best suits each client's business objectives. Raising start-up and expansion capital is another area where we frequently assist clients. Our lawyers have many contacts in the banking arena and we can also assist with private placements of transactions of both a debt and equity nature. Once the entity is formed and capitalized, our lawyers continue to provide the necessary services to help or clients succeed in today's volatile business climate.​"
    },
    {
      id: 3,
      title: "Employment Law (CA only)",
      description: "We provide a wide range of services regarding employee relations, from creating custom employee handbooks to preparing stock compensation and employment agreements for senior executives. Our comprehensive knowledge of the employment relationship allows us to provide practical and effective counseling regarding employment issues, as well as aggressive representation in defending against employee lawsuits."
    },
    {
      id: 4,
      title: "Real Estate",
      description: "We offer clients a wide range of services relating to real estate matters. These include: drafting and negotiating commercial leases (for both landlords and tenants); financing and acquisition; development and construction (for owners, contractors and design professionals); Foreclosure (judicial and non-judicial) and, Boundary Disputes.​"
    },
    {
      id: 5,
      title: "Construction",
      description: "We advise owners, developers, contractors and design professionals with regard to negotiating and drafting construction or development agreements, as well as provide advice concerning mechanic's lien law issues and representation with regard to any disputes.​"
    },
    {
      id: 6,
      title: "Litigation",
      description: "Though our goal is to help clients avoid litigation wherever possible, the cold reality of today's business environment is that costly disputes will occur. When a dispute cannot be resolved informally, we aggressively advocate our client's interests in all types of commercial litigation, including representation in arbitration/mediation and administrative proceedings."
    },
    {
      id: 7,
      title: "Mediation/Negotiation",
      description: "When disputes arise, informal resolution is always preferable to ligation. A negotiated agreement costs far less, generally results in a better outcome, and avoids the significant time and aggravation of litigation. We have the breadth of experience necessary to serve as neutrals and advocates in disputes of all levels, whether between neighbors, large companies or system-wide franchise matters. This same skillset is equally useful in constructing deals to facilitate the growth of an enterprise. Whether you need an impartial third party or a zealous advocate, we have the experience and insight to help you accomplish your goals in the most cost effective manner."
    },
  ],
  ourAttorneys: [
    {
      id: 0,
      name: "Pete Singler",
      position: "Primary Principal / Managing Attorney",
      avatar: "https://i.imgur.com/EiYDEGC.jpg",
      bio: "Pete Singler is recognized as one of the country’s top franchise lawyers, devoting 35 years to representing franchisee associations, franchisees and small business owners.  He is member of Franchise Times’s “Hall of Fame”, a perennial “Legal Eagle” and a Martindale-Hubbell Client Distinction Award recipient (awarded to less than 1% of all lawyers). Above all, Pete values long-term relationships with his clients and helping them achieve long-term success.\n" +
          "\n" +
          "As summed up by a client, Pete is the “Perfect Lawyer. . .  Our company would not be as successful as it is without Pete guiding us and being in our corner.”\n" +
          "\n" +
          "Pete represents businesses of all sizes in virtually all industries, from sole proprietorships to publicly-traded companies. He is one of the few business lawyers in the country who represents exclusively franchisees regarding franchise matters.  Pete served as an Officer and Director of a multi-unit franchisee, giving him a truly unique perspective regarding the changing relationships and dynamics of franchising. He served as the Chairman of the American Franchisee Association's Board of Directors, giving him a wide perspective on issues facing franchisees across the nation. \n" +
          "\n" +
          "He has successfully negotiated several system-wide franchise agreements, always with the aim to foster mutually beneficial relationships so that franchisees and their franchisors can make the most of the system, for all concerned.   His work with Culligan franchisees was heralded as \"a model for other franchise systems.\" A licensed real estate broker and premium vineyard owner, Pete offers clients expertise regarding real estate acquisition, finance, and development, as well as counsel regarding the intricacies of winery and vineyard management. Pete also has extensive experience with \"accessibility\" and other ADA issues. He has been lecturing and advising businesses on this subject since 1990, assisting business owners in resolving hundreds of cases. Pete was the only lawyer invited by the United States House of Representatives to testify in support of federal franchise legislation before the Subcommittee on Administrative and Commercial laws in June 1999. \n" +
          "\n" +
          "Pete also represents multiple churches and non-profits, as a means of “giving back” to the community.\n" +
          "\n" +
          "A graduate of the University of Pennsylvania Law School, Pete also received formal business education from the Wharton School.\n",
      admissions: "California (#152922), Texas (#2414568)",
      education: "University of Pennsylvania Law School / Wharton (J.D. 1990); Pepperdine University (B.A. Political Science, B.A. Philosophy, Outstanding Graduate, Humanities, 1982)",
      practiceAreas: "Business Advancement and Strategic Planning, Franchise & Distribution, Restaurant, Entity Formation / Structuring, Real Estate / Leasing, Construction, Finance, Sales and Acquisitions, Negotiations / Mediation, Winery / Vineyard Management, Church & Non-Profit Organizations",
      significantAwards: "Franchise Times Halls of Fame, Martindale-Hubbell Distinguished Client"
    },
    {
      id: 1,
      name: "Thia Brooks",
      position: "Office Manager / Transactional support and Client Relations",
      avatar: "",
      bio: "Thia Brooks has been the heartbeat of Singler, PLC since 2007.   She is committed to\n" +
          "improving and adopting new policies and administrative systems that enhance the company and\n" +
          "that provide excellent customer service to our clients. Thia’s day-to-day duties include office administration & management, as well as maintaining financials and client billing. She is\n" +
          "available to assist you with any questions you may have.\n" +
          "\n" +
          "When not at work, Thia enjoys boating, traveling, hiking and spending time with family and\n" +
          "Friends.\n",
    },
    {
      id: 2,
      name: "Neema P. Desai",
      position: "Of Counsel",
      avatar: "",
      bio: "Neema P. Desai has a strong background in civil litigation and business counseling, with a mind towards anticipating, preventing and resolving disputes in a cost-effective manner.  She also has a deep understanding of healthcare law, wellness regulations, and business strategy, having worked at the intersection of law and the wellness industry.  Neema advises clients with an entrepreneurial perspective, having founded and serving as CEO of Kinnext, LLC, an online health and wellness platform.\n" +
          "Neema is known for her commitment to client advocacy, attention to detail, and ability to handle high-stakes legal matters with professionalism and integrity.\n",
      admissions: "Texas (#24067575), California (#262755), Illinois (#6294954), Washington (#43707)",
      education: "John Marshall School of Law (J.D. 2007), Cal State Fullerton (B.A. Political Science, 2000)",
      practiceAreas: "Commercial Litigation, Contracts, Real Estate, Healthcare/Wellness",
      languages: "English, Gujarati, Hindi"
    },
    {
      id: 3,
      name: "Laura L. Feil",
      position: "Paralegal",
      avatar: "",
      bio: "Laura L. Feil combines her experience as a Colombian lawyer with an entrepreneurial mindset and enthusiasm for business law.  Laura’s unique background allows her to approach legal challenges with precision, creativity, and practical insights. \n" +
          "A dedicated mother who brings to our practice valuable bilingual capabilities and cross-cultural knowledge. She excels at supporting our team and clients with diverse legal matters, leveraging her international legal education and entrepreneurial instincts to deliver exceptional service. Laura is a native Spanish speaker, fully fluent and capable of drafting, negotiating and translating high-level business and legal documents, expanding our firm’s capabilities to handle international transactions and serving native Spanish-speaking clients. \n" +
          "Laura embodies our firm’s commitment to excellence through her attention to detail, integrity, dedication, and responsive focus on our client’s needs.\n",
      admissions: "Abogada (Lawyer), Colombia",
      education: "Universidad Santo Tomás, Bucaramanga, Colombia; Business Marketing Certificate, Santa Rosa Junior College; Business Entrepreneurship Certificate, Santa Rosa Junior College",
      practiceAreas: "Assists with all practice areas, with emphasis on litigation, trademark, transactions with involving Latin-American countries / constituents",
      languages: "Spanish, English"
    }
  ],
  testimonials: [
    {
      id: 0,
      author1: 'Don Meredith',
      testimonial1: "Pete is by far the most well-versed and intelligently learned legal counsel I've ever worked with. He excells in one particular aspect: future consideration. He seems to have an ability to anticipate future actions and reactions on the part of the other parties to the matters at hand. That capacity provides added insight and ability to take more intelligent avenues as a client. I recommend his legal advice and counsel.",
      title1: "Meredith's Culligan Water",
      author2: 'Gregory Lamson',
      testimonial2: "Perfect Lawyer.\n" +
          "We have been fortunate to be represented by Singler Law for over 20 years for all matters, including acquisitions, sales, employment issues, franchise matters, general operations, real estate and corporate governance. Singler Law has blessed our company with sound moral reasoning, positive effective communication and always brings impeccable character. Singler law’s direction, which they have given, has always benefited our company financially and morally. They have been very helpful in all aspects of our ever-changing business. Singler Law is very helpful with all of our business and personnel needs. Their representation over the years has always been superior to any other company we have been involved with. Their understanding and work ethic is far superior. We feel that our company would not be as successful, if we did not have Singler law in our corner. If your looking for a firm that goes the extra mile and pays careful attention to details along the way, you need not look any further.",
      title2: "Lamson Investment Corp."
    },
    {
      id: 1,
      author1: "G David Reynolds III",
      testimonial1: "Pete's level of expertise excels beyond anyone else we have dealt with. In dealing with our franchisor, he seemed to be able to figure out all the scenarios that would be coming our way. He always guided us in the right direction.We highly recommend his legal advice.",
      title1: "Reynold's H2O Plus Inc.",
      author2: 'Mark Smith',
      testimonial2: "We retained Pete to get a different view of a very complex set of issues we were involved in. His thought process, situational critique and ultimate set of directional ideas were the most effective and progressive we had seen. I strongly endorse Pete.",
      title2: "Midas of Richmond",
    }
  ],
  franchises: [
    {
      id: 0,
      title: "Franchisee411",
      link: "",
      description: "An extensive information resource for Franchisees, Prospective Franchisees, and Franchisee Associations providing essential information and links to resources that can help them to successfully navigate their Franchise Relationship."
    },
    {
      id: 1,
      title: "The International Association of Franchisees and Dealers",
      link: "https://www.franchise-info.ca/",
      description: "An International trade association of franchisees and dealers."
    },
    {
      id: 2,
      title: "The American Assocaiation of Franchisees and Dealers",
      link: "https://www.aafd.org/aboutus.php",
      description: "The AAFD is a national non-profit trade association representing the rights and interests of franchisees and independent dealers throughout the United States."
    },
    {
      id: 3,
      title: "The American Franchisee Association",
      link: "http://www.franchisee.org/",
      description: "A national trade association of franchisees and dealers with over 16,000 members, ranging in size from one and two unit owners to larger multiple unit operators."
    },
    {
      id: 4,
      title: "California Restaurant Association",
      link: "https://www.calrest.org/",
      description: "The mission of the California Restaurant Association is to be the definitive voice of the California foodservice industry and to protect and promote its success. CRA serves as the indispensible resource for California restaurateurs."
    },
    {
      id: 5,
      title: "National Restaurant Association",
      link: "https://www.restaurant.org/Home",
      description: "The National Restaurant Association is a membership-based business association for the restaurant industry. With more than 37,000 members representing more than 175,000 restaurants, National Restaurant Association membership includes tableservice restaurants, quickservice outlets and cafeterias, as well as professionals and academic institutions associated with the industry."
    }
  ],
  governments: [
    {
      id: 0,
      title: "The U.S. Chamber of Commerce",
      link: "https://www.uschamber.com/",
      description: "The U.S. Chamber of Commerce is the world's largest business federation, representing nearly three million companies, 3,000 state and local chambers, 850 business associations and 87 American Chambers of Commerce abroad."
    },
    {
      id: 1,
      title: "The California Chamber of Commerce",
      link: "https://www.calchamber.com/Pages/default.aspx",
      description: ""
    },
    {
      id: 2,
      title: "The Federal Trade Commission",
      link: "",
      description: "Business Guidance"
    },
    {
      id: 3,
      title: "IRS Tax Info for Business",
      link: "",
      description: ""
    },
    {
      id: 4,
      title: "California State Government",
      link: "http://www.ca.gov/",
      description: ""
    },
    {
      id: 5,
      title: "California Courts",
      link: "http://www.courts.ca.gov/",
      description: ""
    },
    {
      id: 6,
      title: "California Secretary of State",
      link: "http://www.ss.ca.gov/",
      description: ""
    }
  ],
  legal: [
    {
      id: 0,
      title: "Martindale-Hubbell",
      link: "https://www.martindale.com/",
      description: "A research source for information about attorneys and law firms around the world."
    },
    {
      id: 1,
      title: "The State Bar of California",
      link: "http://www.calbar.ca.gov/",
      description: ""
    },
  ]
}
export default state;
