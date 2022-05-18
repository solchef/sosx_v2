import { ModalProvider, light, dark } from "@pancakeswap/uikit";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
import { getLibrary } from "utils/web3React";
import { LanguageProvider } from "contexts/Localization";
import { ToastsProvider } from "contexts/ToastsContext";
import { fetchStatusMiddleware } from "hooks/useSWRContract";
import { Store } from "@reduxjs/toolkit";
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const StyledThemeProvider = (props) => {
  const { resolvedTheme } = useNextTheme();
  return (
    <ThemeProvider theme={resolvedTheme === "dark" ? dark : light} {...props} />
  );
};

const Providers: React.FC<{ store: Store }> = ({ children, store }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ToastsProvider>
            <NextThemeProvider>
              <StyledThemeProvider>
                <LanguageProvider>
                  <SWRConfig
                    value={{
                      use: [fetchStatusMiddleware],
                    }}
                  >
                    <ModalProvider>{children}</ModalProvider>
                  </SWRConfig>
                </LanguageProvider>
              </StyledThemeProvider>
            </NextThemeProvider>
          </ToastsProvider>
        </Provider>
      </ApolloProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
