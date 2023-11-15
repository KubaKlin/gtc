import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pl: {
        translation: {
          global: {
            txt1: 'Nasze usługi',
            txt2: 'Nasz zespół',
            link1: 'Strona główna',
            link2: 'O nas',
            link3: 'Usługi',
            link4: 'Zespół',
            link5: 'Kontakt',
            link6: 'Zobacz więcej',
            link7: 'Kontakt',
            link8: 'Inne',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL',
            txt3: 'Transgraniczny transport odpadów',
            txt4: 'Transport wywrotkami',
            txt5: 'Transport Ekspresowy oraz LTL',
            txt6: 'Transport płodów Rolnych GMP+',
            txt7: 'Magazynowanie',
            txt8: 'Transport materiałów do Recyclingu',
            txt9: 'Pozwolenia środowiskowe',
            txt10: 'Dla przewoźnika',
            txt11: 'KARTA PALIWOWA GTC',
          },
          baner: {
            h3: 'Tworzymy możliwości, aby osiągnąć potencjał',
            h1: 'W pełni zrównoważone rozwiązania transportowe',
            p: 'Jesteśmy firmą z wieloletnim doświadczeniem oferującą Państwu profesjonalne i sprawdzone rozwiązania transportowe o najwyższych standardach.',
          },
          baner2: {
            h3: 'Tworzymy możliwości, aby osiągnąć potencjał',
            h1: 'W pełni zrównoważone rozwiązania transportowe',
            p: 'Jesteśmy firmą z wieloletnim doświadczeniem oferującą Państwu profesjonalne i sprawdzone rozwiązania transportowe o najwyższych standardach.',
            button: 'Pokaż usługi',
          },
          baner3: {
            txt1: 'Najlepsi ludzie, którzy zadbają o Państwa ładunek',
          },
          stats: {
            txt1: 'klientów',
            txt2: 'przesyłek',
            txt3: 'auta',
            txt4: 'mln km',
          },
          team: {
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          card: {
            txt1: 'Do pobrania',
            txt2: 'Zasady weryfikacji przewoźników',
            link: '../public/doc/zasadyPL.docx',
          }
        }
      },
      en: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL',
            txt3: 'Transgraniczny transport odpadów',
            txt4: 'Transport wywrotkami',
            txt5: 'Transport Ekspresowy oraz LTL',
            txt6: 'Transport płodów Rolnych GMP+',
            txt7: 'Magazynowanie',
            txt8: 'Transport materiałów do Recyclingu',
            txt9: 'Pozwolenia środowiskowe',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
      de: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL i LTL',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
      nl: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL i LTL',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
      fr: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL i LTL',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
      it: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL i LTL',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
      ua: {
        translation: {
          global: {
            txt1: 'Our services',
            txt2: 'Our Team',
            link1: 'Home',
            link2: 'About',
            link3: 'Services',
            link4: 'Team',
            link5: 'Contact',
            link6: 'See more',
            link7: 'Contact us',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt1: 'Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.',
            txt2: 'Transport  FTL i LTL',
          },
          baner: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.'
          },
          baner2: {
            h3: 'We Create Opportunity to Reach Potential.',
            h1: 'Full offer of transport services',
            p: 'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            button: 'Show services'
          },
          baner3: {
            txt1: 'The best people to take care of your cargo',
          },
          stats: {
            txt1: 'customers',
            txt2: 'parcels',
            txt3: 'trucks',
            txt4: 'mln km',
          },
          team: {
            name1: 'Clark Cent',
            occ1: 'superhero',
            contact1: 'poczta@mail.pl',
            name2: 'Cpt Price',
            occ2: 'Navy Seals',
            contact2: 'price@cod.pl',
          },
          sidebar: {
            link1: 'Sea containers',
            link2: 'Magazynowanie',
            link3: 'Transport materiałów do Recyclingu',
            link4: 'Transport wywrotkami',
          }
        }
      },
    }
  });

export default i18n;
