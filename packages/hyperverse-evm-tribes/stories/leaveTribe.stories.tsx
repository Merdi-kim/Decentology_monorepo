// import React from 'react';
// import { initialize, Network, Provider } from '@decentology/hyperverse';
// import { LeaveTribe } from './leaveTribe';
// import { Ethereum, Evm } from '@decentology/hyperverse-evm';
// import * as Tribes from '../source';

// const hyperverse = initialize({
// 	blockchain: Ethereum,
// 	network: Network.Testnet,
// 	modules: [{ bundle: Tribes, tenantId: '0x62a7aa79a52591Ccc62B71729329A80a666fA50f' }],
// 	options: {
// 		disableProviderAutoInit: true
// 	}
// });
// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
// 	title: 'Components/LeaveTribe',
// 	component: LeaveTribe
// 	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = args => (
// 	<Provider initialState={hyperverse}>
// 		<Evm.Provider
// 			initialState={{
// 				networks: {
// 					testnet: {
// 						networkUrl: 'http://localhost:6006/hyperchain',
// 						chainId: 4,
// 						type: Network.Testnet,
// 						name: 'localhost'
// 					}
// 				}
// 			}}
// 		>
// 			<LeaveTribe {...args} />
// 		</Evm.Provider>
// 	</Provider>
// );

// export const Demo = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Demo.args = {
// };
