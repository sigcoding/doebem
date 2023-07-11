import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import saudeImage from "../../assets/saude-e-bem-estar.png"

export default function AgainstMalariaFoundation() {

    return (
        <>
            <Header />
            <main className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-14 mx-auto">
                <div className="w-full sm:w-[575px] flex flex-col gap-5">
                    <h1 className="text-4xl tracking-wider font-medium w-[300px]">Against Malaria Foundation</h1>
                    <div className="w-[100%] flex flex-col gap-5 bg-[#28417d] bg-opacity-70 bg py-7 px-5 text-slate-300">
                        <p>A Against Malaria Foundation (AMF) tem por missão reduzir casos de malária em países de baixa renda. A malaria mata cerca de 500 mil pessoas anualmente. A AMF atua principalmente na África e Sudeste Asiático, mas também na América Latina e Oceania.</p>
                    </div>
                </div>
                <ul className="w-[90vw] 2xl:w-[1024px] flex flex-col gap-6 mb-10">
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Por que malária?</h2>
                        <p className="text-[#1e346ac6] font-light">A malária é uma doença que pode ser fatal. Ela é um parasita, o plasmodium, transmitida pela picada dos mosquitos fêmeas da espécie Anopheles. O parasita da malária então passa do mosquito infectado para a pessoa picada.</p>
                        <p className="text-[#1e346ac6] font-light">Tais mosquitos possuem hábitos noturnos e costumam picar entre 10 horas da noite e 2 da manhã. Por isso, proteger as pessoas enquanto elas dormem apresenta bons resultados em prevenir a malária.</p>
                        <p className="text-[#1e346ac6] font-light">Há uma excelente proteção disponível para isso: redes contra mosquitos (também conhecidas como redes anti-insetos ou mosquiteiros) para que as pessoas durmam a noite debaixo destas grandes redes e fiquem assim protegidas dos mosquitos. A AMF financia e distribui tais redes.</p>
                        <p className="text-[#1e346ac6] font-light">Vale também observar que essas redes são tratadas com inseticidas de longa duração. Sendo assim, as redes funcionam de dois modos:</p>
                        <p className="text-[#1e346ac6] font-light">Primeiro, como barreira mecânica que impede o mosquito de chegar até a pessoa. Em segundo lugar, como um mecanismo para matar o mosquito por meio do inseticida que adere às patas do mosquito transmissor.</p>
                        <p className="text-[#1e346ac6] font-light">Ao dormirem protegidos por essas redes, as pessoas reduzem o risco de serem picadas pelo mosquito transmissor da malária. Com isso reduzem o risco de adoecer ou mesmo morrerem da doença. Também reduzem o risco de transmitirem o vírus da malária para outros mosquitos e assim, indiretamente, transmitirem o vírus para outras pessoas. É por isso que mesmo aquelas pessoas que vivem na região e que eventualmente não recebam ou não usem as redes estarão mais protegidas (esse “efeito protetivo” também é chamado informalmente de “efeito rebanho”).</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">A AMF é recomendada porque...</h2>
                        <ul className="list-disc mx-auto w-[90%]">
                            <li className="text-[#1e346ac6] font-light">Se concentra em um programa com excelente evidência de eficácia e custo-efetividade.</li>
                            <li className="text-[#1e346ac6] font-light">Implementa processos para garantir que as redes atinjam os destinatários pretendidos e acompanha se elas são usadas e se estão em boas condições de uso a longo prazo.</li>
                            <li className="text-[#1e346ac6] font-light">Possui capacidade para receber mais recursos financeiros - acreditamos que a AMF poderá usar fundos adicionais para entregar redes adicionais.</li>
                            <li className="text-[#1e346ac6] font-light">É transparente - a AMF compartilha informações relevantes sobre seu trabalho com a GiveWell, permitindo assim acompanhar e entender seu trabalho de perto.</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Mas isso funciona?</h2>
                        <p className="text-[#1e346ac6] font-light">A GiveWell, a partir de suas análises, acredita existirem evidências suficientes da eficácia desta intervenção. </p>
                        <p className="text-[#1e346ac6] font-light">Conforme estudos controlados aleatórios (Randomized Controlled Trials) vilarejos em que são distribuídas estas redes apresentam reduzida incidência de pessoas que adoecem por malária. </p>
                        <p className="text-[#1e346ac6] font-light">Para algo em torno de 100 a 1.000 redes distribuídas, uma pessoa, geralmente uma criança, não morre. Desse modo, a GiveWell estima que uma vida é salva para, aproximadamente, cada 9 mil reais (1.690 dólares) doados (dados de 2019)[Link GiveWell] .</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">E qual o impacto?</h2>
                        <p className="text-[#1e346ac6] font-light">Custa menos de 25 reais (aproximadamente 4 dólares) para produzir uma rede e todas as despesas de distribuição. 100% das doações vão para produção de redes, com a distribuição sendo feita por organizações parceiras.</p>
                        <p className="text-[#1e346ac6] font-light">Dado o custo relativamente baixo para produção de uma rede, trata-se de uma das intervenções sociais de maior impacto para salvar vidas - comprovado por estudos.</p>
                        <p className="text-[#1e346ac6] font-light">Por fim, há outros ganhos além das vidas salvas: a malária representa um grande peso econômico aos países em desenvolvimento (custos de saúde, perda de produtividade, etc). Alguns estudiosos inclusive sustentam que a malária está entre os principais motivos de subdesenvolvimento do continente áfricano.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[24px]">Objetivos de Desenvolvimento Sustentável</h2>
                        <div className="flex flex-wrap mx-auto justify-center">
                            <Image src={saudeImage} alt="Saúde e Bem-Estar" className="w-3/4 sm:w-3/4 lg:w-[230px]" />
                        </div>
                        <h3 className="text-[#28417d] text-[24px] mx-auto">Saiba mais:</h3>
                        <a className="text-[#1398f0c6] mx-auto hover:text-[#4b8aa4]" target="_blank" href="https://www.againstmalaria.com/">www.againstmalaria.com</a>
                        <p className="text-[#1e346ac6] font-light text-center">Ao doar para essa organização, seus dados serão compartilhados com a GiveWell. Isso permite que a GiveWell <a className="text-[#1398f0c6] hover:text-[#4b8aa4]" target="_blank" href="https://www.givewell.org/about/impact">mensure seu impacto.</a></p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h2 className="text-[#28417d] text-[20px] text-center">Leia o que já publicamos sobre a Against Malaria Foundation:</h2>
                        <a className="text-[#1398f0c6] text-center hover:text-[#4b8aa4]" target="_blank" href="#">Pobreza Global</a>
                    </li>
                </ul>
            </main >
            <Footer />
        </>
    )
}