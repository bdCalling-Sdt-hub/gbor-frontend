import React from "react";
import img1 from "../../../Images/intro1.png";
import img2 from "../../../Images/intro2.png";
import "./whoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className=" bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 ">
      <h1 className=" w-3/4 mx-auto text-center text-5xl font-bold pb-4">
        Qui sommes-nous ?
      </h1>
      <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0  lg:w-3/4 mx-auto mt-10 gap-20">
        <div className="w-full order-2 md:order-1">
          <h1 className="text-2xl  font-bold">
            Nous aspirons à créer un environnement adéquat pour tous les
            créateurs de contenu.
          </h1>
          <p className="text-[#4B5563] mt-3">
            Cette plateforme a été créée dans le but de venir en aide aux
            créateurs de contenu qui manquent souvent de ressources afin de
            produire du contenu de qualité. En soutenant financièrement vos
            créateurs de contenu préférés via des GBÔR ( 1 GBÔR = 500 FR ), vous
            leur fournissez les ressources nécessaires pour investir dans du
            matériel de meilleure qualité, des logiciels améliorés et
            potentiellement plus de temps pour se consacrer à la création de
            contenu.
          </p>
          <p className="text-[#4B5563] mt-3">
            Savoir que leur travail est apprécié et soutenu peut motiver les
            créateurs à maintenir des normes élevées de qualité. La
            reconnaissance et l'encouragement du public peuvent les inciter à se
            dépasser et à chercher constamment à s'améliorer. Certains créateurs
            investissent dans leur propre formation pour perfectionner leurs
            compétences. Le soutien financier peut les aider à accéder à des
            cours, des ateliers ou des ressources éducatives qui amélioreront
            leur expertise et, par conséquent, la qualité de leur contenu.
          </p>
          <p className="text-[#4B5563] mt-3">
            Si les créateurs dépendent moins des revenus publicitaires et
            davantage du soutien direct de leur audience, ils peuvent se
            permettre de créer du contenu plus authentique et orienté vers la
            qualité, plutôt que de chercher à maximiser les clics ou les vues.
          </p>
          <p className="text-[#4B5563] mt-3">
            En somme, soutenir les créateurs de contenu va au-delà du simple
            encouragement moral. Cela leur offre les moyens nécessaires pour
            investir dans leur art, se perfectionner et créer un contenu de
            meilleure qualité pour leur public.
          </p>
        </div>
        <div className="w-full space-y-12 order-1 md:order-2">
          <div className="whoAreImg overflow-hidden rounded-2xl">
            <img
              width="100%"
              className="transition duration-300 img-shadow"
              src={img1}
              alt=""
            />
          </div>
          <div className="whoAreImg overflow-hidden rounded-2xl img-shadow">
            <img
              width="100%"
              className="transition duration-300 img-shadow"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
