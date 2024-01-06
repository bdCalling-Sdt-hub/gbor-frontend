import React from "react";
import img1 from "../../Images/intro1.png";
import img2 from "../../Images/intro2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const HowWork = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28">
        <h1 className="p-4 lg:p-0 text-center text-4xl font-bold text-[#252525]">
          Comment faire plaisir à votre <br /> créateur de contenu préféré ?
        </h1>
        <p className="w-full lg:w-2/4 p-4 lg:p-0 mx-auto mt-5 text-[#4B5563] text-center">
          Suivez ces différentes étapes ci-dessous
        </p>

        <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0 lg:w-3/4 mx-auto mt-16 gap-20">
          <div className="w-full lg:w-2/4">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">01 </span> Trouvez votre
              créateur de contenu favoris
            </h1>
            <p className="text-[#4B5563] mt-3">
              Dans la barre de recherche “ Recherchez votre créateur” Veuillez
              inscrire le nom du créateur de contenu que vous souhaitez
              soutenir, Sinon cliquez sur “ Tous nos créateurs” afin d’avoir la
              liste complète de nos créateurs de contenu favoris.
            </p>
          </div>
          <div className="w-full lg:w-2/4 space-y-12">
            <img className="img-shadow" src={img1} width="100%" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0 lg:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full lg:w-2/4 space-y-12 order-2 lg:order-1">
            <img className="img-shadow" src={img2} width="100%" alt="" />
          </div>
          <div className="w-full lg:w-2/4 order-1 lg:order-2">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">02 </span> Accédez au profil
              de votre créateur de contenu
            </h1>
            <p className="text-[#4B5563] mt-3">
              Une fois que vous avez trouvé votre créateur de contenu favoris,
              cliquez sur sa photo de profil ou “ Donner un Gbôr”
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0 lg:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full lg:w-2/4">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">03 </span> Soutenez et
              laissez un mot
            </h1>
            <p className="text-[#4B5563] mt-3">
              Une fois sur une la page de votre créateur de contenu favoris,
              entrez le nombre de Gbôr que vous souhaitez donner tout en sachant
              que 1 Gbôr = 500 FR Vous avez également la possibilité de laisser
              un message qui s’affichera dans la “Liste des donateurs” sur le
              profil du créateur de contenu. Vous verrez le montant total à
              payer ensuite cliquez sur “Soutenir” afin d’être envoyé sur la
              plateforme de paiement pour valider votre paiement via mobile
              money.
            </p>
          </div>
          <div className="w-full lg:w-2/4 space-y-12">
            <img className="img-shadow" src={img2} width="100%" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0 lg:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full lg:w-2/4 space-y-12 order-2 lg:order-1">
            <img className="img-shadow" src={img1} width="100%" alt="" />
          </div>
          <div className="w-full lg:w-2/4 order-1 lg:order-2">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">04 </span> Paiement validé ?
              Commentaire en cours de validation
            </h1>
            <p className="text-[#4B5563] mt-3">
              Lorsque votre paiement est validé, le commentaire que vous avez
              laissé part en cours de validation afin que l'équipe se rassure
              que votre commentaire n’est pas offensant ou injurieux. Le délai
              de traitement est d’une heure et votre message sera affiché s’il
              respecte nos conditions d’utilisation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowWork;
