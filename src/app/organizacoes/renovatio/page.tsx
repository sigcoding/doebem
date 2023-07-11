import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import saudeImage from "../../assets/saude-e-bem-estar.png"
import educacaoImage from "../../assets/educacao-de-qualidade.png"

export default function Renovatio() {

    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5 ">
                    <h1 className="text-4xl tracking-wider font-medium">Renovatio</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>Em 2014, a Renovatio traz para o Brasil a tecnologia de produção de óculos de grau resistentes e de baixo custo desenvolvida por Martin Aufmuth da organização alemã OneDollarGlasses. Ela atua não apenas na produção desses óculos, como também na sua distribuição no Brasil com o objetivo de reduzir a evasão escolar. Mais tarde, com o aprendizado dessas atividades, a Renovatio expandiu a sua atuação para melhorar o acesso à saúde visual, por meio da realização de mutirões com ônibus oftalmológicos equipados com dois consultórios completos.</p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Onde a organização atua?</h2>
                        <p className="text-[#1e346ac6] font-light"> Em São Paulo, Recife e em comunidades ribeirinhas no estado do Amazonas</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Como podemos ajudar?</h2>
                        <ul className="list-disc w-[90%] mx-auto">
                            <li className="text-[#1e346ac6] font-light">R$ 40 - fabricação de um óculos</li>
                            <li className="text-[#1e346ac6] font-light">R$ 99 - consulta oftalmológica</li>
                            <li className="text-[#1e346ac6] font-light">R$ 220 - óculos para astigmatismo (multifocal)</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Impacto</h2>
                        <p className="text-[#1e346ac6] font-light">No que diz respeito à distribuição de óculos de grau de baixo custo, há evidências de alta qualidade por meio de estudos realizados (RCT), confirmando que tal intervenção resulta no aumento da frequência escolar e na melhoria da performance acadêmica, pelo menos de curto prazo. Dois riscos de tal intervenção são a quebra ou perda dos óculos e a mudança de grau / deficiência ocular dos beneficiários, o que pode aumentar o custo da intervenção no médio e longo prazo e, assim, torná-la menos eficaz. A organização, até Junho/2017, já havia distribuído cerca de 12.000 óculos no Brasil.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Gestão</h2>
                        <p className="text-[#1e346ac6] font-light">A organização possui foco claro de atuação na saúde visual: fabricação e distribuição de óculos de grau de baixo custo e o atendimento oftalmológico por meio de de mutirões. Presidida por Ralf Toenjes desde 2014, a organização traz para o Brasil, como única detentora no país, a tecnologia desenvolvida pela empresa alemã OneDollarGlasses.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Transparência</h2>
                        <p className="text-[#1e346ac6] font-light">A organização se mostrou aberta para compartilhar as informações financeiras (Balanço Patrimonial e Demonstração de Resultado) e as atividades realizadas até hoje, incluindo número de triagens, consultas e óculos distribuídos por localidade e data. Em relação a pontos de melhoria, a doebem sugere o compartilhamento dessas informações no site oficial da Renovatio, assim como a contratação de uma Auditoria independente para os relatórios financeiros.</p>
                        <p className="text-[#1e346ac6] font-light">Confira aqui <a className="text-[#1398f0c6] hover:text-[#4b8aa4]" target="_blank" href="https://doebem.org.br/wp-content/uploads/2021/02/Renovatio-Maio17.pdf">nossa análise completa.</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex mx-auto">
                            <Image src={saudeImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-[230px]" />
                            <Image src={educacaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-[230px]" />
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Saiba mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto hover:text-[#4b8aa4]" target="_blank" href="http://www.renovatio.org.br/">renovatio.org.br</a>
                    </li>

                </ul>
            </main >
            <Footer />
        </>
    )
}