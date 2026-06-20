import type { Theory } from '../data/types';
import { getClearanceLabel, getCategoryLabel } from '../data/theories';
import { Link } from 'react-router-dom';

interface TheoryCardProps {
  theory: Theory;
  index?: number;
}

const clearanceBadgeClass: Record<Theory['clearanceLevel'], string> = {
  unclassified: 'badge badge-unclassified',
  confidential: 'badge badge-confidential',
  secret: 'badge badge-secret',
  'top-secret': 'badge badge-top-secret',
};

export default function TheoryCard({ theory, index = 0 }: TheoryCardProps) {
  return (
    <Link
      to={`/theory/${theory.id}`}
      className="theory-card"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="card-header">
        <span className="card-icon">{theory.thumbnailIcon}</span>
        <div className="card-meta">
          <div className="card-case">{theory.caseNumber}</div>
          <div className="card-title">{theory.title}</div>
          <div className="card-subtitle">{theory.subtitle}</div>
        </div>
        <span className={clearanceBadgeClass[theory.clearanceLevel]}>
          {getClearanceLabel(theory.clearanceLevel)}
        </span>
      </div>

      <div className="card-body">
        <p className="card-desc">{theory.mainstreamDescription}</p>
      </div>

      <div className="card-footer">
        <div className="card-tags">
          <span className="card-tag">{getCategoryLabel(theory.category)}</span>
          {theory.tags.slice(0, 2).map((tag: string) => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
        <span className="card-arrow">→</span>
      </div>
    </Link>
  );
}
