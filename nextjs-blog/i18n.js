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
            subtxt31: 'Wszyscy jesteśmy odpowiedzialni za jakość środowiska, w którym żyjemy. Dlatego kierujemy się zasadą wielokrotnego wykorzystywania metariałów na drodze recyklingu.',
            subtxt32: 'Koncentrujemy się na dużych wolumenach odpadów ponownego przetworzenia, dzięki czemu zapewniamy możliwość wielokrotnego wykorzystywania papieru czy metali nieżelaznych w cyklach produkcyjnych. Specjalizujemy się w profesjonalnym przewozie materiałów odpadowych do większości europejskich instalacji recyklingowych, hut, odlewni czy papierni. ',
            subtxt33: 'Dobieramy środki transportu jak również optymalne trasy przewozu uwzględniając przepisy poszczególnych krajów europejskich w tym zakresie. ',
            txt4: 'Transport wywrotkami',
            subtxt41: 'Dzięki rozbudowanej flocie własnej oraz kontraktowej zapewniamy skuteczny transport materiałów sypkich, budowlanych, odpadowych oraz złomu na terenie całej Europy. Dysponujemy wywrotkami – stalowe (ładowność od 23 do 24,5 tony), aluminiowe (ładowność od 25 do 26,5 tony) - oraz ruchomymi podłogami w zależności od wymogów Klienta i rodzaju materiału do przewozu.  ',
            subtxt42: 'Specjalizujemy się w transporcie metali do przetopu lub dalszej obróbki, realizujemy projekty niezależnie od wielkości wolumenu. Wszystkie przewożone przez nas towary są ubezpieczone, a samochody wyposażone w system nawigacji GPS. Posiadamy stosowne pozwolenia na transport materiałow odpadowych w większości krajów europejskich. ',
            txt5: 'Transport Ekspresowy oraz LTL',
            subtxt51: 'Przewóz ekspresowy dedykowany jest dla przesyłek, gdzie najważniejszym kryterium jest szybkość dostawy. Wieloletnie doświadczenie, dedykowany opiekun oraz liczna flota sprawdzonych podwykonawców gwarantuje najwyższą skuteczność oferowanej przez nas usługi. Zapewniamy kilkuosobowe zespoły spedytorów wyspecjalizowanych w danym kierunku oraz komunikujących się w języku klienta. Oferujemy możliwość obsługi klientów w nietypowych godzinach pracy np. ze względu na inną strefę czasową centrów decyzyjnych. ',
            subtxt52: '- dobieramy typ przewozu w zależności od wymaganego czasu dostawy: drobnica lub wysyłka just in time',
            subtxt53: '- organizujemy transport busami, solówkami, w doładunkach',
            subtxt54: '- zlecenia obsługujemy w oparciu o flotę własną oraz flotę naszych zweryfikowanych podwykonawców ',
            subtxt55: '- dysponujemy odpowiednią infrastrukturą i znajomością lokalnych uwarunkowań na terenie UE',
            subtxt56: '- zapewniamy szybką wycenę zapytań ofertowych oraz dedykowanych opiekunów 24/7',
            txt6: 'Transport płodów Rolnych GMP+',
            subtxt61: 'Jedną z naszych specjalizacji jest transport płodów rolnych. Posiadamy certyfikat GMP+  przeznaczony dla przedsiębiorstw transportowych oraz firm spedycyjnych specjalizujących się w przewozie ładunków, dla sektora paszowego. ',
            subtxt62: 'Zabezpieczamy realizację kontraktów o dużych wolumenach, odznaczających się pikami sezonowymi. Dysponujemy zróżnicowaną flotą dostosowana do najbardziej restrykcyjnych wymogów przewozu żywności, pasz, śrut. ',
            subtxt63: 'Realizujemy transport na terenie całej Europy z zachowaniem najwyższych norm bezpieczeństwa w trakcie przewozu. Przygotowujemy symulacje kosztowe uwzgledniające transport multimodalny: kołowy, szynowy, morski. ',
            subtxt64: 'W naszej ofercie Klienci znajdą możliwość przewozu :',
            subtxt65: '- pszenicy  ',
            subtxt66: '- żyta',
            subtxt67: '- owsa',
            subtxt68: '- jeczmienia',
            subtxt69: '- kukurydzy',
            subtxt611: '- rzepaku ',
            subtxt612: '- ziemniaków ',
            subtxt613: '- cebuli',
            subtxt614: '- jabłek ',
            subtxt615: '- jabłek ',
            subtxt616: '- śrut rzepakowych i słonecznikowych ',
            subtxt617: '- wysłodów buraczanych ',
            txt7: 'Magazynowanie',
            subtxt71: 'Oferujemy naszym klientom pełną obsługę magazynową połączoną z usługami dedykowanymi. Nasze analizy prowadzone są wieloetapowo uwzględniając cele klienta skorelowane z najbardziej optymalnym doborem klasy magazynu, lokalizacją i ceną za transport',
            subtxt72: '- dobieramy magazyny w oparciu o indywidualną analizę potrzeb przedsiębiorstwa',
            subtxt73: '- zapewniamy rozwiązania, które optymalizują koszty wszystkich elementów procesu logistycznego: magazynowanie, transport, copacking, konfekcjonowanie, dystrybucję, operacje przeładunkowe',
            subtxt74: '- dysponujmy powierzchnią magazynową w Małopolsce, na Śląsku oraz w centralnej Polsce',
            subtxt75: '- realizujemy obsługę magazynową w krótkich okresach czasu na zasadzie buforu',
            txt8: 'Dla przewoźnika',
            subtxt81: '',
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
