import { MenuAdmin } from "@/components/admin/menu-admin";

type AdminPostLayoutProps = {
    children: React.ReactNode;
};

export default function AdminPostLayout({
    children,
}: Readonly<AdminPostLayoutProps>) {
    return (
        <>
            <MenuAdmin />
            {children}
        </>
    );
}