import NewsSection from '../pageComponent/common/newsSection/index';
import FeaturedNews from '../pageComponent/home/featuredNews/index';
import HeroSection from '../pageComponent/home/heroSection/index';

const App = () => {
  return (
    <>
      <HeroSection />
      <FeaturedNews />
      <NewsSection title="Latest News" />
    </>
  );
};

export default App;
