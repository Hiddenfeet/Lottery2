import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { CronosBeta } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import Navbar from "../components/Navbar";
import Head from "next/head";


const backgroundImageUrl = "https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZJfSFFhhW976mSbeZcwH%2Fuploads%2FkujqMQLFX5IM5JxHpCow%2F149.png?alt=media&token=f74d330c-a8f8-4c90-9de2-75b2851c39d0"; // Replace with the actual background image URL

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: `url(${backgroundImageUrl}) no-repeat fixed center center`,
        backgroundSize: "cover",
      },
    },
  },
});

const activeChain = "CronosBeta";
const sdk = new ThirdwebSDK(CronosBeta);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        chainId: 25,
        rpc: ["https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa"],
        nativeCurrency: {
          decimals: 18,
          name: "Cronos",
          symbol: "CRO",
        },
        shortName: "CRO",
        slug: "Cronos",
        testnet: false,
        chain: "Cronos Mainnet",
        name: "Cronos Mainnet",
      }}
      thirdwebApiKey = "21f95fcb128728a6cc6ae3cc3fab58a594e51bab949036b4a5cfaa2297d3aea84a520e0e850eef6eca10f7a5d3f091daa73425fa7932ebe5e5eb101727d261b7">
      {/* Custom Header */}
      <Box as="header" textAlign="center" py="4" bg="white">
        <Head>
         <title>Liquor Token Cronos</title>
        </Head>
      </Box>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
