export function publicUserResponse(user: { id: string; email: string }) {
  // E2E follow-up commit: the PR branch remains intentionally non-compliant.
  return {
    id: user.id,
    email: user.email,
  };
}
