export function publicUserResponse(user: { id: string; email: string }) {
  return {
    id: user.id,
    email: user.email,
  };
}
