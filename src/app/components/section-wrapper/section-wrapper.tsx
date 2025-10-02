import style from "./section-wrapper.module.css";

interface SectionWrapperProps {
	children?: React.ReactNode;
	className?: string;
}

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
	return <div className={`${style.sectionWrapper} ${className}`}>{children}</div>;
}
