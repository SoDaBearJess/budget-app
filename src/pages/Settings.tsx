import GlassCard from "../components/GlassCard";
import { useBudgets } from "../components/BudgetProvider";
import Modal from "../components/Modal";
import { useState } from "react";

const Settings = () => {
  const {
    budgets,
    paycheck,
    addCategory,
    updateCategory,
    addTransaction,
    setPaycheck,
  } = useBudgets();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryTotal, setCategoryTotal] = useState("");

  const handleAddCategory = () => {
    addCategory(categoryName, parseFloat(categoryTotal));
    setCategoryName("");
    setCategoryTotal("");
    setIsModalOpen(false);
  };

  const handleSetPaycheck = (e: string) => {
    setPaycheck(Number(e));

    let paycheckTotal = parseFloat(e);
    let afterExpenses = paycheckTotal;
    budgets.map((budget) => {
      if (
        budget.name !== "Food/Fun" &&
        budget.name !== "Savings" &&
        budget.name !== "Paycheck"
      ) {
        afterExpenses -= budget.total;
      }
      return afterExpenses;
    });
    console.log(afterExpenses);
    let totalFood = (afterExpenses * 0.4).toFixed(2);
    let totalSavings = (afterExpenses - parseFloat(totalFood)).toFixed(2);
    updateCategory("Food/Fun", { total: parseFloat(totalFood) });
    updateCategory("Savings", { total: parseFloat(totalSavings) });
  };

  return (
    // <h1>Settings</h1>
    <div className="image-content">
      <div className="settings-container">
        <GlassCard className="product-1" data-grid="img-1">
          <h1 style={{ marginBottom: "10px" }}>Paycheck</h1>
          <input
            type="number"
            step="0.01"
            value={paycheck}
            placeholder="$5000"
            onChange={(e) => handleSetPaycheck(e.target.value)}
          />
        </GlassCard>
        <GlassCard>
          <h1>Category Totals</h1>
          <div className="settings-grid">
            {budgets.map((budget) => (
              <>
                <label className="settings-label">{budget.name}</label>
                <input
                  type="text"
                  placeholder="$5000"
                  value={budget.total}
                  onChange={(e) =>
                    updateCategory(budget.name, {
                      total: parseFloat(e.target.value),
                    })
                  }
                />
              </>
            ))}
          </div>
          <button onClick={() => setIsModalOpen(true)}>Add Category</button>
        </GlassCard>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Add Category</h2>
          <label className="settings-label">Category Name</label>
          <input
            type="text"
            value={categoryName}
            placeholder="Category Name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <br />
          <label className="settings-label">Category Total</label>
          <input
            type="text"
            value={categoryTotal}
            placeholder="Category Total"
            onChange={(e) => setCategoryTotal(e.target.value)}
          />
          <br />
          <button onClick={() => handleAddCategory()}>Add Category</button>
        </Modal>
      </div>
    </div>
  );
};

export default Settings;
