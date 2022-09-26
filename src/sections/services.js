/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import icon1 from '../assets/images/icons/service1.png';
import icon2 from '../assets/images/icons/service2.png';
import icon3 from '../assets/images/icons/service3.png';
import icon4 from '../assets/images/icons/service4.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Product First',
    description: `We are a Product first Company and develop and maintain our own internal products`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Data Driven Product development',
    description: `We give a lots of importance to data and use data heavily to enable our product development`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Quality Software Engineers',
    description: `We have a strong selection and training culture which will provide a high quality of Engineers`,
  },
  {
    id: 4,
    icon: icon4,
    title: 'Remote First',
    description: `We are a remote first company which gives us advantages over traditional software companies with respect to cost and engineer reach.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Solve your software challenges with us          "
          description="Our mission is to provide high quality data driven software development to our partners"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(2, 1fr)',
    ],
  },
};
