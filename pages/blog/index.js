// import Layout from '../../components/ui/Layout';
// import omegaImage from '../../images/vitd.png';
// import Image from 'next/image';
// import NewsCard from '../../components/blog/blogCard';
// import { getAllNews } from '../../lib/api';
// import FeaturedNews from '../../components/blog/FeaturedNews';
// import Categories from '../../components/Categories';
// import { NextSeo } from 'next-seo';

// const News = ({ data }) => {
//   return (
//     <Layout>
//       <NextSeo
//         title='News - Arctic Blue'
//         description='Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.'
//         canonical='omega-3.vercel.app/blog'
//         openGraph={{
//           url: 'omega-3.vercel.app/blog',
//           title: 'News - Arctic Blue',
//           description:
//             'Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.',
//         }}
//       />
//       <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
//         <div className='absolute h-full w-full z-[-10]'>
//           <Image src={omegaImage} objectFit='cover' layout='fill' priority />
//         </div>
//         <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl m-auto'>
//           <h1 className='text-4xl font-bold capitalize md:text-6xl'>News</h1>
//         </div>
//       </div>
//       <main className='lg:grid lg:grid-cols-3 responsive'>
//         <div className='lg:col-span-2 padding paddingy responsive'>
//           <h2 className='text-3xl font-bold md:text-4xl text-primary'>
//             Latest News
//           </h2>
//           <div className='lg:grid lg:grid-cols-2'>
//             {data.slice(0, 4).map(news => {
//               return (
//                 <NewsCard
//                   key={news.id.toString()}
//                   id={news.id.toString()}
//                   category={news.categories[0].name}
//                   title={news.title}
//                   text={news.body.slice(0, 100) + '...'}
//                   imageUrl={news.image.url}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <div className='lg:col-span-1 padding paddingy text-tertiary'>
//           <FeaturedNews data={data} />
//           <Categories />
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default News;

// export const getStaticProps = async () => {
//   const data = (await getAllNews()) || [];
//   return {
//     props: { data },
//   };
// };

import Image from 'next/image';
import Layout from '../../components/ui/Layout';
import heroImage from '../../images/Layer 3.png';

