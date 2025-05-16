import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define a type for a single budget category
export interface BudgetCategory {
  name: string;
  total: number;
  spent: number;
}

// Define the shape of the context
interface BudgetContextType {
  budgets: BudgetCategory[];
  paycheck: number;
  setPaycheck: (paycheck: number) => void;
  addCategory: (name: string, total: number) => void;
  updateCategory: (name: string, updates: Partial<BudgetCategory>) => void;
  addTransaction: (name: string, amount: number) => void;
}

// Create context with default values (will be overridden by Provider)
const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

// Provider props
interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  const [budgets, setBudgets] = useState<BudgetCategory[]>(() => {
    const stored = localStorage.getItem("budgets");
    return stored ? JSON.parse(stored) : [];
  });

  const [paycheck, setPaycheckState] = useState<number>(() => {
    const stored = localStorage.getItem("paycheck");
    return stored ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
    localStorage.setItem("paycheck", JSON.stringify(paycheck));
  }, [budgets, paycheck]);

  const addCategory = (name: string, total: number) => {
    setBudgets((prev) => {
      const existing = prev.find((cat) => cat.name === name);
      if (existing) return prev;
      return [...prev, { name, total, spent: 0 }];
    });
  };

  const updateCategory = (name: string, updates: Partial<BudgetCategory>) => {
    setBudgets((prev) =>
      prev.map((cat) => (cat.name === name ? { ...cat, ...updates } : cat))
    );
  };

  const addTransaction = (name: string, amount: number) => {
    setBudgets((prev) =>
      prev.map((cat) =>
        cat.name === name ? { ...cat, spent: cat.spent + amount } : cat
      )
    );
  };

  const setPaycheck = (amount: number) => {
    setPaycheckState(amount);
  };

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        addCategory,
        updateCategory,
        addTransaction,
        paycheck,
        setPaycheck,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

// Custom hook with error handling
export const useBudgets = (): BudgetContextType => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudgets must be used within a BudgetProvider");
  }
  return context;
};
