type CompanyLogoProps = {
  logo?: string
  logoInitial?: string
  name: string
  accentColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  xs: 'h-7 w-7 text-xs rounded',
  sm: 'h-9 w-9 text-sm rounded-md',
  md: 'h-11 w-11 sm:h-12 sm:w-12 text-base rounded-md',
  lg: 'h-14 w-14 sm:h-16 sm:w-16 text-lg rounded-md',
}

const CompanyLogo = ({
  logo,
  logoInitial,
  name,
  accentColor = '#8B5CF6',
  size = 'md',
  className = '',
}: CompanyLogoProps) => {
  const base = `shrink-0 border border-[#3d6b5c] ${sizeClasses[size]} ${className}`

  if (logo) {
    return (
      <img
        src={logo}
        alt=""
        className={`${base} object-contain bg-[#123530] p-1`}
      />
    )
  }

  const letter = logoInitial ?? name.charAt(0).toUpperCase()

  return (
    <span
      className={`${base} inline-flex items-center justify-center font-semibold tracking-tight`}
      style={{
        backgroundColor: `${accentColor}33`,
        color: accentColor,
        borderColor: `${accentColor}55`,
      }}
      aria-hidden
    >
      {letter}
    </span>
  )
}

export default CompanyLogo
