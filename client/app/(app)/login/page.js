// app/(app)/login/page.js
import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
