'use client';

import { useCallback, useEffect, useState } from 'react';
import InvestmentForm from '@/components/InvestmentForm';
import InvestmentList from '@/components/InvestmentList';
import type { Investment } from '@/types/investment';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Home() {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchInvestments = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/investments`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data: Investment[] = await res.json();
      setInvestments(data);
      setError('');
    } catch {
      setError('Failed to load investments. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInvestments();
  }, [fetchInvestments]);

  const handleInvestmentAdded = (investment: Investment) => {
    setInvestments((prev) => [investment, ...prev]);
  };

  const handleDelete = (id: string) => {
    setInvestments((prev) => prev.filter((inv) => inv.id !== id));
  };

  return (
    <main className="container">
      <h1>Investment Tracker</h1>
      {error && <div className="error-message">{error}</div>}
      <InvestmentForm onInvestmentAdded={handleInvestmentAdded} />
      {loading ? (
        <div className="loading">Loading investments...</div>
      ) : (
        <InvestmentList investments={investments} onDelete={handleDelete} />
      )}
    </main>
  );
}
