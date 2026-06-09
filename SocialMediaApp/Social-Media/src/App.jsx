import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import Postlist from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/Post-List-Store";
function App() {

const [selectedTab, setselectedTab] = useState("Home");

  return ( 
    <>
    <PostListProvider>
      <section className="workspace">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
        <div className="content">
          <Header></Header>

          {selectedTab === 'Home' ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </section>
    </PostListProvider>
    </>
  );
}

export default App;
