// import GlassCard from "../components/GlassCard";
import { useBudgets } from "../components/BudgetProvider";
import DonutChart from "../components/DonutChart";
// import { Flip } from "gsap/Flip";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";

const Home = () => {
  const { budgets, paycheck } = useBudgets();
  console.log(budgets);
  console.log(paycheck);
  const bgColor = [
    "rgba(210, 210, 210, 0.2)",
    "rgba(0,86,179,0.2)",
    "rgba(121, 47, 181, 0.2)",
    "rgba(52, 176, 77, 0.2)",
    "rgba(179, 40, 155, 0.2)",
    "rgba(203, 163, 43, 0.2)",
  ];
  const borderColor = [
    "#d2d2d2",
    "#0056b3",
    "#792fb5",
    "#34b04d",
    "#b32899",
    "#cba32b",
  ];
  return (
    <div className="image-content">
      <div className="image-container">
        <div className="images">
          <div className="product product-1 glass-card" data-grid="img-1">
            {/* Map through budgets to make graphs dynamically. Will need to have index to increment colors */}
            <h1>Subscriptions</h1>
            <p>Test 1</p>
            <div className="chart-container">
              <DonutChart
                labels={["Complete", "Remaining"]}
                graphType={"doughnut"}
                data={[100, 200]}
                styles={{
                  backgroundColor: [bgColor[1], bgColor[0]],
                  borderColor: [borderColor[1], borderColor[0]],
                  borderWidth: 2,
                }}
                symbol={"$"}
              />
            </div>
          </div>
          <div className="product product-2 glass-card" data-grid="img-2">
            <h1>Rent</h1>
            <p>Test 2</p>
            <div className="chart-container">
              <DonutChart
                labels={["Complete", "Remaining"]}
                graphType={"doughnut"}
                data={[100, 200]}
                styles={{
                  backgroundColor: [bgColor[2], bgColor[0]],
                  borderColor: [borderColor[2], borderColor[0]],
                  borderWidth: 2,
                }}
                symbol={"$"}
              />
            </div>
          </div>
          <div className="product product-3 glass-card" data-grid="img-3">
            <h1>Food/Fun</h1>
            <p>Test 3</p>
            <div className="chart-container">
              <DonutChart
                labels={["Remaining", "Spent"]}
                graphType={"doughnut"}
                data={[100, 200]}
                styles={{
                  backgroundColor: [bgColor[3], bgColor[0]],
                  borderColor: [borderColor[3], borderColor[0]],
                  borderWidth: 2,
                }}
                symbol={"$"}
              />
            </div>
          </div>
          <div className="product product-4 glass-card" data-grid="img-4">
            <h1>IRA</h1>
            <p>Test 4</p>
            <div className="chart-container">
              <DonutChart
                labels={["Complete", "Remaining"]}
                graphType={"doughnut"}
                data={[100, 200]}
                styles={{
                  backgroundColor: [bgColor[4], bgColor[0]],
                  borderColor: [borderColor[4], borderColor[0]],
                  borderWidth: 2,
                }}
                symbol={"$"}
              />
            </div>
          </div>
          <div className="product product-5 glass-card" data-grid="img-5">
            <h1>Savings</h1>
            <p>Test 5</p>
            <div className="chart-container">
              <DonutChart
                labels={["Complete", "Remaining"]}
                graphType={"doughnut"}
                data={[100, 200]}
                styles={{
                  backgroundColor: [bgColor[5], bgColor[0]],
                  borderColor: [borderColor[5], borderColor[0]],
                  borderWidth: 2,
                }}
                symbol={"$"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
