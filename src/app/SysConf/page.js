import styles from "./page.module.css";
import 'primereact/resources/themes/saga-blue/theme.css';  // Importa el tema que prefieras
import 'primereact/resources/primereact.min.css';  // Importa los estilos de PrimeReact
import 'primeicons/primeicons.css';
import TablaRecursos from "../%Components/TablasSysconf/TablaRecursos";

export default function SysConf() {
    return (
        <main className={styles.main}>
            <h1>Hola mundo 2</h1>
            <TablaRecursos/>
        </main>
    );
}
