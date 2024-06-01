// src/app/%Components/AppBar/AppBar.js
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TabMenu } from 'primereact/tabmenu';

export default function AppBar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const items = [
        { label: 'Home', icon: 'pi pi-home', command: () => router.push('/') },
        { label: 'Configuración del sistema', icon: 'pi pi-cog', command: () => router.push('/SysConf') },
        { label: 'Usuarios', icon: 'pi pi-user', command: () => router.push('/Usuarios') },
        { label: 'Visualización', icon: 'pi pi-chart-line', command: () => router.push('/Visualizacion') }
    ];

    useEffect(() => {
        if (!router.isReady) return;
        // Establecer el índice activo basado en la ruta actual
        switch (router.pathname) {
            case '/':
                setActiveIndex(0);
                break;
            case '/SysConf':
                setActiveIndex(1);
                break;
            case '/Usuarios':
                setActiveIndex(2);
                break;
            case '/Visualizacion':
                setActiveIndex(3);
                break;
            default:
                setActiveIndex(0);
        }
    }, [router.isReady, router.pathname]);

    return (
        <div className="card">
            <TabMenu 
                model={items} 
                activeIndex={activeIndex} 
                onTabChange={(e) => setActiveIndex(e.index)} 
            />
        </div>
    );
}
