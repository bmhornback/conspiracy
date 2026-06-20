import { useState, useMemo } from 'react';
import { theories, getCategoryLabel } from '../data/theories';
import type { Theory } from '../data/types';
import TheoryCard from '../components/TheoryCard';

const ALL_CATEGORIES: Theory['category'][] = [
  'conspiracy', 'cryptid', 'paranormal', 'ufo', 'government', 'historical',
];

export default function ArchivePage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Theory['category'] | null>(null);

  const filtered = useMemo(() => {
    let result = theories;
    if (activeCategory) {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.subtitle.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.mainstreamDescription.toLowerCase().includes(q),
      );
    }
    return result;
  }, [query, activeCategory]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">⬛ DIRECTOR OF NATIONAL INTELLIGENCE ⬛ SPECIAL PROJECTS DIVISION</div>
        <h1 className="hero-title">CLASSIFIED ARCHIVE</h1>
        <p className="hero-subtitle">
          A compiled dossier of the most significant conspiracy theories, unexplained cryptid
          encounters, and classified government operations. All sources cited. All perspectives
          documented. Nothing redacted.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">{theories.length}</span>
            <span className="hero-stat-label">Active Files</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">
              {theories.reduce((acc, t) => acc + t.sources.length, 0)}
            </span>
            <span className="hero-stat-label">Cited Sources</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">
              {theories.reduce(
                (acc, t) => acc + t.forArguments.length + t.againstArguments.length,
                0,
              )}
            </span>
            <span className="hero-stat-label">Evidence Points</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">
              {theories.filter((t) => t.clearanceLevel === 'top-secret').length}
            </span>
            <span className="hero-stat-label">Top Secret</span>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTER BAR */}
      <div className="search-bar">
        <div className="search-inner">
          <div className="search-input-wrap">
            <span className="search-prefix">&gt;_</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search files..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search theories"
            />
          </div>
          <button
            className={`filter-btn ${activeCategory === null ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            ALL
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* ARCHIVE GRID */}
      <main className="archive">
        <div className="archive-inner">
          <div className="archive-header">
            <span className="terminal-prompt">
              QUERY RESULTS: {filtered.length} FILE{filtered.length !== 1 ? 'S' : ''} FOUND
              <span className="terminal-cursor" />
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <div className="empty-title">NO MATCHING FILES</div>
              <div className="empty-sub">CLEARANCE DENIED — OR RECORD DOES NOT EXIST</div>
            </div>
          ) : (
            <div className="archive-grid">
              {filtered.map((theory, i) => (
                <TheoryCard key={theory.id} theory={theory} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
