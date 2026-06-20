import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { theories, getClearanceLabel, getCategoryLabel } from '../data/theories';
import SourceList from '../components/SourceList';
import type { Theory } from '../data/types';

const clearanceBadgeClass: Record<Theory['clearanceLevel'], string> = {
  unclassified: 'badge badge-unclassified',
  confidential: 'badge badge-confidential',
  secret: 'badge badge-secret',
  'top-secret': 'badge badge-top-secret',
};

export default function TheoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const theory = theories.find((t) => t.id === id);
  const [confidentialRevealed, setConfidentialRevealed] = useState(false);

  if (!theory) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="detail-page">
      {/* BREADCRUMB */}
      <nav className="detail-breadcrumb" aria-label="breadcrumb">
        <Link to="/">◂ ARCHIVE</Link>
        <span>/</span>
        <span>{theory.caseNumber}</span>
      </nav>

      {/* HEADER */}
      <header className="detail-header">
        <div className="detail-stamp-area">
          <div className="stamp stamp-classified">
            {getClearanceLabel(theory.clearanceLevel)}
          </div>
        </div>

        <div className="detail-eyebrow">
          <span className={clearanceBadgeClass[theory.clearanceLevel]}>
            {getClearanceLabel(theory.clearanceLevel)}
          </span>
          <span className="badge badge-unclassified">{getCategoryLabel(theory.category)}</span>
          <span className="detail-case">CASE #{theory.caseNumber}</span>
        </div>

        <span className="detail-icon">{theory.thumbnailIcon}</span>
        <h1 className="detail-title">{theory.title}</h1>
        <p className="detail-subtitle">{theory.subtitle}</p>

        <div className="detail-tags">
          {theory.tags.map((tag) => (
            <span key={tag} className="detail-tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* MAINSTREAM DESCRIPTION */}
      <div className="section-block">
        <div className="section-label section-label-unclassified">
          <span>📋</span>
          MAINSTREAM / OFFICIAL ACCOUNT
        </div>
        <div className="section-content">
          <p>{theory.mainstreamDescription}</p>
        </div>
      </div>

      {/* CONFIDENTIAL DESCRIPTION */}
      <div className="section-block">
        <div className="section-label section-label-classified">
          <span>🔒</span>
          CONFIDENTIAL INTELLIGENCE BRIEFING
        </div>
        {confidentialRevealed ? (
          <div className="section-content">
            <p>{theory.confidentialDescription}</p>
          </div>
        ) : (
          <div className="classified-toggle">
            <p className="classified-message">
              THIS SECTION CONTAINS INFORMATION BEYOND THE OFFICIAL NARRATIVE.<br />
              SOURCES: DECLASSIFIED DOCUMENTS, WHISTLEBLOWER TESTIMONY, INDEPENDENT RESEARCH.
            </p>
            <button className="reveal-btn" onClick={() => setConfidentialRevealed(true)}>
              ▶ REVEAL CLASSIFIED INTELLIGENCE
            </button>
          </div>
        )}
      </div>

      {/* EVIDENCE FOR */}
      <div className="section-block">
        <div className="section-label section-label-for">
          <span>✅</span>
          EVIDENCE &amp; ARGUMENTS IN SUPPORT
        </div>
        <div className="section-content">
          <ul className="argument-list">
            {theory.forArguments.map((arg, i) => (
              <li key={i} className="argument-item">
                <span className="argument-bullet-for">■</span>
                <span>{arg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EVIDENCE AGAINST */}
      <div className="section-block">
        <div className="section-label section-label-against">
          <span>❌</span>
          COUNTERARGUMENTS &amp; SKEPTICAL ANALYSIS
        </div>
        <div className="section-content">
          <ul className="argument-list">
            {theory.againstArguments.map((arg, i) => (
              <li key={i} className="argument-item">
                <span className="argument-bullet-against">■</span>
                <span>{arg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SOURCES */}
      <div className="section-block">
        <div className="section-label section-label-sources">
          <span>📚</span>
          CITED SOURCES &amp; REFERENCES
        </div>
        <div className="section-content">
          <SourceList sources={theory.sources} />
        </div>
      </div>

      {/* BACK */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
        <Link to="/" style={{ fontSize: 12, letterSpacing: '0.1em', color: 'var(--grey)' }}>
          ◂ RETURN TO ARCHIVE
        </Link>
      </div>
    </main>
  );
}
