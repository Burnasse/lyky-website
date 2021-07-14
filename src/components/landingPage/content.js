import * as React from "react";
import ContentCard from "./contents/ContentCard"

const LandingContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-indigo-700 py-6 flex flex-col justify-center sm:py-12">
      <div className="max-w mx-auto">
      <div className=" w-full text-center py-8 text-white sm:text-lg sm:leading-7">
        <h1 className="my-4 text-5xl font-bold leading-tight">Pourquoi LYKY ?</h1>
      </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ml-2 mr-2">
          <ContentCard title="Automatisé" description=" Rentrez uniquement les informations nécessaires, notre algorithme se charge de créer l'emploi du temps à votre place. "/>
          <ContentCard title="Accessible" description=" Consultez votre emploi du temps n'importe où, quelque soit le support."/>
          <ContentCard title="Ergonomique" description=" Une interface simple et propre à chaque utilisateur."/>
          <ContentCard title="Simple" description=" Que vous soyez néophyte ou expert en informatique, n'importe qui peut utiliser LYKY."/>
          <ContentCard title="Suivi" description=" Régulièrement mis à jour, profitez rapidement de nouvelles fonctionnalités."/>
          <ContentCard title="Sécurisé" description="Vos données sont stockées dans des serveurs entièrement sécurisés, vous seuls y avez accès."/>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
