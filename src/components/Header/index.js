import React from 'react'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>

        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo-Pessoa" />
        </PageLink>

        <ContainerText>
          <p>Ola, Champola</p>
          <PageLinkExit>sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
