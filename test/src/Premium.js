import React, { useState, useContext,useEffect } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import './PremiumSubscription.css';

function PremiumSubscription() {
  const [plan, setPlan] = useState('monthly');
  const [user, setUser] = useState(null);
    
  useEffect(() => {
      const storedUser = sessionStorage.getItem("user");

      if (storedUser) {
          try {
              const parsedUser = JSON.parse(storedUser); // Parse if it's a JSON string
              setUser(parsedUser); // Set user state
          } catch (error) {
              console.error('Error parsing stored user:', error);
              // Handle parsing error if necessary
          }
      }
  }, []);  
  const plans = {
    monthly: { price: 9.99, name: "Monthly Plan" },
    yearly: { price: 99.99, name: "Yearly Plan" }
  };
    
  const handleSubscribe = async (details) => {
    alert("Subscription completed", details);

    try {
      // Tạo đối tượng giao dịch
      const transaction = {
        userId: user.id, // ID của người dùng hiện tại
        transactionType: "subscription",
        amount: plans[plan].price,
        description: `Premium ${plans[plan].name} Subscription`,
        transactionDate: new Date().toISOString()
      };
      console.log(transaction);

      // Gửi request POST đến API của bạn để lưu giao dịch
      const response = await fetch('http://localhost:9999/transaction_history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log("Transaction saved", result);

      // Ở đây bạn có thể thêm logic để cập nhật trạng thái Premium của người dùng
    } catch (error) {
      console.error("Error saving transaction", error);
    }
  };

  return (
    <div className="premium-subscription">
      <h1>Subscribe to Premium</h1>
      <div className="plan-selection">
        <button onClick={() => setPlan('monthly')} className={plan === 'monthly' ? 'active' : ''}>
          Monthly - $9.99/month
        </button>
        <button onClick={() => setPlan('yearly')} className={plan === 'yearly' ? 'active' : ''}>
          Yearly - $99.99/year
        </button>
      </div>
      <div className="subscription-benefits">
        <h2>Premium Benefits:</h2>
        <ul>
          <li>Ad-free listening</li>
          <li>Offline mode</li>
          <li>Higher quality audio</li>
          <li>Unlimited skips</li>
        </ul>
      </div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: plans[plan].price.toString(),
                  currency_code: "USD"
                },
                description: `${plans[plan].name} Subscription`
              }
            ]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(handleSubscribe);
        }}
      />
    </div>
  );
}

export default PremiumSubscription;