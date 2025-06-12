import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col py-10 w-full">
        <div>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Prenez le contrôle <br /> de vos finances
            </h1>
            <p className="py-6 text-gray-800 text-center">
              Suivez vos budgets et vos dépenses <br /> en toute simplicité avec notre applicaton intuitive !
            </p>
            <div>
              <a href={""} className="btn btn-sm md:btn-md btn-outline btn-accent"> {""} Se connecter</a>              
              <a href={""} className="btn btn-sm md:btn-md ml-2 btn-accent"> {""} S'inscrire</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
