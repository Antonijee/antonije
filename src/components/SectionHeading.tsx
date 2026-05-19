type SectionHeadingProps = {
  label: string
}

const SectionHeading = ({ label }: SectionHeadingProps) => {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#c9a87c] font-medium mb-5">
        {label}
      </p>
      <div className="h-px w-full bg-[#2d6a5f]" />
    </div>
  )
}

export default SectionHeading
