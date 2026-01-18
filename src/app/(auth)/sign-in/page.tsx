export const dynamic = "force-dynamic";

import { Suspense } from "react";
import SignInContent from "./sign-in-content";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}
