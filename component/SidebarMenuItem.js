
export default function SidebarMenuItem({text, Icon}) {
  return (
    <div className="hoverEffect flex items-center text-gray-700">
          <Icon height="30" />
        <span>{text}</span>
    </div>
  )
}
