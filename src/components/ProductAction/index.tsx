import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Usada</Condition>

      <Row>
        <h1>Camiseta Branca da Nike - sem logo.</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="simble">R$</span>
          <span className="fraction">1.999 </span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em até 2x de R$1000,00</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Item à venda.</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis para SP.</span>
          <span className="details">Benefício do usuário.</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar Agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>Compra garantida, receba o produto ou devolvemos seu dinheiro.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
