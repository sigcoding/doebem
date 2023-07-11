import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import erradicaoImage from "../../assets/images/erradicacao-da-pobreza.png"
import erradicarFomeImage from "../../assets/images/erradicar-a-fome.jpg"
import trabalhoImage from "../../assets/images/trabalho-decente-e-crescimento-economico.png"
import reducaoImage from "../../assets/images/reducao-das-desigualdades.png"

export default function GiveDirectly() {

    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5">
                    <h1 className="text-4xl tracking-wider font-medium w-[200px]">Give Directly</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>A missão da GiveDirectly é dar dinheiro diretamente para as pessoas mais pobres do mundo de modo que elas possam decidir por elas próprias como melhorarem de vida. Seja comprando novas ferramentas, abrindo seu próprio negócio, reformando suas casas ou pagando a escola de seus filhos, cabe a elas decidir como usarão o dinheiro.</p>
                        <p>Em dez anos, entre 2009 e 2019, a GiveDirectly direcionou 160 milhões de dólares para mais de 170 mil famílias vivendo na pobreza.</p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Por que recomendamos a GiveDirectly?</h2>
                        <ul className="list-disc mx-auto w-[90%]">
                            <li className="text-[#1e346ac6] font-light">Foca em transferências diretas de dinheiro, um programa com forte histórico de impacto <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/give-directly/November-2020-version#promisingapproach">(Saiba mais)</a>.</li>
                            <li className="text-[#1e346ac6] font-light">Possui um rigoroso processo para garantir que o dinheiro seja bem direcionado e consistência em atingir os beneficiários desejados <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/give-directly/November-2020-version#eligibilitycriteria">(Saiba mais)</a>.</li>
                            <li className="text-[#1e346ac6] font-light">Tem sucesso documentado em transferir grandes quantias diretamente para beneficiários <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/give-directly/November-2020-version#CashRatios">(Saiba mais)</a>.</li>
                            <li className="text-[#1e346ac6] font-light">Apresenta nível excelente de transparência <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/give-directly/November-2020-version#Evaluation_and_experimentation">(Saiba mais)</a>.</li>
                            <li className="text-[#1e346ac6] font-light">É capaz de receber mais investimentos. A GiveWell acredita que a GiveDirectly poderia utilizar muito mais dinheiro do que hoje recebe de forma produtiva <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/charities/give-directly/November-2020-version#Roomformorefunding">(Saiba mais)</a>.</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">O que a organização faz?</h2>
                        <p className="text-[#1e346ac6] font-light"><strong className="text-[#0e1c3e]">A GiveDirectly realiza transferências diretas de dinheiro para as pessoas mais pobres do mundo. </strong>Tudo isso com a tecnologia que está na mão de todo mundo: o celular. </p>
                        <p className="text-[#1e346ac6] font-light">As pessoas ajudadas encontram-se na chamada extrema pobreza, o que significa viver com menos de um dólar e noventa centavos por dia, de acordo com a ONU.</p>
                        <p className="text-[#1e346ac6] font-light"><strong className="text-[#0e1c3e]">As transferências são feitas sem intermediários. </strong>A GiveDirectly contata diretamente as pessoas que receberão o dinheiro, impedindo assim que o dinheiro seja desviado por corrupção ou ineficiências administrativas, por exemplo. </p>
                        <p className="text-[#1e346ac6] font-light"><strong className="text-[#0e1c3e]">Não existem quaisquer restrições de como as pessoas usarão o dinheiro. Elas podem fazer o que julgarem melhor.</strong>Parte-se do pressuposto que ninguém conhece melhor as necessidades de uma pessoa que ela própria.</p>
                        <p className="text-[#1e346ac6] font-light"><strong className="text-[#0e1c3e]">A maior parte das transferências de dinheiro se dá via celular.</strong>Tais serviços ficaram muito populares em diversas regiões da África ao substituírem os grandes bancos e assim democratizarem o acesso a serviços tipicamente bancários.</p>
                        <p className="text-[#1e346ac6] font-light">As famílias precisam de pelo menos um cartão SIM para participar, e a GiveDirectly fornece cartões SIM para famílias que ainda não possuem um. Também oferecem aos destinatários a opção de comprar um telefone celular como parte de sua primeira transferência de renda. </p>
                        <p className="text-[#1e346ac6] font-light"><strong className="text-[#0e1c3e]">Quando o dinheiro eletrônico é transferido para a conta do destinatário</strong>, eles recebem uma mensagem de texto informando que foram pagos. Os destinatários podem trocar seu dinheiro móvel por dinheiro físico em qualquer lugar da rede de agentes de dinheiro móvel. Os agentes costumam ser lojistas locais, mas também podem ser postos de gasolina, supermercados, lan houses, cafés e até os próprios bancos. <strong className="text-[#0e1c3e]">Os destinatários também podem pagar diretamente via celular aos diversos negócios que aceitam esse sistema como forma de pagamento.</strong></p>

                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Mas isso funciona?</h2>
                        <p className="text-[#1e346ac6] font-light">A GiveWell, a partir de suas análises, acredita ter evidências suficientes de que transferência de renda incondicional ajuda significativamente as pessoas e que a GiveDirectly cumpre sua missão de modo eficaz.</p>
                        <p className="text-[#1e346ac6] font-light">O trabalho da GiveDirectly já foi analisado em diversos estudos controlados aleatórios (RCT - Randomized Controlled Trials) de modo a mensurar com precisão seu impacto.</p>
                        <p className="text-[#1e346ac6] font-light">Sempre se levantou muita suspeita com relação aos impactos de programas de transferências diretas de dinheiro aos mais pobres o que, por um lado positivo, levou a realização de diversos estudos a fim de comprovar sua efetividade.</p>
                        <p className="text-[#1e346ac6] font-light">Por exemplo, uma desconfiança comum é que aqueles que recebessem doações poderiam gastá-las com álcool ou cigarros. Contudo, diversas pesquisas constataram o oposto: os destinatários gastam menos em álcool e tabaco após receberem as transferências em dinheiro. </p>
                        <p className="text-[#1e346ac6] font-light">Os dados mostram em geral que, ao receber doações, há um aumento no consumo de alimentos, despesas médicas e educacionais, bens duráveis e melhoramento da casa, como móveis ou telhados modernos. Ainda persistem mitos de que a transferência direta faria com que muitos simplesmente deixassem de trabalhar, mas o que se constata é aumento da aquisição de ativos, tal como insumos para negócios, compra de animais, grãos e equipamentos agrícolas. Vale sempre lembrar que a maior parte das pessoas em extrema pobreza vivem do trabalho agrícola.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">E qual o impacto?</h2>
                        <p className="text-[#1e346ac6] font-light">A cada 1 real doado, 83 centavos chegam até o doador final e os demais valores são usados na gestão da GiveDirectly. Por sua proposta simples a GiveDirectly acaba tendo custos administrativos bem menores que demais ONGs de porte similar <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="https://www.givedirectly.org/financials/">(Veja mais detalhes aqui).</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex flex-wrap mx-auto">
                            <Image src={erradicaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={erradicarFomeImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={trabalhoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                            <Image src={reducaoImage} alt="Saúde e Bem-Estar" className="w-2/4 sm:w-1/4 lg:w-[230px]" />
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Conheça mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto hover:text-[#4b8aa4]" target="_blank" href="https://www.givedirectly.org/">givedirectly.org</a>
                        <p className="text-[#1e346ac6] font-light text-center">Ao doar para essa organização, seus dados serão compartilhados com a GiveWell. Isso permite que a GiveWell <a className="text-[#1398f0c6] hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/about/impact">mensure seu impacto.</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[20px] text-center">Leia o que já publicamos sobre a GiveDirectly: </h2>
                        <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">Como a GiveDirectly está atuando na crise do Covid-19</a>
                        <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">GiveDirectly: dinheiro diretamente nas mãos dos mais pobres do mundo</a>
                        <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">Uma organização implementou um “pacote de incentivos” no interior do Quênia - e transformou a economia</a>
                    </li>
                </ul>
            </main >
            <Footer />
        </>
    )
}