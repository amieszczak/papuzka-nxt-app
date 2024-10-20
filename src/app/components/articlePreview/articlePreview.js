import styles from './articlePreview.module.css';

export default function ArticlePreview() {
    return (
        <div className={styles.container}>
            <h2>Ćwiczenia motoryki małej a rozwój mowy dziecka</h2>
            <p>Prawidłowy rozwój mowy dziecka często zależy od wielu czynników, zarówno środowiskowych jak i psychologicznych. Ośrodek mowy w mózgu położony jest bardzo blisko tego, który odpowiada za ruchy rąk.
                Oznacza to, iż stymulowanie dłoni i praca nad motoryką małą może pozytywnie wpłynąć na rozwój mowy.

                Propozycje ćwiczeń motoryki małej:
                - Wlejcie do miski wodę, wrzućcie do niej np. figurki zwierząt. Maluchy mogą wyławiać je rękami, starsze dzieci niech pożyczą od mamy z kuchni szczypce! Możecie zrobić sobie małe zawody – kto więcej wyłowi, rodzic czy dziecko?
                - Do kolejnej zabawy potrzebujecie sznurka i klamerek do rozwieszania prania. Może ubrania lalek potrzebują odświeżenia? Po szybkim praniu dzieci niech rozwieszą je i przypną klamerkami do sznurka! Korzystając ze słonecznej pogody – kilka chwil i e!</p>
            <div className={styles.dataContainer}>
                <div className={styles.info}>
                    <h3>MAGDALENA ŻAK | 01.01.2023</h3>
                </div>
                <a href='#'>Czytaj więcej</a>
            </div>
        </div>
    )
}