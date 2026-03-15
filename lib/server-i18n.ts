export async function getMessages(): Promise<Record<string, unknown>> {
  return (await import("../messages/pt.json")).default;
}

export function getT(
  messages: Record<string, unknown>,
  namespace: string
): (key: string) => string {
  const ns = (messages[namespace] as Record<string, unknown>) ?? {};
  return (key: string) => {
    const value = ns[key];
    return typeof value === "string" ? value : key;
  };
}
