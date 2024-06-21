import React from "react";


import {
    Container,
    H1,
    Image,
    ContainerItens,
    InputLabel,
    Input,
    Button
} from "./styles";

function APP() {
    return (
        <Container>
            <Image />
            <ContainerItens>
                <H1>Olá</H1>

                <InputLabel>NOME</InputLabel>
                <Input placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input placeholder="Idade" />

                <Button>Cadastrar</Button>

            </ContainerItens>
        </Container>
    );
}

export default APP