const projets: {
    text: string;
    id: string;
    list: {
      id: string;
      titre: string;
      organizer: string;
      place: string;
      date: string;
      date_range: string[];
      img: string;
      description: string;
    }[];
  }[] = [
    {
      text: "Manifestations Zonales",
      id: 'manifestations',
      list: [
        {id:"rzpa", titre:"2ème Réunion Zonale des Présidents de la Zone A", organizer:"JCI Manouba & JCI Tunisie-Zone A", place:"Salle des fêtes Nedra à Manouba", date:"16 Juillet, 2023", date_range:["2023-07-16"], img:"./assets/img/programmes/manifestations/rzpa.jpg", description:"La participation de la jeune chambre économique du Bardo au 2ème RZP&2ème CRF de la zone A qui se sont déroulés le 16 juillet 2023 à la salle des fêtes Nedra à Manouba.\nDurant cette journée, JCI BARDO était remarquable par son engagement\nindéfectible envers l\'efficacité et la réalisation de résultats concrets qui sont:\n• L\'OLM LA plus efficace de la zone A durant la 2ème trimestre (Avril - Mai- Juin)\n• Top 5 l\' OLM la plus active des formations durant le 1er semestre.\n• Top 3 l\'OLM de nombres de formations (Avril-Mai-Juin)\n• Cyrine Ouertateni est la 2ème formatrice plus remarquable de la zone A .\n• Cyrine Ouertateni la formatrice la plus active en Co-formation durant les mois Avril-Mai-Juin\n• Cyrine Ouertateni est la 2ème formatrice la plus remarquable durant la période Avril-Mai-Juin.\n• Wissem Sammoud le 2ème formateur le plus actif en Co-formation."},
        {id:"assisedeprintemps", titre:"Les Assises de Printemps", organizer:"JCI Bardo & JCI Tunisie-Zone A", place:"Yasmine Hammamet", date:"18-19 Mars, 2023", date_range:["2023-03-18", "2023-03-19"], img:"./assets/img/programmes/manifestations/assisesdeprintemps.jpg", description:"Les Assises de printemps 2023 de la Zone A, ont été organisées par la jeune chambre économique du Bardo et qui été déroulée à l’hôtel Hammamet Garden Resort & Spa le 18-19 mars 2023,  par la présence de 450 participants.\nLe programme des assises 2023 à était diviser sur deux jours\n1er journée : Samedi le 18 mars 2023 :\nLe programme a été ouvert avec l’accueil et l’inscription qui s\'est prolongé tout au long de la journée entre 12h et 17h.\nOn a diffuser l’inscription sur 5 stands : \nStand d’inscription simple et 3 stands pour l’inscription et le paiement et stand pour l’inscription VIP.\nCet événement a été marqué par le déroulement des compétitions final des art oratoire et débat.\nAinsi par 2 formations :\n*Formation SESSION OFFICIELLE LEADERSHIP EFFICACE animée par \"BELHASSEN JOUINI\”\n*Workshop JCI RISE animée par \"ZAKARIA SATTOURI\".\nUne soirée des récompenses à été marqué par la partition des récompenses sur les OLM\’s\nLes fruits du travail sont toujours associés à de grands efforts.\nEt dans cette occasion des Assises de printemps , la Jeune Chambre économique du Bardo a obtenir deux récompense au niveau de l\’échelle zonale :\n*l'OLM la plus efficace de la zone A au niveau d'échelle Zonale \n*Meilleur projet à long terme du développement communautaire.\n2ème Journée : Dimanche le 19 mars 2023\nLa deuxième journée à été marqué par la déroulement d’assemblée générale.\nLes assises de printemps 2023 a été contribuer à avec le soutien de 11 sponsors et 3 passage radio."}
      ]
    },
    {
      text: "Projets Locaux",
      id: 'projets_locaux',
      list: [
        {id:"ecovertemarchevert", titre:"Eco-verte 2.0 : Marché-vert Foire Bio", organizer:"JCI Bardo & Municipalité du Bardo", place:"Le Bardo", date:"24 Septembre, 2023", date_range:["2023-09-24"], img:"./assets/img/programmes/projetslocaux/marche-vert.jpg", description:"La Jeune Chambre Internationale du Bardo, en\npartenariat avec la Municipalité de Bardo a organisé\nun événement intitulé « Marché Vert » le 24 Septembre à 9h devant Monoprix de l\'avenue Habib\nBourguiba Bardo.\n\nDans ce cadre des exposants proposeront des produits\nécologiques naturels et d\'autres à partir des matières\nou déchets recyclés afin d\'encourager la\ncommunauté et les habitants à l\'importance de la\npréservation de notre planète pour les générations futures."},
        {id:"emccloture", titre:"Entrepreneurship Masterclass 3.0 : Cérémonie de clôture", organizer:"JCI Bardo & INJAZ Tunisie", place:"Maison des jeunes Bortal", date:"04 Juin, 2023", date_range:["2023-06-04"], img:"./assets/img/programmes/projetslocaux/cloture emc.jpg", description:"La Jeune Chambre Économique du Bardo a récemment organisé une cérémonie de clôture toute particulière de notre projet Entrepreneurship Masterclass 💼, auquel croit fermement notre cher partenaire Injaz Tunis, qui ne cessera de soutenir ce noble projet visant le développement économique. Soyez bienvenue à la maison des jeunes du Bardo le dimanche 4 juin 2023 pour soutenir les entrepreneurs juniors et encourager ce genre d'impact positif sur l'ensemble de la communauté."},
        {id:"smallbusinessexpo", titre:"معرض للمشاريع الصغرى", organizer:"JCI Bardo & ANETI", place:"Le Bardo", date:"02 Juin, 2023", date_range:["2023-06-02"], img:"./assets/img/programmes/projetslocaux/expo.jpg", description:"La Jeune Chambre Économique du Bardo s'implique activement dans l'organisation de la Journée d'Exposition des Petits Projets le 2 juin 2023 avec le Bureau de l'Emploi et du Travail Indépendant de Bardo ANETI. Cette initiative vise à promouvoir et soutenir les jeunes entrepreneurs locaux en mettant en valeur leurs réalisations et en bénéficiant des expériences de jeunes entrepreneurs. En tant que JCI Bardo, nous avons été invités à soutenir l'organisation de cette journée d'exposition. Notre engagement consistera à animer des stands pour les participants et les visiteurs afin d'inciter les jeunes à acquérir des compétences pour faciliter l'émergence de projets prometteurs."},
        {id:"santesexuelle", titre:"GrowUP : Journée de sensibilisation sur la santé sexuelle et reproductive", organizer:"JCI Bardo", place:"Le Bardo", date:"19 Mai, 2023", date_range:["2023-05-19"], img:"./assets/img/programmes/projetslocaux/santesexuelle.jpg", description:"Le 19 Mai 2023, La Jeune Chambre Économique du Bardo a organisé en collaboration avec ATL MAT SIDA TUNIS une 2ème Journée dans le projet 'GROW UP' dans le cadre de sensibilisation sur la sexualité et la reproduction qui s'est déroulée au Lycée Bayrem Tounsi Bardo.\nL'objectif de cette journée est de sensibiliser les jeunes sur les maladies sexuellement transmissibles et les moyens de prévention."}
      ]
    },
    { 
      text: "Projets Internationaux",
      id: 'projets_internationaux',
      list: [
        {id:"letstalkglobally1", titre:"Let's Talk Globally", organizer:"JCI Aleppo", place:"sur Google Meet", date:"21-28 Août | 04-11 Septembre, 2023", date_range:["2023-08-21", "2023-08-28", "2023-09-04", "2023-09-11"], img:"./assets/img/programmes/projetsinternationaux/talkglobally.jpg", description:"هل أنتم جاهزون لرحلة حول العالم وانتم خلف شاشاتكم؟!\n من منّا لم يحلم يوماً بالسفر حول العالم للتعرّف على جميع الأماكن الجميلة فيه؟ من منّا لم يرغب في تجربة التعرّف على ثقافات وعادات وتقاليد الناس؟\n من هنا أتت فكرة Let\’s Talk Globally لنتمكّن من تجربة الثقافات الأخرى دون حتى الحاجة إلى مغادرة بيوتنا!\n حيث ترتكز الفكرة الأساسية في استخدام الانترنت كوسيلة لاختصار المسافات بين الناس عن طريق إقامة عدة جلسات بين كل من:\n الغرفة الفتية الدولية حلب (سورية) -الغرفة الفتية الدولية باردو (تونس) - الغرفة الفتية الدولية السويداء (سورية) - الغرفة الفتية الدولية طرطوس (سورية) - الغرفة الفتية الدولية فيلا ماريا (الأرجنتين) -الغرفة الفتية الدولية مانشستر (بريطانيا) - الغرفة الفتية الدولية مراكش(المغرب).\n تقدم كل غرفة فيها عرضاً تقديمياً في جلسة يتحدث فيها المشاركون فيها الأصدقاء عن الموسيقى في بلدهم، العادات والتقاليد في المناسبات الرسميّة، الأطعمة الشهيرة لديهم، أهم الأماكن الأثرية والسياحية والدينية، بالإضافة الى التعرف على بعضهم البعض وخلق روابط الصلة المتينة والتعرف على صورة البلد وأهله بشكل أفضل كأنك قمت بزيارته وأنت جالس في المنزل مع تصحيح بعض الصور النمطيّة عن البلدان المشاركة.\nAre you ready for a trip worldwide, and you\'re behind your screens?\nWho never dreamed of traveling the world to learn about all the beautiful places in it? Who wanted to experience something other than learning about people\'s cultures, customs, and traditions?\nTherefore the idea of Let\'s Talk Globally is to experience other cultures without leaving our homes!\nThe basic idea is to use the Internet as a means of shortening people\'s distances by holding several sessions between:\nJCI Aleppo   الغرفة الفتية الدولية حلب (Syria) - JCI Bardo(Tunisia) - JCI Lusaka (Zambia) - JCI Marrakech (Morocco) - JCI Manchester JCI(UK) - JCI Sweida   الغرفة الفتية الدولية السويداء (Syria) - JCI Tartus (Syria) - JCI Villa María (Argentina).\nEach Organization presents a presentation at a session where friends talk about music in their country, habits, and traditions at official events, their famous foods, and the most important archaeological, tourist, and religious places, In addition to getting to know each other and creating strong links and better familiarize yourself with the image of the country and its people as if you had visited it while sitting at home while correcting some stereotypes about the participating countries.\nJCI BARDO JCI Lusaka JCI Tartus JCI Villa María JCI Manchester JCI Sweida   الغرفة الفتية الدولية السويداء JCI Marrakech"},
        {id:"ecoverteecobleu", titre:"Eco-verte 2.0 : Eco Bleue", organizer:"JCI Bardo", place:"sur Google Meet", date:"13-15 Mars, 2023", date_range:["2023-03-13", "2023-03-15"], img:"./assets/img/programmes/projetsinternationaux/ecoverte13-15mars.jpg", description:"🟢 Nous avons lancé la 2ème partie de projet \" Eco-verte 2.0 \" dans le cadre de la conférence internationale en ligne intitulée \"Eco-bleue\" en collaboration avec Relief Action International (RAI).\nLe forum s\'est déroulé sur deux journées le 13 et le 15 Mars 2023\noù nous avons attaqué plusieurs sujets intéressants liés à l\'impact des activités économiques liées aux océans, aux mers et à leurs côtes et la préservation de l\'environnement et la biodiversité."}
      ]
    },
    {
      text: "Formations & Forums",
      id: 'formations_forums',
      list: [
        {id:"ecoverteearthforum", titre:"Eco-verte 2.0 : Resilient earth Forum", organizer:"JCI Bardo & Club'y & Youth", place:"Le Bardo", date:"18 Août, 2023", date_range:["2023-08-18"], img:"./assets/img/programmes/formationsetforums/earth-forum.jpg", description:"Dans le cadre de son projet 'Éco-verte 2.0', La Jeune Chambre Économique du Bardo a organisé, le 18 Août 2023 à 14H au Club de la Jeunesse du Bardo, en partenariat avec le mouvement Youth For Climate Tunisia - Community 'RESILIENT EARTH FORUM'. La journée s'est ouverte avec la projection du film 'The 11th Hour' qui a été suivie par une table ronde où les enjeux environnementaux abordés par le film ont été discutés. Nous avons fini notre forum par une séance de cours de calligraphie arabe. On tient à remercier sincèrement club'y bardo pour l'aimable accueil ainsi que nos partenaires. Nous tenons également à remercier nos chers membres pour leur participation active à cette journée."},
        {id:"microsoft2", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", place:"sur Zoom", date:"18 Août, 2023", date_range:["2023-08-18"], img:"./assets/img/programmes/formationsetforums/micro-jci.jpg", description:"Forum intitulé \" Microsoft by JCI \" qui a eu lieu le\n15,17,18 Août 2023 sur Google Meet, en collaboration\navec INJAZ Tunisia\n\nCette forum en ligne s\'est déroulé sur le pack Microsoft\nOffice est spécialement dédiée pour les membres de la JCI\nqui veulent acquérir de nouvelles compétences\nprofessionnelles. Elle couvre tous les outils indispensables\npour travailler efficacement : Word, Excel, PowerPoint,\nOutlook..\nanimé par nos chers formateurs cyrine ouertarteni et\nWissem Sammoud."},
        {id:"microsoft1", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", place:"sur Zoom", date:"15, 17, 18 Août, 2023", date_range:["2023-08-15", "2023-08-17", "2023-08-18"], img:"./assets/img/programmes/formationsetforums/ev-micro.jpg", description:"\"La formation est l\'essence de tout succès\"\nRetour en images sur le forum intitulé \" Microsoft by JCI\" qui a eu lieu le 15,17,18 Août 2023 sur Google Meet, en collaboration avec INJAZ Tunisia  et organisé par Bardo, JCI OLM Oued Ellil, JCI Tebourba, JCI jedaida, JCI France Ville , JCI El Battan , JCI Les Jardins, JCI La Marsa, JCI IBN Khaldoun , JCI Leaders Beb Souika , JCI  OLM  Manouba , JCI nouvelle medina , JCI Mornaguia.\nCe forum a visé le programme de Microsoft  qui est spécialement dédié aux membres de la JCI qui veulent acquérir de nouvelles compétences professionnelles.\nElle couvre tous les outils indispensables pour travailler efficacement : Word, Excel, PowerPoint, Outlook..\nanimé par nos chers formateurs سيرين الورتتاني  et Wissem Sammoud\nOn tient vivement à les remercier pour leur professionnalisme.\nOn a été honoré par l\'intervention de notre vpf de la zone A dans la journée de l\'ouverture,\nNous tenons également à remercier nos chers participants pour leur engagement et leur confiance."},
        {id:"projectmanagement", titre:"Session recommandée: formation project-management", organizer:"JCI Bardo", place:"Le Bardo", date:"13 Août, 2023", date_range:["2023-08-13"], img:"./assets/img/programmes/formationsetforums/session-rec.jpg", description:"Retour en images sur la session recommandé intitulée \" 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 \" qui a eu lieu 𝑫𝒊𝒎𝒂𝒏𝒄𝒉𝒆 13 𝑨𝒐𝒖𝒕 2023 à la 𝑴𝒖𝒏𝒊𝒄𝒊𝒑𝒂𝒍𝒊𝒕𝒆́ 𝒅𝒖 𝑩𝒂𝒓𝒅𝒐 , animée par nos chers formateurs 𝑵𝒂𝒔𝒔𝒆𝒓𝒆𝒅𝒅𝒊𝒏 𝑴𝒆𝒄𝒉𝒓𝒊 et 𝑪𝒚𝒓𝒊𝒏𝒆 𝑶𝒖𝒆𝒓𝒕𝒂𝒕𝒆𝒏𝒊 qu'on tient par cette occasion à les remercier pour leurs professionnalisme et leurs efforts déployés.\nSans oublier de remercier nos chers membres pour leurs engagements pour faire réussir le déroulement de la formation."},
        {id:"cafetalkpsychologie", titre:"Cafe Talk : Psychologie", organizer:"JCI Bardo", place:"Le Bardo", date:"05 Août, 2023", date_range:["2023-08-05"], img:"./assets/img/programmes/formationsetforums/ev-talk.jpg", description:"Retour en images sur le Café Talk sous le thème \" Café Talk... هيا نحكيو Psychologie \" qui a eu lieu 𝐒𝐚𝐦𝐞𝐝𝐢 5 𝐀𝐨𝐮̂𝐭  2023 dans 𝐥𝐞 𝐜𝐚𝐟𝐞́ 𝐁𝐨𝐧𝐳𝐚𝐢 𝐁𝐚𝐫𝐝𝐨. \nLe café talk a été animée  par l'intervention de nos chers psychologues 𝐌𝐚𝐫𝐚𝐦 𝐃𝐨𝐠𝐡𝐫𝐢  et 𝐑𝐚𝐡𝐦𝐚 𝐂𝐡𝐚𝐢𝐛𝐢 , qui ont partagé leurs connaissances et leurs expériences pour permettre aux membres de connaître les maladies mentales, résoudre les difficultés d’ordre psychique . \npar cette occasion, On tient à les remercier pour leurs professionalismes et leurs soutiens psychologiques . \nSans oublier de remercier nos chers membres pour leurs engagements."},
        {id:"canadianresume", titre:"Formation the A B C’s of a Canadian Resume", organizer:"JCI Bardo", place:"sur Google Meet", date:"02 Août, 2023", date_range:["2023-08-02"], img:"./assets/img/programmes/formationsetforums/canadian-resume.jpg",description:"Retour en images sur la session officielle intitulée \" 𝐓𝐡𝐞 𝐀𝐁𝐂\'𝐬 𝐨𝐟 𝐚 𝐂𝐚𝐧𝐚𝐝𝐢𝐚𝐧 𝐑𝐞𝐬𝐮𝐦𝐞  \" qui a eu lieu 𝐌𝐞𝐫𝐜𝐫𝐞𝐝𝐢 2 𝐀𝐨𝐮̂𝐭  2023 sur 𝐆𝐨𝐨𝐠𝐥𝐞 𝐌𝐞𝐞𝐭 . \nCette Formation a été animée animée par notre chére Formatrice 𝐘𝐨𝐬𝐫𝐚 𝐁𝐞𝐧 𝐀𝐛𝐝𝐚𝐥𝐥𝐚𝐡 ,\nqui a partagé ses connaissances et son expérience pour permettre aux membres de connaître les types de Resume le plus répandues, les parties d\'un résumé, les caractéristiques d\'un Cv canadien et les erreurs à éviter. \npar cette occasion, on tient à  remercier notre chère formatrice pour leur professionnalisme et leur efforts tous au long de la formation. \nSans oublier de remercier nos chers membres pour leurs engagements pour faire réussir le déroulement de la formation."},
        {id:"jcipresenter", titre:"Formation Session Officielle JCI Presenter", organizer:"JCI Bardo", place:"Le Bardo", date:"21 Mai, 2023", date_range:["2023-05-21"], img:"./assets/img/programmes/formationsetforums/jci-presenter.jpg", description:"Etres plus performant lors de la réalisation d'une présentation lors de la moitié du chemin\"\n\nDans ce cadre, la Jeune Chambre économique du Bardo a organisé, le 21 mai 2023, la session officielle intitulée \"JCI Présenter\" au Centre Integré de la Jeunesse et de l'Enfance Le Bardo. La formation traitera les thèmes suivants :\n\nOrganiser un message pour le rendre impactant.\nApprendre plusieurs techniques pour marquer les esprits lors de l\'intervention à l\'orale et plusieurs manières de convaincre définitivement l\'auditoire.\n\nCette journée de 12 heures de travail intense est animée par nos très chers formateurs \"Insaf Ayari\" \"الورتتاني سيرين\" et \"Wissem Sammoud\"."},
        {id:"communicationdansolm", titre:"Formation La Communication dans l'OLM", organizer:"JCI Bardo", place:"Le Bardo", date:"30 Avril, 2023", date_range:["2023-04-30"], img:"./assets/img/programmes/formationsetforums/la-communication-dans-olm.jpg", description:"Formation \"La Communication dans l\'OLM \"\norganisée par la jeune chambre économique du\nbardo le 30 Avril 2023, au Centre Integré de la\nJeunesse et de l'Enfance Le Bardo , animée par\nnos chers formateurs Wissem Sammoud et Cyrine Ouertateni.\n\nLe but de cette formation est de mieux\ncomprendre la communication dans l\'OLM, le\nrôle du parrain et marraine, les erreurs à éviter dans la communication."},
        {id:"ellama", titre:"اللمة", organizer:"JCIs", place:"Médina de Tunis", date:"17 Avril, 2023", date_range:["2023-04-17"], img:"./assets/img/programmes/formationsetforums/lama.jpg", description:"Forum national organisé par les jeunes chambres\néconomiques Bardo, Bekalta,El Manar, El battan,\nFrance Ville, Fouchena, Gafsa, Isi Ariana\n,Khaznadar ,Ksar Hlel, Kairoun, Leaders Beb Souika, La Goulette et Kram, Menzel Bourguiba,\nMahdia, Metline, Menzel Abdrahmen, Menzel Hor, Metlaoui, Morneguia, Morneg,\n\nSbikha,Sejnane Tozeur, Zaghouan El Medina,\nZaghouan et Zahrouni\n\nintitulé \"Ramadan Progress\" au mois du Ramadan\nen ligne sur le plateforme Discord."},
        {id:"jayceespath", titre:"Formation Jaycee's Path", organizer:"JCI Bardo", place:"Le Bardo", date:"26 Février, 2023", date_range:["2023-02-26"], img:"./assets/img/programmes/formationsetforums/jaycees-path.jpg", description:"Retour en images sur le journée de formation \"JAYCEES Path\"  organisée par la jeune chambre économique du bardo le 26 février 2023, à la municipalité du bardo, animée par nos chers formateurs Alla Eddine Rezgui, Wissem Sammoud et Cyrine Ouertateni.\n\nLe but de cette formation est de mieux comprendre l'historique , le mission et la vision de la JCI, les activités afin que les membres puissent comprendre leur parcours dans l\'organisation.\n\nDurant cette formation on a été honoré par la présence de :\nnotre cher Président national : Mourad Hidri\nCher VPE de la Zone A Ons Meftahi\nCher Conseiller du protocole de la zone A : Oussema Ben Ali Ferjani\n\nPendant la formation, nous étions surpris par la visite de l\'animateur de télévision Elhiwar Ettounsi et le journaliste Sami Bennour ."}
      ]
    }
]

