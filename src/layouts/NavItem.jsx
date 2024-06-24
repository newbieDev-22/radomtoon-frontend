

export default function NavItem({ page, onClick}) {
  return (
    <span 
      className="font-medium hover:underline active:text-supporter-saturate cursor-pointer"
      onClick={onClick}
    >
    {page}
    </span>
  )
}
