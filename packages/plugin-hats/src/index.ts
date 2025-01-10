export * from "./actions/mintHat";
export * from "./actions/revokeHat";
export * from "./providers/wallet";
export * from "./types";

import type { Plugin } from "@elizaos/core";
import { mintHatAction } from "./actions/mintHat";
import { revokeHatAction } from "./actions/revokeHat";
import { evmWalletProvider } from "./providers/wallet";

export const hatsPlugin: Plugin = {
    name: "hats",
    description: "Hats Protocol on EVM blockchain integration plugin",
    providers: [evmWalletProvider],
    evaluators: [],
    services: [],
    actions: [mintHatAction, revokeHatAction],
};

export default hatsPlugin;
