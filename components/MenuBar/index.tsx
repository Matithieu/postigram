import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import Link from "next/link";

export function MenuBar() {
  return (
    <Menubar className="relative">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MenubarMenu>
          <Link href="/" className="text-2xl">PostiGram</Link>
        </MenubarMenu>
      </div>

      {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <MenubarMenu>
          <Link href="/login">Login</Link>
        </MenubarMenu>
      </div> */}
    </Menubar>
  );
}
