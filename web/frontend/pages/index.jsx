import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  CalloutCard,
  Button,
  AppProvider,
  ResourceList,
  Avatar,
  
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import React from 'react';

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: 'Sort by',
            defaultItemSingular: 'item',
            defaultItemPlural: 'items',
            showing: 'Escolha a forma de pagamento:',
            Item: {
              viewItem: 'View details for {itemName}',
            },
          },
          Common: {
            checkbox: 'checkbox',
          },
        },
      }}
    >
      <Page>
        <Card>
			<a href="/teste/pix">CLIQUE AQUI</a>
          <ResourceList
            showHeader
            items={[
              {
                id: 341,
                url: '/credit?host=bnctcGF5bWVudC1odWIubXlzaG9waWZ5LmNvbS9hZG1pbg',
                name: 'Cartão de Crédito',
              },
              {
                id: 256,
                url: '/pix?host=bnctcGF5bWVudC1odWIubXlzaG9waWZ5LmNvbS9hZG1pbg',
                name: 'PIX',
              },
            ]}
            renderItem={(item) => {
              const {id, url, name, location} = item;
              const media = <Avatar customer size="medium" name={name} />;

              return (
                <ResourceList.Item id={id} url={url}>
                  <div>{name}</div>
                </ResourceList.Item>
              );
            }}
          />
        </Card>
      </Page>
    </AppProvider>
  );
}
