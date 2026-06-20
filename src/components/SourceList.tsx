import type { Source } from '../data/types';

const typeIcons: Record<Source['type'], string> = {
  book: '📖',
  article: '📰',
  government: '🏛️',
  documentary: '🎬',
  witness: '👁️',
  academic: '🎓',
  news: '📡',
};

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  return (
    <div className="sources-list">
      {sources.map((source, i) => (
        <div key={i} className="source-item">
          <span className="source-icon">{typeIcons[source.type]}</span>
          <div className="source-body">
            <div className="source-title">{source.title}</div>
            <div className="source-meta">
              {[source.author, source.publication, source.year]
                .filter(Boolean)
                .join(' · ')}
            </div>
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {source.url}
              </a>
            )}
          </div>
          <span className="source-type">{source.type}</span>
        </div>
      ))}
    </div>
  );
}
