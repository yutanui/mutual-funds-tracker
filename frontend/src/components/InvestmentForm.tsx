'use client';

import { useState } from 'react';
import type { Investment } from '@/types/investment';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface InvestmentFormProps {
  onInvestmentAdded: (investment: Investment) => void;
}

export default function InvestmentForm({ onInvestmentAdded }: InvestmentFormProps) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const parsedAmount = Number.parseFloat(amount);
    if (!name.trim()) {
      setError('Please enter an investment name.');
      return;
    }
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/investments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), amount: parsedAmount }),
      });

      if (!res.ok) {
        throw new Error('Failed to create investment');
      }

      const investment: Investment = await res.json();
      onInvestmentAdded(investment);
      setName('');
      setAmount('');
    } catch {
      setError('Failed to add investment. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Add Investment</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Investment Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. K-EQUITY, KFLTFDIV"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (THB)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="e.g. 10000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : 'Add Investment'}
        </button>
      </form>
    </div>
  );
}
