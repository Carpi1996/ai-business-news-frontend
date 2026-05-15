import "./globals.css";

export const metadata = {
title: "AI Business Daily",
description: "Daily AI-powered business insights",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <body>{children}</body> </html>
);
}