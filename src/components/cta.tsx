type CtaProps = {
  cta: CTA;
  className?: string;
};

type CTA = {
  label: string;
  link: string;
  linkType?: string;
};

const Cta = ({ cta, className }: CtaProps) => {
  return (
    <a
      href={cta.link}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cta.label}
    </a>
  );
};

export default Cta;
