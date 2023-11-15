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
            link9: 'Skontaktuj się z nami',
          },
          service: {
            txt1: 'Transport kontenerów morskich',
            subtxt11: 'Kierunki eksportowe: Chiny, UE. ',
            subtxt12: 'Kierunki importowe: Indie (realizowany odcinkiem SEA), UE.',
            subtxt13: '' +
              'Dedykowane rozwiązania logistyczne Door to Door z uwzględnieniem transportu intermodalnego.' +
              'Realizacja transportu kolejowego za pośrednictwem stałych operatorów z wykorzystaniem własnych ' +
              'Tank Containers 20-23′, indywidualny opiekun 24/7 czuwający nad poprawnym przebiegiem transportu. ' +
              'Flota wyposażona w naczepy do transportu kontenerów 20′ / 40′ / 40′ HC / 45′.',
            subtxt14: 'Dysponujemy ciągnikami 3-osiowymi, obsługujemy terminale w Dąbrowie Górniczej, Sławkowie, ' +
              'Gliwicach, Włosienicy, jak i w Brzegu Dolnym, Kątach Wrocławskich i Małaszewiczach.' +
              'Oferujemy odwozy kontenerów w kraju i za granicą.',
            subtxt15: 'Stałe połączenia liniowe: PL-NL, NL-DE, DE-PL, NL-SK, DE-ES',
            txt2: 'Transport  FTL',
            subtxt21: 'Usługa międzynarodowego transportu drogowego jest mocno rozwinięta w naszej ofercie. Przygotowujemy kompleksowe oferty usług przewozu w oparciu o  wyspecjalizowanych spedytorów, którzy rozumieją potrzeby naszych Klientów. Nasze zespoły podzielone są według określonej specjalizacji zarówno pod kątem obszaru, na którym odbywa się transport jak również konkretnych wymogów przewozu właściwych dla danej branży. ',
            subtxt22: 'Nasza flota gwarantuje optymalne rozwiązania oraz dużą elastyczność niezależnie od wielkości zamówień. Opieramy się na własnych środkach transportowych oraz flocie kontraktowej, co daje gwarancję obsługi najbardziej wymagających i złożonych zleceń. Wieloletnie doświadczenie, stały monitoring podwykonawców oraz wielowymiarowa i nowoczesna flota stanowią gwarancję wysokiej elastyczności. ',
            txt3: 'Transgraniczny transport odpadów',
            subtxt31: '',
            txt4: 'Transport wywrotkami',
            subtxt41: '',
            txt5: 'Transport Ekspresowy oraz LTL',
            subtxt51: '',
            txt6: 'Transport płodów Rolnych GMP+',
            subtxt61: '',
            txt7: 'Magazynowanie',
            subtxt71: '',
            txt8: 'Transport materiałów do Recyclingu',
            subtxt81: '',
            txt9: 'Pozwolenia środowiskowe',
            subtxt91: '',
            txt10: 'Dla przewoźnika',
            subtxt101: '',
            txt11: 'KARTA PALIWOWA GTC',
            subtxt111: '',
          },
          baner: {
            h3: 'GTC Poland',
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
            occ2: 'Navy Seals',
            occ3: 'Navy Seals',
            occ4: 'Navy Seals',
            occ5: 'Navy Seals',
            occ6: 'Navy Seals',
            occ7: 'Navy Seals',
            occ8: 'Navy Seals',
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
