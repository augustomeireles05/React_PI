const lista = {
    cardData:[
        {
            brand: "Lamborghini",
            model: "Urus",
            color: "Preto",
            year: "2020",
            engine: "4.0L V8 Bi-Turbo",
            potency: "650 CV",
            price: 3140000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Híbrido",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/LY2mvYs/Lamborghini-Urus.jpg",
            description: "O Lamborghini Urus está equipado com motor 4.0 V8 biturbo, com 650 cv de potência a 6.000 rpm e torque máximo de 86.675 kgfm entre 2.250 e 4.500 rpm. A transmissão é automática de 8 velocidades, e a tração integral permanente, sendo que o torque é direcionado especialmente às rodas traseiras"
            
        },

        {
            brand: "Lamborghini",
            model: "Aventor",
            color: "Preto",
            year: "2019",
            engine: "6.5 V12",
            potency: "750 CV",
            price: 6800000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/MBsGZYN/Lamborghini-Aventor.jpg",
            description: "O Aventador tem um desempenho estimado para fazer 0–100 km/h em 2,9 segundos e velocidade máxima limitada é de 350 km/h. e oficial de 370 km/h registrada pela revista sport auto magazine. É equipado com um motor 6.5 V12 que gera 700 cavalos de potência com o uso intensivo em fibra de carbono."
        },
    
        {
            brand: "Lamborghini",
            model: "Murcielago",
            color: "Amarelo",
            year: "2005",
            engine: "6.2L V12",
            potency: "580 CV",
            price: 3800000.00,
            gearshift: "Automático 6 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/LphjJRt/Lamborghini-Murcielago.jpg",
            description: "O Murciélago LP 670-4 Super Veloce é equipado com motor de 6.5 litros V12 que gera potência de 670 cv. A relação peso-potência é de 2,3 kg por cavalo, o que permite impulsioná-lo de 0 a 100 km/h em apenas 2,8 segundos. A velocidade máxima informada pela marca italiana é de 342 km/h."
        },

        {
            brand: "Ferrari",
            model: "458 Spider",
            color: "Vermelho",
            year: "2013",
            engine: "4.5L V8",
            potency: "570 CV",
            price: 2500000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/MVKTVy9/Ferrari-458spider.jpg",
            description: "É a opção de um roadster de alta performance dentro da gama Ferrari. Uma opção para quem quer andar rápido e com muito estilo. Comparando as versões cupê e conversível da 458, a segunda só perde um pouco em velocidade máxima (320 km/h contra 325 km/h da 458 Italia). "
        },
    
        {
            brand: "Ferrari",
            model: "Roma",
            color: "Cinza",
            year: "2021",
            engine: "3.9L V8 Bi-Turbo",
            potency: "620 CV",
            price: 3600000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/47Nd6gS/Ferrari-Roma.jpg",
            description: "Este motor produz uma potência máxima de 620 CV às 5750-7500 rotações e um torque máximo de 760 Nm às 3000-5750 rotações. A potência é transmitida à estrada através de um câmbio Dualclutch Automatic de 8 marchas, e o tipo de tração é traseira (RWD)."
        },
    
        {
            brand: "Ferrari",
            model: "Monza SP2",
            color: "Preto",
            year: "2020",
            engine: "6.5L V12",
            potency: "810 CV",
            price: 10200000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Sim",
            image: "https://i.ibb.co/vHnLYZ3/Ferrari-monza-Sp1.jpg",
            description: "Derivado do Ferrari 812 Superfast, o Monza SP2 (assim como o seu irmão com apenas um lugar, o Monza SP1) conta com o mesmo V12 de 6.5 l naturalmente aspirado usado pelo 812 Superfast mas com mais 10 cv, oferecendo um total de 810 cv às 8500 rpm. Apresentado pela Ferrari como a “barcheta” com melhor relação peso-potência (a par do Monza SP1), o Monza SP2 apresenta um peso a seco na casa dos 1520 kg. Já quanto às prestações, os 100 km/h chegam em 2,9s e os 200 km/h em apenas 7,9s."
        },
    
        {
            brand: "Bugatti",
            model: "Chiron",
            color: "Azul",
            year: "2020",
            engine: "8.0L Quadri-turbo",
            potency: "1600 CV",
            price: 22000000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Sim",
            image: "https://i.ibb.co/ZWXBZvf/Bugatti-Chiron.png",
            description: "O Chiron tem agora 1500 cavalos de potência e 163,1 kgf. m (1.600 N.m) de torque iniciando a 2.000 rpm. Como o Veyron, a carroceria é de fibra de carbono, a suspensão é independente e a tração é integral. Acelera de 0-100 km/h em 2,5 segundos, 0-200 km/h em menos de 6,5 segundos e 0-300 km/h em menos de 13,6 segundos."
        },
    
        {
            brand: "Porsche",
            model: "911 Turbo S",
            color: "Preto",
            year: "2018",
            engine: "3.8L V12 Bi-Turbo",
            potency: "580 CV",
            price: 1500000.00,
            gearshift: "PDK",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/pLr3WmS/Porsche-911-Turbo-S.jpg",
            description: "Tudo no novo 911 Turbo passa pelo motor seis cilindros boxer 3.8 litros com dois turbocompressores maiores, simétricos e de geometria variável. Além dos 580 cv (70 cv a mais que o antecessor), o modelo ainda produz nada menos que 81,5 kgfm de torque (5,1 kgfm extras). O zero a 100 km/h melhorou 0,2 s em relação a geração passada (991) e é 0,1 s mais rápido que o atual GT2 RS, uma das versões mais hardcore do 911."
        },
    
        {
            brand: "Porsche",
            model: "911 GT3 RS",
            color: "Preto",
            year: "2019",
            engine: "4.0L 6 CILINDROS BOXER TURBO",
            potency: "450 CV",
            price: 2450000.00,
            gearshift: "PDK",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/yqrx9H0/Porsche-GT3-RS.jpg",
            description: "O 911 GT3 RS é incansável na busca por novas fronteiras de desempenho. 100% focado na performance esportiva, ele alcança 460 Nm a 6.250 rpm, com uma potência máxima de 500 hp a 8.250 rpm. Tanto potencial de giro é possibilitado principalmente pelas bielas de titânio super-leves."
        },
    
        {
            brand: "Porsche",
            model: "Cayenne Coupé",
            color: "Prata",
            year: "2021",
            engine: "4.0L V8 Bi-Turbo + Elétrico",
            potency: "680 CV",
            price: 1550000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Híbrido",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/nc49xYq/Porsche-cayenne-Coupe.jpg",
            description: "O coração bate à velocidade máxima no Cayenne Turbo S E-Hybrid. A impressionante potência da tecnologia híbrida oferece, graças ao conceito de propulsão dual, a mais forte motorização da série."
        },
    
        {
            brand: "Porsche",
            model: "911 Cabriolet",
            color: "Cinza",
            year: "2021",
            engine: "3.0L 6 Cilindros Boxer Bi-Turbo",
            potency: "450 CV",
            price: 1500000.00,
            gearshift: "PDK",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/xDZK84C/Porsche-carrera-Cabriolet.jpg",
            description: "A potência do motor: 309 kW (420 CV) e um impressionante torque máximo de 500 Nm. Ele já está presente a 1.700 rpm. Com o sistema Porsche Doppelkupplung (PDK) e o Launch Control, o 911 Carrera Cabriolet S salta para 100 km/h em apenas 3,9 s. A propulsão só termina a 306 km/h."
        },
    
        {
            brand: "Porsche",
            model: "Panamera 4S",
            color: "Preto",
            year: "2021",
            engine: "2.9L V6 Bi-turbo + Elétrico",
            potency: "560 CV",
            price: 1150000.00,
            gearshift: "PDK",
            fuel: "híbrido",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/dtd6c8Y/Porsche-Panamera-4-ES-Preto.jpg",
            description: "O Porsche Panamera 4S tem o mesmo motor de 400 cavalos, mas vêm equipado com tração integral. Ele acelera de 0-100 em 5 segundos e vai até 282 km/h. Seu consumo é de mais ou menos 9 km/l. Os novíssimos motores V6 biturbo do Panamera 4S e V8 biturbo do Panamera Turbo são mais compactos e mais leves do que os modelos anteriores e estão equipados com VarioCam Plus. Os seus 2 turbocompressores estão agora instalados entre os bancos de cilindros. Dessa forma, o fluxo de gases de escape chega mais rapidamente ao compressor  para uma capacidade de resposta mais rápida. "
        },
    
        {
            brand: "Tesla",
            model: "Model Y Performance",
            color: "Preto",
            year: "2021",
            engine: "2 Motores Elétricos",
            potency: "468 CV",
            price: 730000.00,
            gearshift: "Automático de 1 velocidade",
            fuel: "Elétrico",
            inventory: "Disponível",
            enphasis: "Sim",
            image: "https://i.ibb.co/7Vd456g/Tesla-model-Y.png",
            description: "Totalmente elétrico e conectado, o Model Y é um utilitário esportivo para cinco pessoas, mas pode levar sete ocupantes com dois bancos retráteis no porta-malas. O Model Y LR vai de 0 a 100 km/h em 5,1 segundos e o Performance o faz em 3,7 segundos. A autonomia é de até 531 km no LR e 488 km no Performance. "
        },
    
        {
            brand: "Audi",
            model: "R8 Coupé",
            color: "Preto",
            year: "2022",
            engine: "5.2L V10",
            potency: "610 CV",
            price: 2090000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/4mWfvpr/audi-r8-coupe.jpg",
            description: "Esse modelo é o Audi R8, vendido no Brasil em versão única Coupé Quatro S Tronic. O esportivo é equipado com o motor 5.2 V10, de 610 cv de potência e torque de 59,1 kgfm. Essa verdadeira usina de força é capa de levar o Audi R8 a 330 km/h de velocidade máxima e completar a aceleração de 0 a 100 km/h em 3,1."
        },
    
        {
            brand: "Audi",
            model: "Q8 Performance Black",
            color: "Cinza",
            year: "2019",
            engine: "3.0L V6 TFSI",
            potency: "340 CV",
            price: 680000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/hWkCP2s/audi-q8.jpg",
            description: "Com interior generoso e sistema operacional de última geração, ele é a opção ideal para quem busca um utilitário robusto e elegante. Seu sistema de tração permanente quattro garante o desempenho em terrenos difíceis, enquanto o motor 3.0 TFSI com tecnologia híbrida leve desenvolve 340 cv de potência e torque de 500 Nm. Na cidade, na estrada ou no campo, o novo Audi Q8 oferece uma performance superior à da concorrência, indo de 0 a 100 em 5,9 segundos. O Q8 traz sob o capô o motor 3.0 TFSI V6, que produz 340 cv de potência entre 5.000 e 6.400 rpm e torque de 51 kgfm de 1.370 a 4.500 rpm. O câmbio é automático de oito marchas e a tração, integral quattro."
        },
    
        {
            brand: "Audi",
            model: "RS6 Avant",
            color: "Preto",
            year: "2021",
            engine: "4.0L V8 Bi-turbo FSI",
            potency: "600 CV",
            price: 1270000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/4NsPZDP/audi-r6avant.jpg",
            description: "O RS 6 Avant tem sua velocidade máxima limitada eletronicamente a 280 km/h, e por meio de item opcional pode chegar a até 305 km/h, o que adiciona ainda o sistema de freios de cerâmica. Com o sistema Dynamic Ride Control de série, o modelo promete condução firme, mais precisão e estabilidade."
        },
    
        {
            brand: "Audi",
            model: "TT Attraction",
            color: "Preto",
            year: "2016",
            engine: "2.0L Turbo FSI",
            potency: "230 CV",
            price: 260000.00,
            gearshift: "Automático 7 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/G5mnYNh/audi-tt.jpg",
            description: "O motor 2.0 TFSI, turbinado e com injeção direta de combustível, agora rende 230 cavalos (19 cv a mais) e torque de 37,7 kgfm (2 kgfm a mais) entre 1600 e 4300 rpm. De carroceria compacta e relativamente leve (1335 kg), o TT tem bom desempenho: acelera de 0 a 100 km/h em 5,9 segundos e atinge a velocidade máxima de 250 km/h, limitada eletronicamente. Além disso, o consumo é bem razoável para um carro de sua categoria: 9,9 km/l na cidade e 12,7 km/l na estrada, resultados que, somados à emissão de 123,8 gramas de CO2/km rodado, renderam ao Audi a classificação A no Programa de Etiquetagem Veicular do Inmetro. Seu tanque de combustível comporta 50 litros, e o Start-Stop contribui para poupar gasolina ao desligar o motor em paradas. O câmbio S tronic possui dupla embreagem e sete marchas, podendo ser controlado manualmente pelos paddle-shifts atrás do volante."
        },
    
        {
            brand: "BMW",
            model: "320i Active",
            color: "Branco",
            year: "2018",
            engine: "2.0L Turbo",
            potency: "184 CV",
            price: 240000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Flex",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/S0j5GSB/bmw-320i.jpg",
            description: "O BMW 320i 2018 é equipado com um motor 2.0 TwinPower Turbo ActiveFlex, que desenvolve 184 cavalos de potência e 30,6 kgfm de torque, a 1.350 rpm, com câmbio automático de oito marchas. Segundo dados da marca, o modelo consegue acelerar de 0 a 100 km/h em 7,1 segundos e alcançar velocidade máxima de 240 km/h."
        },
    
        {
            brand: "BMW",
            model: "M2 Competition",
            color: "Preto",
            year: "2021",
            engine: "6 Cilindros em Linha, 3.0L Bi-Turbo",
            potency: "411 CV",
            price: 550000.00,
            gearshift: "Automático 6 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/bvHHd2h/bmw-m2.jpg",
            description: "Tendo tração traseira, o BMW M2 vem com diferencial de deslizamento limitado e assim vai de 0 a 100 km/h em 4,3 segundos com máxima de 270 km/h. O consumo médio é de 7,6 km/l na cidade e 9,8 km/l na estrada. O M2 pode ainda ter uma caixa manual de seis marchas, que permite ao bólido atingir 100 km/h após 4,5 segundos."
        },
    
        {
            brand: "BMW",
            model: "M4 CS",
            color: "Azul",
            year: "2019",
            engine: "6 Cilindros em Linha, 3.0L Bi-Turbo",
            potency: "460 CV",
            price: 790000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/0CTPvwY/bmw-m4-azul.jpg",
            description: "A linha do carro conta com um motor 3.0 litros M TwinPower Turbo, com seis cilindros em linha, que consegue desenvolver 460 cavalos de potência, entre 5.500 e 7.300 rpm, e 56,1 kgfm de torque, disponível entre 1.800 e 5.500 giros."
        },
    
        {
            brand: "BMW",
            model: "M8 Gran Coupé",
            color: "Verde",
            year: "2019",
            engine: "4.4L V8 Bi-Turbo",
            potency: "625 CV",
            price: 1250000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/86wLWQr/bmw-m8-verde.jpg",
            description: "O BMW M8 é o veículo mais caro da marca alemã vendido no Brasil. Ele é também o veículo de topo da linha M com motor V8 4.4 bi-turbo de 625 cv e 76,5 kgfm de torque, gerenciado pela caixa automática de oito marchas e tração integral. O motor faz o veículo acelerar de 0 a 100 km/h em apenas 3,3 segundos e atingir uma velocidade máxima de 305 km/h."
        },
    
        {
            brand: "BMW",
            model: "X7 M50i",
            color: "Cinza",
            year: "2021",
            engine: "4.4L V8 Bi-Turbo",
            potency: "530 CV",
            price: 1180000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/9y8RRL4/bmw-x7.jpg",
            description: "Vendido no Brasil na versão única M Sport XDrive50i, o SUV usa motor 4.4 V8 a gasolina, de 462 cv e 66,3 kgfm de torque. Ele chega a 250 km/h e acelera de 0 a 00 km/h em 5,4 segundos. O consumo é de 6 km/l na cidade e 7,6 km/l na estrada."
        },
    
        {
            brand: "BMW",
            model: "X1 SDrive 20i",
            color: "Branco",
            year: "2017",
            engine: "2.0L Turbo",
            potency: "194 CV",
            price: 175000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Flex",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/M9bXvZw/bmw-x1.jpg",
            description: "O motor modular B48 2.0 TwinPower Turbo é elogiável, mesmo sendo flex. Ele entrega 194 cv a 5.000 rpm e 35,7 kgfm a partir de 1.250 rpm, seja lá qual for o combustível, fazendo 9,8 km/litro na cidade e 13,1 km/litro na estrada"
        },
    
        {
            brand: "BMW",
            model: "X5 XDrive 45E M Sport",
            color: "Preto",
            year: "2022",
            engine: "6 Cilindros em Linha, 3.0L Bi-Turbo + Elétrico",
            potency: "394 CV",
            price: 790000.00,
            gearshift: "Automático 8 marchas",
            fuel: "Híbrido",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/n09d6rQ/bmw-x5.jpg",
            description: "BMW X5 xDrive45e M Sport 2022 – motor 3.0 de seis cilindros e propulsor elétrico, totalizando 394 cv e 61,2 kgfm de torque, com câmbio automático de oito marchas e tração integral. O modelo oferece um motor longitudinal, com turbocompressor, injeção direta e seis cilindros em linha, que dispõe de 286 cv a 5.000 rpm e 45,9 kgfm de torque a 1.500 rpm, totalizando, em média, um consumo na cidade de 20,6 km/l e na estrada com alcance de 21.3km/l."
        },
    
        {
            brand: "Mercedes",
            model: "AMG G63",
            color: "Cinza",
            year: "2020",
            engine: "4.0L V8 Bi-Turbo",
            potency: "585 CV",
            price: 2050000.00,
            gearshift: "Automático 9 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/zhm9LxP/Mercedes-AMG-G63-2020.jpg",
            description: "O 4x4 chega com motor 4.0 V8 biturbo, de 585 cv de potência e 86,7 kgfm de torque, acoplado ao câmbio automático Speedshift de nove velocidades. Ele acelera de 0 a 100 km/h em 4,5 segundos e chega a 220 km/h de velocidade máxima. o consumo do Mercedes G 63 AMG, que pesa 2.560 kg, é alto: 5,5 km/l na cidade e 6,8 km/l na estrada."
        },
    
        {
            brand: "Bentley",
            model: "Continental GT",
            color: "Prata",
            year: "2020",
            engine: "6.0L V12 Bi-Turbo",
            potency: "659 CV",
            price: 900000.00,
            gearshift: "Automático 9 marchas",
            fuel: "Gasolina",
            inventory: "Disponível",
            enphasis: "Não",
            image: "https://i.ibb.co/HY3qcBc/Bentley-Continental-GT-2013.jpg",
            description: "O enorme motor W12 6.0 recebeu tratamento especial por parte da engenharia da Bentley. Ganhou 24 cv, passando de 635 para 659 cv e de 83,6 kgfm para 91,8 kgfm, suficientes para levar este Gran Tourer aos 335km/h de máxima e alcançar os 100 km/h em 3,5 segundos."
        }
    
    ]
}

export default lista;