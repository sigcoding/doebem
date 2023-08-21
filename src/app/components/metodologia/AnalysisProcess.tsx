import Image from "next/image";
import FirstAnalysisProcess from "../../../../public/first-analysis-process.jpg";
import SecondAnalysisProcess from "../../../../public/second-analysis-process.jpg";
import ThirdAnalysisProcess from "../../../../public/third-analysis-process.jpg";
import FourtyAnalysisProcess from "../../../../public/fourty-analysis-process.jpg";
import FifthAnalysisProcess from "../../../../public/fifth-analysis-process.jpg";

type AnalysisProcessItemProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  isReverse?: boolean;
}

const AnalysisProcessItem = ({ title, imageUrl, imageAlt, isReverse }: AnalysisProcessItemProps) => {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl justify-around">
      {isReverse ? (
        <>
          <Image src={imageUrl} className="max-w-xs" alt={imageAlt} />
          <h4 className="text-md text-gray-700 my-8 md:my-0 md:ml-4 font-medium max-w-xs">{title}</h4>
        </>
      ) : (
        <>
          <h4 className="text-md text-gray-700 mr-4 mb-8 md:mb-0 font-medium max-w-xs">{title}</h4>
          <Image src={imageUrl} className="max-w-xs" alt={imageAlt} />
        </>
      )}
    </div> 
  );
} 

export const AnalysisProcess = () => {
  return (
  <div className="mt-14">
    <h2 className="text-2xl font-medium tracking-tight text-gray-800">Processo de Análise</h2>
    <div className="grid gap-y-8 mt-10 justify-center">
      <AnalysisProcessItem 
          title="1. Pesquisamos os problemas e intervenções que possuem o maior impacto." 
          imageUrl={FirstAnalysisProcess} 
          imageAlt="Imagem com várias folhas a mostra, demonstrando pesquisa." 
        />
      <AnalysisProcessItem 
          title="2. Estudamos a relevância dos problemas no Brasil." 
          imageUrl={SecondAnalysisProcess} 
          imageAlt="Bandeira do Brasil."
          isReverse
        />
      <AnalysisProcessItem 
          title="3. Buscamos organizações sociais que trabalhem com intervenções eficazes para solucionar estes problemas." 
          imageUrl={ThirdAnalysisProcess} 
          imageAlt="Imagem com uma folha que há uma lupa apontando para 2 linhas em vermelho." 
        />
      <AnalysisProcessItem 
          title="4. Avaliamos as organizações com base no Impacto, Transparência e Gestão." 
          imageUrl={FourtyAnalysisProcess} 
          imageAlt="Um homem e em seu lado direito uma checklist com 3/4 itens completos."
          isReverse
        />
      <AnalysisProcessItem 
          title="5. Caso aprovada, pedimos autorização para recomendar a organização em nosso site para recebimento de doações." 
          imageUrl={FifthAnalysisProcess} 
          imageAlt="Logo da DoeBem com os dizeres Simples. Seguro. Efetivo." 
        />
    </div>
  </div>
  );
}
