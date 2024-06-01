export const ProductService = {
    getProductsData() {
        return [
            {
                "dispositivo" : "PC1-Client",
                "ip" : "10.26.16.50",
                "recurso" : "RAM",
                "cantidad" : "32GB",
                "metrica" : "90%"
            },
            {
                "dispositivo" : "PC1-Client",
                "ip" : "10.26.16.50",
                "recurso" : "CPU",
                "cantidad" : "8 Cores",
                "metrica" : "50%"
            },
            {
                "dispositivo" : "PC2-Client",
                "ip" : "10.26.16.51",
                "recurso" : "RAM",
                "cantidad" : "16GB",
                "metrica" : "75%"
            },
            {
                "dispositivo" : "PC2-Client",
                "ip" : "10.26.16.51",
                "recurso" : "CPU",
                "cantidad" : "4 Cores",
                "metrica" : "60%"
            },
            {
                "dispositivo" : "PC3-Client",
                "ip" : "10.26.16.52",
                "recurso" : "RAM",
                "cantidad" : "8GB",
                "metrica" : "80%"
            },
            {
                "dispositivo" : "PC3-Client",
                "ip" : "10.26.16.52",
                "recurso" : "CPU",
                "cantidad" : "2 Cores",
                "metrica" : "70%"
            },
            {
                "dispositivo" : "Server1",
                "ip" : "10.26.16.100",
                "recurso" : "RAM",
                "cantidad" : "64GB",
                "metrica" : "60%"
            },
            {
                "dispositivo" : "Server1",
                "ip" : "10.26.16.100",
                "recurso" : "CPU",
                "cantidad" : "16 Cores",
                "metrica" : "45%"
            },
            {
                "dispositivo" : "Server2",
                "ip" : "10.26.16.101",
                "recurso" : "RAM",
                "cantidad" : "128GB",
                "metrica" : "70%"
            },
            {
                "dispositivo" : "Server2",
                "ip" : "10.26.16.101",
                "recurso" : "CPU",
                "cantidad" : "32 Cores",
                "metrica" : "40%"
            },
            {
                "dispositivo" : "Laptop1",
                "ip" : "10.26.16.60",
                "recurso" : "RAM",
                "cantidad" : "16GB",
                "metrica" : "85%"
            },
            {
                "dispositivo" : "Laptop1",
                "ip" : "10.26.16.60",
                "recurso" : "CPU",
                "cantidad" : "4 Cores",
                "metrica" : "55%"
            }
        ];

    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

