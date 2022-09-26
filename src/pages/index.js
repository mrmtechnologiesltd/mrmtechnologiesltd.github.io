import { ThemeProvider } from 'theme-ui';
import theme from '../theme/index';
import SEO from '../components/seo';
import Banner from '../sections/banner';
import Services from '../sections/services';
import SubscribeUs from '../sections/subscribe-us';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="MRM Technologies"
          description="MRM Technologies landing page"
        />
        <Banner />
        <Services />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
