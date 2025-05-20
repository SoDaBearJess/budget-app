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
    "rgba(52, 176, 77, 0.2)",
  ];
  const borderColor = [
    "#d2d2d2",
    "#0056b3",
    "#792fb5",
    "#34b04d",
    "#b32899",
    "#cba32b",
    "#34b04d",
  ];
  return (
    <div className="image-content">
      <div className="image-container">
        <div className="images">
          {/* Map through budgets to make graphs dynamically. Will need to have index to increment colors */}
          {budgets.map((budget, index) => {
            if (budget.name !== "Food/Fun" && budget.name !== "Savings") {
              return (
                <div className="product product-1 glass-card" data-grid="img-1">
                  <h1>{budget.name}</h1>
                  <p>Test 1</p>
                  <div className="chart-container">
                    <DonutChart
                      labels={["Complete", "Remaining"]}
                      graphType={"doughnut"}
                      data={[budget.spent, budget.total - budget.spent]}
                      styles={{
                        backgroundColor: [bgColor[index + 1], bgColor[0]],
                        borderColor: [borderColor[index + 1], borderColor[0]],
                        borderWidth: 2,
                      }}
                      symbol={"$"}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="product product-1 glass-card" data-grid="img-1">
                  <h1>{budget.name}</h1>
                  <p>Test 1</p>
                  <div className="chart-container">
                    <DonutChart
                      labels={["Remaining", "Spent"]}
                      graphType={"doughnut"}
                      data={[budget.total, budget.spent]}
                      styles={{
                        backgroundColor: [bgColor[index + 1], bgColor[0]],
                        borderColor: [borderColor[index + 1], borderColor[0]],
                        borderWidth: 2,
                      }}
                      symbol={"$"}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
