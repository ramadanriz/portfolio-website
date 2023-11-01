import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = (props) => {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-16 md:mt-14 py-6 px-8 md:px-16 lg:px-32 xl:px-72 lg:container">{props.children}</main>
      <Footer />
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