const Blog = () => {
  return (
    <Layout>
      <main>
        <div className='relative tracking-wider'>
          <div className='absolute h-full w-full z-[-10]'>
            <Image src={heroImage} objectFit='cover' layout='fill' />
          </div>
          <div className='responsive'>
            <div className='padding pt-28 lg:pt-60 pb-40 md:max-w-xl lg:max-w-3xl'>
              <h2 className='text-[#416444] text-[40px] font-bold mb-10'>
                De 5 beste visolie supplementen
              </h2>
              <p className='text-xl mb-4'>
                Wanneer je niet iedere week vette vis eet, of wanneer je gewoon
                wat extra ondersteuning nodig hebt, kun je deze olie in de vorm
                van supplementen gebruiken. Maar wat is nu het beste visolie
                supplement? In dit artikel vergelijken we de vijf meest
                verkochte Omega-3 supplementen. Wij kijken hierbij naar
                verschillende factoren. Denk dan aan de prijs van het
                supplement, de hoeveelheid werkzame stof, de winkel waar deze
                verkocht wordt en het gebruiksgemak.
              </p>
            </div>
          </div>
        </div>
        <div className='padding paddingy'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Holland & Barrett Triple Omega 3 Visolie 1360mg One-A-Day
            </h3>
            <p className='text-xl mb-4'>
              Prijs: Adviesprijs 31,99 (0,53 per capsule), aanbieding 14,07
              (0,23 per capsule)
              <br /> <br />
              Deze capsules bevatten 950 mg visolie, waarvan 680 mg EPA en 270
              DHA. Ook bevatten de capsules 15% vitamine E. Hiernaast bevatten
              deze capsules ook nog zonnebloemolie. De capsule zelf is gemaakt
              van gelatine en glycerine. De visolie wordt gewonnen uit diepzee-
              en koudwater vissen. De herkomst van deze vis is niet duidelijk.
              Dit supplement dient een keer per dag, bij voorkeur tijdens het
              eten, ingenomen te worden met water. <br /> <br />
              De capsules zijn glad, wat het innemen makkelijker maakt. Wel zijn
              ze aan de grote kant en hebben ze een lichte nasmaak. Dit maakt de
              capsules voor sommige mensen lastig in te nemen. <br /> <br />
              De website van Holland & Barrett is duidelijk en handig in
              gebruik. Zij bieden gratis verzending binnen Nederland vanaf een
              bestelwaarde van 20 euro, met op dit moment een levertijd van
              ongeveer vijf dagen. Ook is click & collect beschikbaar. De
              klantenservice heeft ruime openingstijden en wordt goed
              beoordeeld. Ook bij de reviews is te zien dat men niet tot
              nauwelijks klachten heeft over de winkel, het bestelproces of de
              klantenservice.
              <br /> <br />
              <strong>Voordelen:</strong> <br />
              - &nbsp; Betrouwbare webwinkel met persoonlijk advies <br />
              - &nbsp; Hoog gedoseerd <br />
              - &nbsp; Ook in fysieke winkel verkrijgbaar <br />
              - &nbsp; Regelmatig aantrekkelijke acties <br /> <br />
              <strong>Nadelen:</strong> <br />
              - &nbsp; Hoog geprijsd <br />
              - &nbsp; Grote capsules <br />
              - &nbsp; Lichte nasmaak <br />
              - &nbsp; Niet geschikt voor kinderen <br />
              - &nbsp; Fabrikant en herkomst visolie is niet bekend <br />
            </p>
          </div>
        </div>
        <div className='padding paddingy bg-[#f6f6f6]'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Holland & Barrett Omega 3 Visolie 1000mg 300 Capsules
            </h3>
            <p className='text-xl mb-4'>
              Prijs: Adviesprijs 37,99 (0,12 per capsule, 0,36 per dagdosering)
              <br /> <br />
              Dit visoliesupplement bevat per dagdosering van 3 capsules ruim
              3000 mg visolie, waarvan 540 mg EPA en 360 mg DHA. Ook bevatten
              drie capsules ruim 17% vitamine E. Daarnaast bevatten ook deze
              capsules zonnebloemolie en bestaat de capsule uit gelatine en
              glycerine. De herkomst van de visolie is op de website van Holland
              & Barrett niet duidelijk.
              <br /> <br />
              Deze capsules dienen ingenomen te worden met water, bij voorkeur
              tijdens het eten. Een nadeel van dit supplement is dat je drie
              capsules per dag in dient te nemen in plaats van een. Volgens de
              beoordelingen op de website hebben deze capsules geen nasmaak en
              zijn ze makkelijk in te nemen.
              <br /> <br />
              De website van Holland & Barrett is duidelijk en
              gebruiksvriendelijk. Ze bieden gratis verzending binnen Nederland,
              de bestelwaarde begint bij 20 euro en de huidige levertijd is
              ongeveer 5 dagen. Click and collect is ook beschikbaar, zodat je
              je bestelling snel en makkelijk op kan halen in de winkel. De
              openingstijden van de klantenservice zijn ruim en ook de reviews
              over deze webwinkel zijn positief. Uit de reviews bleek ook dat er
              weinig klachten waren over de winkel, het bestelproces of de
              klantenservice.
              <br /> <br />
              <strong>Voordelen:</strong> <br />
              - &nbsp; Betrouwbare webwinkel met persoonlijk advies <br />
              - &nbsp; Ook in fysieke winkel verkrijgbaar <br />
              - &nbsp; Regelmatig aantrekkelijke acties <br /> <br />
              <strong>Nadelen:</strong> <br />
              - &nbsp; Hoog geprijsd <br />
              - &nbsp; Dagdosering van drie grote capsules, wat voor sommige
              mensen veel kan zijn <br />
              - &nbsp; Niet geschikt voor kinderen <br />
              - &nbsp; Fabrikant en herkomst visolie is niet bekend <br />
            </p>
          </div>
        </div>
        <div className='padding paddingy'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Holland & Barrett Kids Multivitamine + Omega 3 (30 Gummies)
            </h3>
            <p className='text-xl mb-4'>
              Prijs: Adviesprijs 7.99 (0,26 per gummie), aanbieding 3,59 (0,12
              per gummie)
              <br /> <br />
              Deze kauwtabletten zijn speciaal voor kinderen vanaf 3 jaar
              gemaakt, maar kunnen ook door volwassenen gebruikt worden. Deze
              supplementen bevatten Omega 3 in de vorm van ALA, LA en OA,
              waaruit het lichaam zelf DHA en EPA kan aanmaken. Dit is wel een
              nadeel, omdat de omzetting door het lichaam van ALA naar DHA en
              EPA niet volledig is. De herkomst van de ALA is niet duidelijk:
              wel is ALA niet afkomstig uit vis maar uit plantaardige producten.
              Hierdoor hebben deze capsules geen nasmaak van vis.
              <br /> <br />
              Ook bevat dit supplement nog andere ingrediënten en vitaminen:
              vitamine A, C, D, E, B6, B12, niacine, pantotheenzuur en
              lijnzaadolie. De gummies zijn gemaakt van glucosesiroop, sacharose
              en water.
              <br /> <br />
              De aanbevolen hoeveelheid is 1 fruitgum per dag. De fruitgums
              smaken naar sinaasappel en zijn hierdoor makkelijk in te nemen,
              wat vooral handig is voor kinderen. Ze smaken namelijk naar snoep.
              <br /> <br />
              Ook dit supplement wordt verkocht bij Holland & Barrett, een van
              de bekendste en meest betrouwbare winkels voor
              gezondheidsproducten in Nederland. Zij bieden een betrouwbare
              service en persoonlijk advies op maat. Ook zijn er fysieke
              winkels, waardoor retouren nooit lastig is. <br /> <br />
              <strong>Voordelen:</strong> <br />
              - &nbsp; Geschikt voor kinderen <br />
              - &nbsp; Lekkere smaak <br />
              - &nbsp; Geen nasmaak na innemen <br />
              - &nbsp; Geschikt voor mensen die moeite hebben met het innemen
              van pillen <br />
              - &nbsp; Bevat ook vitaminen en mineralen <br />
              - &nbsp; Betrouwbare webwinkel met persoonlijk advies <br />
              - &nbsp; Ook in fysieke winkel verkrijgbaar <br />
              - &nbsp; Regelmatig aantrekkelijke acties <br /> <br />
              <strong>Nadelen:</strong> <br />
              - &nbsp; Bevat geen EPA en DHA <br />
              - &nbsp; Fabrikant is niet bekend <br />
            </p>
          </div>
        </div>
        <div className='padding paddingy bg-[#f6f6f6]'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Flinndal Omega-3 Forte
            </h3>
            <p className='text-xl mb-4'>
              Prijs: 27,82 voor 90 capsules (0,31 per capsule)
              <br /> <br />
              De Flinndal Omega-3 capsules bevatten per capsule 450 mg Omega-3
              vetzuren, waarvan 228 mg EPA en 152 mg DHA. Het supplement is
              gemaakt van de beste kwaliteit visolie, uit de snijresten van
              vette vis die voor consumptie geschikt is. De vis die hiervoor is
              gebruikt wordt op een duurzame manier gevangen en heeft het
              keurmerk ‘Friend of the Sea’, waardoor het milieu in acht wordt
              genomen bij de vangst van de vis. Het gaat hier dus om visolie uit
              verse zeevis, en dan wel sardines en ansjovis gevangen voor de
              kust van Peru.
              <br /> <br />
              Ook bevatten de capsules een kleine hoeveelheid vitamine E en wat
              rozemarijnolie. Dit is een krachtige antioxidant, waardoor de
              visolie niet ranzig wordt en dus ook geen nasmaak zal hebben. De
              capsule is gemaakt van rundergelatine, water en glycerol.
              <br /> <br />
              De dagdosering is 1 tot 2 capsules per dag, innemen met koud water
              tijdens of na de maaltijd. Kinderen tot vier jaar mogen een
              capsule per dag hebben, mits de inhoud gemengd wordt met de
              maaltijd in verband met verslikken.
              <br /> <br />
              Flinndal is een van de grootste webshops voor vitaminen in
              Nederland en wanneer je voor 22:00 besteld heb je je bestelling de
              volgende dag in huis. Bestellingen vanaf 20 euro worden gratis
              verzonden en er zijn veel mogelijkheden om de klantenservice te
              contacteren.
              <br /> <br />
              <strong>Voordelen:</strong> <br />
              - &nbsp; Herkomst van de visolie is bekend: wordt gewonnen uit
              verse vis <br />
              - &nbsp; Betrouwbare webwinkel/fabrikant <br />
              - &nbsp; Beschikt over het keurmerk 'Friend of the Sea': duurzame
              herkomst <br />
              - &nbsp; Snelle verzending <br />
              - &nbsp; Ook geschikt voor kinderen <br />
              - &nbsp; Bevat een antioxidant (rozemarijnolie) <br /> <br />
              <strong>Nadelen:</strong> <br />
              - &nbsp; Weinig tot geen vieze nasmaak door de rozemarijnolie
              <br />
            </p>
          </div>
        </div>
        <div className='padding paddingy'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Nutravita Omega 3 Visolie 2000mg met 660mg EPA & 440mg DHA
            </h3>
            <p className='text-xl mb-4'>
              Prijs: 19,99 (0,08 per capsule, 0,16 per dagdosering)
              <br /> <br />
              De Nutravita Omega 3 Visolie capsules bevatten 2000 mg visolie,
              waarvan maar liefst 660 mg EPA en 440 mg DHA. De visolie die
              gebruikt wordt is afkomstig van vissen gevangen voor de kust van
              Peru en is vrij van zware metalen en andere gifstoffen. Ook
              bevatten ze vitamine E. Het gehalte vitamine E is niet bekend. De
              capsules zijn gemaakt van gelatine en glycerol en bevatten geen
              kunstmatige kleur- of smaakstoffen. Supplementen van Nutravita
              worden gemaakt en getest op kwaliteit en inhoud in het Verenigd
              Koninkrijk. De herkomst is dus bekend.
              <br /> <br />
              Neem dagelijks 2 capsules met water in. Door de hoge dosering zijn
              de capsules wel redelijk groot. Wel zijn ze glad, waardoor ze
              makkelijker door te slikken zijn. Wel kan er een nasmaak aan de
              capsules zitten. Er zitten namelijk geen toevoegingen in, die de
              capsules beter doen smaken en de smaak van vis verhullen.
              <br /> <br />
              Amazon is een bekende webwinkel en daardoor betrouwbaar wat
              betreft levertijden, retouren en klantenservice. Ze bieden gratis
              verzending vanaf een bestelbedrag van 20 euro en een snelle
              levertijd van maximaal enkele dagen.
              <br /> <br />
              <strong>Voordelen:</strong> <br />
              - &nbsp; Vriendelijk geprijsd <br />
              - &nbsp; Hoog gedoseerd <br />
              - &nbsp; Herkomst bekend <br /> <br />
              <strong>Nadelen:</strong> <br />
              - &nbsp; Grote capsules, kunnen vies smaken <br />
              - &nbsp; Niet geschikt voor kinderen <br />
            </p>
          </div>
        </div>
        <div className='padding paddingy bg-[#f6f6f6] break-all'>
          <div className='responsive'>
            <h3 className='text-[#416444] text-[40px] font-bold mb-10'>
              Wat is het beste visolie supplement?
            </h3>
            <p className='text-xl mb-4'>
              Prijs (per dagdosering) <br />
              1 Nutravita Omega 3 Visolie 2000mg met 660mg EPA & 440mg DHA b
              <br />2 Holland & Barrett Kids Multivitamine + Omega 3 (30
              Gummies) <br />
              3 Holland & Barrett Triple Omega 3 Visolie 1360mg One-A-Day <br />
              4 Flinndal Omega-3 Forte b<br />
              5 Holland & Barrett Omega 3 Visolie 1000mg 300 Capsules
              <br /> <br />
              De visolie van Nutravita is qua prijs het voordeligst. Deze heeft
              ook de hoogste dosering actieve stoffen, wat het supplement een
              goede keuze maakt.
              <br /> <br />
              <strong>Dosering</strong> <br />
              1 Nutravita Omega 3 Visolie 2000mg met 660mg EPA & 440mg DHA
              <br />
              2 Holland & Barrett Triple Omega 3 Visolie 1360mg One-A-Day <br />
              3 Holland & Barrett Omega 3 Visolie 1000mg 300 Capsules <br />
              4 Flinndal Omega-3 Forte <br />
              5 Holland & Barrett Kids Multivitamine + Omega 3 (30 Gummies)
              <br /> <br />
              Ook hier komt de Nutravita het beste uit de bus. De dosering
              visolie is het hoogst in deze capsules. Ook zijn dit de enige
              supplementen, naast de visoliecapsules van Flinndal, waarvan de
              herkomst van de vis bekend is. Ook de visoliecapsules van Holland
              & Barrett zijn een goede keuze. Natuurlijk is de keuze voor een
              supplement persoonlijk. Wel hopen wij dat we je met deze
              vergelijking een stapje verder hebben kunnen helpen.
              <br /> <br />
              <strong>Gebruiksgemak</strong> <br />1 Holland & Barrett Kids
              Multivitamine + Omega 3 (30 Gummies) <br />
              2 Holland & Barrett Triple Omega 3 Visolie 1360mg One-A-Day <br />
              3 Flinndal Omega-3 Forte <br />4 Nutravita Omega 3 Visolie 2000mg
              met 660mg EPA & 440mg DHA <br />
              5 Holland & Barrett Omega 3 Visolie 1000mg 300 Capsules
              <br /> <br />
              De Holland & Barrett Kids Multivitamine + Omega 3 (30 Gummies)
              scoren het hoogste op gebruiksgemak. Je hoeft namelijk geen grote
              capsule door te slikken, maar het supplement komt in de vorm van
              een snoepje. Ook bevat dit supplement ook nog verschillende
              vitaminen en mineralen. Slik je liever een hogere dosering
              Omega-3? Kies dan gerust voor de Holland & Barrett Triple Omega 3
              Visolie 1360mg One-A-Day: je hoeft dan maar een capsule per dag in
              te nemen en deze visolie is bedoeld voor volwassenen. Wel heeft
              deze visolie een lagere dosering dan sommige van de andere opties
              in de lijst. <br /> <br />
              Bronnen: <br />
              https://www.zorgwijzer.nl/zorgwijzers/omega-3 <br />
              https://www.voedingscentrum.nl/encyclopedie/omega-3.aspx <br />
              https://nl.wikipedia.org/wiki/Omega_3-vetzuren <br />
              https://www.supplementguide.nl/omega-3/#Het_omega_3-supplement_met_de_beste_prijs-kwaliteitsverhouding
              <br />
              https://www.revolutionairgezond.nl/leefstijl/zo-herken-goede-omega-3-visolie-er-is-troep-koop/
              <br />
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
