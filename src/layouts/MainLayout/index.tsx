import Footer from '../../components/Footer';
import Header from '../../components/Header';

type TChildren = {
  children: string | JSX.Element | JSX.Element[];
};
const MainLayout = ({ children }: TChildren) => {
  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-120px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
