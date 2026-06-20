export default function Footer() {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-disclaimer">
          ⚠️ FOR INFORMATIONAL PURPOSES ONLY. This archive compiles documented reports, theories,
          and evidence for academic and research purposes. All points of view — including those
          for and against the existence of each subject — are presented. Sources are cited.
          No information has been censored or editorially suppressed.
        </p>
        <div className="footer-build">
          BUILD DATE: {dateStr} · ARCHIVE v2.4.1 · NODE: OMEGA-7
        </div>
      </div>
    </footer>
  );
}
