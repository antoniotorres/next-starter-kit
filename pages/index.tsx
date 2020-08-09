import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Header />
      <div className="w-full flex-grow max-w-screen-lg mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        test
      </div>
      <Footer />
    </div>
  );
}
