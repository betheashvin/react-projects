import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
function App() {
  return (
    <>
      <div className="App">
        <Accordian />
        <StarRating noOfStars={10} />
        <RandomColor />
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
        <TreeView menus={menus} />
        <LoadMoreData />
      </div>
    </>
  );
}

export default App;
