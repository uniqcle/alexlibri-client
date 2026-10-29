import { AppShell } from "@components/AppShell";
 
export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
      <body>
          
          <AppShell>{children}</AppShell>
      </body>
  );
}
