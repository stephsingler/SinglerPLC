const state = {
  practiceAreas: [
    {
      id: 0,
      title: "Franchise Law",
      description: "We represent exclusively franchisees and associations regarding franchise matters. Our clients range from single-unit franchise owners to the nation's largest franchisee associations. We assist clients with negotiating agreements, resolving disputes and with day-to-day business issues as described within our other practice area descriptions.​​",
      testimonial: "Pete and his firm have been invaluable in navigating the relationship between our franchisee association (CDANA) and our franchisor (Culligan USA). I would highly recommend him as a franchise attorney and as a visionary regarding franchisee/franchisor interaction.\n" +
          "C.R. Hall\n" +
          "Hall’s Culligan\n"
    },
    {
      id: 1,
      title: "Business Advancement / Strategic Planning",
      description: "With over 35 years’ experience as not only a business lawyer, but entrepreneur, Officer & Director of multi-million dollar restaurant franchise company with hundreds of employees, and a premium vineyard owner, Pete Singler has a wealth of knowledge on how (and sometimes how not) to do things to share with clients to enhance and make the best of their businesses.  Representing hundreds of business owners and associations across myriad industries, Pete has extensive contacts and can introduce clients whose businesses and services can complement each other, sometimes leading to distribution, licensing or strategic partnership arrangements.",
      testimonial: "I have known Pete for many years through work with our national dealers' organization. I have also hired both he and his firm for personal business consultation and legal advice. He is by far the most well-versed and intelligently learned legal counsel I've ever worked with. He excels in one particular aspect: future consideration. He seems to have an ability to anticipate future actions and reactions on the part of the other parties to the matters at hand. That capacity provides added insight and ability to take more intelligent avenues as a client. I recommend his legal advice and counsel.\n" +
          "Don Meredith, President\n" +
          "Meredith’s Culligan Water\n"
    },
    {
      id: 2,
      title: "General Business",
      description: "We give our clients the needed advice and assistance to effectively run a business in today's regulatory and over- litigious environment. This includes: reviewing and drafting contracts; providing updates and advice concerning legislative changes and legal requirements affecting the client's business; and, representing clients before various administrative agencies.",
      testimonial: "We have been fortunate to be represented by Singler Law for some 30 years for all matters, including acquisitions, sales, employment issues, franchise matters, general operations, real estate and corporate governance. Singler Law has blessed our company with sound moral reasoning, positive effective communication and always brings impeccable character. Singler law’s direction, which they have given, has always benefited our company financially and morally. They have been very helpful in all aspects of our ever-changing business. Singler Law is very helpful with all of our business and personnel needs. Their representation over the years has always been superior to any other company we have been involved with. Their understanding and work ethic is far superior. We feel that our company would not be as successful, if we did not have Singler law in our corner. If you’re looking for a firm that goes the extra mile and pays careful attention to details along the way, you need not look any further. \n" +
          " \n" +
          "Scott Lamson, CEO\n" +
          "Lamson Investment Corp \n"
    },
    {
      id: 3,
      title: "Finance & Entity Structuring",
      description: "We provide the information and expert advice necessary to structure legal entities, and which entity best suits each client's business objectives. Raising start-up and expansion capital is another area where we frequently assist clients. Our lawyers have many contacts in the banking arena, and we can also assist with private placements of transactions of both a debt and equity nature. Once the entity is formed and capitalized, our lawyers continue to provide the necessary services to help our clients succeed in today's volatile business climate.​",
      testimonial: "Singler Law was an absolute game-changer in helping me establish Strative LLC. From the very beginning, their team provided top-notch advising and support, making the entire process seamless. Pete, in particular, was incredibly professional, responsive, and knowledgeable. He answered all my questions with clarity and ensured that every step—from legal structuring to paperwork—was handled efficiently. Thanks to Singler Law, I was able to launch my business with confidence, knowing I had a strong legal foundation. I highly recommend their services to any entrepreneur looking for expert guidance!\n" +
          "Veronica Grimes, Owner of Strative LLC\n" +
          "\n" +
          "Our church has enjoyed a 30-year relationship with the Singler law firm.  Pete guided us through complex bond financing, helped us with a variety of contracts and leases, and most importantly, was responsible for helping us obtain a use permit for our current church property in Sonoma County. The relationship we have shared over the years has helped our church accomplish its goals and stay on mission. The relationship has been invaluable.\n" +
          " Bret Avlakeotes, Senior Pastor\n" +
          "Spring Hills Community Church\n"
    },
    {
      id: 4,
      title: "Employment Law (CA only)",
      description: "We provide a wide range of services regarding employee relations, from creating custom employee handbooks to preparing stock compensation and employment agreements for senior executives. Our comprehensive knowledge of the employment relationship allows us to provide practical and effective counseling regarding employment issues, as well as aggressive representation in defending against employee lawsuits.",
      testimonial: ""
    },
    {
      id: 5,
      title: "Real Estate / Construction",
      description: "We offer clients a wide range of services relating to real estate matters. These include: drafting and negotiating commercial leases (for both landlords and tenants); financing and acquisition; development and construction (for owners, contractors and design professionals); Foreclosure (judicial and non-judicial); Mechanic’s lien issues; and representing Contractors and Design Professionals before regulatory bodies, such as the CSLB.​​",
      testimonial: ""
    },
    {
      id: 6,
      title: "Litigation",
      description: "Though our goal is to help clients avoid litigation wherever possible, the cold reality of today's business environment is that costly disputes will occur. When a dispute cannot be resolved informally, we aggressively advocate our client's interests in all types of commercial litigation, including representation in arbitration/mediation and administrative proceedings.",
      testimonial: "We hired Pete to resolve a franchise issue with AFS (Collision on Wheels). Originally, we all thought it would be an easy lawsuit but unfortunately was not the case. Pete and his staff led us through this process, confident that we would prevail. Bryan and Pete were with us all the way. They never gave up on us, even through multiple trips to Detroit in the winter. We could not have had a better law firm at our backs. \n" +
          "Marian Tankersley\n"
    },
    {
      id: 7,
      title: "Mediation/Negotiation",
      description: "When disputes arise, informal resolution is always preferable to ligation. A negotiated agreement costs far less, generally results in a better outcome, and avoids the significant time and aggravation of litigation. We have the breadth of experience necessary to serve as neutrals and advocates in disputes of all levels, whether between neighbors, large companies or system-wide franchise matters. This same skillset is equally useful in constructing deals to facilitate the growth of an enterprise. Whether you need an impartial third party or a zealous advocate, we have the experience and insight to help you accomplish your goals in the most cost-effective manner.",
      testimonial: "We retained Pete to get a different view of a very complex set of issues we were involved in. His thought process, situational critique and ultimate set of directional ideas were the most effective and progressive we had seen. \n" +
          " \n" +
          "I strongly endorse Pete.\n" +
          "\n" +
          "Mark Smith, President\n" +
          "Midas of Richmond\n" +
          "\n" +
          "\n" +
          "Pete was hired by the Culligan Dealers Association of North America (CDANA), an association of independent businesspeople who operate their water treatment companies under a Culligan International franchise agreement. His purpose was to help a chosen group of dealers negotiate a new franchise agreement being offered by their franchisor. \n" +
          " \n" +
          "Even though it took five long years to negotiate the new franchise, it was Pete's knowledge of franchising and expertise in negotiation that brought a successful result for the Culligan Dealer System. The new franchise gave the dealers equity ($10.5 million) within the parent Culligan company. Dealer Advisory Council (DAC) gained consent authority about issues that materially affected their business instead of just advisory input. With many other concessions made within the agreement by the franchisor, Pete's final statement was \"Its The Best Damn Franchise Agreement Out There.” \n" +
          " \n" +
          "Pete's ability to work with over 400 independent dealers along with the negotiating team (with very large egos) was monumental in itself. He was recognized and honored for his outstanding efforts at CDANA's Joint Annual Convention held in San Francisco in February 2006 with over 742 attendees. \n" +
          "Mike Hebert, President\n" +
          "Culligan Water Conditioning, Inc.\n" +
          "Co-Founder, CDANA\n"
    },
    {
      id: 8,
      title: "Church & Non-Profit",
      description: "We are pleased to help with formation and 501(c) exemption applications, mergers, property-tax issues, facility management and construction, governance and all the general day-to-day issues affecting Churches and Non-Profits.",
      testimonial: "Singler Law has been an invaluable partner in bringing Heroes Connect to life. Navigating the complexities of establishing a veteran-focused nonprofit can be overwhelming, but Pete and his team made the process smooth and manageable. Pete is truly a master of the legal world—his expertise, professionalism, and unwavering support have been instrumental in ensuring our organization is set up for success. Even beyond the initial formation, Singler Law continues to provide us with the guidance we need to thrive. I highly recommend their services to any nonprofit looking for a knowledgeable and dedicated legal team!\n" +
          "\n" +
          "Maj. C.A. Grimes, USMC\n" +
          "Chairman of Heroes Connect\n" +
          "\n" +
          "\n" +
          "We Cannot Recommend Singler Law Highly Enough!!\n" +
          "We were referred to Pete Singler many years ago by our finance bond originator, as we needed a securities lawyer to help us through that complex process, and he helped us secure financing to construct our new church facility.  Pete also had extensive experience with construction contracts and he guided us through that process as well.  Unfortunately, the relationship with the general contractor soured, and we had to replace them to finish the project. Pete’s firm guided us through that very long and arduous process as well, and we eventually ended up in litigation with the original contractor.    Pete was extremely knowledgeable, available, and strategic, but always with the goal of a resolution that would allow us to get on with our passion for being a church family that cared about our community.  Since then, Pete has helped us with other legal issues, including the legal merger with another local church, ECHO.Church.  Because of Pete’s knowledge, strategic ability, interpersonal skills, empathy, and honest risk assessment, we wouldn’t consider using any law firm other than Singler Law.\n" +
          " \n" +
          "Linnéa Hedgecock, Pastor of Administration\n" +
          "Crossroads Church of Fremont\n"
    },
    {
      id: 9,
      title: "Restaurant / Food Service",
      description: "We have represented owners of thousands of restaurants across the country, from high-end dining to fast-food franchises, family run eateries and everything in between, including owner / operators of McDonald’s®, Pizza Hut®, Coldstone®, Round Table Pizza®, Hardees®, Jack in the Box®, Baskin Robbins®, Taco Bell®, Dunkin Donuts®, and many others.   Pete was a principal owner, officer and director of a multi-unit restaurant franchisee, with over 300 employees, so understands firsthand the unique and immensely demanding needs of operating a restaurant business.",
      testimonial: "“Perfect Lawyer”.  We have been fortunate to be represented by Singler Law for over 20 years for all matters, including acquisitions, sales, employment, real estate, franchise, and general business.  Their representation has been far superior to any other firm we have ever used, or sat across the table from us.  Our company would not be as successful as it is without Pete guiding us and being in our corner. \n" +
          "Gregory Sinigiani, President\n" +
          "Sinigiani Investment Corp. (Operator McDonald’s restaurants)\n"
    },
    {
      id: 10,
      title: "Winery / Vineyard Management",
      description: "Having grown up working in the vineyards and wineries of Northern Napa Valley, and now owner of a premium Pinto Noir Vineyard, Pete Singler knows the ins and outs of every facet of vineyard management and operations, as well as the business of operating wineries and related issues.  We represent wineries, vineyard management companies and FLCs in negotiating and preparing grape purchase contracts, distribution agreements, management contracts, and the general issues associated with operating these businesses.  You might even find Pete on a tractor at 4:00 a.m. helping out with a harvest when the grapes need to get to the winery on time and at temperature!",
      testimonial: "Peter and his team helped us to quickly obtain an attachment order against a customer with an extensive list of unpaid invoices to secure the amount owed to us. He immediately jumped into work-mode when we came to him with our complaint and worked tirelessly until the money was in our account. Peter drafted management and farm labor contracting agreements for us that are very easy to use and us, clearly define our services and protect us from payment and other issues. He has also set us up with easy-to-understand grape purchase and sale agreements. Peter has been very helpful with other customer and contractor/employment related manners as well. We are very appreciative of his expertise and determination.\n" +
          "Jana Rojas\n" +
          "Napa Second Generation, Inc.\n" +
          "Rojas Vineyards and Winery, LLC.\n"
    },
    {
      id: 11,
      title: "Health, Wellness & Lifestyle",
      description: "We help clients in the burgeoning Health & Wellness segment with entity structuring and positioning, compliance, trademark, finance and related matters. Our clients range from fitness centered franchise businesses, to organic skin-care distribution, day-spas, publishers, content producers and other such businesses focused on promoting healthy and productive lifestyles.",
      testimonial: ""
    }
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
