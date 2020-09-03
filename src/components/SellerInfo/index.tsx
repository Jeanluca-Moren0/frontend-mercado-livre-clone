import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermomether,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informação sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>São Paulo - SP</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermomether>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermomether>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Entrega no prazo correto.</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
