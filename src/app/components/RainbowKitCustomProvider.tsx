'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { bsc } from 'viem/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [bsc],
    ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();


export default function RainbowKitCustomProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiConfig config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiConfig>
    );
}
