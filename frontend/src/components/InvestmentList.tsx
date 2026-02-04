'use client';

import type { Investment } from '@/types/investment';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

function formatThb(amount: number): string {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 2,
  }).format(amount);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

interface InvestmentListProps {
  investments: Investment[];
  onDelete: (id: string) => void;
}

export default function InvestmentList({ investments, onDelete }: InvestmentListProps) {
  const total = investments.reduce((sum, inv) => sum + Number(inv.amount), 0);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/investments/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      onDelete(id);
    } catch {
      alert('Failed to delete investment.');
    }
  };

  return (
    <div className="list-card">
      <div className="list-header">
        <h2>Investment List</h2>
        <span className="list-count">{investments.length} items</span>
      </div>

      {investments.length === 0 ? (
        <div className="list-empty">No investments yet. Add one above.</div>
      ) : (
        <>
          {investments.map((inv) => (
            <div key={inv.id} className="investment-item">
              <div className="investment-info">
                <div className="investment-name">{inv.name}</div>
                <div className="investment-date">{formatDate(inv.createdAt)}</div>
              </div>
              <span className="investment-amount">{formatThb(Number(inv.amount))}</span>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(inv.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="total-bar">
            <span>Total</span>
            <span>{formatThb(total)}</span>
          </div>
        </>
      )}
    </div>
  );
}
