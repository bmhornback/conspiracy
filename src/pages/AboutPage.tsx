import { Link } from 'react-router-dom';
import { theories } from '../data/theories';

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="detail-breadcrumb">
        <Link to="/">◂ ARCHIVE</Link>
        <span>/</span>
        <span>ABOUT</span>
      </div>

      <div className="stamp stamp-eyes-only" style={{ marginBottom: 32, display: 'inline-block' }}>
        FOR YOUR EYES ONLY
      </div>

      <div className="about-section">
        <h2>Mission Briefing</h2>
        <p>
          CLASSIFIED ARCHIVE is a research and information compiling tool dedicated to documenting
          the most significant conspiracy theories, unexplained cryptid encounters, paranormal
          phenomena, and alleged government operations in a single, accessible archive.
        </p>
        <p>
          This archive was created in response to the systematic suppression, ridicule, and
          deliberate obfuscation of alternative hypotheses in mainstream academic and media
          institutions. Every file presents the full picture: what the official record says,
          what classified and alternative research suggests, and all available arguments both
          supporting and challenging each subject.
        </p>
      </div>

      <div className="about-section">
        <h2>Classification System</h2>
        <p>
          Files in this archive are classified according to the following clearance levels:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="badge badge-unclassified">UNCLASSIFIED</span>
            <span style={{ fontSize: 12, color: 'var(--grey)' }}>
              Widely debated, mainstream coverage available. No sensitive materials.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="badge badge-confidential">CONFIDENTIAL</span>
            <span style={{ fontSize: 12, color: 'var(--grey)' }}>
              Contains reports and evidence not widely reported in mainstream outlets.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="badge badge-secret">SECRET</span>
            <span style={{ fontSize: 12, color: 'var(--grey)' }}>
              Includes declassified government documents, whistleblower accounts, and suppressed research.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="badge badge-top-secret">TOP SECRET</span>
            <span style={{ fontSize: 12, color: 'var(--grey)' }}>
              Involves ongoing government classification. Significant evidence of active suppression.
            </span>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Editorial Policy</h2>
        <p>
          This archive does not editorially favor any position. Each file presents the mainstream
          official account alongside alternative intelligence briefings, followed by fully sourced
          arguments both supporting and challenging the subject.
        </p>
        <p>
          <strong style={{ color: 'var(--green-primary)' }}>NO INFORMATION IS CENSORED OR SUPPRESSED.</strong>{' '}
          All perspectives — including those of official skeptics, independent researchers,
          whistleblowers, and experiential witnesses — are included. Readers are encouraged to
          examine the cited sources and draw their own conclusions.
        </p>
        <p>
          This archive is presented for academic and informational purposes. The existence of
          a file in this archive does not constitute an endorsement of any specific theory or
          claim contained therein.
        </p>
      </div>

      <div className="about-section">
        <h2>Archive Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16, marginTop: 12 }}>
          {[
            { value: theories.length, label: 'Active Files' },
            { value: theories.reduce((a, t) => a + t.sources.length, 0), label: 'Cited Sources' },
            {
              value: theories.reduce((a, t) => a + t.forArguments.length + t.againstArguments.length, 0),
              label: 'Evidence Points',
            },
            { value: theories.filter((t) => t.clearanceLevel === 'top-secret').length, label: 'Top Secret Files' },
            { value: theories.filter((t) => t.category === 'cryptid').length, label: 'Cryptid Files' },
            { value: theories.filter((t) => t.category === 'government').length, label: 'Govt Operations' },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <div className="hero-stat-value">{value}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            background: 'transparent',
            border: '1px solid var(--green-dim)',
            color: 'var(--green-primary)',
            fontSize: 12,
            letterSpacing: '0.15em',
            padding: '10px 20px',
            textTransform: 'uppercase',
          }}
        >
          ◂ ENTER THE ARCHIVE
        </Link>
      </div>
    </main>
  );
}
