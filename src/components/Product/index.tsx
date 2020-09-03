import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="Camiseta"></img>
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Usuário.</p>
        <p className="description">
          Receba o produto ou devolvemos o seu dinheiro.
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Até 90 dias.</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia.</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum
      lacinia mauris non porttitor. Mauris dapibus dui purus, ac volutpat ligula
      porttitor et. Nullam sed magna et risus aliquam aliquet a quis libero.
      Integer nec sodales dolor. Fusce ultrices ultrices blandit. Praesent
      dapibus consectetur dui, vel euismod erat suscipit nec. Proin eu dolor
      vitae sapien ultricies mattis. Donec egestas ipsum vel felis luctus
      varius. Aliquam facilisis venenatis urna sagittis vulputate. Integer orci
      arcu, gravida nec massa sit amet, lobortis pellentesque risus. Nulla eget
      sodales quam, id fermentum metus.
      <br />
      <br />
      Itens inclusos: <br />
      -1x Calça <br />
      -1x Calça <br />
      -1x Calça <br />
      -1x Calça <br />
      -1x Calça <br />
      <br />
      Nulla posuere elit consequat orci lacinia, vel efficitur nulla consequat.
      Phasellus porta blandit dui, non tincidunt elit facilisis in. Donec turpis
      turpis, commodo venenatis velit at, ultrices faucibus massa. Maecenas
      fringilla sapien fringilla mauris venenatis euismod. Nullam vel libero non
      felis congue venenatis. Cras sit amet egestas mauris. Aenean egestas
      rutrum urna, ornare viverra massa ullamcorper in. Vivamus enim massa,
      pellentesque non feugiat in, ultrices vel purus. Phasellus fringilla ex
      purus, a vehicula augue convallis sed. In laoreet suscipit ante viverra
      sollicitudin. Etiam nec dignissim risus, vel vestibulum sapien. Vestibulum
      et erat lectus. Vivamus molestie, nibh ac consectetur pellentesque, justo
      eros congue augue, a convallis diam ligula non erat. Aliquam gravida
      lectus vel nisi tincidunt, consectetur auctor nunc aliquet. Pellentesque
      sed dolor ultricies, feugiat tellus non, tempus est.
    </p>
  </Description>
);

export default Product;
