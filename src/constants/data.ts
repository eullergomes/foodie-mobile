export const categories = [
    {
        id: 1,
        description: "Burguers",
        image: require("../assets/images/cat-burguer.png")
    },
    {
        id: 2,
        description: "Pizza",
        image: require("../assets/images/cat-pizza.png")
    },
    {
        id: 3,
        description: "Fritas",
        image: require("../assets/images/cat-fritas.png")
    },
    {
        id: 4,
        description: "Sushi",
        image: require("../assets/images/cat-sushi.png")
    },
    {
        id: 5,
        description: "Churrasco",
        image: require("../assets/images/cat-churrasco.png")
    },
    {
        id: 6,
        description: "Sucos",
        image: require("../assets/images/cat-suco.png")
    },
    {
        id: 7,
        description: "Doces",
        image: require("../assets/images/cat-sobremesa.png")
    }
];

export const banners = [
    {
        id: 1,
        description: "Pizzas",
        image: require("../assets/images/banner1.png")
    },
    {
        id: 2,
        description: "Comida Saudável",
        image: require("../assets/images/banner2.png")
    }
];

export const restaurants = [
    {
        id: 1,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alamensa Santos, 954",
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 2,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 3,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alamensa Santos, 954",
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 4,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 5,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alamensa Santos, 954",
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 6,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 7,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alamensa Santos, 954",
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 8,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        image: require("../assets/images/restaurante2.png")
    }
];

export const orders = [
    {
        id: 1,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alameda Santos, 954",
        status: "Entregue",
        date: "10/05/2024",
        total: 149,
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 2,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        status: "Entregue",
        date: "10/05/2024",
        total: 52,
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 3,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alameda Santos, 954",
        status: "Entregue",
        date: "10/05/2024",
        total: 71,
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 4,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        status: "Entregue",
        date: "10/05/2024",
        total: 29.90,
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 5,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alameda Santos, 954",
        status: "Entregue",
        date: "10/05/2024",
        total: 149,
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 6,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        status: "Entregue",
        date: "10/05/2024",
        total: 48,
        image: require("../assets/images/restaurante2.png")
    },
    {
        id: 7,
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alameda Santos, 954",
        status: "Entregue",
        date: "10/05/2024",
        total: 19.90,
        image: require("../assets/images/restaurante1.png")
    },
    {
        id: 8,
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        status: "Entregue",
        date: "10/05/2024",
        total: 112,
        image: require("../assets/images/restaurante2.png")
    }
];

export const restaurante = {
    id: 1,
    name: "The Keba’s Bar",
    address: "Rua Rui Barbosa, 512 - Paraiso - São Paulo - SP",
    image: require("../assets/images/restaurante1.png"),
    banner: require("../assets/images/foto-restaurante.png"),
    deliveryFee: 5.00,
    isFavorite: true,
    menu: [
        {
            id: 1,
            categoria: "Ofertas",
            itens: [
                {
                    id: 1,
                    name: "Pizza Calabresa",
                    description: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    image: require("../assets/images/produto-pizza.png")
                },
                {
                    id: 2,
                    name: "Coca-Cola Lata",
                    description: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    image: require("../assets/images/produto-coca.png")
                }
            ]
        },
        {
            id: 2,
            categoria: "Mais Pedidos",
            itens: [
                {
                    id: 3,
                    name: "Pizza Mussarela",
                    description: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    image: require("../assets/images/produto-pizza.png")
                },
                {
                    id: 4,
                    name: "Coca-Cola Litro",
                    description: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    image: require("../assets/images/produto-coca.png")
                }
            ]
        }
    ]
};

export const order = {
    id: 1,
    name: "Churrascaria e Pizzaria Boizão",
    address: "Alameda Santos, 954",
    status: "Entregue",
    date: "10/05/2024",
    total: 66.00,
    image: require("../assets/images/restaurante1.png"),
    itens: [
        {
            idItem: 1,
            id: 1,
            name: "Pizza Calabresa",
            description: "Massa artesanal, mussarela e calabresa",
            foto: require("../assets/images/produto-pizza.png"),
            qtd: 2,
            vlUnitary: 30.00,
            total: 60.00
        },
        {
            idItem: 2,
            id: 2,
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata de 300ml trincando de gelada",
            foto: require("../assets/images/produto-coca.png"),
            qtd: 1,
            vlUnitary: 6.00,
            total: 6.00
        }
    ]
};