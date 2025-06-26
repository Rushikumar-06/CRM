// app/(app)/register/page.js
import { Suspense } from 'react';
import RegisterForm from './RegisterForm';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
