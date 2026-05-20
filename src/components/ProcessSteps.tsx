interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  color: string;
  title?: string;
}

export default function ProcessSteps({
  steps,
  color,
  title = "How It Works",
}: ProcessStepsProps) {
  return (
    <section className="process-section">
      <h2 className="process-heading">{title}</h2>
      <div className="process-grid">
        {steps.map((s) => (
          <div key={s.step} className="process-step">
            <div className="process-num" style={{ backgroundColor: color }}>
              {s.step}
            </div>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
