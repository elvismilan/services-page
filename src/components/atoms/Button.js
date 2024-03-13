
const Button = ({className, href, onClick, children, fs, bg, tc, decoration}) => {

  const classes = `rounded-2xl font-semibold py-2 px-8 sm:px-16 
                  ${fs || "text-[16px]"} sm:text-[20px] lg:text-[24px]
                  ${bg || "bg-primary"} 
                  ${tc || "text-white"} 
                  ${className || ""}`;

  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} onClick={onClick} className={classes}>
      <span>{children}</span>
    </a>
  );

  const renderLinkGroup = () => (
    <a href={href} onClick={onClick} className={`flex items-center justify-center text-primary ${className || ""}`}>
      <i className={`flex items-center px-4 sm:px-6 py-2 sm:py-3`}>
        {decoration}
      </i>
      <span>{children}</span>
    </a>
  );

  return href 
    ? decoration
      ? renderLinkGroup()
      : renderLink()
    : renderButton();
    
}

export default Button