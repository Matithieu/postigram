import { Menubar, MenubarMenu } from "@/components/ui/menubar";

export function MenuBar() {
  return (
    <Menubar className="relative">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MenubarMenu>PostiGram</MenubarMenu>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <MenubarMenu>Login</MenubarMenu>
      </div>
    </Menubar>
  );
}