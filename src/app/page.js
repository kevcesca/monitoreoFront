import styles from "./page.module.css";
import 'primereact/resources/themes/saga-blue/theme.css';  // Importa el tema que prefieras
import 'primereact/resources/primereact.min.css';  // Importa los estilos de PrimeReact
import 'primeicons/primeicons.css';
import TablaHome from "./%Components/TablaHome/TablaHome";
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Lista Nodos</h1>
      <TablaHome/>
      <div className={styles.imageContainer}>
        <Image src="grafica" alt="Imagen 1" width={1000} height={500} className={styles.image} />
        <Image src="grafica" alt="Imagen 1" width={1000} height={500} className={styles.image} />
      </div>
    </main>
  );
}
