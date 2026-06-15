import { ShellCard } from "@shopsphere/shared-ui";

export default function AdminHomePage() {
  return (
    <main>
      <ShellCard
        title="ShopSphere Admin Web"
        description="Phase 1 foundation is running. Admin business modules will be added in later phases."
      >
        <ul className="status-list">
          <li>
            <strong>App:</strong> admin-web
          </li>
          <li>
            <strong>API URL:</strong> {process.env.NEXT_PUBLIC_API_URL}
          </li>
          <li>
            <strong>Environment:</strong> {process.env.NEXT_PUBLIC_APP_ENV}
          </li>
        </ul>
      </ShellCard>
    </main>
  );
}

