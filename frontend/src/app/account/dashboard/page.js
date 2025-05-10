// app/account/dashboard/page.js
'use client';
import { useUser } from '@/hooks/useUser';
import ClaimMoonPoint from '@/components/ClaimMoonPoint';
import './dashboard.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '@/utils/api';

export default function DashboardPage() {
  const { 
    user, 
    username, 
    moonPoints, 
    streakDays, 
    co2Reduced, 
    energyGenerated, 
    isLoading, 
    error,
    refetch 
  } = useUser();

  if (isLoading) {
    return (
      <main className="dashboard-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading your lunar data...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="dashboard-page">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <a href="/auth/login" className="auth-btn primary">
            Please login again
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <h1>Welcome Back, {username || 'Lunar Champion'}!</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card moon-points">
          <h2>🌒 Your Moon Points</h2>
          <p className="points">{moonPoints}</p>
          <p className="points-label">Available Points</p>
          <ClaimMoonPoint onClaim={refetch} />
          <a href="/store/products" className="use-points-btn">
            Use Points for Discounts
          </a>
        </div>
        
        <div className="dashboard-card impact">
          <h2>🌚 Your Lunar Stats</h2>
          <div className="impact-metric">
            <span className="metric-value">{co2Reduced} kg</span>
            <span className="metric-label">Lunar Dust</span>
          </div>
          <div className="impact-metric">
            <span className="metric-value">{energyGenerated} kWh</span>
            <span className="metric-label">Moonlight Power</span>
          </div>
        </div>
        
        <div className="dashboard-card streak">
          <h2>🌕 Current Streak</h2>
          <p className="streak-days">{streakDays} days</p>
          <p className="streak-info">
            Check in tomorrow at 8-9PM to keep your streak!
          </p>
        </div>
        
        <RecentOrders />
      </div>
    </main>
  );
}

function RecentOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('access');
        if (!token) return;
        
        const response = await fetchAPI('/api/orders/history', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-card recent-orders">
        <h2>Recent Orders</h2>
        <div className="loading-orders">Loading orders...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-card recent-orders">
      <h2>Recent Orders</h2>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order.id} className="order-item">
              <span>{order.product_name}</span>
              <span className={`status-${order.status.toLowerCase()}`}>
                {order.status_display}
              </span>
            </div>
          ))
        ) : (
          <div className="no-orders">No recent orders found</div>
        )}
      </div>
      <a href="/account/orders" className="view-all">View All Orders</a>
    </div>
  );
}