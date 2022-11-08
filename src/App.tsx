import Footer from "./components/footer";
import Header from "./components/header";
import History from "./components/history";

function App () {
    return ( 
        <div>
            <section id="container" className="bg-red-600">
            <Header/>
                <h1>hello world</h1>
                <History/>
            <Footer/>
            </section>
        </div>
    )
}

export default App;