import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import erradicaoImage from "../../assets/images/erradicacao-da-pobreza.png"
import erradicarFomeImage from "../../assets/images/erradicar-a-fome.jpg"
import saudeImage from "../../assets/images/saude-e-bem-estar.png"
import educacaoImage from "../../assets/images/educacao-de-qualidade.png"
import trabalhoImage from "../../assets/images/trabalho-decente-e-crescimento-economico.png"
import reducaoImage from "../../assets/images/reducao-das-desigualdades.png"

export default function SchistosomiasisControlInitiative() {

    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5">
                    <h1 className="text-4xl tracking-wider font-medium w-[200px]">Schistosomiasis Control Initiative</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>Quando você quer beber água, basta abrir a torneira. Mas e se você não tivesse água encanada? E se não pudesse beber água sem o risco de adoecer?</p>
                        <p>A SCI leva medicamentos que combatem parasitas para os locais que não possuem saneamento básico. E isso, por mais surpreendente que possa parecer, é <strong>uma das medidas comprovadamente mais efetivas para melhorar a educação nos países mais pobres.</strong></p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Por que verminoses?</h2>
                        <p className="text-[#1e346ac6] font-light">Verminoses têm uma série de consequências como, por exemplo, a menor absorção de nutrientes. O efeito disso é particularmente ruim para as crianças, ocasionando até mesmo um menor desenvolvimento físico e cognitivo e menor capacidade de prestar atenção às aulas. Ademais, a criança também acaba faltando mais às aulas por estar doente. Consequentemente isso leva a queda da produtividade e rendimentos quando na vida adulta, dificultando quebrar o ciclo de pobreza.</p>
                        <p className="text-[#1e346ac6] font-light">Diversos estudos concluíram que pessoas que receberam o tratamento de combate a parasitas quando crianças recebem salários maiores quando adultas. Isso é impressionante dado que dificilmente medidas na área social conseguem ter impacto mensurável por pesquisas realizadas décadas depois da intervenção original <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">(Saiba mais).</a></p>
                        <p className="text-[#1e346ac6] font-light">Pensamos que doenças como esquistossomose e helmintíase fazem parte do passado, porém infelizmente tais doenças estão longe de fazer parte apenas dos livros de história ou biologia, afetando, enquanto você lê isso, a saúde de milhões de pessoas no mundo todo e impedindo o desenvolvimento educacional de milhões de crianças.</p>

                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">A SCI é recomendada porque...</h2>
                        <ul className="list-disc mx-auto w-[90%]">
                            <li className="text-[#1e346ac6] font-light">Esse tipo de intervenção tem impacto social comprovado e excelente custo-efetividade <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/sci-foundation/November-2021-version#Independentevidenceofprogrameffectiveness">(Saiba mais)</a>.</li>
                            <li className="text-[#1e346ac6] font-light">Possui histórico de sucesso: a SCI tem demonstrado repetidamente capacidade em iniciar e expandir programas nacionais de desparasitação.</li>
                            <li className="text-[#1e346ac6] font-light">A organização se destaca pela sua transparência, tendo compartilhado informações significativas e detalhadas sobre seus programas.</li>
                            <li className="text-[#1e346ac6] font-light">É capaz de receber mais investimentos. A GiveWell entende que a SCI poderia utilizar muito mais dinheiro do que hoje recebe de forma produtiva <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/sci-foundation/November-2021-version#Isthereroomformorefunding">(Saiba mais)</a>.</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Mas isso funciona?</h2>
                        <p className="text-[#1e346ac6] font-light">A GiveWell, a partir de suas análises, acredita existirem fortes evidências de que a administração de remédios de desparasitação reduz parasitas e existe uma evidência da relação causal entre a redução dos parasitas e melhores resultados na vida escolar e adulta, tal como maiores rendimentos. Trata-se, assim, de um programa prioritário dado os fortes potenciais benefícios a um baixo custo.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">E qual o impacto?</h2>
                        <p className="text-[#1e346ac6] font-light">Custa menos de 3 reais para a SCI tratar uma criança (0,44 dólares por criança tratada). Estudo de 2020 demonstrou que o tratamento dado às crianças ainda lhes trouxe benefícios econômicos 20 anos depois. Dificilmente qualquer intervenção social é capaz de produzir esse tipo de impacto positivo tantos anos depois, de modo mensurável.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex flex-wrap mx-auto md:w-[691px]">
                            <Image src={erradicaoImage} alt="Saúde e Bem-Estar" className="w-1/3 sm:w-1/3 lg:w-[230px]" />
                            <Image src={erradicarFomeImage} alt="Saúde e Bem-Estar" className="w-1/3 sm:w-1/3 lg:w-[230px]" />
                            <Image src={saudeImage} alt="Saúde e Bem-Estar" className="w-1/3  sm:w-1/3 lg:w-[230px]" />
                            <Image src={educacaoImage} alt="Saúde e Bem-Estar" className="w-1/3 sm:w-1/3 lg:w-[230px]" />
                            <Image src={trabalhoImage} alt="Saúde e Bem-Estar" className="w-1/3 sm:w-1/3 lg:w-[230px]" />
                            <Image src={reducaoImage} alt="Saúde e Bem-Estar" className="w-1/3 sm:w-1/3 lg:w-[230px]" />
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Saiba mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto hover:text-[#4b8aa4]" target="_blank" href="https://unlimithealth.org/">unlimithealth.org</a>
                        <p className="text-[#1e346ac6] font-light text-center">Ao doar para essa organização, seus dados serão compartilhados com a GiveWell. Isso permite que a GiveWell <a className="text-[#1398f0c6] hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/about/impact">mensure seu impacto.</a></p>
                    </li>
                </ul>
            </main >
            <Footer />
        </>
    )
}