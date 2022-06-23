import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ResizerContext} from "../contexts/resizer-context";
import Layout from "../components/layout";
import {LayoutContext} from "../contexts/layout-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ResizerContext>
        <LayoutContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutContext>
      </ResizerContext>
  )
}

export default MyApp
