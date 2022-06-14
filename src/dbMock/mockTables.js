import React from "react";
// fazer mock com todas as infos de protudos

export const listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        Ds_Produto: "Saco de arroz 1kg",
        tb_pedido_id_pedido: 1,
        prodImg: "./images/ArrozIMG.jpg"
    },
    {
        id: 2,
        nome: "Feijao",
        Ds_Produto: "Saco de feijao 1kg",
        tb_pedido_id_pedido: 1,
        prodImg: "./images/FeijaoIMG.jpg"

    },
    {
        id: 3,
        nome: "Beterraba",
        Ds_Produto: "Saco de beterraba 1kg",
        tb_pedido_id_pedido: 1,
        prodImg: "./images/BeterrabaIMG.jpg"

    },
    // {
    //     id: 4,
    //     nome: "Salada",
    //     Ds_Produto: "Saco de salada 1kg",
    //     tb_pedido_id_pedido: 1,
    //     prodImg: "./images"

    // },
    // {
    //     id: 5,
    //     nome: "Agua",
    //     Ds_Produto: "Saco de agua 1kg",
    //     tb_pedido_id_pedido: 1,
    //     prodImg: "./images"

    // },
]

export const funcionarios = [
    {
        id: 1,
        nome: "Joao",
        cpf: "080.080.080-22",
        senha: "1234567812345678",
        data_nasc: "24/09/2002",
        admin: true,
        salario: 2000,
        cargoId: 1
    },
    {
        id: 2,
        nome: "Vitor",
        cpf: "122.122.122-11",
        senha: "8765432187654321",
        data_nasc: "22/08/2001",
        admin: false,
        salario: 1200,
        cargoId: 2
    },
]