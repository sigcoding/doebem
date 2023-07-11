import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import erradicaoImage from "../../assets/images/erradicacao-da-pobreza.png"
import saudeImage from "../../assets/images/saude-e-bem-estar.png"
import trabalhoImage from "../../assets/images/trabalho-decente-e-crescimento-economico.png"
import reducaoImage from "../../assets/images/reducao-das-desigualdades.png"

export default function Dara() {
    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5">
                    <h1 className="text-4xl tracking-wider font-medium">Instituto Dara</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>Criado pela Dra. Vera Cordeiro em 1991, o Instituto Dara (antes Saúde Criança) nasceu a partir da visão de que não bastava apenas tratar a doença de uma criança no hospital, era preciso também dar atenção às condições familiares e ao ambiente em que a criança vivia.</p>
                        <p>Assim, oferece suporte às famílias em cinco pilares: saúde, moradia, cidadania, renda e educação. Ao longo de cerca de dois anos, as famílias recebem apoio conforme suas necessidades específicas e, após esse período de estruturação e melhoria da condição de vida, recebem “alta”.</p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Onde a organização atua?</h2>
                        <p className="text-[#1e346ac6] font-light">O Instituto Dara possui três unidades na cidade do Rio de Janeiro, uma em Petrópolis e uma em Porto Alegre. A organização licencia sua metodologia para parceiros, sendo que um deles atua em São Paulo e outro em Cascais, Portugal.</p>
                        <p className="text-[#1e346ac6] font-light">Além disso, foi estabelecida uma parceria com a cidade de Belo Horizonte para a implementação da metodologia como política pública. Entendemos que tal iniciativa é importante por conta da maior capacidade de mobilização de recursos por parte do Estado, aumentando o impacto e alcance de famílias em necessidade, e também por fomentar a prática ainda incipiente no Brasil de Política Públicas baseadas em evidências.</p>
                        <p className="text-[#1e346ac6] font-light">Leia nossa <a className="text-[#1398f0c6] hover:text-[#4b8aa4]" target="_blank" href="https://doebem.org.br/wp-content/uploads/2021/02/Dara-Novembro16.pdf">análise completa aqui.</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Como podemos ajudar?</h2>
                        <ul className="list-disc mx-auto w-[90%]">
                            <li className="text-[#1e346ac6] font-light">R$ 30 - Leite para uma criança por um mês</li>
                            <li className="text-[#1e346ac6] font-light">R$ 115 - Filtro para fornecer água potável</li>
                            <li className="text-[#1e346ac6] font-light">R$ 200 - Garantia da segurança alimentar de uma família por um mês</li>
                            <li className="text-[#1e346ac6] font-light">R$ 250 - Medicação para 10 pessoas por um mês.</li>
                            <li className="text-[#1e346ac6] font-light ">R$ 300 - Cursos profissionalizantes para uma pessoa</li>
                            <li className="text-[#1e346ac6] font-light">R$ 10.000 - Reforma de casas com infiltração</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Impacto</h2>
                        <p className="text-[#1e346ac6] font-light">A organização já atendeu mais de 60.000 pessoas. O estudo randomizado controlado, considerado como o padrão ouro para avaliação de impacto, foi realizado por pesquisadores da Georgetown University e demonstrou impacto positivo significativo na vida das famílias que passaram pelo programa do Saúde Criança, principalmente nos quesitos de renda familiar e diminuição de dias de internação hospitalar. Este estudo comprova, assim, a eficácia da atuação da organização. (Sumário do Estudo em português / Estudo na íntegra, em inglês).</p>
                        <p className="text-[#1e346ac6] font-light">Em relação à necessidade de recursos financeiros por parte da organização e exposição a financiadores, o Saúde Criança possui um fundo patrimonial para garantir a perenidade do projeto e diminuir a dependência de flutuação no montante de doações.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Gestão</h2>
                        <p className="text-[#1e346ac6] font-light">O Saúde Criança possui mais de 25 anos de existência e aproximadamente 43 funcionários e corpo de direção com diversos anos na organização. A organização possui uma vasta rede de conselheiros, incluindo o ex-presidente do Banco Central do Brasil Armínio Fraga. Além disso, a organização dispõe de sistema de gestão desenvolvido sob medida para o acompanhamento das famílias, o que possibilita facilidade na avaliação de dados e da situação dos beneficiários. A organização conta com o apoio de gestão da consultoria McKinsey.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Transparência</h2>
                        <p className="text-[#1e346ac6] font-light">A organização publica trimestralmente um boletim com indicadores financeiros e de impacto. As movimentações financeiras são auditadas anualmente pela Ernst & Young. Em relação à abertura para análises externas, a organização se mostrou aberta para responder nossos questionamentos em uma reunião presencial e de forma recorrente por e-mail. Foi realizado um estudo randomizado controlado por parte de pesquisadores da Georgetown University para mensurar o impacto da organização.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex flex-wrap mx-auto">
                            <Image src={erradicaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={saudeImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={trabalhoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={reducaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]"/>
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Saiba mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto hover:text-[#4b8aa4]" target="_blank" href="https:\\dara.org.br">dara.org.br</a>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[20px] text-center">Leia o que mais já publicamos sobre o Instituto Dara aqui:</h2>
                        <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">Instituto Dara: há mais de 25 anos combatendo a pobreza no Brasil</a>
                    </li>
                </ul>
            </main >
            <Footer />
        </>
    )
}