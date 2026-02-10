import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h2>Restaurant Ordering System</h2>
        <p>Frontend is running successfully.</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
