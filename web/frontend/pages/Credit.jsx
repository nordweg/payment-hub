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
	AppProvider,
	ResourceList,
	Avatar,
	Form, FormLayout, Checkbox, TextField, Button,
	Select
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import React from 'react';
import { useState, useCallback } from 'react';

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function CreditPage() {
	const [selected, setSelected] = useState('today');
	const handleSelectChange = useCallback((value) => setSelected(value), []);
	const options = [
		{ label: 'Today', value: 'today' },
		{ label: 'Yesterday', value: 'yesterday' },
		{ label: 'Last 7 days', value: 'lastWeek' },
	];
	return (
		<Page>
			<Card>
				<Form action="teste">
					<FormLayout>
						<TextField label="Nome no cartão*" />
						<TextField label="Número do cartão*" />
						<TextField label="Validade" />
						<TextField label="Código CVV*" />
						<Select
							label="Date range"
							options={options}
							onChange={handleSelectChange}
							value={selected}
						/>
						<Button>Submit</Button>
					</FormLayout>
				</Form>
			</Card>
		</Page>
	);
}
