import { useState } from 'react';
import { SkynetClient } from 'skynet-js';
import { createContainer } from '@decentology/unstated-next';
import { SkynetStorageLibrary, StorageProps } from './lib/SkynetStorageLibrary';


function StorageState({ clientUrl }: StorageProps = { clientUrl: 'https://siasky.net' }) {
	const lib = new SkynetStorageLibrary({ clientUrl });
	const [client] = useState<SkynetClient>(lib.client);
	return lib;
}

const Storage = createContainer(StorageState);
export const Provider = Storage.Provider;

export function useStorage() {
	return Storage.useContainer();
}
