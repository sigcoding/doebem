import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import saudeImage from "../../assets/saude-e-bem-estar.png"
import educacaoImage from "../../assets/educacao-de-qualidade.png"

export default function Caviver() {

    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5 ">
                    <h1 className="text-4xl tracking-wider font-medium">CAVIVER</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>O Caviver oferece atendimento clínico e cirúrgico especializado e gratuito a crianças em situação de vulnerabilidade social com o objetivo de diagnosticar as principais causas da cegueira infantil e tratá-las e reabilitá-las visualmente, contribuindo para a melhoria das condições de suas vidas e de seus familiares.</p>
                        <p>Ao longo dos mais de 20 anos de história, a organização vem se consolidando como referência na prevenção à cegueira infantil e no atendimento humanitário na oftalmopediatria.</p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Onde a organização atua?</h2>
                        <p className="text-[#1e346ac6] font-light">A organização atua na cidade de Fortaleza, no Ceará, prestando atendimento em sua sede e em hospitais neonatais parceiros. Além disso, abrange outros municípios do Ceará por meio de treinamentos de profissionais dos Hospitais Polo do estado.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Como podemos ajudar?</h2>
                        <ul className="list-disc w-[90%] mx-auto">
                            <li className="text-[#1e346ac6] font-light">R$ 50,00 - viscoelástico</li>
                            <li className="text-[#1e346ac6] font-light">R$ 100,00 - anestesia local</li>
                            <li className="text-[#1e346ac6] font-light">R$ 150,00 - recarga do tubo de oxigênio</li>
                            <li className="text-[#1e346ac6] font-light">R$ 200,00 - lentes intraoculares</li>
                            <li className="text-[#1e346ac6] font-light">R$ 500,00 - medicação para sedação</li>
                            <li className="text-[#1e346ac6] font-light">R$ 5.000,00 - custo total da cirurgia de catarata (medicamentos, materiais, anestesista, etc) materiais e medicamentos utilizados nas cirurgias</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Impacto</h2>
                        <p className="text-[#1e346ac6] font-light">Apesar de existirem poucos estudos científicos que buscam mensurar os impactos da prevenção da cegueira infantil, os estudos disponíveis mostram que há uma melhora significativa na qualidade de vida das crianças. Além das cirurgias, o Caviver também oferece gratuitamente o acompanhamento pós cirúrgico, aumentando a probabilidade de sucesso e reabilitação visual das crianças.</p>
                        <p className="text-[#1e346ac6] font-light">Ao longo de sua história, o Caviver já realizou mais de 3.800 procedimentos cirúrgicos além de mais de 39.000 atendimentos ambulatoriais em crianças em situação de vulnerabilidade.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Gestão</h2>
                        <p className="text-[#1e346ac6] font-light">A Dra. Islane Verçosa, fundadora e presidente da organização, possui vasta experiência no tratamento de doenças da visão. É diretora de uma clínica especializada em oftalmologia e coordenadora do projeto de prevenção à cegueira infantil no Estado do Ceará, desde 2003. O Caviver dispõe de sistema de prontuário eletrônico, o que possibilita um melhor acompanhamento no desenvolvimento dos beneficiários. Em 2023 a organização atualizará seu planejamento estratégico, elaborado originalmente em 2016 em parceria com a Dialogus Consultoria. </p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Transparência</h2>
                        <p className="text-[#1e346ac6] font-light">A organização estabeleceu parceria com a Universidade Federal do Estado do Ceará para elaboração da sua primeira avaliação de impacto e se mostrou aberta a análises externas. Por ser parceira da Christian Blind Mission (CBM), a organização é auditada pela P e L Auditores Independentes, auditoria externa indicada pela CBM, uma vez ao ano. Além disso, o Caviver publica seus balanços patrimoniais e demonstrações fiscais em seu site anualmente.</p>
                        <p className="text-[#1e346ac6] font-light">Confira aqui <a className="text-[#1398f0c6]" target="_blank" href="https://doebem.org.br/wp-content/uploads/2021/02/Caviver-Setembro17.pdf">nossa análise completa.</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex mx-auto">
                            <Image src={saudeImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-[230px]" />
                            <Image src={educacaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-[230px]" />
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Saiba mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto" target="_blank" href="https://caviver.org.br/">caviver.org.br</a>
                    </li>
                    
                </ul>
            </main >
            <Footer />
        </>
    )
}