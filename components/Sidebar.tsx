"user client";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
}: SidebarProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default Sidebar;
