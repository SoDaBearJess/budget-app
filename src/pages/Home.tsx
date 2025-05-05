import GlassCard from "../components/GlassCard";
import DonutChart from "../components/DonutChart";

const Home = () => {
  return (
    <div className="image-content">
      <div className="image-container">
        <div className="images">
          <div className="product product-1 glass-card" data-grid="img-1">
            {/* <GlassCard className="product-1" data-grid="img-1"> */}
            <h1>Home</h1>
            <p>Test 1</p>
            <DonutChart
              labels={["Complete", "Remaining"]}
              graphType={"doughnut"}
              data={[100, 200]}
              styles={{
                backgroundColor: "rgba(0,86,179,0.2)",
                borderColor: "#0056b3",
                borderWidth: 2,
              }}
              symbol={"$"}
            />
            {/* </GlassCard> */}
          </div>
          <div className="product product-2 glass-card" data-grid="img-2">
            {/* <GlassCard> */}
            <h1>Home</h1>
            <p>Test 2</p>
            {/* </GlassCard> */}
          </div>
          <div className="product product-3 glass-card" data-grid="img-3">
            {/*<GlassCard> */}
            <h1>Home</h1>
            <p>Test 3</p>
            {/* </GlassCard> */}
          </div>
          <div className="product product-4 glass-card" data-grid="img-4">
            {/* <GlassCard> */}
            <h1>Home</h1>
            <p>Test 4</p>
            {/* </GlassCard> */}
          </div>
          <div className="product product-5 glass-card" data-grid="img-5">
            {/* <GlassCard> */}
            <h1>Home</h1>
            <p>Test 5</p>
            {/* </GlassCard> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
