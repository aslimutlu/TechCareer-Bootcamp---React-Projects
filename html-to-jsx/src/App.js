import Footer from "./template/Footer";
import Header from "./template/Header";
import Navbar from "./template/Navbar";
import PageContent from "./template/PageContent";

function App() {
  return (
    <>
      <>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\nbody {font-family: "Times New Roman", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: "Playfair Display";\n  letter-spacing: 5px;\n}\n',
          }}
        />
      </>
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;