const blogs: {
  id: string;
  titre: string;
  organizer: string;
  place: string;
  date: string;
  date_range: string[];
  img: string;
  description: string;
}[] = [
  {id:"letstalkglobally", titre:"Let’s Talk Globally : Second Week", organizer:"JCI Aleppo", place:"sur Google Meet", date:"", date_range:[], img:"./assets/img/detail/glob2.jpg", description:"أقلعت طائرتنا الإلكترونية في اسبوعها الثاني و ذلك يوم 28 اوت 2023 على الساعة السادسة مساءاً بتوقيت تونس في رحلة عبر الحدود تم التعرف من خلالها على العادات والتقاليد التي تمثل هويّة كل دولة من الدول المشاركة في المنتدى العالمي\" let's talk Globally \" الذي انتظم على منصة Google Meet بالشراكة مع: الغرفة الفتية الدولية حلب (سورية) -الغرفة الفتية الدولية باردو (تونس) - الغرفة الفتية الدولية السويداء (سورية) - الغرفة الفتية الدولية طرطوس (سورية) - الغرفة الفتية الدولية فيلا ماريا (الأرجنتين) -الغرفة الفتية الدولية مانشستر (بريطانيا) - الغرفة الفتية الدولية مراكش(المغرب)-الغرفة الفتية الاقتصادية لوزاكا ( زمبيا). كانت  خطوة  ممتعة في رحلتنا، تعرفنا من خلالها على أعضاء جدد من غرف فتية أخرى حول العالم لاكتساب العلاقات وتكوين الصداقات العالمية، بالإضافة ا التعرف على الدول و ثقافاتها و لمواصلة بقية رحلتنا المشوقة، تدعودكم الغرفة الفتية العالمية بباردو لمتابعتنا في Let\'s Talk Globally لإكتشاف المزيد من الحضارات و الثقافات لتعزيز التعاون الدولي بين غرفنا المحلية"},
  {id:"ecoverteearthforum", titre:"Resilient Earth Forum", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/eco-v.jpg", description:"Dans le cadre de son projet 'Éco-verte 2.0', La Jeune Chambre Économique du Bardo a organisé, le 18 Août 2023 à 14H au Club de la Jeunesse du Bardo, en partenariat avec le mouvement Youth For Climate Tunisia - Community 'RESILIENT EARTH FORUM'. La journée s'est ouverte avec la projection du film 'The 11th Hour' qui a été suivie par une table ronde où les enjeux environnementaux abordés par le film ont été discutés. Nous avons fini notre forum par une séance de cours de calligraphie arabe. On tient à remercier sincèrement club'y bardo pour l'aimable accueil ainsi que nos partenaires. Nous tenons également à remercier nos chers membres pour leur participation active à cette journée."},
  {id:"microsoft1", titre:"Formation Microsoft by JCI", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/formation-micrsoft.jpg", description:"\"La formation est l\'essence de tout succès\"\nRetour en images sur le forum intitulé \" Microsoft by JCI\" qui a eu lieu le 15,17,18 Août 2023 sur Google Meet, en collaboration avec INJAZ Tunisia  et organisé par Bardo, JCI OLM Oued Ellil, JCI Tebourba, JCI jedaida, JCI France Ville , JCI El Battan , JCI Les Jardins, JCI La Marsa, JCI IBN Khaldoun , JCI Leaders Beb Souika , JCI  OLM  Manouba , JCI nouvelle medina , JCI Mornaguia.\nCe forum a visé le programme de Microsoft  qui est spécialement dédié aux membres de la JCI qui veulent acquérir de nouvelles compétences professionnelles.\nElle couvre tous les outils indispensables pour travailler efficacement : Word, Excel, PowerPoint, Outlook..\nanimé par nos chers formateurs سيرين الورتتاني  et Wissem Sammoud\nOn tient vivement à les remercier pour leur professionnalisme.\nOn a été honoré par l\'intervention de notre vpf de la zone A dans la journée de l\'ouverture,\nNous tenons également à remercier nos chers participants pour leur engagement et leur confiance."},
  {id:"projectmanagement", titre:"Formation Project Management", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/proj-mang.jpg", description:"Retour en images sur la session recommandée intitulée 'Project Management' qui a eu lieu le 13 Août 2023 à la Municipalité du Bardo, animée par nos chers formateurs Nassereddine Mechri et Cyrine Ouertateni qu'on tient par cette occasion à les remercier pour leur professionnalisme et leurs efforts déployés. Sans oublier de remercier nos chers membres pour leur engagement pour faire réussir le déroulement de la formation."},
  {id:"radionesrine", titre:"Passage Radio", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/pass-nesr.jpg", description:"Soyez à l'écoute du passage radio de notre Secrétaire Général de la jeune chambre économique de Bardo \" Nesrin Medini  \" sur les ondes de Radio Jeunes Tunisie (Page officielle) à 11h pour parler sur notre Forum international : \" Let\'s Talk Globally\"."},
  {id:"letstalkglobally1", titre:"Let’s Talk Globally", organizer:"JCI Aleppo", place:"sur Google Meet", date:"", date_range:[], img:"./assets/img/detail/glob1.jpg", description:"هل أنتم جاهزون لرحلة حول العالم وانتم خلف شاشاتكم؟!\n من منّا لم يحلم يوماً بالسفر حول العالم للتعرّف على جميع الأماكن الجميلة فيه؟ من منّا لم يرغب في تجربة التعرّف على ثقافات وعادات وتقاليد الناس؟\n من هنا أتت فكرة Let\’s Talk Globally لنتمكّن من تجربة الثقافات الأخرى دون حتى الحاجة إلى مغادرة بيوتنا!\n حيث ترتكز الفكرة الأساسية في استخدام الانترنت كوسيلة لاختصار المسافات بين الناس عن طريق إقامة عدة جلسات بين كل من:\n الغرفة الفتية الدولية حلب (سورية) -الغرفة الفتية الدولية باردو (تونس) - الغرفة الفتية الدولية السويداء (سورية) - الغرفة الفتية الدولية طرطوس (سورية) - الغرفة الفتية الدولية فيلا ماريا (الأرجنتين) -الغرفة الفتية الدولية مانشستر (بريطانيا) - الغرفة الفتية الدولية مراكش(المغرب).\n تقدم كل غرفة فيها عرضاً تقديمياً في جلسة يتحدث فيها المشاركون فيها الأصدقاء عن الموسيقى في بلدهم، العادات والتقاليد في المناسبات الرسميّة، الأطعمة الشهيرة لديهم، أهم الأماكن الأثرية والسياحية والدينية، بالإضافة الى التعرف على بعضهم البعض وخلق روابط الصلة المتينة والتعرف على صورة البلد وأهله بشكل أفضل كأنك قمت بزيارته وأنت جالس في المنزل مع تصحيح بعض الصور النمطيّة عن البلدان المشاركة.\nAre you ready for a trip worldwide, and you\'re behind your screens?\nWho never dreamed of traveling the world to learn about all the beautiful places in it? Who wanted to experience something other than learning about people\'s cultures, customs, and traditions?\nTherefore the idea of Let\'s Talk Globally is to experience other cultures without leaving our homes!\nThe basic idea is to use the Internet as a means of shortening people\'s distances by holding several sessions between:\nJCI Aleppo   الغرفة الفتية الدولية حلب (Syria) - JCI Bardo(Tunisia) - JCI Lusaka (Zambia) - JCI Marrakech (Morocco) - JCI Manchester JCI(UK) - JCI Sweida   الغرفة الفتية الدولية السويداء (Syria) - JCI Tartus (Syria) - JCI Villa María (Argentina).\nEach Organization presents a presentation at a session where friends talk about music in their country, habits, and traditions at official events, their famous foods, and the most important archaeological, tourist, and religious places, In addition to getting to know each other and creating strong links and better familiarize yourself with the image of the country and its people as if you had visited it while sitting at home while correcting some stereotypes about the participating countries.\nJCI BARDO JCI Lusaka JCI Tartus JCI Villa María JCI Manchester JCI Sweida   الغرفة الفتية الدولية السويداء JCI Marrakech"},
  {id:"cafetalkpsychologie", titre:"Cafe Talk : Psychologie", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/cafe-talk.jpg", description:"Retour en images sur le Cafe Talk sous le thème 'Cafe Talk... هيا نحكيو Psychologie' qui a eu lieu le 5 Août 2023 dans le cafe Bonzai Bardo.\nLe cafe talk a été animé par l\'intervention de nos chers psychologues Maram Doghri et Rahma Chaibi, qui ont partagé leurs connaissances et leurs expériences pour permettre aux membres de mieux comprendre les maladies mentales et résoudre les difficultés d\'ordre psychique.\nPar cette occasion, on tient à les remercier pour leur professionnalisme et leur soutien psychologique.\n\nSans oublier de remercier nos chers membres pour leur engagement."},
  {id:"canadianresume", titre:"Formation the A B C’s of a Canadian Resume", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/formation.jpg", description:"Retour en images sur la session officielle intitulée 'The A B C's of a Canadian Resume' qui a eu lieu le 2 Août 2023 sur Google Meet.\nCette formation a été animée par notre chère formatrice Yosra Ben Abdallah, qui a partagé ses connaissances et son expérience pour permettre aux membres de mieux comprendre les types de CV les plus répandus, les parties d'un résumé, les caractéristiques d'un CV canadien et les erreurs à éviter.\nPar cette occasion, on tient à remercier notre chère formatrice pour son professionnalisme et ses efforts tout au long de la formation.\nSans oublier de remercier nos chers membres pour leur engagement à faire réussir le déroulement de la formation."},
  {id:"radionoor", titre:"Passage Radio", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/passa-nour.jpg", description:"Soyez à l'écoute du passage radio de notre présidente de la jeune chambre économique de Bardo \" Noor Ben Ammar \" sur les ondes de Radio Express FM à 8:30 pour parler sur le mini salon : \" Journée des enseignants organisé par Bureau de l\'Emploi et du Travail Indépendant de Bardo✨"},
  {id:"olmplusefficace", titre:"Récompense OLM la plus Efficace de la zone A", organizer:"", place:"", date:"", date_range:[], img:"./assets/img/detail/gold.jpg", description:"OLM LA PLUS EFFICACE : PRIX GOLD\nLa Jeune Chambre Économique du Bardo a remporté une récompense prestigieuse pour la deuxième fois consécutive, se plaçant ainsi au sommet du classement en première place au sein du programme de 100% efficacité.\nCette reconnaissance exceptionnelle a été décernée à la JCI Bardo lors de l'occasion spéciale de la 2ème réunion annale des présidents, où les représentants des OLM se sont réunis pour partager leurs réalisations et célébrer les succès collectifs.\nLa JCI Bardo a brillé par son engagement indéfectible envers l\'efficacité et la réalisation de résultats concrets. Grâce à son approche méthodique et à la passion de ses membres, cette performance remarquable témoigne de l\'engagement continu de la JCI Bardo à apporter des changements positifs et durables dans sa communauté. ✨✨"},
]

const recents: {
  id: string;
  titre: string;
  img: string;
}[] = [
  {id:"#journeeinformation", titre:"Participation à la journée d'information", img:"./assets/img/grid/journée-information.jpg"},
  {id:"#jcipresenter", titre:"Formation Session Officielle JCI Presenter", img:"./assets/img/programmes/formationsetforums/jci presenter.jpg"},
  {id:"#santesexuelle", titre:"Journée sensibilisation sur la santé sexuelle et reproductive", img:"./assets/img/programmes/projetslocaux/sensibilisation.jpg"}
]

const carouselItems : {
  img: string;
  title: string;
}[] =  [
  {img:'./assets/img/partenaires/bayrem.jpg', title:"Lycée Bayrem Tounsi"},
  {img:'./assets/img/partenaires/centre.jpg', title:"Centre Integré de Jeunesse et d'Enfance Bardo"},
  {img:'./assets/img/partenaires/injaz.jpg', title:"INJAZ Tunis"},
  {img:'./assets/img/partenaires/youth.jpg', title:"YOUTH FOR CLIMATE Tunisia"},
  {img:'./assets/img/partenaires/jeune.png', title:"Maison de Jeunesse Khaznadar"},
  {img:'./assets/img/partenaires/cluby.jpg', title:"Club'y"},
  {img:'./assets/img/partenaires/iri.jpg', title:"International Republican Institut"},
  {img:'./assets/img/partenaires/nt.jpg', title:"Nextun Agency"},
  {img:'./assets/img/partenaires/femme.jpg', title:"Association des Femmes Arabes Spécialisées"},
  {img:'./assets/img/partenaires/saad.jpg', title:"Institut Saad"},
  {img:'./assets/img/partenaires/aneti.png', title:"ANETI Bardo"},
  {img:'./assets/img/partenaires/himo.jpg', title:"Association Tunisienne de l'Hémophilie"},
  {img:'./assets/img/partenaires/biblio.jpg', title:"Bibliothèque Publique du Bardo"},
  {img:'./assets/img/partenaires/municipalitebardo.png', title:"Municipalité du Bardo"}
];

export { projets, blogs, recents, carouselItems };