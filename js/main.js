/* =============================================
   KD Investment - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Preloader ---- */
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('preloader').classList.add('hidden');
    }, 800);
  });

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ---- Hamburger menu ---- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  /* ---- Back to top ---- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Scroll reveal ---- */
  const revealElements = document.querySelectorAll('.service-card, .country-card, .partner-card, .about-grid, .contact-grid, .section-header, .about-stats, .gallery-item, .gallery-add');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  /* ---- Counter animation ---- */
  var counted = false;
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });
  var statsSection = document.querySelector('.about-stats');
  if (statsSection) counterObserver.observe(statsSection);

  function animateCounters() {
    document.querySelectorAll('.stat-number[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'));
      var current = 0;
      var step = Math.ceil(target / 60);
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toLocaleString();
      }, 30);
    });
  }

  /* ---- Language Switcher (8 languages) ---- */
  var currentLang = 'en';
  var langNames = { en: 'EN', fr: 'FR', pt: 'PT', de: 'DE', es: 'ES', ar: 'AR', zh: 'ZH', ru: 'RU' };
  var translations = {
    en: {
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services',
      'nav.projects': 'Projects', 'nav.countries': 'Countries', 'nav.partners': 'Partners', 'nav.contact': 'Contact',
      'hero.badge': 'Since 2019',
      'hero.title': 'Global Investment Fund Raising<br>&amp; <span class="gold-text">Project Management</span>',
      'hero.subtitle': 'Connecting investors, businesses, and strategic partners across Africa and beyond.',
      'hero.btn1': 'Contact Us', 'hero.btn2': 'Our Services', 'hero.scroll': 'Scroll to explore',
      'about.tag': 'About Us', 'about.title': 'Who We Are',
      'about.role': 'President Directeur Général: <strong>Keita Daouda</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL provides investment fundraising, project management, financial advisory, and strategic partnership services across Africa and international markets.',
      'about.desc2': 'With a strong network of global financial institutions and deep expertise in emerging markets, we bridge the gap between capital and opportunity, driving sustainable growth and economic development.',
      'about.stat1': 'Projects Managed', 'about.stat2': 'Countries', 'about.stat3': 'Capital Raised',
      'services.tag': 'What We Do', 'services.title': 'Our Services',
      'services.s1.title': 'Investment Fund Raising',
      'services.s1.desc': 'Strategic capital raising across debt, equity, and hybrid instruments for projects of all scales.',
      'services.s2.title': 'Project Management',
      'services.s2.desc': 'End-to-end project oversight ensuring timely delivery, budget compliance, and stakeholder alignment.',
      'services.s3.title': 'Financial Advisory',
      'services.s3.desc': 'Expert financial structuring, risk assessment, and due diligence for complex cross-border investments.',
      'services.s4.title': 'Business Consulting',
      'services.s4.desc': 'Market entry strategy, regulatory navigation, and operational optimization in African markets.',
      'services.s5.title': 'Strategic Partnerships',
      'services.s5.desc': 'Building and managing high-value partnerships between local enterprises and global institutions.',
      'services.s6.title': 'International Investment Facilitation',
      'services.s6.desc': 'End-to-end facilitation of foreign direct investment including regulatory and logistical support.',
      'countries.tag': 'Our Reach', 'countries.title': 'Countries of Operation',
      'projects.tag': 'Our Work', 'projects.title': 'Project Gallery', 'projects.desc': 'A selection of projects and initiatives we have supported across Africa and international markets.',
      'countries.hq': 'Headquarters', 'countries.branch': 'Branch Office',
      'partners.tag': 'Our Network', 'partners.title': 'Strategic Partners',
      'partners.disclaimer': 'Logos displayed with authorization. All trademarks belong to their respective owners.',
      'contact.tag': 'Get In Touch', 'contact.title': 'Contact Us',
      'contact.address': 'Address', 'contact.phone': 'Telephone', 'contact.submit': 'Send Message',
      'footer.tagline': 'Global Investment Fund Raising &amp; Project Management Solutions',
      'footer.quick': 'Quick Links', 'footer.services': 'Services',
      'footer.follow': 'Follow Us', 'footer.rights': 'All rights reserved.'
    },
    fr: {
      'nav.home': 'Accueil', 'nav.about': 'À Propos', 'nav.services': 'Services',
      'nav.projects': 'Projets', 'nav.countries': 'Pays', 'nav.partners': 'Partenaires', 'nav.contact': 'Contact',
      'hero.badge': 'Depuis 2019',
      'hero.title': 'Solutions Globales de<br> <span class="gold-text">Levée de Fonds</span> &amp; Gestion de Projets',
      'hero.subtitle': 'Connecter investisseurs, entreprises et partenaires stratégiques à travers l\'Afrique et au-delà.',
      'hero.btn1': 'Contactez-Nous', 'hero.btn2': 'Nos Services', 'hero.scroll': 'Découvrez plus',
      'about.tag': 'À Propos', 'about.title': 'Qui Sommes-Nous',
      'about.role': 'Président Directeur Général : <strong>Keita Daouda</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL fournit des services de levée de fonds, gestion de projets, conseil financier et partenariats stratégiques à travers l\'Afrique et les marchés internationaux.',
      'about.desc2': 'Avec un réseau solide d\'institutions financières mondiales et une expertise approfondie des marchés émergents, nous faisons le pont entre le capital et les opportunités.',
      'about.stat1': 'Projets Gérés', 'about.stat2': 'Pays', 'about.stat3': 'Capital Levé',
      'services.tag': 'Notre Expertise', 'services.title': 'Nos Services',
      'services.s1.title': 'Levée de Fonds',
      'services.s1.desc': 'Mobilisation stratégique de capitaux par le biais d\'instruments de dette, de capitaux propres et hybrides.',
      'services.s2.title': 'Gestion de Projets',
      'services.s2.desc': 'Supervision de bout en bout garantissant une livraison dans les délais et la conformité budgétaire.',
      'services.s3.title': 'Conseil Financier',
      'services.s3.desc': 'Structuration financière experte, évaluation des risques et due diligence pour les investissements transfrontaliers.',
      'services.s4.title': 'Conseil aux Entreprises',
      'services.s4.desc': 'Stratégie d\'entrée sur le marché et optimisation opérationnelle sur les marchés africains.',
      'services.s5.title': 'Partenariats Stratégiques',
      'services.s5.desc': 'Développement et gestion de partenariats entre entreprises locales et institutions mondiales.',
      'services.s6.title': 'Facilitation d\'Investissement International',
      'services.s6.desc': 'Facilitation complète des investissements directs étrangers, y compris le soutien réglementaire et logistique.',
      'countries.tag': 'Notre Présence', 'countries.title': 'Pays d\'Intervention',
      'projects.tag': 'Nos Réalisations', 'projects.title': 'Galerie de Projets', 'projects.desc': 'Une sélection de projets et initiatives que nous avons soutenus à travers l\'Afrique et les marchés internationaux.',
      'countries.hq': 'Siège Social', 'countries.branch': 'Bureau Secondaire',
      'partners.tag': 'Notre Réseau', 'partners.title': 'Partenaires Stratégiques',
      'partners.disclaimer': 'Logos affichés avec autorisation. Toutes les marques appartiennent à leurs propriétaires respectifs.',
      'contact.tag': 'Contactez-Nous', 'contact.title': 'Nous Contacter',
      'contact.address': 'Adresse', 'contact.phone': 'Téléphone', 'contact.submit': 'Envoyer le Message',
      'footer.tagline': 'Solutions Globales de Levée de Fonds &amp; Gestion de Projets',
      'footer.quick': 'Liens Rapides', 'footer.services': 'Services',
      'footer.follow': 'Suivez-Nous', 'footer.rights': 'Tous droits réservés.'
    },
    pt: {
      'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.services': 'Serviços',
      'nav.projects': 'Projetos', 'nav.countries': 'Países', 'nav.partners': 'Parceiros', 'nav.contact': 'Contacto',
      'hero.badge': 'Desde 2019',
      'hero.title': 'Captação Global de Recursos<br>&amp; <span class="gold-text">Gestão de Projetos</span>',
      'hero.subtitle': 'Conectando investidores, empresas e parceiros estratégicos em África e no mundo.',
      'hero.btn1': 'Contacte-nos', 'hero.btn2': 'Nossos Serviços', 'hero.scroll': 'Explore mais',
      'about.tag': 'Sobre Nós', 'about.title': 'Quem Somos',
      'about.role': 'Presidente Diretor Geral: <strong>Keita Daouda</strong>',
      'about.desc1': 'A KD Investment Fund Raising &amp; Project Managing SARL fornece serviços de captação de recursos, gestão de projetos, consultoria financeira e parcerias estratégicas em África e mercados internacionais.',
      'about.desc2': 'Com uma forte rede de instituições financeiras globais e profunda experiência em mercados emergentes, fazemos a ponte entre capital e oportunidade.',
      'about.stat1': 'Projetos Geridos', 'about.stat2': 'Países', 'about.stat3': 'Capital Captado',
      'services.tag': 'O Que Fazemos', 'services.title': 'Nossos Serviços',
      'services.s1.title': 'Captação de Recursos',
      'services.s1.desc': 'Captação estratégica de capitais através de instrumentos de dívida, capital próprio e híbridos.',
      'services.s2.title': 'Gestão de Projetos',
      'services.s2.desc': 'Supervisão completa garantindo entrega pontual, conformidade orçamental e alinhamento das partes interessadas.',
      'services.s3.title': 'Consultoria Financeira',
      'services.s3.desc': 'Estruturação financeira especializada, avaliação de riscos e due diligence para investimentos transfronteiriços.',
      'services.s4.title': 'Consultoria Empresarial',
      'services.s4.desc': 'Estratégia de entrada no mercado e otimização operacional nos mercados africanos.',
      'services.s5.title': 'Parcerias Estratégicas',
      'services.s5.desc': 'Construção e gestão de parcerias de alto valor entre empresas locais e instituições globais.',
      'services.s6.title': 'Facilitação de Investimento Internacional',
      'services.s6.desc': 'Facilitação completa de investimento direto estrangeiro, incluindo apoio regulatório e logístico.',
      'countries.tag': 'Nossa Presença', 'countries.title': 'Países de Atuação',
      'projects.tag': 'Nosso Trabalho', 'projects.title': 'Galeria de Projetos', 'projects.desc': 'Uma seleção de projetos e iniciativas que apoiamos em África e nos mercados internacionais.',
      'countries.hq': 'Sede', 'countries.branch': 'Filial',
      'partners.tag': 'Nossa Rede', 'partners.title': 'Parceiros Estratégicos',
      'partners.disclaimer': 'Logotipos exibidos com autorização. Todas as marcas pertencem aos seus respetivos proprietários.',
      'contact.tag': 'Fale Connosco', 'contact.title': 'Contacte-nos',
      'contact.address': 'Endereço', 'contact.phone': 'Telefone', 'contact.submit': 'Enviar Mensagem',
      'footer.tagline': 'Soluções Globais de Captação de Recursos &amp; Gestão de Projetos',
      'footer.quick': 'Links Rápidos', 'footer.services': 'Serviços',
      'footer.follow': 'Siga-nos', 'footer.rights': 'Todos os direitos reservados.'
    },
    de: {
      'nav.home': 'Start', 'nav.about': 'Über uns', 'nav.services': 'Leistungen',
      'nav.projects': 'Projekte', 'nav.countries': 'Länder', 'nav.partners': 'Partner', 'nav.contact': 'Kontakt',
      'hero.badge': 'Seit 2019',
      'hero.title': 'Globale Investment-Finanzierung<br>&amp; <span class="gold-text">Projektmanagement</span>',
      'hero.subtitle': 'Wir verbinden Investoren, Unternehmen und strategische Partner in Afrika und darüber hinaus.',
      'hero.btn1': 'Kontaktieren Sie uns', 'hero.btn2': 'Unsere Leistungen', 'hero.scroll': 'Mehr entdecken',
      'about.tag': 'Über uns', 'about.title': 'Wer wir sind',
      'about.role': 'Präsident und Generaldirektor: <strong>Keita Daouda</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL bietet Investment-Fundraising, Projektmanagement, Finanzberatung und strategische Partnerschaften in Afrika und internationalen Märkten.',
      'about.desc2': 'Mit einem starken Netzwerk globaler Finanzinstitute und umfassender Expertise in Schwellenmärkten überbrücken wir die Kluft zwischen Kapital und Chancen.',
      'about.stat1': 'Projekte gemanagt', 'about.stat2': 'Länder', 'about.stat3': 'Kapital beschafft',
      'services.tag': 'Unser Angebot', 'services.title': 'Unsere Leistungen',
      'services.s1.title': 'Investment-Fundraising',
      'services.s1.desc': 'Strategische Kapitalbeschaffung über Fremd-, Eigen- und Hybridinstrumente für Projekte jeder Größe.',
      'services.s2.title': 'Projektmanagement',
      'services.s2.desc': 'Durchgängige Projektaufsicht für termingerechte Lieferung, Budgeteinhaltung und Stakeholder-Abstimmung.',
      'services.s3.title': 'Finanzberatung',
      'services.s3.desc': 'Professionelle Finanzstrukturierung, Risikobewertung und Due Diligence für komplexe grenzüberschreitende Investitionen.',
      'services.s4.title': 'Unternehmensberatung',
      'services.s4.desc': 'Markteintrittsstrategie, regulatorische Navigation und Betriebsoptimierung in afrikanischen Märkten.',
      'services.s5.title': 'Strategische Partnerschaften',
      'services.s5.desc': 'Aufbau und Verwaltung hochwertiger Partnerschaften zwischen lokalen Unternehmen und globalen Institutionen.',
      'services.s6.title': 'Internationale Investitionsförderung',
      'services.s6.desc': 'Umfassende Begleitung von Direktinvestitionen mit regulatorischer und logistischer Unterstützung.',
      'countries.tag': 'Unsere Reichweite', 'countries.title': 'Geschäftsländer',
      'projects.tag': 'Unsere Arbeit', 'projects.title': 'Projektgalerie', 'projects.desc': 'Eine Auswahl von Projekten und Initiativen, die wir in Afrika und internationalen Märkten unterstützt haben.',
      'countries.hq': 'Hauptsitz', 'countries.branch': 'Zweigstelle',
      'partners.tag': 'Unser Netzwerk', 'partners.title': 'Strategische Partner',
      'partners.disclaimer': 'Logos mit Genehmigung angezeigt. Alle Marken gehören ihren jeweiligen Inhabern.',
      'contact.tag': 'Kontakt', 'contact.title': 'Kontaktieren Sie uns',
      'contact.address': 'Adresse', 'contact.phone': 'Telefon', 'contact.submit': 'Nachricht senden',
      'footer.tagline': 'Globale Investment-Finanzierungs- &amp; Projektmanagement-Lösungen',
      'footer.quick': 'Schnelllinks', 'footer.services': 'Leistungen',
      'footer.follow': 'Folgen Sie uns', 'footer.rights': 'Alle Rechte vorbehalten.'
    },
    es: {
      'nav.home': 'Inicio', 'nav.about': 'Nosotros', 'nav.services': 'Servicios',
      'nav.projects': 'Proyectos', 'nav.countries': 'Países', 'nav.partners': 'Socios', 'nav.contact': 'Contacto',
      'hero.badge': 'Desde 2019',
      'hero.title': 'Captación Global de Fondos<br>&amp; <span class="gold-text">Gestión de Proyectos</span>',
      'hero.subtitle': 'Conectando inversores, empresas y socios estratégicos en África y más allá.',
      'hero.btn1': 'Contáctenos', 'hero.btn2': 'Nuestros Servicios', 'hero.scroll': 'Descubra más',
      'about.tag': 'Sobre Nosotros', 'about.title': 'Quiénes Somos',
      'about.role': 'Presidente Director General: <strong>Keita Daouda</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL brinda servicios de captación de fondos, gestión de proyectos, asesoría financiera y asociaciones estratégicas en África y mercados internacionales.',
      'about.desc2': 'Con una sólida red de instituciones financieras globales y amplia experiencia en mercados emergentes, tendemos puentes entre el capital y la oportunidad.',
      'about.stat1': 'Proyectos Gestionados', 'about.stat2': 'Países', 'about.stat3': 'Capital Captado',
      'services.tag': 'Qué Hacemos', 'services.title': 'Nuestros Servicios',
      'services.s1.title': 'Captación de Fondos',
      'services.s1.desc': 'Captación estratégica de capital mediante instrumentos de deuda, capital y híbridos para proyectos de toda escala.',
      'services.s2.title': 'Gestión de Proyectos',
      'services.s2.desc': 'Supervisión integral garantizando entrega oportuna, cumplimiento presupuestario y alineación de partes interesadas.',
      'services.s3.title': 'Asesoría Financiera',
      'services.s3.desc': 'Estructuración financiera experta, evaluación de riesgos y debida diligencia para inversiones transfronterizas complejas.',
      'services.s4.title': 'Consultoría Empresarial',
      'services.s4.desc': 'Estrategia de entrada al mercado y optimización operativa en mercados africanos.',
      'services.s5.title': 'Alianzas Estratégicas',
      'services.s5.desc': 'Creación y gestión de asociaciones de alto valor entre empresas locales e instituciones globales.',
      'services.s6.title': 'Facilitación de Inversión Internacional',
      'services.s6.desc': 'Facilitación integral de inversión extranjera directa, incluido apoyo regulatorio y logístico.',
      'countries.tag': 'Nuestro Alcance', 'countries.title': 'Países de Operación',
      'projects.tag': 'Nuestro Trabajo', 'projects.title': 'Galería de Proyectos', 'projects.desc': 'Una selección de proyectos e iniciativas que hemos apoyado en África y mercados internacionales.',
      'countries.hq': 'Oficina Central', 'countries.branch': 'Sucursal',
      'partners.tag': 'Nuestra Red', 'partners.title': 'Socios Estratégicos',
      'partners.disclaimer': 'Logotipos mostrados con autorización. Todas las marcas pertenecen a sus respectivos dueños.',
      'contact.tag': 'Póngase en Contacto', 'contact.title': 'Contáctenos',
      'contact.address': 'Dirección', 'contact.phone': 'Teléfono', 'contact.submit': 'Enviar Mensaje',
      'footer.tagline': 'Soluciones Globales de Captación de Fondos &amp; Gestión de Proyectos',
      'footer.quick': 'Enlaces Rápidos', 'footer.services': 'Servicios',
      'footer.follow': 'Síganos', 'footer.rights': 'Todos los derechos reservados.'
    },
    ar: {
      'nav.home': 'الرئيسية', 'nav.about': 'عن الشركة', 'nav.services': 'الخدمات',
      'nav.projects': 'مشاريع', 'nav.countries': 'الدول', 'nav.partners': 'الشركاء', 'nav.contact': 'اتصل بنا',
      'hero.badge': 'منذ 2019',
      'hero.title': 'جمع الاستثمارات العالمية<br>&amp; <span class="gold-text">إدارة المشاريع</span>',
      'hero.subtitle': 'ربط المستثمرين والشركات والشركاء الاستراتيجيين عبر أفريقيا وخارجها.',
      'hero.btn1': 'اتصل بنا', 'hero.btn2': 'خدماتنا', 'hero.scroll': 'استكشف المزيد',
      'about.tag': 'عن الشركة', 'about.title': 'من نحن',
      'about.role': 'الرئيس المدير العام: <strong>كيتا داودا</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL تقدم خدمات جمع الاستثمارات وإدارة المشاريع والاستشارات المالية والشراكات الاستراتيجية عبر أفريقيا والأسواق الدولية.',
      'about.desc2': 'بفضل شبكة قوية من المؤسسات المالية العالمية وخبرة عميقة في الأسواق الناشئة، نسد الفجوة بين رأس المال والفرصة.',
      'about.stat1': 'مشاريع مُدارة', 'about.stat2': 'دولة', 'about.stat3': 'رأس مال مُجمع',
      'services.tag': 'ماذا نفعل', 'services.title': 'خدماتنا',
      'services.s1.title': 'جمع الاستثمارات',
      'services.s1.desc': 'جمع رأس المال الاستراتيجي عبر أدوات الدين وحقوق الملكية والأدوات الهجينة للمشاريع بمختلف أحجامها.',
      'services.s2.title': 'إدارة المشاريع',
      'services.s2.desc': 'إشراف شامل على المشاريع لضمان التسليم في الوقت المحدد والامتثال للميزانية وتوافق أصحاب المصلحة.',
      'services.s3.title': 'الاستشارات المالية',
      'services.s3.desc': 'هيكلة مالية خبيرة وتقييم المخاطر والعناية الواجبة للاستثمارات المعقدة عبر الحدود.',
      'services.s4.title': 'الاستشارات التجارية',
      'services.s4.desc': 'استراتيجية دخول السوق والتنقل التنظيمي وتحسين العمليات في الأسواق الأفريقية.',
      'services.s5.title': 'الشراكات الاستراتيجية',
      'services.s5.desc': 'بناء وإدارة شراكات عالية القيمة بين المؤسسات المحلية والمؤسسات العالمية.',
      'services.s6.title': 'تيسير الاستثمار الدولي',
      'services.s6.desc': 'تيسير شامل للاستثمار الأجنبي المباشر بما في ذلك الدعم التنظيمي واللوجستي.',
      'countries.tag': 'نطاقنا', 'countries.title': 'دول التشغيل',
      'projects.tag': 'أعمالنا', 'projects.title': 'معرض المشاريع', 'projects.desc': 'مجموعة مختارة من المشاريع والمبادرات التي دعمناها عبر أفريقيا والأسواق الدولية.',
      'countries.hq': 'المقر الرئيسي', 'countries.branch': 'فرع',
      'partners.tag': 'شبكتنا', 'partners.title': 'الشركاء الاستراتيجيون',
      'partners.disclaimer': 'يتم عرض الشعارات بإذن. جميع العلامات التجارية مملوكة لأصحابها.',
      'contact.tag': 'تواصل معنا', 'contact.title': 'اتصل بنا',
      'contact.address': 'العنوان', 'contact.phone': 'الهاتف', 'contact.submit': 'أرسل الرسالة',
      'footer.tagline': 'حلول عالمية لجمع الاستثمارات وإدارة المشاريع',
      'footer.quick': 'روابط سريعة', 'footer.services': 'الخدمات',
      'footer.follow': 'تابعنا', 'footer.rights': 'جميع الحقوق محفوظة.'
    },
    zh: {
      'nav.home': '首页', 'nav.about': '关于我们', 'nav.services': '服务',
      'nav.projects': '项目', 'nav.countries': '国家', 'nav.partners': '合作伙伴', 'nav.contact': '联系我们',
      'hero.badge': '自2019年',
      'hero.title': '全球投资融资<br>&amp; <span class="gold-text">项目管理</span>',
      'hero.subtitle': '连接非洲及全球的投资者、企业和战略合作伙伴。',
      'hero.btn1': '联系我们', 'hero.btn2': '我们的服务', 'hero.scroll': '探索更多',
      'about.tag': '关于我们', 'about.title': '我们是谁',
      'about.role': '董事长兼总经理：<strong>凯塔·达乌达</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL 在非洲和国际市场提供投资融资、项目管理、财务咨询和战略合作伙伴服务。',
      'about.desc2': '凭借强大的全球金融机构网络和在新兴市场的深厚专业知识，我们架起资本与机遇之间的桥梁。',
      'about.stat1': '项目已管理', 'about.stat2': '国家', 'about.stat3': '已筹集资本',
      'services.tag': '我们的业务', 'services.title': '我们的服务',
      'services.s1.title': '投资融资',
      'services.s1.desc': '通过债务、股权和混合工具为各种规模的项目进行战略性资本筹集。',
      'services.s2.title': '项目管理',
      'services.s2.desc': '端到端项目监督，确保按时交付、预算合规和利益相关者协调。',
      'services.s3.title': '财务咨询',
      'services.s3.desc': '专业的财务结构设计、风险评估和跨境复杂投资的尽职调查。',
      'services.s4.title': '商业咨询',
      'services.s4.desc': '非洲市场的市场进入策略、监管导航和运营优化。',
      'services.s5.title': '战略合作伙伴',
      'services.s5.desc': '搭建和管理本地企业与全球机构之间的高价值合作伙伴关系。',
      'services.s6.title': '国际投资促进',
      'services.s6.desc': '端到端的外国直接投资促进，包括监管和物流支持。',
      'countries.tag': '我们的覆盖', 'countries.title': '运营国家',
      'projects.tag': '我们的工作', 'projects.title': '项目展示', 'projects.desc': '我们在非洲及国际市场支持的项目和倡议精选。',
      'countries.hq': '总部', 'countries.branch': '分公司',
      'partners.tag': '我们的网络', 'partners.title': '战略合作伙伴',
      'partners.disclaimer': '标识经授权展示。所有商标归各自所有者所有。',
      'contact.tag': '联系我们', 'contact.title': '联系我们',
      'contact.address': '地址', 'contact.phone': '电话', 'contact.submit': '发送信息',
      'footer.tagline': '全球投资融资与项目管理解决方案',
      'footer.quick': '快速链接', 'footer.services': '服务',
      'footer.follow': '关注我们', 'footer.rights': '保留所有权利.'
    },
    ru: {
      'nav.home': 'Главная', 'nav.about': 'О нас', 'nav.services': 'Услуги',
      'nav.projects': 'Проекты', 'nav.countries': 'Страны', 'nav.partners': 'Партнёры', 'nav.contact': 'Контакты',
      'hero.badge': 'С 2019 г.',
      'hero.title': 'Глобальный сбор инвестиций<br>&amp; <span class="gold-text">Управление проектами</span>',
      'hero.subtitle': 'Объединяем инвесторов, компании и стратегических партнёров в Африке и за её пределами.',
      'hero.btn1': 'Свяжитесь с нами', 'hero.btn2': 'Наши услуги', 'hero.scroll': 'Узнать больше',
      'about.tag': 'О нас', 'about.title': 'Кто мы',
      'about.role': 'Президент и генеральный директор: <strong>Кейта Дауда</strong>',
      'about.desc1': 'KD Investment Fund Raising &amp; Project Managing SARL предоставляет услуги по сбору инвестиций, управлению проектами, финансовому консультированию и стратегическому партнёрству в Африке и на международных рынках.',
      'about.desc2': 'Благодаря мощной сети глобальных финансовых институтов и глубокому опыту на развивающихся рынках, мы соединяем капитал с возможностями.',
      'about.stat1': 'Проектов под управлением', 'about.stat2': 'Стран', 'about.stat3': 'Капитал привлечён',
      'services.tag': 'Чем мы занимаемся', 'services.title': 'Наши услуги',
      'services.s1.title': 'Сбор инвестиций',
      'services.s1.desc': 'Стратегический сбор капитала через долговые, долевые и гибридные инструменты для проектов любого масштаба.',
      'services.s2.title': 'Управление проектами',
      'services.s2.desc': 'Сквозной контроль проектов с обеспечением своевременной сдачи, соблюдения бюджета и согласования интересов сторон.',
      'services.s3.title': 'Финансовое консультирование',
      'services.s3.desc': 'Экспертная финансовая структуризация, оценка рисков и должная осмотрительность для сложных трансграничных инвестиций.',
      'services.s4.title': 'Бизнес-консалтинг',
      'services.s4.desc': 'Стратегия выхода на рынок, регуляторная поддержка и оптимизация операций на африканских рынках.',
      'services.s5.title': 'Стратегические партнёрства',
      'services.s5.desc': 'Построение и управление высокоценными партнёрствами между местными предприятиями и глобальными институтами.',
      'services.s6.title': 'Содействие международным инвестициям',
      'services.s6.desc': 'Комплексное содействие прямым иностранным инвестициям, включая регуляторную и логистическую поддержку.',
      'countries.tag': 'Наше присутствие', 'countries.title': 'Страны деятельности',
      'projects.tag': 'Наши работы', 'projects.title': 'Галерея проектов', 'projects.desc': 'Подборка проектов и инициатив, которые мы поддержали в Африке и на международных рынках.',
      'countries.hq': 'Штаб-квартира', 'countries.branch': 'Филиал',
      'partners.tag': 'Наша сеть', 'partners.title': 'Стратегические партнёры',
      'partners.disclaimer': 'Логотипы отображаются с разрешения. Все товарные знаки принадлежат их владельцам.',
      'contact.tag': 'Свяжитесь с нами', 'contact.title': 'Контакты',
      'contact.address': 'Адрес', 'contact.phone': 'Телефон', 'contact.submit': 'Отправить сообщение',
      'footer.tagline': 'Глобальные решения по сбору инвестиций и управлению проектами',
      'footer.quick': 'Быстрые ссылки', 'footer.services': 'Услуги',
      'footer.follow': 'Подпишитесь', 'footer.rights': 'Все права защищены.'
    }
  };

  function switchLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    document.getElementById('langSwitcher').innerHTML = langNames[lang] + ' <i class="fas fa-chevron-down"></i>';
    document.querySelectorAll('#langMenu li').forEach(function (li) {
      li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });
  }

  document.getElementById('langSwitcher').addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('langMenu').classList.toggle('open');
  });
  document.querySelectorAll('#langMenu li').forEach(function (li) {
    li.addEventListener('click', function () {
      switchLang(this.getAttribute('data-lang'));
      document.getElementById('langMenu').classList.remove('open');
    });
  });
  document.addEventListener('click', function () {
    document.getElementById('langMenu').classList.remove('open');
  });

  /* ---- Auto-detect browser language ---- */
  var browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2);
  var supportedLangs = Object.keys(translations);
  if (supportedLangs.indexOf(browserLang) !== -1) {
    switchLang(browserLang);
  } else {
    switchLang('en');
  }

  /* ---- Contact form ---- */
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = this.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    var sendingText = { en: 'Sending...', fr: 'Envoi...', pt: 'Enviando...', de: 'Senden...', es: 'Enviando...', ar: 'جاري الإرسال...', zh: '发送中...', ru: 'Отправка...' };
    var sentText = { en: 'Message Sent ✓', fr: 'Message Envoyé ✓', pt: 'Mensagem Enviada ✓', de: 'Gesendet ✓', es: 'Mensaje Enviado ✓', ar: 'تم الإرسال ✓', zh: '已发送 ✓', ru: 'Отправлено ✓' };
    btn.textContent = sendingText[currentLang] || 'Sending...';
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = sentText[currentLang] || 'Message Sent ✓';
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });

  /* ---- Gallery & Lightbox ---- */
  var galleryImages = [
    { src: 'images/projects/project-1.jpg', label: 'Project 1', location: 'Africa' },
    { src: 'images/projects/project-2.jpg', label: 'Project 2', location: 'Africa' },
    { src: 'images/projects/project-3.jpg', label: 'Project 3', location: 'Africa' },
    { src: 'images/projects/project-4.jpg', label: 'Project 4', location: 'Africa' },
    { src: 'images/projects/project-5.jpg', label: 'Project 5', location: 'Africa' },
    { src: 'images/projects/project-6.jpg', label: 'Project 6', location: 'Africa' },
    { src: 'images/projects/project-7.jpg', label: 'Project 7', location: 'Africa' },
    { src: 'images/projects/project-8.jpg', label: 'Project 8', location: 'Africa' },
    { src: 'images/projects/project-9.jpg', label: 'Project 9', location: 'Africa' },
    { src: 'images/projects/project-10.jpg', label: 'Project 10', location: 'Africa' },
    { src: 'images/projects/project-11.jpg', label: 'Project 11', location: 'Africa' },
    { src: 'images/team.jpg', label: 'Our Team', location: 'Côte d\'Ivoire' }
  ];
  var currentIndex = 0;

  function renderGallery() {
    var grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    galleryImages.forEach(function (img, i) {
      var item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = '<img src="' + img.src + '" alt="KD Investment ' + img.label + ' - ' + img.location + '"><div class="gallery-item-overlay"><span>' + img.label + '</span><small>' + img.location + '</small></div>';
      item.addEventListener('click', function () { openLightbox(i); });
      grid.appendChild(item);
    });
    var addBtn = document.createElement('div');
    addBtn.className = 'gallery-add';
    addBtn.innerHTML = '<i class="fas fa-plus"></i>';
    addBtn.title = 'Add your project images here';
    grid.appendChild(addBtn);
  }

  function openLightbox(index) {
    currentIndex = index;
    var lb = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = galleryImages[index].src;
    document.getElementById('lightboxCounter').textContent = (index + 1) + ' / ' + galleryImages.length;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
    openLightbox(currentIndex);
  }

  document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });
  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev').addEventListener('click', function () { navigateLightbox(-1); });
  document.querySelector('.lightbox-next').addEventListener('click', function () { navigateLightbox(1); });
  document.addEventListener('keydown', function (e) {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  renderGallery();

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});