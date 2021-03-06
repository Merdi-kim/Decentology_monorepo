import { FC } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HyperverseModuleInstance } from '@decentology/hyperverse';
import { Tribes } from './useTribes';
const client = new QueryClient();

const Provider: FC<HyperverseModuleInstance> = ({ children, tenantId }) => {
	if (!tenantId) {
		throw new Error('Tenant ID is required');
	}
	return (
		<QueryClientProvider client={client}>
			<Tribes.Provider initialState={{ tenantId: tenantId }}>{children}</Tribes.Provider>
		</QueryClientProvider>
	);
};

export { Provider };
